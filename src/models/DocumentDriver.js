import mongoose from 'mongoose';

const documentDriverSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    documentType: {
        type: String,
        required: true,
    },
    documentNumber: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
);

const DocumentDriver = mongoose.model('DocumentDriver', documentDriverSchema);

export default DocumentDriver;