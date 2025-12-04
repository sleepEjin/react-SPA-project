import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  color: black;
`;

export const Card = styled.div`
  width: 400px;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

export const InfoRow = styled.div`
  margin: 20px 0;
  font-size: 1.1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const EditButton = styled.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`;