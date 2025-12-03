import styled from "styled-components"

export const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: #333;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* 반응형 그리드 */
  gap: 30px;
`;

export const Card = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background: white;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px); /* 살짝 떠오르는 효과 */
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: black;
`;

export const CardInfo = styled.p`
  margin: 5px 0;
  color: #666;
  font-size: 0.9rem;
`;