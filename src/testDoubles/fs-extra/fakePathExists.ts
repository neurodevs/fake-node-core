export let callsToPathExists: string[] = []

export function resetCallsToPathExists() {
    callsToPathExists = []
}

export let pathShouldExist: Record<string, boolean> = {}

export function setPathShouldExist(path: string, shouldExist: boolean) {
    pathShouldExist[path] = shouldExist
}

export default async function fakePathExists(path: string) {
    callsToPathExists.push(path)
    return pathShouldExist[path]
}
