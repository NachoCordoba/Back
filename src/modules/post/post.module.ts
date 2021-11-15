import { Express } from "express";
import PostController from "./post.controller";
import PostRouter from "./post.routes";

/**
 * Post Module
 */
export default class PostModule {
    public routes : PostRouter;

    /**
     * Post Module connection with Post Routes
     * @param app 
     */
    constructor(app: Express){
        this.routes = new PostRouter(app, new PostController());
    }
}