import {Router} from 'express'
import { authenticateUser } from '../middleware/authMiddleware';

const router = Router();
import * as vehicleCtrl from '../controllers/vehicle.controller'

router.post('/create-vehicle', authenticateUser, vehicleCtrl.createVehicle)

export default router;