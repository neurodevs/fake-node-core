export let callsToWriteFile: {
    file: string
    data: string
    options?: Record<string, unknown>
}[] = []

export function resetCallsToWriteFile() {
    callsToWriteFile = []
}

export default async function fakeWriteFile(
    file: string,
    data: string,
    options?: Record<string, unknown>
) {
    callsToWriteFile.push({ file, data, options })
}
