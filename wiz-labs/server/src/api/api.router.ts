import express, { Router } from 'express';
import cors from 'cors';
import ApiController from '../controllers/api.controller';
import errorHandler from '../middlewares/errorHandler';

const router = Router();

router.use(express.json());
router.use(cors());

// router
//   .route('/')
//   .get(ApiController.getLogs)
//   .post(upload.single('file'), ApiController.createLog);

router.get('/getWebsiteMedia', ApiController.loadWebsiteMedia);
// router.get('/files/:fileName', ApiController.getFileContents);

router.use(errorHandler);

export default router;
