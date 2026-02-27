import generateId from '@neurodevs/generate-id'

export let callsToReadFile: {
    path: string
    options?: Record<string, unknown>
}[] = []

export function resetCallsToReadFile() {
    callsToReadFile = []
}

export const defaultFakeReadFileResult = generateId()

export let fakeReadFileResult: Record<string, string> = {}

export function setFakeReadFileResult(path: string, result: string) {
    fakeReadFileResult[path] = result
}

export let fakeReadFileThrowsFor: string[] = []

export function setFakeReadFileThrowsFor(path: string) {
    fakeReadFileThrowsFor.push(path)
}

export function resetFakeReadFileThrowsFor() {
    fakeReadFileThrowsFor = []
}

export default async function fakeReadFile(
    path: string,
    options?: Record<string, unknown>
) {
    callsToReadFile.push({ path, options })
    if (fakeReadFileThrowsFor.includes(path)) {
        throw new Error(`Fake readFile error for path: ${path}!`)
    }
    return fakeReadFileResult[path] ?? defaultFakeReadFileResult
}
