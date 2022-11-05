import React, { useState } from 'react';
import { StyledAdminPageContainer } from '../../styles/AdminPage/AdminPage.styled';
import AuthPage from './AuthPage';
import ManagePage from './ManagePage';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (value) => {
    setIsLoggedIn(() => value);
  };
  return (
    <StyledAdminPageContainer>
      {!isLoggedIn && <AuthPage isLoggedIn={isLoggedIn} setIsLoggedIn={handleLogin} />}
      {isLoggedIn && <ManagePage />}
    </StyledAdminPageContainer>
  );
};

export default AdminPage;
