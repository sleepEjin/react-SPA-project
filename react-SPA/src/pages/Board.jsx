import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostContext } from '../contexts/PostContext';
import { AuthContext } from '../contexts/UserContext';
import { rinksData } from '../contexts/data';
import { BoardContainer, Button, HeaderSection, PostItem, PostList, PostMeta, PostTitle, RinkInfoBox } from './Board.styled';

const Board = () => {
  const navigate = useNavigate();
  const { rinkId } = useParams(); 
  const { posts } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");

  const rink = rinksData.find(r => r.id === Number(rinkId));

  const rinkPosts = posts.filter(post => post.rinkId === Number(rinkId));
  
  const filteredPosts = rinkPosts.filter((post) => 
    post.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BoardContainer>
      {rink && (
        <RinkInfoBox>
          <img src={rink.img} alt={rink.name} />
          <div>
            <h2>{rink.name}</h2>
            <p>{rink.location}</p>
            <p>{rink.price}</p>
            <p>{rink.desc}</p>
          </div>
        </RinkInfoBox>
      )}

      <HeaderSection>
        <h3>💬 방문 후기 ({filteredPosts.length})</h3>
        <div style={{display:'flex', gap:'10px', marginTop:'10px'}}>
           <input 
            placeholder="후기 검색..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{padding:'10px', flex:1}}
          />
          <Button onClick={() => {
            if (!currentUser) return alert("로그인이 필요합니다.");
            navigate(`/board/rink/${rinkId}/write`);
          }}>
            후기 작성
          </Button>
        </div>
      </HeaderSection>

      <PostList>
        {filteredPosts.length === 0 ? <p style={{textAlign:'center', padding:'20px'}}>첫 후기를 남겨주세요!</p> : null}
        {filteredPosts.map((post) => (
          <PostItem key={post.id} onClick={() => navigate(`/board/${post.id}`)}>
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>{post.author} · {post.date}</PostMeta>
          </PostItem>
        ))}
      </PostList>
    </BoardContainer>
  );
};
export default Board;

