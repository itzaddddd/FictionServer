import { Context } from 'koa'

enum STATUS_CODE {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    REQUEST_TIMEOUT = 408,
    INTERNAL_SERVER_ERROR = 500
}

export interface IResponseData {
    status: string
    statusCode: number
    data?: any
    success?: boolean
    error?: any
}

const httpResponse = (ctx: Context, responseData: IResponseData) => {
    const defaultResponse = Object.assign({
        data: {},
        status: '',
        statusCode: 200,
        success: responseData.success || responseData.error,
        error: responseData.error || null
    }, responseData)
    ctx.status = defaultResponse.statusCode,
    ctx.body = defaultResponse
}

export const httpOk = (ctx: Context, data?: any) => {
    httpResponse(ctx, {
        data,
        status: 'OK',
        statusCode: STATUS_CODE.OK
    })
}

export const httpBadRequest = (ctx: Context, error: any, data?: any) => {
    httpResponse(ctx, {
        data,
        status: 'BAD_REQUEST',
        statusCode: STATUS_CODE.BAD_REQUEST,
        error
    })
}

export const httpNotFound = (ctx: Context, data?: any) => {
    httpResponse(ctx, {
        data,
        status: 'NOT_FOUND',
        statusCode: STATUS_CODE.NOT_FOUND
    })
}

export const httpRequestTimeout = (ctx: Context, data?: any) => {
    httpResponse(ctx, {
        data,
        status: 'REQUEST_TIMEOUT',
        statusCode: STATUS_CODE.REQUEST_TIMEOUT
    })
}

export const httpInternalServerError = (ctx: Context, error: any, data?: any) => {
    httpResponse(ctx, {
        data,
        status: 'INTERNAL_SERVER_ERROR',
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
        error
    })
}

