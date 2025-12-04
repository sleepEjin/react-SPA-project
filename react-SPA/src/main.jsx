import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PostProvider } from './contexts/PostContext';
import { AuthProvider } from './contexts/UserContext';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <PostProvider>
      <App />
    </PostProvider>
  </AuthProvider>
)