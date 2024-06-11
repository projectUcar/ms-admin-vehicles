import {Router} from 'express'
import { authenticateUser } from '../middleware/authMiddleware';

const router = Router();

import * as sendRequestCtrl from '../controllers/requestDriver.controller';

router.post('/send-request', authenticateUser, sendRequestCtrl.sendRequest);

export default router;