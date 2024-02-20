import { Container, VerseNumber, VerseText } from './styles';

type VerseProps = {
  number: number;
  text: string;
};

export function Verse({ number, text }: VerseProps) {
  return (
    <Container>
      <VerseNumber>{number}</VerseNumber>
      <VerseText>{text}</VerseText>
    </Container>
  );
}
