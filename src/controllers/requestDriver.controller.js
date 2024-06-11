import * as infoService from '../libs/informationService.js';
import { getUserById } from '../libs/userService.js';
import { sendToQueue } from '../libs/rabbitmq.js';
import { QUEUE } from '../config.js'; 

export const sendRequest = async (req, res) => {
    try {
        const userId = req.user.id;
        const token = req.headers.authorization;

        const document = await  infoService.getDocumentByUserId(userId);
        const vehicle = await infoService.getVehiclesByUserId(userId);
        const user = await getUserById(userId, token);

        const { documentType, documentNumber } = document;

        const { brand, model, line, plate, } = vehicle[0];

        const { firstName, lastName, email, carrer, gender, phoneNumber } = user;

        const sendToRequest = { 
            userId,
            firstName,
            lastName,
            gender,
            phoneNumber,
            email,
            carrer,
            documentType,
            documentNumber,
            brand,
            model,
            line,
            plate,
        }

        await sendToQueue(QUEUE, sendToRequest);

        res.json({message: "Se está validando la información proporcionada. En 3 días hábiles te avisamos", sendToRequest});

    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}