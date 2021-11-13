import IUser from "./user.interface";
import UserRepository from "./user.repository";

/**
 * User Bussiness Logic
 */
export default class UserBussiness{
    private userRepository: UserRepository;

    /**
     * Bussiness Logic connect with User Repository
     * @param userRepository 
     */
    constructor(userRepository: UserRepository = new UserRepository()){
        this.userRepository = userRepository;
    }

    /**
     * Get Paginated Users
     * @param page 
     * @param limit 
     * @returns 
     */
    public async getPaginatedUser(page: number, limit: number): Promise<any>{
        return this.userRepository.getPaginatedUser(page, limit);
    }

    /**
     * Get User By Name
     * @param userName 
     * @returns 
     */
    public async getUserByName(userName: String): Promise<IUser>{
        return this.userRepository.getUserByName(userName);
    }
    
    /**
     * Add New User
     * @param user 
     * @returns 
     */
    public async addUser(user: IUser): Promise<IUser>{
        return this.userRepository.addUser(user);
    }

    /**
     * Delete User
     * @param _id 
     * @returns 
     */
    public async deleteUser(_id: String){
        return this.userRepository.deleteUser(_id);
    }

    /**
     * Update User
     * @param _id 
     * @param updates 
     * @returns 
     */
    public async updateUser(_id: String, updates: any){
        return this.userRepository.updateUser(_id, updates);
    }
}