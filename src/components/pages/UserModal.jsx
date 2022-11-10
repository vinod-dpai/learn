import React, { useState } from 'react';
import Modal from 'react-modal';
import { StyledButton } from '../styles/UserModal.styled';

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

const UserModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isStudent, setIsStudent] = useState(false);

  const districts = [
    {
      code: 'alappuzha',
      name: 'Alappuzha',
      taluks: [
        { code: 'ambalappuzha', name: 'Ambalappuzha (Alappuzha)' },
        { code: 'chengannur', name: 'Chengannur' },
        { code: 'cherthala', name: 'Cherthala' },
        { code: 'karthikappally', name: 'Karthikappally (Haripad)' },
        { code: 'kuttanad', name: 'Kuttanad (Mankombu)' },
        { code: 'mavelikkara', name: 'Mavelikkara' },
      ],
    },
    {
      code: 'ernakulam',
      name: 'Ernakulam',
      taluks: [
        { code: 'aluva', name: 'Aluva' },
        { code: 'kanayannur', name: 'Kanayannur (Ernakulam)' },
        { code: 'kochi', name: 'Kochi (Fort Kochi)' },
        { code: 'kothamangalam', name: 'Kothamangalam' },
        { code: 'kunnathunad', name: 'Kunnathunad (Perumbavoor)' },
        { code: 'muvattupuzha', name: 'Muvattupuzha' },
        { code: 'northParavur', name: 'North Paravur' },
      ],
    },
    {
      code: 'idukki',
      name: 'Idukki',
      taluks: [
        { code: 'devikulam', name: 'Devikulam' },
        { code: 'peermade', name: 'Peermade' },
        { code: 'udumbanchola', name: 'Udumbanchola (Nedumkandam)' },
        { code: 'idukki', name: 'Idukki (Painavu)' },
        { code: 'thodupuzha', name: 'Thodupuzha' },
      ],
    },
    {
      code: 'kannur',
      name: 'Kannur',
      taluks: [
        { code: 'thalassery', name: 'Thalassery' },
        { code: 'iritty', name: 'Iritty' },
        { code: 'kannur', name: 'Kannur' },
        { code: 'taliparamba', name: 'Taliparamba' },
        { code: 'payyanur', name: 'Payyanur' },
      ],
    },
    {
      code: 'kasaragod',
      name: 'Kasaragod',
      taluks: [
        { code: 'manjeshwaram', name: 'Manjeshwaram (Uppala)' },
        { code: 'kasaragod', name: 'Kasaragod' },
        { code: 'vellarikundu', name: 'Vellarikundu' },
        { code: 'hosdurg', name: 'Hosdurg' },
      ],
    },
    {
      code: 'kollam',
      name: 'Kollam',
      taluks: [
        { code: 'kollam', name: 'Kollam (Paravur, Chathannoor)' },
        { code: 'karunagappally', name: 'Karunagappally' },
        { code: 'kunnathur', name: 'Kunnathur (Sasthamkotta)' },
        { code: 'kottarakara', name: 'Kottarakkara' },
        { code: 'punalur', name: 'Punalur' },
        { code: 'pathanapuram', name: 'Pathanapuram' },
      ],
    },
    {
      code: 'kottayam',
      name: 'Kottayam',
      taluks: [
        { code: 'changanassery', name: 'Changanassery' },
        { code: 'kanjirappally', name: 'Kanjirappally' },
        { code: 'kottayam', name: 'Kottayam' },
        { code: 'vaikom', name: 'Vaikom' },
        { code: 'meenachil', name: 'Meenachil (Palai)' },
      ],
    },
  ];

  const checkIsStudent = (e) => {
    const { value } = e.target;

    setIsStudent(value === 'yes');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    setIsModalOpen(false);
  };

  const addTaluks = (e) => {
    console.log(e.target.value);
  };
  return (
    <Modal isOpen={isModalOpen} style={customStyles} contentLabel="User Modal">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ padding: 0, marginTop: '-1rem' }}>User Details</h2>
        <button
          type="button"
          onClick={closeModal}
          style={{ border: 'none', backgroundColor: 'inherit', fontSize: '3rem', marginTop: '-2rem' }}
        >
          &times;
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="dob">Date Of Birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}>
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
            style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="phno">Phone Number</label>
          <input
            type="tel"
            name="phno"
            id="phno"
            style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            style={{
              marginLeft: '0.5rem',
              width: '20rem',

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
            onChange={addTaluks}
            style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}
          >
            <option value="">--SELECT--</option>
            <option value="alappuzha">Alappuzha</option>
            <option value="ernakulam">Ernakulam</option>
            <option value="idukki">Idukki</option>
            <option value="kannur">Kannur</option>
            <option value="kasargod">Kasargod</option>
            <option value="kollam">Kollam</option>
            <option value="kottayam">Kottayam</option>
            <option value="kozhikode">kozhikode</option>
            <option value="malappuram">malappuram</option>
            <option value="palakkad">palakkad</option>
            <option value="pathanamthitta">Pathanamthitta</option>
            <option value="thiruvananthapuram">Thiruvananthapuram</option>
            <option value="thrissur">Thrissur</option>
            <option value="Wayanad">Alappuzha</option>
          </select>
          {/* <input
            type="text"
            name="district"
            id="district"
            style={{ marginLeft: '0.5rem', width: '20rem',  padding: '0.25rem 0.5rem' }}
          /> */}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="taluk">Taluk</label>
          <input
            type="text"
            name="taluk"
            id="taluk"
            style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="religion">Religion</label>
          <input
            type="text"
            name="religion"
            id="religion"
            style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="student">Student</label>
          <select
            name="student"
            id="student"
            onChange={(e) => checkIsStudent(e)}
            style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}
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
                style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label htmlFor="classOrCourse">Class/Course</label>
              <input
                type="text"
                name="classOrCourse"
                id="classOrCourse"
                style={{ marginLeft: '0.5rem', width: '20rem', padding: '0.25rem 0.5rem' }}
              />
            </div>
          </>
        )}
        <StyledButton type="submit">Continue</StyledButton>
      </form>
    </Modal>
  );
};

export default UserModal;
