import React from 'react';
import { PropTypes } from 'prop-types';
import '../../..'
import { StyledContainer, StyledContent, StyledCourseDate, StyledHeading, StyledRegNo, StyledUserName, StyledCourseDetails, StyledSpan } from '../../styles/Questions/Certificate.styled';
import { Container } from 'react-bootstrap';

const Certificate = ({ course, certificate }) => {
  const { id, userName, dateOfCompletion } = certificate;
  const monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const completionDate = dateOfCompletion.getDate() > 9 ? dateOfCompletion.getDate() : `0${dateOfCompletion.getDate()}`;
  const completionMonth = monthsList[dateOfCompletion.getMonth()];
  const completionYear = dateOfCompletion.getFullYear();

//   return (
//     <StyledContainer>
//       <StyledHeading>Certificate of Completion</StyledHeading>

//       <StyledRegNo>Reg No: 123457855C1005</StyledRegNo>
//       <StyledContent>This is to certify that</StyledContent>

//       <StyledUserName>Vinod D</StyledUserName>

//       <StyledCourseDetails>
//         has completed the course
//       </StyledCourseDetails>
//       <StyledSpan>Hindu Marriage</StyledSpan>
//       <StyledCourseDate>
//         on
//       </StyledCourseDate>
//       <StyledSpan>28 July, 2022</StyledSpan>
//     </StyledContainer>
//     // <div>
//     //   {/* <h1>{name}</h1> */}
//     //   <h2>{course.name}</h2>
//     //   <h2>{id}</h2>
//     //   <h2>{userName}</h2>
//     //   <h2>{`${completionDate} ${completionMonth}, ${completionYear}`}</h2>
//     // </div>
//   )
// }
  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <StyledContainer>
        <StyledHeading>Certificate of Completion</StyledHeading>

        <StyledRegNo>Reg No: {id}</StyledRegNo>
        <StyledContent>This is to certify that</StyledContent>

        <StyledUserName>{userName}</StyledUserName>

        <StyledCourseDetails>
          has completed the course
        </StyledCourseDetails>
          <StyledSpan>{course.name}</StyledSpan>
        <StyledCourseDate>
          on
        </StyledCourseDate>
        <StyledSpan>{`${completionDate} ${completionMonth}, ${completionYear}`}</StyledSpan>
      </StyledContainer>
    </Container>
//     // <div>
//     //   {/* <h1>{name}</h1> */}
//     //   <h2>{course.name}</h2>
//     //   <h2>{id}</h2>
//     //   <h2>{userName}</h2>
//     //   <h2>{`${completionDate} ${completionMonth}, ${completionYear}`}</h2>
//     // </div>
  )
}

export default Certificate;

Certificate.propTypes = {
  selectedCourse: PropTypes.object.isRequired,
  certificate: PropTypes.object.isRequired,
}