import {Schema, model} from 'mongoose'

const OrderSchema = new Schema({
    orderNo: {type:String, required:true},
    date: {type:String, required:true},
    address: {type:String, required:true},
    artId: {type:String, required:true},
    userId: {type: Schema.Types.ObjectId, ref:'User'},
    deliveryFee: {type:String, required:true},
    total: {type:String, required:true}
}, {
    timestamps:true
})

export const Order = model('Order', OrderSchema)