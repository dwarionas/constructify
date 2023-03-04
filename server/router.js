import { Router } from "express";
import UserController from "./controllers/UserController.js";

const router = new Router();

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);
router.post('/users/check', UserController.checkUser);

export default router;