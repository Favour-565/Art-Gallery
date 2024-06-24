import {Schema, model} from 'mongoose'
import { Payment } from './payment'

const UserSchema = new Schema ({
    firstName: {type:String, required:true},
    surName: {type:String, required:true},
    email: {type:String, required:true},
    phoneNumber: {type:String, required:true},
    password: {type:String, required:true},
    googleId: {type:String},
    address: {type:String},
    state: {type:String},
    zipCode: {type:String},
    birthDay: {type:String},
    avatar: {type:String},
    role: {type:String, default:'user'},
    language: {type:String, default:'english'},
    payment: [{ type: Schema.Types.ObjectId, ref: 'Payment' }],
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    verified: {type:Boolean, default:false},
    otp: {type:Number},
    otp_expiry: {type:Date}
}, {
    timestamps:true
})

export const User = model('User', UserSchema)