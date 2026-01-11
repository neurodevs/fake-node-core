import { RequestListener } from 'http'

export default class FakeHttpServer {
    public static callsToConstructor: (RequestListener | undefined)[] = []
    public static callsToListen: number[] = []
    public static callsToClose: (() => void | undefined)[] = []

    public constructor(requestListener?: RequestListener) {
        FakeHttpServer.callsToConstructor.push(requestListener)
    }

    public listen(port: number) {
        FakeHttpServer.callsToListen.push(port)
    }

    public close(callback?: () => void) {
        FakeHttpServer.callsToClose.push(callback ?? (() => {}))

        if (callback) {
            callback()
        }
    }

    public static resetTestDouble() {
        FakeHttpServer.callsToConstructor = []
        FakeHttpServer.callsToListen = []
        FakeHttpServer.callsToClose = []
    }
}
