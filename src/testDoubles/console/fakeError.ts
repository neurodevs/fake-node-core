export let callsToError: { message: any; optionalParams: any[] }[] = []

export function resetCallsToError() {
    callsToError = []
}

export default function fakeError(message: any, ...optionalParams: any[]) {
    callsToError.push({ message, optionalParams })
}
