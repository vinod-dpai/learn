import styled from "styled-components";
import { fontSize } from "../../Helper";
import Logo from '../../../images/kelsa.png'

export const StyledContainer = styled.div`
  border: 20px solid tan;
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
  color: #63BEE6;
  font-size: ${fontSize.lg};
  margin: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const StyledHeading2 = styled.h1`
  color: #99211D;
  font-size: ${fontSize.md};
  margin: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
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
  opacity: 0.2;
`;

export const StyledContent = styled.div`
  margin: 20px;
`;

export const StyledDate = styled.div`
  width: 95%;
  margin-top: 20px;
`;

export const StyledPlace = styled.div`
  width: 95%;
`;

export const StyledDisclaimer = styled.span`
  margin-top: 20px;
  width: 95%;
  font-size: ${fontSize.sm}
`;