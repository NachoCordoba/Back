import { Request, Response} from 'express';
import PostBussiness from './post.bussiness';

/**
 * Post Controller
 */
export default class PostController{
    private postBussiness: PostBussiness;

    /**
     * Post Connection with Post Bussiness Logic
     * @param postBussiness 
     */
    constructor(postBussiness: PostBussiness = new PostBussiness()){
        this.postBussiness = postBussiness;
    }

    /**
     * Get Listed Posts
     * @param req 
     * @param res 
     * @returns 
     */
    public getPosts = async (req: Request, res: Response)=>{
        try{
            return res.status(200).json(await this.postBussiness.getPosts());
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }

    /**
     * Get Paginated Posts
     * @param req 
     * @param res 
     * @returns 
     */
     public getPaginatedPosts = async (req: Request, res: Response)=>{
        const { page, limit } = req.query;
        try{
            return res.status(200).json(await this.postBussiness.getPaginatedPosts(Number(page), Number(limit)));
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }
}