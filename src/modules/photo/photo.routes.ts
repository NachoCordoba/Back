import { Express } from 'express';
import PhotoController from './photo.controller';

export default class PhotoRouter {
    private routeController: PhotoController;

    constructor(app: Express, routeController: PhotoController = new PhotoController()){
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express){
        app.route('/photo')
        .get(this.routeController.getPhotos);
    }
}

