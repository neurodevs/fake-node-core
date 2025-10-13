export let callsToChdir: string[] = []

export function resetCallsToChdir() {
    callsToChdir = []
}

export default function fakeChdir(path: string) {
    callsToChdir.push(path)
}
