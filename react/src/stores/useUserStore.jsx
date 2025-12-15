import { create } from 'zustand';

export const useUserStore = create((set) => ({
  currentUser: null,

  signup: async (userInfo) => {
    try {
      const response = await fetch('/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        alert("회원가입 실패: 이미 존재하거나 잘못된 정보입니다.");
        return false;
      }

      alert("회원가입 성공! 로그인해주세요.");
      return true;
    } catch (error) {
      console.error("회원가입 에러:", error);
      return false;
    }
  },

  login: async (id, password) => {
    try {
      const response = await fetch('/api/members/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
      });

      if (response.ok) {
        const member = await response.json();
        set({ currentUser: member });
        return true;
      } else {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        return false;
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      return false;
    }
  },

  logout: () => {
    set({ currentUser: null });
    alert("로그아웃 되었습니다.");
  },

  checkId: async (id) => {
    try {
      const response = await fetch(`/api/members/check/${id}`);
      if (response.ok) {
        const data = await response.json();
        return data.isAvailable;
      }
      return false;
    } catch (error) {
      console.error("중복 확인 에러:", error);
      return false;
    }
  }
}));