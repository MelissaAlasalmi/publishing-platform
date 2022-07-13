import express from "express";
import postController from "./controllers/postController";
import userController from "./controllers/userController";

const router = express.Router();

router.get('/', userController.home);
router.post('/login', userController.login);
router.post('/register', userController.register);

router.get('/about', (_req, res) => {
  res.send('this is our about page!');
});

router.post('/create-post', postController.create);


export default router;