import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 50px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 30px;
    margin: 20px;
  }
`

export const PostHeader = styled.div`
  border-bottom: 2px solid #f1f3f5;
  padding-bottom: 20px;
  margin-bottom: 30px;
`

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.3;
`

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #868e96;
  font-size: 0.95rem;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const PostContent = styled.div`
  min-height: 300px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #495057;
  white-space: pre-wrap;
  margin-bottom: 50px;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  border-top: 1px solid #f1f3f5;
  padding-top: 30px;
`

export const Button = styled.button`
  padding: 10px 25px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: #f1f3f5;
  color: #495057;

  &:hover {
    background-color: #e9ecef;
    transform: translateY(-2px);
  }
`

export const DeleteButton = styled(Button)`
  background-color: #ffe3e3;
  color: #e03131;

  &:hover {
    background-color: #ffc9c9;
  }
`