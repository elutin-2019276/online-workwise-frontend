import { Router } from "express"
import { createWorkOffer, deleteWorkOffer, getWorkOffers, updateWorkOffer, getWorkOffersByUserId } from "./workOffer.controller.js"

const api = Router()

api.post('/saveWorkOffer', createWorkOffer)
api.get('/getWorkOfferById/:userId', getWorkOffersByUserId)
api.put('/updateWorkOffer/:id', updateWorkOffer)
api.delete('/deleteWorkOffer/:id', deleteWorkOffer)
api.get('/getWorkOffers', getWorkOffers)

export default api