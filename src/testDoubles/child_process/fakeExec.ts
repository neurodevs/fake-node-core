import { ChildProcess } from 'child_process'

export let callsToExec: string[] = []

export function resetCallsToExec() {
    callsToExec = []
}

export const defaultExecResult = { stdout: '', stderr: '' }

export let fakeExecResult: Record<string, ChildProcess> = {}

export function setFakeExecResult(command: string, result: ChildProcess) {
    fakeExecResult[command] = result
}

export let resetFakeExecResults = () => {
    fakeExecResult = {}
}

export default async function fakeExec(command: string) {
    callsToExec.push(command)
    return fakeExecResult[command] ?? defaultExecResult
}
