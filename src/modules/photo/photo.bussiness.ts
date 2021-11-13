import IPhoto from "./photo.interface";
import PhotoRepository from "./photo.repository";

export default class PhotoBussiness{
    private photoRepository: PhotoRepository;

    constructor(photoRepository: PhotoRepository = new PhotoRepository()){
        this.photoRepository = photoRepository;
    }

    public async getPhotos(page: number, limit: number): Promise<any>{
        return this.photoRepository.getPaginatedPhotos(page, limit);
    }
}