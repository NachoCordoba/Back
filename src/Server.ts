import { json, urlencoded } from 'body-parser';
import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import AuthentificationModule from './modules/authentification/authentification.module';
import PhotoModule from './modules/photo/photo.module';
import PostModule from './modules/post/post.module';

import UserModule from './modules/user/user.module';


export default class Server {
    private app: Express = express();
    private port: Number;

    /**
     * Constructor
     * @param port : Listen Port
     */
    constructor(port: Number){
        this.port = port;

        this.configure();
        this.startMongo();
        this.initModules();
    }

    /**
     * Configuration
     *  - Cors
     *  - Json
     */
    private configure(){
        this.app.use(
            (req: Request, res: Response, next: NextFunction)=>{
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
                res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
                res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
                next();
            }
        );

        this.app.use(urlencoded({ extended: false }));
        this.app.use(json());
    }

    /**
     * Start Server
     *  Start to Listen 
     */
    public startServer(){
        this.app.listen(this.port, ()=>{
            console.log('Esuchando el puerto: ', this.port);
        });
    }

    /**
     * Start DB Connection
     */
    private startMongo(){
        mongoose.connect('mongodb+srv://sa:IgnaCord@cluster0.ollq8.mongodb.net/conexa?retryWrites=true&w=majority', { });
    }

    /**
     * Init Modules
     */
    private initModules(){
        new UserModule(this.app);
        new PostModule(this.app);
        new PhotoModule(this.app);
        new AuthentificationModule(this.app);
    }

}