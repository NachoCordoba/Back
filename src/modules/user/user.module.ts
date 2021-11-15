import { Express } from "express";
import UserController from "./user.controller";
import UserRouter from "./user.routes";

/**
 * User Module
 */
export default class UserModule {
    public routes : UserRouter;

    /**
     * Connect User Modole with User Routes
     * @param app 
     */
    constructor(app: Express){
        this.routes = new UserRouter(app, new UserController());
    }
}