import { Request, Response} from 'express';
import AuthentificationBussiness from './authentification.bussiness';

/**
 * Authentification Controller
 */
export default class AuthentificationController{
    private authentificationBussiness: AuthentificationBussiness;

    /**
     * Authentification Controller With Bussiness Logic 
     * @param authentificationBussiness 
     */
    constructor(authentificationBussiness: AuthentificationBussiness = new AuthentificationBussiness()){
        this.authentificationBussiness = authentificationBussiness;
    }

    /**
     * Login Controller
     * Login User
     * @param req 
     * @param res 
     * @returns 
     */
    public login = async (req: Request, res: Response)=>{
        try{
            const { userName, userPassword } = req.body;

            if(!userName)
                throw new Error('El Usuario es requerido');

            return res.status(200).json(await this.authentificationBussiness.loginUser(userName, userPassword));
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }

    /**
     * Register Controller
     * Register new User
     * @param req 
     * @param res 
     * @returns 
     */
    public register = async (req: Request, res: Response)=>{
        try{
            const { userName, userPassword, userEmail } = req.body;
            return res.status(200).json(await this.authentificationBussiness.registerUser(userName, userPassword, userEmail));
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }
}