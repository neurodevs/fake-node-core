import { generateId } from '@sprucelabs/test-utils'

export let callsToReadFile: {
    path: string
    options?: Record<string, unknown>
}[] = []

export function resetCallsToReadFile() {
    callsToReadFile = []
}

export let fakeReadFileResult = generateId()

export function setFakeReadFileResult(result: string) {
    fakeReadFileResult = result
}

export default async function fakeReadFile(
    path: string,
    options?: Record<string, unknown>
) {
    callsToReadFile.push({ path, options })
    return fakeReadFileResult
}
