import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, HelperText, Input, LoginButton, LoginForm, Title } from './login.styled';

const LoginPage = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === 'test' && password === '1234') {
      alert(`환영합니다, ${userId}님!`);
      onLogin();
      navigate('/');
    } else {
      alert('아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Title>로그인</Title>
        <Input 
          type="text" 
          placeholder="아이디" 
          value={userId} 
          onChange={(e) => setUserId(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="비밀번호" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <LoginButton type="submit">로그인</LoginButton>
        <HelperText>Test Account: test / 1234</HelperText>
      </LoginForm>
    </Container>
  );
};

export default LoginPage;
