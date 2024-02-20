import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from '../Button';
import { Container, Subtitle, Title } from './styles';

type HeaderProps = {
  title: string;
  subtitle: string;
  theme: string;
  toggleTheme: () => void;
};

export function Header({ theme, toggleTheme, title, subtitle }: HeaderProps) {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <Button onClick={toggleTheme}>{theme == 'light' ? <MoonIcon /> : <SunIcon />}</Button>
    </Container>
  );
}
