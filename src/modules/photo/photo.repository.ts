import IPhoto from './photo.interface';
import axios from 'axios';

export default class PhotoRepository{
    constructor(){

    }

    public async getPhotos(): Promise<IPhoto[]>{
        const photoUri = process.env.PHOTO_URI ? process.env.PHOTO_URI : 'https://jsonplaceholder.typicode.com/photos';
        const { data } = await axios.get(photoUri);
        return data;
    }

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
            data: photos.slice(page * limit, limit)
        };
    }
}