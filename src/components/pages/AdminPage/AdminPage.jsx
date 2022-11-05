import React, { useState } from 'react';
import { StyledAdminPageContainer } from '../../styles/AdminPage/AdminPage.styled';
import AuthPage from './AuthModal';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (value) => {
    setIsLoggedIn(() => value);
  };
  return (
    <StyledAdminPageContainer>
      {!isLoggedIn && <AuthPage isLoggedIn={isLoggedIn} setIsLoggedIn={handleLogin} />}
    </StyledAdminPageContainer>
  );
};

export default AdminPage;
