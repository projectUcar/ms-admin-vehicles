import Vehicle from '../models/Vehicle.js';
import DocumentDriver from '../models/DocumentDriver.js';

export const getVehiclesByUserId = async (userId) => {
    try {
        const vehicles = await Vehicle.find({ owner: userId })

        if (vehicles.length === 0) {
            return { message: 'El usuario no tiene ningún vehículo asociado.' };
        }

        return vehicles;
    } catch (error) {
        console.error('Error al obtener los vehículos:', error);
        return { error: 'Error interno del servidor' };
    }
};

export const getDocumentByUserId = async (userId) => {
    try {
        const document = await DocumentDriver.findOne({ owner: userId })

        return document;
    } catch (error) {
        console.error('Error al obtener los vehículos:', error);
        return { error: 'Error interno del servidor' };
    }
};