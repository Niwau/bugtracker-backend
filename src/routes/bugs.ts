import { verifyJWT } from './../middlewares/verifyJWT';
import { createBug } from './../controllers/Bugs/createBug';
import { getBugs } from '../controllers/Bugs/getBugs';
import { getBug } from '../controllers/Bugs/getBug';
import { deleteBug } from '../controllers/Bugs/deleteBug';
import { updateBug } from '../controllers/Bugs/updateBug';
import { Request, Response, Router } from 'express';
import { isUser } from '../middlewares/isUser';

const router = Router()

router.get('/api/bugs', verifyJWT, isUser ,(req : Request, res: Response) => {
  getBugs(req, res)
})

router.post('/api/bugs', verifyJWT, isUser,(req : Request, res: Response) => {
  createBug(req, res)
})

router.get('/api/bugs/:id', verifyJWT, isUser ,(req : Request, res: Response) => {
  getBug(req, res)
})

router.delete('/api/bugs/:id', verifyJWT, isUser ,(req : Request, res: Response) => {
  deleteBug(req, res)
})

router.patch('/api/bugs/:id', verifyJWT, isUser ,(req : Request, res: Response) => {
  updateBug(req, res)
})

export default router