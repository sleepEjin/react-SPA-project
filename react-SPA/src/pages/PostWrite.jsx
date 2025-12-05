import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonGroup, CancelButton, Container, Description, FormGroup, Header, Input, Label, SubmitButton, TextArea, WriteCard } from './PostWrite.styled';
import { usePostStore } from '../stores/usePostStore';
import { useUserStore } from '../stores/useUserStore';

const PostWrite = () => {
  const navigate = useNavigate();
  const { rinkId, id } = useParams();
  
  const { posts, handleAddPost, handleUpdatePost } = usePostStore();
  const { currentUser } = useUserStore();
  
  const isEditMode = Boolean(id);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [targetPost, setTargetPost] = useState(null);

  useEffect(() => {
    if (isEditMode && posts.length > 0) {
      const post = posts.find((p) => String(p.id) === String(id));
      if (post) {
        setTargetPost(post);
        setTitle(post.title);
        setContent(post.content);
      } else {
        alert("존재하지 않는 게시글입니다.");
        navigate(-1);
      }
    }
  }, [isEditMode, id, posts, navigate]);

  const handleSubmit = () => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    if (isEditMode) {
      const updatedPost = {
        ...targetPost,
        title: title,
        content: content,
      };
      handleUpdatePost(updatedPost);
      navigate(`/board/${id}`);
    } else {
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
    }
  };

  return (
    <Container>
      <WriteCard>
        <Header>
          <h2>{isEditMode ? "게시글 수정" : "방문 후기 작성"}</h2>
          <Description>
            {isEditMode 
              ? "작성한 내용을 수정합니다." 
              : "다른 분들에게 도움이 되도록 솔직하고 생생한 이야기를 들려주세요."}
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
            placeholder="내용을 입력해주세요." 
            value={content} 
            onChange={(e)=>setContent(e.target.value)} 
          />
        </FormGroup>

        <ButtonGroup>
           <CancelButton onClick={() => navigate(-1)}>취소</CancelButton>
           <SubmitButton onClick={handleSubmit}>
             {isEditMode ? "수정 완료" : "등록 완료"}
           </SubmitButton>
        </ButtonGroup>
      </WriteCard>
    </Container>
  );
};

export default PostWrite;