import { Schema, model } from 'mongoose';

export const UserSchema = new Schema({
    userName:{
        type: String,
        required: [true, 'Nombre de usuario requerido.']
    },
    userPassword:{
        type: String,
        required: [true, 'Clave requerida.']
    },
    userEmail:{
        type: String,
        required: [true, 'Email requerido.']
    }
});

export default model('User', UserSchema);