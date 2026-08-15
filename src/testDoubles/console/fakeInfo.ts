export let callsToInfo: { message: any; optionalParams: any[] }[] = []

export function resetCallsToInfo() {
    callsToInfo = []
}

export default function fakeInfo(message: any, ...optionalParams: any[]) {
    callsToInfo.push({ message, optionalParams })
}
