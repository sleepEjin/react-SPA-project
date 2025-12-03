import React from 'react'
import { HomeContainer, HomeSection, HomeSubtitle, HomeTitle, StartButton,  } from './Home.styled'
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeSection>
        <HomeTitle> SlippeReview </HomeTitle>
        <HomeSubtitle>전국 아이스링크 정보와 생생한 후기를 만나보세요!</HomeSubtitle>
        <StartButton onClick={() => navigate('/list')}>링크장 구경하러 가기</StartButton>
      </HomeSection>
    </HomeContainer>
  );
};

export default Home