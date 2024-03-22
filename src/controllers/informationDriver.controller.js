import * as infoService from '../libs/informationService.js';

export const getInfoDriver = async (req, res) => {
    try {
        const userId = req.user.id;

        const document = await  infoService.getDocumentByUserId( userId);
        const vehicles = await infoService.getVehiclesByUserId(userId);

        res.status(200).json({document, vehicles});
    } catch (error) {
        console.error('Error al crear el vehículo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};