import styled from 'styled-components';
import { animation, breakpoint, fontSize } from '../../Helper';

export const StyledCourseContainer = styled.div`
  margin-top: 2rem;
  h1 {
    text-align: left;
  }
`;

export const StyledCourseMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  max-height: 70vh;
  overflow-y: auto;

  @media (min-width: ${breakpoint.md}) {
    display: flex;
    flex-direction: row;
  }
`;

export const StyledCourseContent = styled.div`
  width: 90%;
  height: 10rem;
  border: 1px solid #1f2937;
  padding: 0.5rem;
  border-radius: 0.25rem;

  h2 {
    font-size: ${fontSize.md};
  }
  @media (min-width: ${breakpoint.md}) {
    display: flex;
    flex-direction: row;
  }
`;
