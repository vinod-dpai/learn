import styled from 'styled-components';
import { breakpoint, fontSize } from '../Helper';

export const StyledHeader = styled.header`
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-color: ${({ theme }) => theme.color};

  h1 {
    font-size: ${fontSize.lg};
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const StyledLogo = styled.img`
  width: 7rem;
  height: 5rem;
`;

export const StyledMenuIcon = styled.img`
  width: 3rem;
  @media (min-width: ${breakpoint.md}) {
    display: none;
  }
`;

export const StyledNavMain = styled.nav`
  margin-top: -1rem;
  display: flex;
  align-items: center;
  button {
    border: 0;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    transition: color ease-in-out 1500ms;
  }

  svg:hover {
    color: ${({ theme }) => theme.darkPrimary};
  }
`;
export const StyledNav = styled.div`
  padding-right: 2rem;
  display: none;

  a, button {
    width: max-content;
    margin: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: ${fontSize.md};
    color: ${({ theme }) => theme.color};
    position: relative;
    transition: color ease-in-out 300ms;

    &:hover {
      color: ${({ theme }) => theme.darkPrimary};
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      top: 1.5rem;
      background: ${({ theme }) => theme.darkPrimary};
      transform: scale(0, 1);
      transform-origin: left;
      transition: transform ease-in-out 300ms;
    }

    &:hover::before {
      transform: scale(1, 1);
    }
  }

  @media (min-width: ${breakpoint.md}) {
    display: block;
  }
`;

export const StyledNavDropDown = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding-top: 2rem;
  width: 70%;
  height: 78vh;
  border: 1px solid ${({ theme }) => theme.color};
  position: absolute;
  right: 0;
  text-align: center;
  align-items: center;
  background: ${({ theme }) => theme.bg};

  a {
    width: 100%;
    margin: 1rem 0;
    text-transform: uppercase;
    text-decoration: none;
    font-size: ${fontSize.md};
    color: ${({ theme }) => theme.color};
  }

  @media (min-width: ${breakpoint.md}) {
    display: none;
  }
`;
