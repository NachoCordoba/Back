import { Express } from 'express';
import AuthentificationController from './authentification.controller';

export default class AuthentificationRouter {
    private routeController: AuthentificationController;

    constructor(app: Express, routeController: AuthentificationController = new AuthentificationController()){
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express){
        app.route('/auth')
        .post(this.routeController.login);
        app.route('/auth/register')
        .post(this.routeController.register);

    }
}


