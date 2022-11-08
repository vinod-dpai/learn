import styled from 'styled-components';
import { animation, breakpoint, fontSize } from '../Helper';

export const StyledHome = styled.div`
  color: ${({ theme }) => theme.color};
  height: 75vh;
  padding: 0 2rem;

  h1 {
    width: 100%;
    text-align: center;
  }
`;

export const StyledSearchContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const StyledFilterIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const StyledSearchBox = styled.input`
  height: 3rem;
  padding: 0.5rem;
  width: 85%;
  font-size: ${fontSize.md};
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.color};

  @media (min-width: ${breakpoint.md}) {
    width: 95%;
  }
`;
// export const StyledHeading = styled.h1`
// `;

// export const StyledInfo = styled.div`
//   padding: 1rem;

//   div {
//     text-align: center;
//   }

//   @media (min-width: ${breakpoint.md}) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// export const StyledInfoTitle = styled.div`
//   font-size: ${fontSize.xl};

//   @media (min-width: ${breakpoint.md}) {
//     font-size: ${fontSize.xxl};
//     position: relative;
//     width: max-content;
//     &::before,
//     &::after {
//       content: '';
//       position: absolute;
//       top: 0;
//       right: 0;
//       bottom: 0;
//       left: 0;
//     }

//     &::before {
//       background: ${({ theme }) => theme.bg};
//       animation: typewriter ${animation.typewriterSpeed} steps(${animation.typewiterSteps}) 1s forwards;
//     }

//     &::after {
//       background: ${({ theme }) => theme.color};
//       height: 100%;
//       width: 0.125em;
//       animation: typewriter ${animation.typewriterSpeed} steps(${animation.typewiterSteps}) 1s forwards,
//         blink ${animation.blinkSpeed} infinite;
//     }

//     @keyframes typewriter {
//       to {
//         left: 100%;
//       }
//     }

//     @keyframes blink {
//       to {
//         background: transparent;
//       }
//     }
//   }
// `;

// export const StyledInfoDetails = styled.div`
//   margin-top: 1rem;
//   font-size: ${fontSize.lg};

//   strong {
//     color: ${({ theme }) => theme.primary};
//   }

//   @media (min-width: ${breakpoint.md}) {
//     font-size: ${fontSize.md};
//     padding: 0 3rem;
//     transform: translateY(3rem);
//     opacity: 0;
//     animation: fadeInUp 2s ease ${animation.aboutMeDelay} forwards;
//   }

//   @media (min-width: ${breakpoint.lg}) {
//     padding: 0 12rem;
//   }

//   @keyframes fadeInUp {
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;
