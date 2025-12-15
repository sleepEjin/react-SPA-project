import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; 
  background-color: #f0f8ff;
`;

export const HomeSection = styled.div`
  text-align: center;
  padding: 50px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const HomeTitle = styled.h1`
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 20px;
`;

export const HomeSubtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;
`;

export const StartButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
`;