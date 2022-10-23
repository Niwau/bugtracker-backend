import { register } from './../controllers/registerController';
import { login } from "../controllers/loginController";
import { Router } from "express";

const router = Router()

router.post('/auth/login', (req, res) => {
    login(req, res)
})

router.post('/auth/register', (req, res) => {
    register(req, res)
})

export default router