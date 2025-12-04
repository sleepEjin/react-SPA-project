import styled from "styled-components";

export const BoardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  color: black;
`;

export const HeaderSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const WriteSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 10px 25px;
  background-color: ${props => props.disabled ? '#adb5bd' : '#28a745'};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-weight: bold;
`;

export const PostList = styled.div`
  border-top: 2px solid #333;
`;

export const PostItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background-color: #fcfcfc;
  }
`;

export const PostTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const PostMeta = styled.span`
  font-size: 0.9rem;
  color: #888;
`

export const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

export const RinkInfoBox = styled.div`
  display: flex; gap: 20px; background: white; padding: 20px; 
  border-radius: 10px; margin-bottom: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  img { width: 200px; height: 150px; object-fit: cover; border-radius: 8px; }
`