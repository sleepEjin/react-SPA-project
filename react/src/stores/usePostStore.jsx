import { create } from 'zustand';

export const usePostStore = create((set) => ({
  posts: [],

  fetchPosts: async (rinkId) => {
    try {
      const query = rinkId ? `?rinkId=${rinkId}` : '';
      
      const response = await fetch(`/api/posts${query}`);

      if (response.ok) {
        const data = await response.json();
        set({ posts: data });
      } else {
        console.error("게시글 조회 실패");
      }
    } catch (error) {
      console.error("서버 통신 오류:", error);
    }
  },

  handleAddPost: async (newPost) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const createdPost = await response.json();
        set((state) => ({ posts: [createdPost, ...state.posts] }));
        return true;
      }
      return false;
    } catch (error) {
      console.error("작성 실패:", error);
      return false;
    }
  },

  handleUpdatePost: async (updatedPost) => {
    try {
      const response = await fetch(`/api/posts/${updatedPost.id}`, { // 상대 경로
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: updatedPost.title,
          content: updatedPost.content
        }), 
      });

      if (response.ok) {
        const savedPost = await response.json();
        set((state) => ({
          posts: state.posts.map((post) =>
            String(post.id) === String(savedPost.id) ? savedPost : post
          ),
        }));
      }
    } catch (error) {
      console.error("수정 실패:", error);
    }
  },

  handleDeletePost: async (id) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        set((state) => ({
          posts: state.posts.filter((post) => String(post.id) !== String(id)),
        }));
      }
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  },
}));