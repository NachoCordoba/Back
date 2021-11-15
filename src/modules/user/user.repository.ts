import IUser from './user.interface';
import userModel from './user.model';

/**
 * User Repository
 */
export default class UserRepository{
    constructor(){

    }

    /**
     * Get Count Users
     * @returns 
     */
    public async getUsersCount(): Promise<number>{
        return userModel.countDocuments();
    }

    /**
     * Get Paginated Users
     * @param page 
     * @param limit 
     * @returns 
     */
    public async getPaginatedUser(page: number, limit: number): Promise<{
        page: Number,
        limit: Number,
        count: Number,
        data: any
    }>{
        return {
            page,
            limit,
            count: await this.getUsersCount(),
            data: await userModel.find().limit(limit).skip(page * limit)
        }
    }
    
    /**
     * Get User By Name
     * @param userName 
     * @returns 
     */
    public async getUserByName(userName: String): Promise<IUser>{
        return userModel.findOne({ userName });
    }

    /**
     * Get User By Email
     * @param userEmail 
     * @returns 
     */
    public async getUserByEmail(userEmail: String): Promise<IUser>{
        return userModel.findOne({ userEmail });
    }

    /**
     * Validate User
     * @param user 
     */
    public async validate(user: IUser): Promise<void>{
        if(await this.getUserByName(user.userName))
            throw new Error('El Usuario ingresado ya existe.');
        if(await this.getUserByEmail(user.userEmail))
            throw new Error('El Email ingresado ya existe.');
    }
    
    /**
     * Add New User
     * @param user 
     * @returns 
     */
    public async addUser(user: IUser): Promise<IUser>{
        await this.validate(user);
        return userModel.create(user);
    }

    /**
     * Delete User
     * @param _id 
     * @returns 
     */
    public async deleteUser(_id: String){
        return userModel.findByIdAndDelete(_id);
    }

    /**
     * Update an user
     * @param _id 
     * @param updates 
     * @returns 
     */
    public async updateUser(_id: String, updates: any){
        return userModel.findByIdAndUpdate(_id, updates,{ new: true });
    }
}