import {Router} from 'express'
import { authenticateUser } from '../middleware/authMiddleware';

const router = Router();

import * as documentCtrl from '../controllers/documentDriver.controller'

router.post('/save-document', authenticateUser, documentCtrl.createDocument);

export default router;