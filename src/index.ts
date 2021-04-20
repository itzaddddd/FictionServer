import { App } from './app'

const main = async (): Promise<void> => {
    const application = new App()
    await application.listen()
}
main()