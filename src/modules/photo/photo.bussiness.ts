import PhotoRepository from "./photo.repository";

/**
 * Photo Bussiness
 */
export default class PhotoBussiness{
    private photoRepository: PhotoRepository;

    /**
     * Connection PhotoBussiness with PhotoRepository
     * @param photoRepository 
     */
    constructor(photoRepository: PhotoRepository = new PhotoRepository()){
        this.photoRepository = photoRepository;
    }

    /**
     * Get Paginated Photos
     * @param page 
     * @param limit 
     * @returns 
     */
    public async getPhotos(page: number, limit: number): Promise<any>{
        return this.photoRepository.getPaginatedPhotos(page, limit);
    }
}