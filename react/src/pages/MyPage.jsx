import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, InfoRow } from './MyPage.styled';
import { useUserStore } from '../stores/useUserStore';

const MyPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useUserStore();
  const [newNickname, setNewNickname] = useState('');

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