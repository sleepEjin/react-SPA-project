import React, { useState } from 'react';
import styled from 'styled-components';
import { initialPosts } from '../contexts/data';

const CommunityPage = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [title, setTitle] = useState("");

  const handlePost = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (!title) return;
    const newPost = {
      id: posts.length + 1,
      title: title,
      author: "익명",
      date: new Date().toLocaleDateString()
    };
    setPosts([newPost, ...posts]);
    setTitle("");
  };

  return (
    <BoardContainer>
      <HeaderSection>
        <h2>질문 게시판</h2>
        <p>궁금한 점을 자유롭게 물어보세요!</p>
      </HeaderSection>

      <WriteSection>
        <Input 
          placeholder={isLoggedIn ? "제목을 입력하세요" : "로그인이 필요합니다"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={!isLoggedIn}
        />
        <Button onClick={handlePost} disabled={!isLoggedIn}>글쓰기</Button>
      </WriteSection>

      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>{post.author} · {post.date}</PostMeta>
          </PostItem>
        ))}
      </PostList>
    </BoardContainer>
  );
};

export default CommunityPage;

// --- Styled Components ---
const BoardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  color: black;
`;

const HeaderSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const WriteSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px 25px;
  background-color: ${props => props.disabled ? '#adb5bd' : '#28a745'};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-weight: bold;
`;

const PostList = styled.div`
  border-top: 2px solid #333;
`;

const PostItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background-color: #fcfcfc;
  }
`;

const PostTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

const PostMeta = styled.span`
  font-size: 0.9rem;
  color: #888;
`;