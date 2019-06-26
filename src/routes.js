import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Hiago Souza',
    email: 'hiagofss98@gmail.com',
    password_hash: '123456789',
  });
  res.json(user);
});

export default routes;
