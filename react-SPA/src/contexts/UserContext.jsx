import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  const signup = (newUser) => {
    const existingUser = users.find(u => u.id === newUser.id);
    if (existingUser) {
      alert("이미 존재하는 아이디입니다.");
      return false;
    }
    setUsers([...users, newUser]);
    alert("회원가입 성공! 로그인해주세요.");
    return true;
  };

  const login = (id, password) => {
    const user = users.find(u => u.id === id && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    alert("로그아웃 되었습니다.");
  };

  const updateUser = (updatedInfo) => {

    const updatedUsers = users.map(user => 
      user.id === currentUser.id ? { ...user, ...updatedInfo } : user
    );
    setUsers(updatedUsers);
    
    setCurrentUser({ ...currentUser, ...updatedInfo });
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};