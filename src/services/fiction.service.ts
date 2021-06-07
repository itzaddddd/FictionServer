import { IPredict } from '../interfaces/input.interface'
import { model_url } from '../constants/constants'
import axios from 'axios'

export const testFiction = async (): Promise<string> => {
    return 'Test Fiction Gene API'
}
export const predictFiction = async (request: IPredict): Promise<any> => {
    const config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }
    const response = await axios({
        method: 'POST', 
        url: model_url,
        data: request,
        headers: config.headers
    })
    const { data } = response
    return data
}