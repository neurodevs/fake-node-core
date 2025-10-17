import { ChildProcess } from 'child_process'

export let callsToExec: string[] = []

export function resetCallsToExec() {
    callsToExec = []
}

export let fakeExecResult: Record<string, ChildProcess> = {}

export function setFakeExecResult(command: string, result: ChildProcess) {
    fakeExecResult[command] = result
}

export default async function fakeExec(command: string) {
    callsToExec.push(command)
    return fakeExecResult[command]
}
