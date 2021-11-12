import { Express } from 'express';
import UserController from './user.controller';

export default class UserRouter {
    private routeController: UserController;

    constructor(app: Express, routeController: UserController = new UserController()){
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express){
        app.route('/user')
        .get(this.routeController.getUsers);

        app.route('/user')
        .post(this.routeController.addUser);

        app.route('/user')
        .delete(this.routeController.deleteUser);

        app.route('/user')
        .put(this.routeController.updateUser);
    }
}


