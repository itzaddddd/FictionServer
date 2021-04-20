import * as tf from '@tensorflow/tfjs-node'
import { IPredict } from '../interfaces/input.interface'

const MODEL_PATH = 'file://src/tensorflow/model.json'

export const testFiction = async (): Promise<string> => {
    return 'Test Fiction Gene API'
}
export const predictFiction = async (request: IPredict): Promise<any> => {
    const model = await tf.loadLayersModel(MODEL_PATH)
    const inputValue = request.input
    const input = tf.tensor1d([inputValue])
    const predict = model.predict(input) as tf.Tensor
    const value = predict.dataSync()[0]
    return value
}