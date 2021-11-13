import { Express } from "express";
import PhotoController from "./photo.controller";
import PhotoRouter from "./photo.routes";

export default class PhotoModule {
    public routes : PhotoRouter;

    constructor(app: Express){
        this.routes = new PhotoRouter(app, new PhotoController());
    }
}