import Vehicle from '../models/Vehicle.js';
import * as vehicleService from '../libs/informationService.js';

export const createVehicle = async (req, res) => {
  try {
    const {
      brand,
      model,
      line,
      plate,
      color,
      seats,
      doors,
    } = req.body;

    // Validar la placa utilizando una expresión regular
    const plateRegex = /^[A-Z]{3}\d{3}$/;
    if (!plateRegex.test(plate)) {
      return res.status(400).json({ error: 'La placa debe tener el formato: ABC123' });
    }

    const owner = req.user.id;

    const vehicle = new Vehicle({
      owner,
      brand,
      model,
      line,
      plate,
      color,
      seats,
      doors,
    });

    await vehicle.save();

    res.status(201).json({ message: 'Vehículo creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el vehículo:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const getVehiclesByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const vehicles = await vehicleService.getVehiclesByUserId(userId);

    res.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getMyVehicles = async (req, res) => {
  try {
    const userId = req.user.id;
    const vehicles = await vehicleService.getVehiclesByUserId(userId);

    res.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};