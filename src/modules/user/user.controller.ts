import { Request, Response} from 'express';
import UserBussiness from './user.bussiness';
import IUser from './user.interface';

/**
 * User Controller
 */
export default class UserController{
    private userBussiness: UserBussiness;

    /**
     * Connect User Controller with User Bussiness
     * @param userBussiness 
     */
    constructor(userBussiness: UserBussiness = new UserBussiness()){
        this.userBussiness = userBussiness;
    }

    /**
     * Get Paginated Users
     * @param req 
     * @param res 
     * @returns 
     */
    public getPaginatedUser = async (req: Request, res: Response)=>{
        const { page, limit } = req.query;
        try{
            return res.status(200).json(await this.userBussiness.getPaginatedUser(Number(page), Number(limit)));
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }

    /**
     * Get User By Name
     * @param req 
     * @param res 
     * @returns 
     */
    public getUserByName = async (req: Request, res: Response)=>{
        const { userName } = req.params;

        try{
            return res.status(200).json(await this.userBussiness.getUserByName(userName));
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }
    
    /**
     * Add new User
     * @param req 
     * @param res 
     * @returns 
     */
    public addUser = async (req: Request, res: Response)=>{
        const reqUser : IUser = req.body;
        try{
            const newUser = await this.userBussiness.addUser(reqUser);
            return res.status(200).json(newUser);
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }

    /**
     * Delete User
     * @param req 
     * @param res 
     * @returns 
     */
    public deleteUser = async (req: Request, res: Response)=>{
        const { id } = req.params;
        try{
            return res.status(200).json(await this.userBussiness.deleteUser(id));
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }

    /**
     * Update User
     * @param req 
     * @param res 
     * @returns 
     */
    public  updateUser = async (req: Request, res: Response)=>{
        const { id } = req.params;
        const updates = req.body;
        try{
            return res.status(200).json(await this.userBussiness.updateUser(id, updates));
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }
}