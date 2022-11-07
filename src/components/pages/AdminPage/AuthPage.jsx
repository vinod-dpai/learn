import { useRef, useEffect, useState } from 'react';
// import bcrypt from 'bcryptjs';
import { PropTypes } from 'prop-types';
import { getCreds } from '../../Helper';

// SALT should be created ONE TIME upon sign up
// const salt = bcrypt.genSaltSync(10);
// example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash

function AuthPage({ isLoggedIn, setIsLoggedIn }) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [creds, setCreds] = useState([]);
  useEffect(() => {
    async function auth() {
      const dbCreds = await getCreds();
      setCreds(dbCreds);
    }
    auth();
  }, []);

  function handleLoginForm() {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    creds.forEach((cred) => {
      if (cred.uname === email && cred.pswd === password) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input
            style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
            ref={emailInputRef}
            type="text"
            placeholder="Email"
          />
          <input
            style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
            ref={passwordInputRef}
            type="text"
            placeholder="Password"
          />
          <button
            type="submit"
            style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
            onClick={(e) => {
              e.preventDefault();
              handleLoginForm();
            }}
          >
            Log In
          </button>
        </form>
        {/* <span>Your new SALT: {salt}</span> */}
        <br />
      </header>
    </div>
  );
}

export default AuthPage;

AuthPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
