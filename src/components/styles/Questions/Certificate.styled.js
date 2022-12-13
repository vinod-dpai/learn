import styled from "styled-components";
import { fontSize } from "../../Helper";
import Logo from '../../../images/kelsa.png'

export const StyledContainer = styled.div`
  border: 20px solid #05014A;
  width: 900px;
  height: 563px;
  display: table-cell;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHeading1 = styled.h1`
  color: #5D99CE;
  font-family: 'Secular One', sans-serif;
  font-size: ${fontSize.lg};
  margin: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const StyledHeading2 = styled.h3`
  color: #99211D;
  font-family: 'Secular One', sans-serif;
  font-size: ${fontSize.md};
  margin: 20px;
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const StyledHeading3 = styled.h3`
  color: #5D99CE;
  font-family: 'Pacifico', sans-serif;
  font-size: ${fontSize.base};
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const StyledRegNo = styled.div`
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 20px;
  margin-left: 50px;
  width: 100%;
`;

export const StyledLogo = styled.img`
  position: absolute;
  z-index: -999;
  opacity: 0.05;
`;

export const StyledContent = styled.div`
  margin: 20px;
  font-family: 'Lora', sans-serif;
`;

// export const StyledDate = styled.div`
//   width: 95%;
//   margin-top: 20px;
// `;

export const StyledPlace = styled.div`
  width: 95%;
  font-family: 'Lora', sans-serif;
`;

export const StyledDisclaimer = styled.span`
  margin-top: 20px;
  width: 95%;
  font-size: ${fontSize.sm};
  font-family: 'Lora', sans-serif;
`;