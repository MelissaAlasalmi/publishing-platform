/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import User from "../models/User";

const login = () => {
  console.log('logged in');
};

const logout = () => {
  console.log('logged in');
};

const register = (req, res) => {
  const user = new User(req.body);
  user.register(user.data);
  res.send('thanks for trying to register');
};

const home = (_req, res) => {
  res.render('home-guest');
};

export default {login, logout, register, home};