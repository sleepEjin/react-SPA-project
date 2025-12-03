import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

// --- Styled Components ---
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f0f2f5;
`;

const LoginForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 15px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const LoginButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const HelperText = styled.p`
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  margin-top: 10px;
`;