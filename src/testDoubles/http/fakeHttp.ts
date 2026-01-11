import { RequestListener } from 'http'
import FakeHttpServer from './FakeHttpServer.js'

export let callsToHttpCreateServer: (RequestListener | undefined)[] = []

export let callsToHttpListen: number[] = []

export function resetFakeHttp() {
    callsToHttpCreateServer = []
    callsToHttpListen = []

    FakeHttpServer.resetTestDouble()
}

const fakeHttp = {
    createServer: (requestListener?: RequestListener) => {
        callsToHttpCreateServer.push(requestListener)
        return new FakeHttpServer(requestListener)
    },
}

export default fakeHttp
