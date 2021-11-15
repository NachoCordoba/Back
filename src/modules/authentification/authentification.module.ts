import { Express } from "express";
import AuthentificationController from "./authentification.controller";
import AuthentificationRouter from "./authentification.routes";

/**
 * Authentification Module
 */
export default class AuthentificationModule {
    public routes : AuthentificationRouter;

    /**
     * Module Creation with Routes
     * @param app 
     */
    constructor(app: Express){
        this.routes = new AuthentificationRouter(app, new AuthentificationController());
    }
}