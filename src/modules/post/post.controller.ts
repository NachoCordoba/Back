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
     * Get Paginated Posts
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
}