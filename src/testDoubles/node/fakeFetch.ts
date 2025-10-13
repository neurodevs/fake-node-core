export let callsToFetch: { input: string; init: RequestInit }[] = []

export function resetCallsToFetch() {
    callsToFetch = []
}

export let fakeFetchResponse: Record<string, Response> = {}

export function setFakeFetchResponse(path: string, response: Response) {
    fakeFetchResponse[path] = response
}

export default async function fakeFetch(input: string, init: RequestInit) {
    callsToFetch.push({ input, init })
    return fakeFetchResponse[input]
}
