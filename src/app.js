import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import helmet from "helmet";

import indexRoutes from "./routes/index.routes.js";
import createVehicleRoutes from "./routes/vehicle.routes.js";
import saveDocumentDriver from "./routes/documentDriver.routes.js";
import infoDriver from "./routes/infoDriver.routes.js";
import sendRequestDriver from './routes/requestDriver.routes.js';

const app = express()

app.set('pkg', pkg)

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("json spaces", 4);

app.use('/api/v1', indexRoutes)
app.use('/api/v1/vehicles', createVehicleRoutes);
app.use('/api/v1/document-driver', saveDocumentDriver);
app.use('/api/v1/driver', infoDriver);
app.use('/api/v1/request', sendRequestDriver);

export default app;