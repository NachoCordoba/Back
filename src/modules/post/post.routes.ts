import { Express } from 'express';
import authenticateToken from '../../middlewares/authToken';
import PostController from './post.controller';

/**
 * Post Routes
 */
export default class PostRouter {
    private routeController: PostController;

    /**
     * Post Routes connection with Post COntroller 
     * @param app 
     * @param routeController 
     */
    constructor(app: Express, routeController: PostController = new PostController()){
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    /**
     * Configuration Post Routes
     * @param app 
     */
    private configureRoutes(app: Express){
        app.route('/post')
        .get(authenticateToken, this.routeController.getPosts);

        app.route('/paginatedPost')
        .get(authenticateToken, this.routeController.getPaginatedPosts);
    }
}


