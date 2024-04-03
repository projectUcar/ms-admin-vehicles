import {Router} from 'express'
import { authenticateUser } from '../middleware/authMiddleware';

const router = Router();
import * as vehicleCtrl from '../controllers/vehicle.controller'

router.post('/create-vehicle', authenticateUser, vehicleCtrl.createVehicle)
router.get('/vehicles-by-id/:userId', authenticateUser, vehicleCtrl.getVehiclesByUserId);
router.get('/my-vehicles', authenticateUser, vehicleCtrl.getMyVehicles);
router.get('/vehicle-by-id/:vehicleId', authenticateUser, vehicleCtrl.getVehicleById);

export default router;