import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardImage, CardInfo, CardTitle, Container, Grid, Title } from './IcelinkList.styled';
import { rinksData } from '../contexts/data';

const RinkListPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>아이스링크 선택</Title>
      <Grid>
        {rinksData.map((rink) => (
          <Card 
            key={rink.id} 
            onClick={() => navigate(`/board/rink/${rink.id}`)}
          >
            <CardImage src={rink.img} alt={rink.name} />
            <CardContent>
              <CardTitle>{rink.name}</CardTitle>
              <CardInfo>{rink.location}</CardInfo>
              <CardInfo style={{color:'#007bff'}}>후기 보기</CardInfo>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};
export default RinkListPage;