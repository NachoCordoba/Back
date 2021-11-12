import { Request, Response} from 'express';
import UserBussiness from './user.bussiness';

export default class UserController{
    private userBussiness: UserBussiness;

    constructor(userBussiness: UserBussiness = new UserBussiness()){
        this.userBussiness = userBussiness;
    }

    public async getUsers(): Promise<any[]>{
        return await this.userBussiness.getUsers();
    }
    
    public async addUser(user: any): Promise<any>{
        return await this.userBussiness.addUser(user);
    }

    public async deleteUser(_id: String){
        return await this.userBussiness.deleteUser(_id);
    }

    public async updateUser(_id: String, updates: any){
        return await this.userBussiness.updateUser(_id, updates);
    }
}