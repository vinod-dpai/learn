import React from 'react';
import { PropTypes } from 'prop-types';
import '../../..'
import { StyledContainer, StyledContent, StyledHeading1, StyledHeading2, StyledHeading3, StyledRegNo, StyledPlace, StyledDisclaimer, StyledLogo } from '../../styles/Questions/Certificate.styled';
import { Container } from 'react-bootstrap';
import Logo from '../../../images/kelsa.png'

const Certificate = ({ course, user }) => {
  // const { id, userName, dateOfCompletion } = user;
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
  
  const date= new Date(user.dateOfCompletion);

  const completionDate = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const completionMonth = monthsList[date.getMonth()];
  const completionYear = date.getFullYear();

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
        <StyledHeading1>District Legal Services Authority, Alappuzha</StyledHeading1>
        <StyledHeading2>Certificate of Participation</StyledHeading2>
        <StyledHeading3>Leap Towards Legal Awareness</StyledHeading3>
        <StyledLogo src={Logo} alt="Logo" />
        <StyledRegNo>Reg No: {user.id}</StyledRegNo>
        <StyledContent>Certified that {user.gender === 'Male' ? 'Sri.' : 'Smt.'} {user.name}, {user.isStudent ? `${user.classOrCourse}, ${user.schoolOrCollege}` : `${user.address.replace(/\n/g, ',').replace(/,,/g, ', ').replace(/  /g, ' ')}`} has successfully attended the online Legal Awareness class on {course.name} conducted by this authority on {`${completionDate} ${completionMonth}, ${completionYear}`}.</StyledContent>
        <StyledPlace>
          ALAPPUZHA
        </StyledPlace>
        <StyledDisclaimer>
          *This is an online generated certificate.In case of any dispute, the authenticity of the certificate can be verified from this authority,by referring to Reg No.
        </StyledDisclaimer>
        {/* <StyledUserName>{userName}</StyledUserName>

        <StyledCourseDetails>
          has completed the course
        </StyledCourseDetails>
          <StyledSpan>{course.name}</StyledSpan>
        <StyledCourseDate>
          on
        </StyledCourseDate>
        <StyledSpan>{`${completionDate} ${completionMonth}, ${completionYear}`}</StyledSpan> */}
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
  user: PropTypes.object.isRequired,
}