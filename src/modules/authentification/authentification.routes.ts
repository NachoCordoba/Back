import { Express } from 'express';
import AuthentificationController from './authentification.controller';

/**
 * Authentification Router
 */
export default class AuthentificationRouter {
    private routeController: AuthentificationController;

    /**
     * Router directions to Controller
     * @param app 
     * @param routeController 
     */
    constructor(app: Express, routeController: AuthentificationController = new AuthentificationController()){
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    /**
     * Express Routes
     * @param app 
     */
    private configureRoutes(app: Express){
        app.route('/auth')
        .post(this.routeController.login);
        app.route('/auth/register')
        .post(this.routeController.register);

    }
}


