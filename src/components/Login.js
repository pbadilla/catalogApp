import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Button, Input } from 'rendition';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/');
  }

  return (
    <Box>
      <form action='' name='login-form-user-password' id='login-form' onSubmit={handleSubmit}>
        <Input m={2} placeholder='User' onChange={e => setEmail(e.target.value)} />
        <Input
          m={2}
          placeholder='Password'
          type='password'
          onChange={e => setPassword(e.target.value)}
        />
        <Button primary type='submit' disabled={!validateForm()}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
