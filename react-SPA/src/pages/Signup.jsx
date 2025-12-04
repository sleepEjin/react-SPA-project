import React, { useState, useContext } from 'react'; // useContext 추가
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext'; // Context 불러오기
import { Button, Container, Form, Input } from './Signup.styled';

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext); // signup 함수 가져오기
  
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    nickname: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.id || !formData.password || !formData.nickname) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const success = signup({
      id: formData.id,
      password: formData.password,
      nickname: formData.nickname,
      joinDate: new Date().toLocaleDateString()
    });

    if (success) {
      navigate('/login');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <Input name="id" placeholder="아이디" value={formData.id} onChange={handleChange} />
        <Input type="password" name="password" placeholder="비밀번호" value={formData.password} onChange={handleChange} />
        <Input type="password" name="confirmPassword" placeholder="비밀번호 확인" value={formData.confirmPassword} onChange={handleChange} />
        <Input name="nickname" placeholder="닉네임" value={formData.nickname} onChange={handleChange} />
        <Button type="submit">가입하기</Button>
      </Form>
    </Container>
  );
};

export default SignUp;