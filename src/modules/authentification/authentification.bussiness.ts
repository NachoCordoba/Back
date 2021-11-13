import axios from "axios";
import AuthentificationRepository from "./authentification.repository";
import jwt from 'jsonwebtoken';

export default class UserBussiness{
    private authentificationRepository: AuthentificationRepository;

    constructor(authentificationRepository: AuthentificationRepository = new AuthentificationRepository()){
        this.authentificationRepository = authentificationRepository;
    }

    public async registerUser(userName: String, userPassword: String, userEmail: String){
        const { data } = await axios.post('http://localhost:3000/user', { userName, userPassword, userEmail });

        if(!data)
            throw new Error('Ocurrio un error con el modulo de usuarios');
        
        if(data.err)
            throw new Error(data.errMsg);
        

        this.authentificationRepository.makeAuth(data._id);
        return {
            user: data,
            jwt: this.generateJWT(data)
        }
    }

    public loginUser(userName: String, userPassword: String){
        const user = this.validateLogin(userName.toLowerCase(), userPassword.toLowerCase());

        return {
            user,
            jwt: this.generateJWT(user)
        }
    }

    private async validateLogin(userName: String, userPassword: String){
        const { data } = await axios.get(`http://localhost:3000/user/${userName}`);

        if(!data)
            throw new Error('Usuario o Clave incorrectos.');

        if(data.userPassword !== userPassword)
            throw new Error('Usuario o Clave incorrectos.');

        this.authentificationRepository.makeAuth(data._id);        
        return data;        
    }

    private generateJWT(user: any){
        return jwt.sign(user, 'secret', { expiresIn: '1800s'})
    }
}