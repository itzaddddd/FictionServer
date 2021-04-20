import 'reflect-metadata'
import koa from 'koa'
import dotenv from 'dotenv'
import cors from '@koa/cors'
import bodyParser from 'koa-body'
import { useKoaServer } from 'routing-controllers'
import fictionController from './controllers/fiction.controller'

dotenv.config()

export class App {
    private app: koa
    constructor(){
        this.app = new koa()
        this.middlewares()
        this.routes()
    }

    private middlewares(){
        this.app.use(cors())
        this.app.use(bodyParser())
    }

    private routes(){
        useKoaServer(this.app, {
            controllers: [fictionController]
        })
    }

    public async listen(): Promise<void>{
        this.app.listen(process.env.PORT || 4000)
        console.log(`Server is running on port ${process.env.PORT}` || 4000)
    }


}