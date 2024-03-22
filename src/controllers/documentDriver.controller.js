import DocumentDriver from '../models/DocumentDriver';

export const createDocument = async (req, res) => {
    try {
        const {
            documentType,
            documentNumber
        } = req.body;

        const owner = req.user.id;

        const document = new DocumentDriver({
            owner, 
            documentType, 
            documentNumber
        });

        await document.save();
        res.status(201).json({ message: 'Documento guardado exitosamente' });

    } catch (error) {
        console.error('Error al crear el vehículo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }

};