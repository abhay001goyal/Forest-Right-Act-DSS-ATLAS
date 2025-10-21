import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';

export default function Register() {
  const navigate = useNavigate();

  function handleSuccess() {
    navigate('/login');
  }

  return (
    <div className="auth-page">
      <RegisterForm onSuccess={handleSuccess} />
    </div>
  );
}
