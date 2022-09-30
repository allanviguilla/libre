import { Router, Request, Response } from 'express';

const router = Router();

// set up routes

router.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).json('get request success');
  } catch (err) {
    res.status(404).json('get request err');
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    res.status(200).json('post request success');
  } catch (err) {
    res.status(404).json('post request err');
  }
})

export default router;