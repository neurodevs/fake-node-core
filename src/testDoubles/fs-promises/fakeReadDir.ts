import { ObjectEncodingOptions } from 'fs'
import type { Dirent } from 'fs'
import generateId from '@neurodevs/generate-id'

export let callsToReadDir: { path: string; options?: ReadDirOptions }[] = []

export function resetCallsToReadDir() {
    callsToReadDir = []
}

export const defaultParentPath = generateId()
export const defaultDirName = generateId()
export const defaultFileName = generateId()

export const stringReadDirResult = [defaultDirName, defaultFileName]

export const direntReadDirResult: Dirent[] = [
    {
        name: defaultDirName,
        parentPath: defaultParentPath,
        isDirectory: () => true,
        isFile: () => false,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isSymbolicLink: () => false,
        isFIFO: () => false,
        isSocket: () => false,
    },
    {
        name: defaultFileName,
        parentPath: defaultParentPath,
        isDirectory: () => false,
        isFile: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isSymbolicLink: () => false,
        isFIFO: () => false,
        isSocket: () => false,
    },
]

export let fakeReadDirResult: Record<string, string[] | Dirent[]> = {}

export function setFakeReadDirResult(
    path: string,
    result: string[] | Dirent[]
) {
    fakeReadDirResult[path] = result
}

export default async function fakeReadDir(
    path: string,
    options?: ReadDirOptions
) {
    callsToReadDir.push({ path, options })

    if (options?.withFileTypes) {
        return fakeReadDirResult[path] ?? direntReadDirResult
    } else {
        return fakeReadDirResult[path] ?? stringReadDirResult
    }
}

export type ReadDirOptions = ObjectEncodingOptions & {
    withFileTypes?: boolean | undefined
    recursive?: boolean | undefined
}
