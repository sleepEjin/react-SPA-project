import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Card, Container, InfoRow } from './MyPage.styled';

const MyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      alert("로그인이 필요합니다.");
      navigate('/login');
    } else {
      setNewNickname(currentUser.nickname);
    }
  }, [currentUser, navigate]);

  if (!currentUser) return null;

  return (
    <Container>
      <Card>
        <h2>마이페이지</h2>
        <InfoRow>
          <strong>아이디:</strong> {currentUser.id}
        </InfoRow>
        <InfoRow>
          <strong>가입일:</strong> {currentUser.joinDate}
        </InfoRow>
        
        <InfoRow>
          <strong>닉네임:</strong> {currentUser.nickname}
        </InfoRow>
      </Card>
    </Container>
  );
};

export default MyPage;