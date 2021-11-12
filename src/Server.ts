import { json } from 'body-parser';
import express, { Express, Request, Response, NextFunction } from 'express';

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
     * Init Modules
     */
    private initModules(){

    }

}