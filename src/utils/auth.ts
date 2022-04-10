const TOKEN_KEY = 'token';

const isLogin = () => {
  return true;
};

const getToken = () => {
  return '123456';
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { isLogin, getToken, setToken, clearToken };
