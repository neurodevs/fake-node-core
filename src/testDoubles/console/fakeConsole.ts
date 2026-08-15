import fakeError, { resetCallsToError } from './fakeError.js'
import fakeInfo, { resetCallsToInfo } from './fakeInfo.js'
import fakeLog, { resetCallsToLog } from './fakeLog.js'
import fakeWarn, { resetCallsToWarn } from './fakeWarn.js'

export function resetFakeConsole() {
    resetCallsToLog()
    resetCallsToInfo()
    resetCallsToWarn()
    resetCallsToError()
}

const fakeConsole = {
    ...console,
    log: fakeLog,
    info: fakeInfo,
    warn: fakeWarn,
    error: fakeError,
}

export default fakeConsole
