import { Express } from 'express';
import UserController from './user.controller';
import authenticateToken from '../../middlewares/authToken';

/**
 * User Router
 */
export default class UserRouter {
    private routeController: UserController;

    /**
     * Connect User Routes with User Controller
     * @param app 
     * @param routeController 
     */
    constructor(app: Express, routeController: UserController = new UserController()){
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    /**
     * Configure User Routes
     * @param app 
     */
    private configureRoutes(app: Express){
        app.route('/user')
        .get(authenticateToken, this.routeController.getPaginatedUser);

        app.route('/user/:userName')
        .get(authenticateToken, this.routeController.getUserByName);

        app.route('/user')
        .post(authenticateToken, this.routeController.addUser);

        app.route('/user/:id')
        .delete(authenticateToken, this.routeController.deleteUser);

        app.route('/user/:id')
        .put(authenticateToken, this.routeController.updateUser);
    }
}


