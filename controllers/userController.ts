/* eslint-disable @typescript-eslint/no-unsafe-call */

const login = () => {
  console.log('logged in');
};

const logout = () => {
  console.log('logged in');
};

const register = (_req, res) => {
  res.send('thanks for trying to register');
};

const home = (_req, res) => {
  res.render('home-guest');
};

export default {login, logout, register, home};