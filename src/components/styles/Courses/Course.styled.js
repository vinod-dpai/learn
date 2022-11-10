import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-top: 0.5rem;
  width: 75%;
  padding: 0.25rem;
  text-align: left;
  border-radius: 0.25rem;
  background-color: #60a5fa;
  color: #1f2937;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all ease-in-out 250ms;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;
