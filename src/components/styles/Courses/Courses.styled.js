import styled from 'styled-components';
import { animation, breakpoint, fontSize } from '../../Helper';

export const StyledCourseContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  h1 {
    text-align: left;
    margin-left: 0.5rem;
  }
`;

export const StyledCourseMain = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoint.md}) {
    display: flex;
    flex-direction: row;
  }
`;

export const StyledCourseContent = styled.div`
  width: 100%;
  height: 10rem;
  border: 1px solid ${(theme) => theme.color};
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0.5rem;

  h2 {
    font-size: ${fontSize.md};
  }
  @media (min-width: ${breakpoint.md}) {
    display: flex;
    flex-direction: row;
    min-width: 20rem;
    max-width: 30rem;
    width: auto;
  }
`;
