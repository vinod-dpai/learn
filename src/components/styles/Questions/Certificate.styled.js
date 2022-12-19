import styled from "styled-components";
import { fontSize } from "../../Helper";
import Logo from '../../../images/kelsa.png'

export const StyledContainer = styled.div`
  border: 10px solid #99211D;
  width: 900px;
  height: max-content;
  padding: 1rem;
  display: table-cell;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHeading1 = styled.h1`
  color: #1F3864;
  font-family: 'Secular One', sans-serif;
  font-size: ${fontSize.xl};
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const StyledHeading2 = styled.h3`
  color: #99211D;
  font-family: 'Secular One', sans-serif;
  font-size: ${fontSize.md};
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const StyledHeading3 = styled.h3`
  color: #5D99CE;
  font-family: 'Pacifico', sans-serif;
  font-size: ${fontSize.base};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledRegNo = styled.div`
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 10px;
  margin-left: 50px;
  width: 100%;
  font-weight: bold;
`;

export const StyledLogo = styled.img`
  width: 7rem;
  height: 5rem;
`;

export const StyledContent = styled.div`
  margin: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: 'Arial', sans-serif;
  font-size: ${fontSize.md};
  line-height: 180%;
`;

// export const StyledDate = styled.div`
//   width: 95%;
//   margin-top: 20px;
// `;

export const StyledSignature = styled.div`
  width: 85%;
  font-family: 'Arial', sans-serif;
  font-size: ${fontSize.base};
  text-align: right;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0;
    justify-content: center;

    p {
      margin-bottom: 0;
      font-weight: bold;
    }
  }
`;

export const StyledDisclaimer = styled.span`
  margin-top: 20px;
  width: 95%;
  font-size: ${fontSize.xs};
  font-family: 'Lora', sans-serif;
`;