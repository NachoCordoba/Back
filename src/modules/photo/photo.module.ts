import { Express } from "express";
import PhotoController from "./photo.controller";
import PhotoRouter from "./photo.routes";

/**
 * Photo Module
 */
export default class PhotoModule {
    public routes : PhotoRouter;

    /**
     * Module Creation with Routes
     * @param app 
     */
    constructor(app: Express){
        this.routes = new PhotoRouter(app, new PhotoController());
    }
}