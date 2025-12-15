import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, PostHeader, Title, MetaInfo, PostContent, ButtonGroup, Button, DeleteButton 
} from './PostDetail.styled';
import { usePostStore } from '../stores/usePostStore';
import { useUserStore } from '../stores/useUserStore';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, handleDeletePost } = usePostStore();
  const { currentUser } = useUserStore();

  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) return <Container><div>존재하지 않는 게시글입니다.</div></Container>;

  // 권한 체크: 작성자 본인이거나 관리자인 경우
  const isOwner = currentUser && (currentUser.nickname === post.author || currentUser.id === 'admin');

  return (
    <Container>
      <PostHeader>
        <Title>{post.title}</Title>
        <MetaInfo>
            <span>작성자 : {post.author}</span>
            <span>작성일 : {post.date}</span>
        </MetaInfo>
      </PostHeader>
      
      <PostContent>
        {post.content}
      </PostContent>
      
      <ButtonGroup>
        <Button onClick={() => navigate(-1)}>목록으로</Button>
        
        {isOwner && (
          <>
            <Button onClick={() => navigate(`/board/edit/${post.id}`)}>
              수정
            </Button>
            
            <DeleteButton onClick={() => {
                if(window.confirm("정말 삭제하시겠습니까?")) {
                  handleDeletePost(post.id);
                  navigate(-1);
                }
            }}>
              삭제
            </DeleteButton>
          </>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default PostDetail;