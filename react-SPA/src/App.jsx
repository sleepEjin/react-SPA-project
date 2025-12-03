import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/routes'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. 새로고침 해도 로그인 유지 (localStorage 확인)
  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // 3. 로그인 함수
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // 4. 로그아웃 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    alert('로그아웃 되었습니다.');
  };

  return (
    // 만든 함수와 상태를 AppRoutes로 전달
    <AppRoutes 
      isLoggedIn={isLoggedIn} 
      onLogin={handleLogin} 
      onLogout={handleLogout} 
    />
  )
}

export default App
