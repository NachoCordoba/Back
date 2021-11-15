import axios from "axios";
import AuthentificationRepository from "./authentification.repository";
import jwt from 'jsonwebtoken';

/**
 * Authentification Bussiness
 * Bussiness Logic
 */
export default class AuthentificationBussiness{
    private authentificationRepository: AuthentificationRepository;

    /**
     * Authentification Repository Manager
     * @param authentificationRepository 
     */
    constructor(authentificationRepository: AuthentificationRepository = new AuthentificationRepository()){
        this.authentificationRepository = authentificationRepository;
    }

    /**
     * Register new user
     * @param userName 
     * @param userPassword 
     * @param userEmail 
     * @returns 
     */
    public async registerUser(userName: String, userPassword: String, userEmail: String){
        const userModule = process.env.USER_MODULE as string;
        const authorization = this.generateModuleToken();
        const { data } = await axios.post(userModule, { userName, userPassword, userEmail },{ headers: {'authorization' : authorization }});

        if(!data)
            throw new Error('Ocurrio un error con el modulo de usuarios');
        
        if(data.err)
            throw new Error(data.errMsg);
        

        this.authentificationRepository.makeAuth({ authentificationUser: data._id , authentificationDate: new Date() });
        return {
            user: data,
            jwt: this.generateJWT(data)
        }
    }

    /**
     * Login User Validation
     * @param userName 
     * @param userPassword 
     * @returns 
     */
    public async loginUser(userName: String, userPassword: String){
        const user = await this.validateLogin(userName.toLowerCase(), userPassword.toLowerCase());

        return {
            user,
            jwt: this.generateJWT(user)
        }
    }

    /**
     * Validation User with UserModule
     * @param userName \
     * @param userPassword 
     * @returns 
     */
    private async validateLogin(userName: String, userPassword: String){
        const userModule = process.env.USER_MODULE as string;
        const authorization = this.generateModuleToken();
        const { data } = await axios.get(`${userModule}/${userName}`,{ headers: {'authorization' : authorization}});

        if(!data)
            throw new Error('Usuario o Clave incorrectos.');

        if(data.userPassword !== userPassword)
            throw new Error('Usuario o Clave incorrectos.');

        this.authentificationRepository.makeAuth({ authentificationUser: data._id , authentificationDate: new Date() });        
        return data;       
    }

    /**
     * Generated Module Token for Request
     * @returns 
     */
    private generateModuleToken(){
        const secret_token = process.env.SECRET_TOKEN ? process.env.SECRET_TOKEN : 'secret';
        const expiresIn = process.env.EXPIRES_TOKEN ? process.env.EXPIRES_TOKEN : '1800s';
        return jwt.sign({}, secret_token, { expiresIn });
    }

    /**
     * Generate User Token Validation
     * @param user 
     * @returns 
     */
    private generateJWT(user: any){
        const secret_token = process.env.SECRET_TOKEN ? process.env.SECRET_TOKEN : 'secret';
        const expiresIn = process.env.EXPIRES_TOKEN ? process.env.EXPIRES_TOKEN : '1800s';
        return jwt.sign(user, secret_token, { expiresIn: expiresIn });
    }
}