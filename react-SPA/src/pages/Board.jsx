import React, { useState } from 'react';
import { initialPosts } from '../contexts/data';
import { BoardContainer, Button, HeaderSection, Input, PostItem, PostList, PostMeta, PostTitle, WriteSection } from './Board.styled';

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
