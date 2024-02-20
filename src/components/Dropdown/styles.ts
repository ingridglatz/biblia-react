import styled from 'styled-components';

export const Select = styled.select`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.option`
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  width: fit-content;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
`;
