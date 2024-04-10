import express from 'express';
import { signin, signup, logout, edit } from '../controllers/user'
import authUser from '../middlewares/authUser';

const router = express.Router();

router.post("/register", signup);
router.post("/login", signin);

router.post("/logout", authUser, logout);
router.post("/edit", authUser, edit);

export default router;
