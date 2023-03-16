import { useEffect, useState } from 'react';
import { Button } from './Login.styled';

const getIsLogin = () => {
  const isLogin = localStorage.getItem('isLogin');

  if (isLogin) {
    return JSON.parse(isLogin);
  }
  return isLogin;
};

export const Login = () => {
  const [isLogin, setIsLogin] = useState(getIsLogin);

  useEffect(() => {
    const parsedIsOnline = JSON.stringify(isLogin);
    if (parsedIsOnline === 'null') {
      return console.log(parsedIsOnline);
    }

    localStorage.setItem('isLogin', parsedIsOnline);
  }, [isLogin]);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Button type="button" onClick={handleToggle}>
      {isLogin ? <p>Log out 📚</p> : <p>Log in 📚</p>}
    </Button>
  );
};
