import { Express } from 'express';
import PostController from './post.controller';

export default class PostRouter {
    private routeController: PostController;

    constructor(app: Express, routeController: PostController = new PostController()){
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express){
        app.route('/post')
        .get(this.routeController.getPosts);
    }
}


