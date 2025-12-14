import { ChildProcess } from 'child_process'

export let callsToExec: {
    command: string
    options?: Record<string, unknown>
}[] = []

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

export default async function fakeExec(
    command: string,
    options?: Record<string, unknown>
) {
    callsToExec.push({ command, options })
    return fakeExecResult[command] ?? defaultExecResult
}
