import { Request, Response} from 'express';
import PhotoBussiness from './photo.bussiness';

/**
 * Photo Controller
 */
export default class PhotoController{
    private photoBussiness: PhotoBussiness;

    /**
     * Connect Controller with Bussiness Logic
     * @param photoBussiness 
     */
    constructor(photoBussiness: PhotoBussiness = new PhotoBussiness()){
        this.photoBussiness = photoBussiness;
    }

    /**
     * Get Photos
     * @param req 
     * @param res 
     * @returns 
     */
    public getPhotos = async (req: Request, res: Response)=>{
        const { page, limit } = req.query;
        try{
            return res.status(200).json(await this.photoBussiness.getPhotos(Number(page), Number(limit)));
        }
        catch(err: any){
            return res.status(400).json({ err: true, errMsg: err.message });
        }
    }
}