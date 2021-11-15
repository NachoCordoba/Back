import { Express } from 'express';
import authenticateToken from '../../middlewares/authToken';
import PhotoController from './photo.controller';

/**
 * Photo Router
 */
export default class PhotoRouter {
    private routeController: PhotoController;

    /**
     * Photo Router relationated with Controllers
     * @param app 
     * @param routeController 
     */
    constructor(app: Express, routeController: PhotoController = new PhotoController()){
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    /**
     * Photo Routes Config
     * @param app 
     */
    private configureRoutes(app: Express){
        app.route('/photo')
        .get(authenticateToken, this.routeController.getPhotos);
    }
}


