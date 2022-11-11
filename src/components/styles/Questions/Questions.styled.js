import styled from 'styled-components';

export const StyledQuestionsContainer = styled.div`
  padding: 1rem 2rem;

  input[type='radio'] + label {
    border: 1px solid ${({ theme }) => theme.color};
    transition: all ease-in-out 250ms;
  }
  input[type='radio']:checked + label {
    border: none;
    font-weight: bold;
    background-color: ${({ theme }) => theme.darkPrimary};
  }
  button {
    margin-top: 0.5rem;
    padding: 0.25rem;
    text-align: left;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.darkPrimary};
    color: #1f2937;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all ease-in-out 250ms;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.bg};
    }

    &:disabled:hover {
      background-color: ${({ theme }) => theme.bg};
    }
  }
`;
