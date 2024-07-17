import { Schema, model } from "mongoose"

const workOfferSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    problemDescription: {
        type: String,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user',
    },
    professional: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'ACTIVO',
        enum: ['ACTIVO', 'INACTIVO'],
    },
}, {
    versionKey: false
})

export default model('workOffer', workOfferSchema)