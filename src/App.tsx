import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { useDarkMode } from './hooks/useDarkMode';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Verse } from './components/Verse';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Dropdown } from './components/Dropdown';
import { Container } from './styles/App';

type BooksData = {
  name: string;
  chapters: number;
  abbrev: { pt: string };
}[];

type VerseData = {
  book: { name: string };
  chapter: { number: number };
  verses: { number: number; text: string }[];
};

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [verse, setVerse] = useState<VerseData>();
  const [books, setBooks] = useState<BooksData>([]);
  const [selectedBook, setSelectedBook] = useState('gn');
  const [selectedChapter, setSelectedChapter] = useState('1');

  const themeMode = theme == 'light' ? lightTheme : darkTheme;

  const bookOptions = useMemo(() => {
    return books.map((book) => {
      return { value: book.abbrev.pt, label: book.name };
    });
  }, [books]);

  const chaptersOptions = useMemo(() => {
    const book = books.find((book) => {
      return book.abbrev.pt == selectedBook;
    });

    if (!book) {
      return [];
    }

    return Array.from({ length: book.chapters }, (_, index) => {
      return {
        value: (index + 1).toString(),
        label: `Capítulo ${index + 1}`,
      };
    });
  }, [books, selectedBook]);

  useEffect(() => {
    axios.get('https://www.abibliadigital.com.br/api/books').then((response) => {
      setBooks(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.abibliadigital.com.br/api/verses/nvi/${selectedBook}/${selectedChapter}`)
      .then((response) => {
        setVerse(response.data);
      });
  }, [selectedBook, selectedChapter]);

  const handleBookChange = (value: string) => {
    setSelectedBook(value);
    setSelectedChapter('1');
  };

  if (verse == undefined) {
    return <span>Loading...</span>;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        title={verse?.book.name}
        subtitle={`Capítulo ${verse.chapter.number}`}
      />
      <Container>
        <Dropdown onChange={handleBookChange} options={bookOptions} />
        <Dropdown onChange={(value) => setSelectedChapter(value)} options={chaptersOptions} />
      </Container>

      <Content>
        {verse.verses.map((verse) => (
          <Verse number={verse.number} text={verse.text} />
        ))}
      </Content>
    </ThemeProvider>
  );
}

export default App;
