import IPhoto from './photo.interface';
import axios from 'axios';

/**
 * Photo Repository DB Manager
 */
export default class PhotoRepository{
    constructor(){

    }

    /**
     * Get Photos from Path
     * @returns 
     */
    public async getPhotos(): Promise<IPhoto[]>{
        const photoUri = process.env.PHOTO_URI ? process.env.PHOTO_URI : 'https://jsonplaceholder.typicode.com/photos';
        const { data } = await axios.get(photoUri);
        return data;
    }

    /**
     * Paginated Photos
     * @param page 
     * @param limit 
     * @returns 
     */
    public async getPaginatedPhotos(page: number, limit: number): Promise<{
        page: number,
        limit: number,
        count: number,
        data: IPhoto[]
    }>{
        const photos = await this.getPhotos();
        return {
            page,
            limit,
            count: photos.length,
            data: photos.slice(page * limit, (page * limit) + limit)
        };
    }
}