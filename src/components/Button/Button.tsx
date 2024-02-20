import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  font-size: 1rem;
  color: ${({ theme }) => theme.icon};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
