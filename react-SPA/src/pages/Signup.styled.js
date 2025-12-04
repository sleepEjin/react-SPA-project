import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 350px;
  padding: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;