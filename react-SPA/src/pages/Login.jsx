import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Input, LoginButton, LoginForm, Title } from './login.styled';
import { AuthContext } from '../contexts/UserContext';
import { ROUTES } from '../routes/routepaths';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const success = login(userId, password);
    
    if (success) {
      navigate('/');
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
        
        <div style={{marginTop: '10px', textAlign: 'center'}}>
           <Link to={ROUTES.SIGNUP} style={{fontSize: '0.9rem', color: '#007bff'}}>
             회원가입
           </Link>
        </div>
      </LoginForm>
    </Container>
  );
};

export default LoginPage;