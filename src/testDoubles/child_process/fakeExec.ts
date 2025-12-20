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

export const execThrowsFor = new Set<string>()

export function setExecThrowsFor(command: string) {
    execThrowsFor.add(command)
}

export default async function fakeExec(
    command: string,
    options?: Record<string, unknown>
) {
    callsToExec.push({ command, options })

    if (execThrowsFor.has(command)) {
        throw new Error(`Fake exec error for command: ${command}`)
    }

    return fakeExecResult[command] ?? defaultExecResult
}
