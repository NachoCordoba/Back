import UserRepository from "./user.repository";

export default class UserBussiness{
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository = new UserRepository()){
        this.userRepository = userRepository;
    }

    public async getUsers(): Promise<any[]>{
        return this.userRepository.getUsers();
    }
    
    public async addUser(user: any): Promise<any>{
        return this.userRepository.addUser(user);
    }

    public async deleteUser(_id: String){
        return this.userRepository.deleteUser(_id);
    }

    public async updateUser(_id: String, updates: any){
        return this.userRepository.updateUser(_id, updates);
    }
}