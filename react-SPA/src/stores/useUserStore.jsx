import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,

      signup: (newUser) => {
        const { users } = get();
        const existingUser = users.find((u) => u.id === newUser.id);
        if (existingUser) {
          alert("이미 존재하는 아이디입니다.");
          return false;
        }
        set((state) => ({ users: [...state.users, newUser] }));
        alert("회원가입 성공! 로그인해주세요.");
        return true;
      },

      login: (id, password) => {
        const { users } = get();
        const user = users.find((u) => u.id === id && u.password === password);
        if (user) {
          set({ currentUser: user });
          return true;
        } else {
          alert("아이디 또는 비밀번호가 일치하지 않습니다.");
          return false;
        }
      },

      logout: () => {
        set({ currentUser: null });
        alert("로그아웃 되었습니다.");
      },

      updateUser: (updatedInfo) => {
        set((state) => {
           const updatedUsers = state.users.map(user => 
            user.id === state.currentUser.id ? { ...user, ...updatedInfo } : user
          );
          return {
            users: updatedUsers,
            currentUser: { ...state.currentUser, ...updatedInfo }
          };
        });
      },
    }),
    {
      name: 'user-storage',
    }
  )
);