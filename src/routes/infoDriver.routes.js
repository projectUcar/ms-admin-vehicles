import {Router} from 'express'
import { authenticateUser } from '../middleware/authMiddleware';

const router = Router();

import * as infoDriverCtrl from '../controllers/informationDriver.controller'

router.get('/information-driver', authenticateUser, infoDriverCtrl.getInfoDriver);

export default router;