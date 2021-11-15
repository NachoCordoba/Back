import { Schema, model } from 'mongoose';

/**
 * Authentification Model Schema
 */
export const AuthetificationSchema = new Schema({
    authentificationUser:{
        type: String,
        required: true
    },
    authentificationDate:{
        type: Date,
        default: new Date()
    }
});

export default model('Authentification', AuthetificationSchema);