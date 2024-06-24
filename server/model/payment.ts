import {Schema, model} from 'mongoose'
import { Card } from './card'

const PaymentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:'User'},
    paymentId: {type:String},
    cardInfo:[{ type: Schema.Types.ObjectId, ref: 'Card' }]
}, {
    timestamps:true
})

export const Payment = model('Payment', PaymentSchema)