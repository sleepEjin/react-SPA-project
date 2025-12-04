import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostContext } from '../contexts/PostContext';
import { AuthContext } from '../contexts/UserContext';
import { Button, Container } from './PostDetail.styled';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, handleDeletePost } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <div>글이 없습니다.</div>;

  return (
    <Container>
      <h2>{post.title}</h2>
      <p>{post.author} | {post.date}</p>
      <hr />
      <p>{post.content}</p>
      <Button onClick={() => navigate(-1)}>목록으로</Button>
      {currentUser && (
        <Button onClick={() => {
            handleDeletePost(id);
            navigate(-1);
        }} style={{background:'red', marginLeft:'10px'}}>삭제</Button>
      )}
    </Container>
  );
};
export default PostDetail;

