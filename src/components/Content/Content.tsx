import { Container } from './styles';

type ContentProps = {
  children?: React.ReactNode | React.ReactNode[];
};

export function Content({ children }: ContentProps) {
  return <Container>{children}</Container>;
}
