import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { StyledButton } from '../styles/UserDetails.styled';
import { districtAndTalukInfo } from '../Helper';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UserDetails = ({ setAreUserDetailsPresent }) => {
  const [taluks, setTaluks] = useState([]);

  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phno, setPhno] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [taluk, setTaluk] = useState('');
  const [religion, setReligion] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [schoolOrCollege, setSchoolOrCollege] = useState('');
  const [classOrCourse, setClassOrCourse] = useState('');

  const [blankItem, setBlankItem] = useState(null);

  const allDistricts = districtAndTalukInfo.map(({ code, name }) => ({ code, name }));

  const checkIsStudent = (e) => {
    const { value } = e.target;
    if (value === 'yes') setIsStudent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== '') {
      window.sessionStorage.setItem('userName', userName);
    } else {
      setBlankItem('Name');
      return;
    }
    if (dob !== '') {
      window.sessionStorage.setItem('dob', dob);
    } else {
      setBlankItem('Date Of Birth');
      return;
    }
    if (gender !== '') {
      window.sessionStorage.setItem('gender', gender);
    } else {
      setBlankItem('Gender');
      return;
    }
    if (email !== '') {
      window.sessionStorage.setItem('email', email);
    } else {
      setBlankItem('Email');
      return;
    }
    if (phno !== '') {
      window.sessionStorage.setItem('phno', Number.parseInt(phno, 10));
    } else {
      setBlankItem('Phone Number');
      return;
    }
    if (address !== '') {
      window.sessionStorage.setItem('address', address);
    } else {
      setBlankItem('Address');
      return;
    }
    if (district !== '') {
      window.sessionStorage.setItem('district', district);
    } else {
      setBlankItem('District');
      return;
    }
    if (taluk !== '') {
      window.sessionStorage.setItem('taluk', taluk);
    } else {
      setBlankItem('Taluk');
      return;
    }
    if (religion !== '') {
      window.sessionStorage.setItem('religion', religion);
    } else {
      setBlankItem('Religion');
      return;
    }
    if (isStudent) {
      window.sessionStorage.setItem('isStudent', true);
      if (schoolOrCollege !== '') {
        window.sessionStorage.setItem('schoolOrCollege', schoolOrCollege);
      } else {
        setBlankItem('School/College');
        return;
      }
      if (classOrCourse !== '') {
        window.sessionStorage.setItem('classOrCourse', classOrCourse);
      } else {
        setBlankItem('Class/Course');
        return;
      }
    } else {
      window.sessionStorage.setItem('isStudent', false);
    }

    if (
      userName !== '' &&
      dob !== '' &&
      gender !== '' &&
      email !== '' &&
      phno !== '' &&
      address !== '' &&
      district !== '' &&
      taluk !== '' &&
      religion !== ''
    ) {
      setAreUserDetailsPresent(true);
      navigate('/learn');
    }
  };

  const addTaluks = (e) => {
    setDistrict(e.target.value);
    const { taluks: talukList } = districtAndTalukInfo.find(({ code }) => code === e.target.value);
    setTaluks(talukList);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
    >
      <h2>User Details</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="dob">Date Of Birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={gender}
            style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">--SELECT--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="phno">Phone Number</label>
          <input
            type="tel"
            name="phno"
            id="phno"
            value={phno}
            onChange={(e) => setPhno(e.target.value)}
            style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              marginLeft: '0.5rem',
              width: '18rem',

              height: '6rem',
              padding: '0.25rem 0.5rem',
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="district">District</label>
          <select
            name="district"
            id="district"
            value={district}
            onChange={addTaluks}
            style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
          >
            <option value="">--SELECT--</option>
            {allDistricts.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="taluk">Taluk</label>
          <select
            name="taluk"
            id="taluk"
            style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
            value={taluk}
            onChange={(e) => setTaluk(e.target.value)}
          >
            <option value="">--SELECT--</option>
            {taluks.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="religion">Religion</label>
          <select
            name="religion"
            id="religion"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
            style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
          >
            <option value="">--SELECT--</option>
            <option value="christian">Christian</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="student">Student</label>
          <select
            name="student"
            id="student"
            onChange={(e) => checkIsStudent(e)}
            style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
          >
            <option value="">--SELECT--</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {isStudent && (
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label htmlFor="schoolOrCollege">School/College</label>
              <input
                type="text"
                name="schoolOrCollege"
                id="schoolOrCollege"
                value={schoolOrCollege}
                onChange={(e) => setSchoolOrCollege(e.target.value)}
                style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label htmlFor="classOrCourse">Class/Course</label>
              <input
                type="text"
                name="classOrCourse"
                id="classOrCourse"
                value={classOrCourse}
                onChange={(e) => setClassOrCourse(e.target.value)}
                style={{ marginLeft: '0.5rem', width: '18rem', padding: '0.25rem 0.5rem' }}
              />
            </div>
          </>
        )}
        {blankItem && <span style={{ color: 'red', fontWeight: 'bold' }}>{blankItem} cannot be blank!!</span>}
        <StyledButton type="submit">Continue</StyledButton>
      </div>
    </form>
  );
};

export default UserDetails;

UserDetails.propTypes = {
  setAreUserDetailsPresent: PropTypes.func.isRequired,
}
