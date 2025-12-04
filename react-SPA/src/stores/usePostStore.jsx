import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialPosts } from '../contexts/data';

export const usePostStore = create(
  persist(
    (set) => ({
      posts: initialPosts,

      handleAddPost: (newPost) => set((state) => ({ 
        posts: [newPost, ...state.posts] 
      })),

      handleDeletePost: (id) => set((state) => ({
        posts: state.posts.filter((post) => String(post.id) !== String(id))
      })),
    }),
    {
      name: 'myPosts',
    }
  )
);