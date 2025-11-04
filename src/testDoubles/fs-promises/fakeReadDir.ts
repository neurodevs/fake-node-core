import { ObjectEncodingOptions } from 'fs'

export let callsToReadDir: { path: string; options?: ReadDirOptions }[] = []

export function resetCallsToReadDir() {
    callsToReadDir = []
}

export default async function fakeReadDir(
    path: string,
    options?: ReadDirOptions
) {
    callsToReadDir.push({ path, options })
}

export type ReadDirOptions =
    | (ObjectEncodingOptions & {
          withFileTypes?: false | undefined
          recursive?: boolean | undefined
      })
    | BufferEncoding
    | null
