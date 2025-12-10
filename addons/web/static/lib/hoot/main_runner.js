/** @odoo-module */

//-----------------------------------------------------------------------------
// Internal
//-----------------------------------------------------------------------------

/** @type {import("./core/runner").Runner} */
let runner;

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

<<<<<<< HEAD
=======
/**
 * @param {string} funcName
 */
export function ensureTest(funcName) {
    if (!runner?.getCurrent().test) {
        throw new Error(`Cannot call '${funcName}' from outside a test`);
    }
}

>>>>>>> upstream/18.0
export function getRunner() {
    return runner;
}

export function setRunner(mainRunner) {
    runner = mainRunner;
}
