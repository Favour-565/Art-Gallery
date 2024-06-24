import {Schema, model} from 'mongoose'

const CardSchema = new Schema({
    cardNumber: {type:String, required:true},
    cardHolder: {type:String, required:true},
    expirationDate: {type:String, required:true},
    cvv: {type:String, required:true}
}, {
    timestamps:true
})

export const Card = model('Card', CardSchema)