import 'reflect-metadata'
import { Context } from 'koa'
import { Controller, Body, Ctx, Get, Post } from 'routing-controllers'
import { predictFiction } from '../services/fiction.service';
import { IPredict } from '../interfaces/input.interface';
import { httpOk, httpInternalServerError } from './utils/responseHelper'

@Controller('/fic')
export default class fictionController{
    @Post('/')
    async predictFiction(@Ctx() ctx: Context, @Body() request: IPredict){
        const result = await predictFiction(request)
        if(!result) httpInternalServerError(ctx, {msg: 'Server Error'})
        httpOk(ctx, result)
        return ctx.response
    }
}