import React, { createContext, useState, useEffect } from 'react';
import { initialPosts } from './data';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('myPosts');
    return savedPosts ? JSON.parse(savedPosts) : initialPosts;
  });

  useEffect(() => {
    localStorage.setItem('myPosts', JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id) => {
    const filtered = posts.filter(post => post.id !== Number(id));
    setPosts(filtered);
  };

  return (
    <PostContext.Provider value={{ posts, handleAddPost, handleDeletePost }}>
      {children}
    </PostContext.Provider>
  );
};