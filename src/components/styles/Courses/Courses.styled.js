import styled from 'styled-components';
import { animation, breakpoint, fontSize } from '../../Helper';

export const StyledCourseContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  h1 {
    width: 100%;
    text-align: left;
    margin-left: 0.75rem;
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

export const StyledCourseContentContainer = styled.div`
  width: 100%;
  height: 10rem;
  max-height: 15rem;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0.5rem;
  cursor: pointer;
  transform: scale(1);
  transition: transform ease-in-out 250ms;

  &:hover {
    transform: scale(1.01);
  }

  h2 {
    font-size: ${fontSize.md};
    color: ${({ theme }) => theme.color};
  }
  @media (min-width: ${breakpoint.md}) {
    display: flex;
    flex-direction: row;
    min-width: 20rem;
    max-width: 30rem;
    width: auto;
  }
`;

export const StyledCourseContent = styled.div`
  width: 23rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledCourseCategory = styled.div`
  width: max-content;
  background-color: ${({ theme }) => theme.darkPrimary};
  font-weight: bold;
  color: ${({ theme }) => theme.bg};
  border-radius: 0.25rem;
  padding: 0.5rem;
`;
