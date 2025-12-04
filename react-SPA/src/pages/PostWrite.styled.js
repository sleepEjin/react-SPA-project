import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  background-color: #f9f9f9; /* 배경색 추가 */
  min-height: 90vh;
`;

export const WriteCard = styled.div`
  width: 100%;
  max-width: 800px; /* 너무 넓어지지 않게 최대 너비 설정 */
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); /* 부드러운 그림자 */
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.div`
  margin-bottom: 10px;
  h2 {
    margin: 0 0 10px 0;
    font-size: 2rem;
    color: #333;
  }
`;

export const Description = styled.p`
  color: #666;
  font-size: 1rem;
  margin: 0;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 15px;
  border: 2px solid #eee;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff; /* 포커스 시 파란색 강조 */
  }
`;

export const TextArea = styled.textarea`
  padding: 15px;
  height: 400px; /* 높이 넉넉하게 */
  border: 2px solid #eee;
  border-radius: 10px;
  font-size: 1rem;
  resize: none; /* 크기 조절 막기 (깔끔하게) */
  line-height: 1.6;
  font-family: inherit;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.2s;
  
  &:active {
    transform: scale(0.98); /* 클릭 시 살짝 눌리는 효과 */
  }
`;

export const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

export const CancelButton = styled(Button)`
  background-color: #f1f3f5;
  color: #495057;

  &:hover {
    background-color: #e9ecef;
  }
`;