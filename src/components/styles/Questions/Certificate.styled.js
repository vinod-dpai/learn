import styled from "styled-components";

export const StyledContainer = styled.div`
  border: 20px solid tan;
  font-family: Georgia, serif;
  width: 750px;
  height: 563px;
  display: table-cell;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHeading = styled.div`
  color: tan;
  font-size: 40px;
  margin: 20px;
  margin-bottom: 10px;
`;

export const StyledRegNo = styled.div`
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 20px;
`;

export const StyledContent = styled.div`
  margin: 20px;
  margin-bottom: 0px;
`;

export const StyledUserName = styled.div`
  border-bottom: 2px solid black;
  font-size: 32px;
  font-style: italic;
  text-align: center;
  margin: 10px auto;
  width: 400px;
`;

export const StyledCourseDetails = styled.div`
  margin: 20px;
  margin-bottom: 5px;
`;

export const StyledCourseDate = styled.div`
  margin: 20px;
  margin-bottom: 5px;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
`;