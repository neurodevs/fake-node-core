export let callsToLog: { message: any; optionalParams: any[] }[] = []

export function resetCallsToLog() {
    callsToLog = []
}

export default function fakeLog(message: any, ...optionalParams: any[]) {
    callsToLog.push({ message, optionalParams })
}
