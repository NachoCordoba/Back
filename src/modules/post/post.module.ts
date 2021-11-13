import { Express } from "express";
import PostController from "./post.controller";
import PostRouter from "./post.routes";

export default class PostModule {
    public routes : PostRouter;

    constructor(app: Express){
        this.routes = new PostRouter(app, new PostController());
    }
}