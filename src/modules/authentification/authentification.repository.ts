import IAuthentification from './authentification.interface';
import authentificationModel from './authentification.model';

/**
 * Authentification Repository - Database Manager
 */
export default class AuthentificationRepository{
    constructor(){

    }

    public async makeAuth(auth: IAuthentification): Promise<number>{
        return authentificationModel.create(auth);
    }
}