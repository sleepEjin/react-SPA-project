import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostContext } from '../contexts/PostContext';
import { AuthContext } from '../contexts/UserContext';
import { ButtonGroup, CancelButton, Container, Description, FormGroup, Header, Input, Label, SubmitButton, TextArea, WriteCard } from './PostWrite.styled';

const PostWrite = () => {
  const navigate = useNavigate();
  const { rinkId } = useParams();
  const { handleAddPost } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!currentUser) {
      alert("로그인이 필요합니다.");
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const handleSubmit = () => {
    if (!title || !content) {
      alert("한줄평과 상세 후기를 모두 입력해주세요.");
      return;
    }

    const newPost = {
      id: Date.now(),
      rinkId: rinkId ? Number(rinkId) : null,
      title: title,
      content: content,
      author: currentUser ? currentUser.nickname : "익명",
      date: new Date().toLocaleDateString()
    };

    handleAddPost(newPost);
    
    const backPath = rinkId ? `/board/rink/${rinkId}` : '/board';
    navigate(backPath);
  };

  return (
    <Container>
      <WriteCard>
        <Header>
          <h2>🖊️ {rinkId ? "방문 후기 작성" : "솔직 후기 작성"}</h2>
          <Description>
            다른 분들에게 도움이 되도록 솔직하고 생생한 이야기를 들려주세요.
          </Description>
        </Header>
        
        <FormGroup>
          <Label>한줄평</Label>
          <Input 
            placeholder="20자 이내 작성 권장" 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)} 
          />
        </FormGroup>

        <FormGroup>
          <Label>상세 후기</Label>
          <TextArea 
            placeholder="좋았던 점, 아쉬웠던 점, 이용 꿀팁 등을 자유롭게 적어주세요." 
            value={content} 
            onChange={(e)=>setContent(e.target.value)} 
          />
        </FormGroup>

        <ButtonGroup>
           <CancelButton onClick={() => navigate(-1)}>취소</CancelButton>
           <SubmitButton onClick={handleSubmit}>후기 등록 완료</SubmitButton>
        </ButtonGroup>
      </WriteCard>
    </Container>
  );
};

export default PostWrite;