import { Request, Response} from 'express';
import PostBussiness from './post.bussiness';

export default class PostController{
    private postBussiness: PostBussiness;

    constructor(postBussiness: PostBussiness = new PostBussiness()){
        this.postBussiness = postBussiness;
    }

    public getPosts = async (req: Request, res: Response)=>{
        try{
            return res.status(200).json(await this.postBussiness.getPosts());
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }
}