import userModel from './user.model';

export default class UserRepository{
    constructor(){

    }

    public async getUsers(): Promise<any[]>{
        return userModel.find();
    }
    
    public async addUser(user: any): Promise<any>{
        return userModel.create(user);
    }

    public async deleteUser(_id: String){
        return userModel.findByIdAndDelete(_id);
    }

    public async updateUser(_id: String, updates: any){
        return userModel.findByIdAndUpdate(_id, updates,{ new: true });
    }
}