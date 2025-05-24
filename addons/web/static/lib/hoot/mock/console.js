/** @odoo-module */

import { MockEventTarget } from "../hoot_utils";
<<<<<<< HEAD
=======
import { logger } from "../core/logger";
>>>>>>> upstream/18.0

//-----------------------------------------------------------------------------
// Global
//-----------------------------------------------------------------------------

const {
    console,
<<<<<<< HEAD
    Object: { entries: $entries },
=======
    Object: { keys: $keys },
>>>>>>> upstream/18.0
} = globalThis;

//-----------------------------------------------------------------------------
// Internal
//-----------------------------------------------------------------------------

const DISPATCHING_METHODS = ["error", "trace", "warn"];

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

export class MockConsole extends MockEventTarget {
    static {
<<<<<<< HEAD
        for (const [name, value] of $entries(console)) {
            if (DISPATCHING_METHODS.includes(name)) {
                this.prototype[name] = function (...args) {
                    this.dispatchEvent(new CustomEvent(name, { detail: args }));
                    return value.apply(this, arguments);
                };
            } else {
                this.prototype[name] = value;
=======
        for (const fnName of $keys(console)) {
            if (DISPATCHING_METHODS.includes(fnName)) {
                const fn = logger[fnName];
                this.prototype[fnName] = function (...args) {
                    this.dispatchEvent(new CustomEvent(fnName, { detail: args }));
                    return fn.apply(this, arguments);
                };
            } else {
                this.prototype[fnName] = console[fnName];
>>>>>>> upstream/18.0
            }
        }
    }
}
