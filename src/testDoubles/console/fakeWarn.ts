export let callsToWarn: { message: any; optionalParams: any[] }[] = []

export function resetCallsToWarn() {
    callsToWarn = []
}

export default function fakeWarn(message: any, ...optionalParams: any[]) {
    callsToWarn.push({ message, optionalParams })
}
