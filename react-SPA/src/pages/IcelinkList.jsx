import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardImage, CardInfo, CardTitle, Container, Grid, Title } from './IcelinkList.styled';
import { rinksData } from '../contexts/data';

const RinkListPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>아이스링크 현황</Title>
      <Grid>
        {rinksData.map((rink) => (
          <Card key={rink.id} onClick={() => navigate(`/rink/${rink.id}`)}>
            <CardImage src={rink.img} alt={rink.name} />
            <CardContent>
              <CardTitle>{rink.name}</CardTitle>
              <CardInfo> {rink.location}</CardInfo>
              <CardInfo> {rink.price}</CardInfo>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default RinkListPage;
