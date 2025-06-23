/** @odoo-module */

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { getColorHex } from "../../hoot-dom/hoot_dom_utils";
>>>>>>> upstream/18.0
=======
import { getColorHex } from "../../hoot-dom/hoot_dom_utils";
>>>>>>> upstream/18.0
=======
import { getColorHex } from "../../hoot-dom/hoot_dom_utils";
>>>>>>> upstream/18.0
import { stringify } from "../hoot_utils";
import { urlParams } from "./url";

//-----------------------------------------------------------------------------
// Global
//-----------------------------------------------------------------------------

const {
    console: {
        debug: $debug,
        dir: $dir,
        error: $error,
        groupCollapsed: $groupCollapsed,
        groupEnd: $groupEnd,
        log: $log,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
=======
        table: $table,
>>>>>>> upstream/18.0
        trace: $trace,
        warn: $warn,
    },
} = globalThis;

//-----------------------------------------------------------------------------
// Internal
//-----------------------------------------------------------------------------

/**
 * @param {any[]} args
 * @param {string} [prefix]
 * @param {string} [prefixColor]
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const styledArguments = (args, prefix, prefixColor) => {
    const fullPrefix = `%c[${prefix || "HOOT"}]%c`;
    const styles = [`color:${prefixColor || "#ff0080"};font-weight:bold`, ""];
    let firstArg = args.shift() ?? "";
    if (typeof firstArg === "function") {
        firstArg = firstArg();
    }
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
function styledArguments(args, prefix, prefixColor) {
    const fullPrefix = `%c[${prefix || DEFAULT_PREFIX[0]}]%c`;
    const styles = [`color:${prefixColor || DEFAULT_PREFIX[1]};font-weight:bold`, ""];
    const firstArg = args.shift() ?? "";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    if (typeof firstArg === "string") {
        args.unshift(`${fullPrefix} ${firstArg}`, ...styles);
    } else {
        args.unshift(fullPrefix, ...styles, firstArg);
    }
    return args;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0

/**
 * @param {any[]} args
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const unstyledArguments = (args) => {
    const prefix = `[HOOT]`;
=======
function unstyledArguments(args) {
    const prefix = `[${DEFAULT_PREFIX[0]}]`;
>>>>>>> upstream/18.0
=======
function unstyledArguments(args) {
    const prefix = `[${DEFAULT_PREFIX[0]}]`;
>>>>>>> upstream/18.0
=======
function unstyledArguments(args) {
    const prefix = `[${DEFAULT_PREFIX[0]}]`;
>>>>>>> upstream/18.0
    const firstArg = args.shift() ?? "";
    if (typeof firstArg === "string") {
        args.unshift(`${prefix} ${firstArg}`);
    } else {
        args.unshift(prefix, firstArg);
    }
    return [args.join(" ")];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
const DEBUG_PREFIX = ["DEBUG", "#ffb000"];
const ERROR_PREFIX = ["ERROR", "#9f1239"];
const WARNING_PREFIX = ["WARNING", "#f59e0b"];
>>>>>>> upstream/18.0
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
}

const DEBUG_PREFIX = ["DEBUG", getColorHex("purple")];
const DEFAULT_PREFIX = ["HOOT", getColorHex("primary")];
const ERROR_PREFIX = ["ERROR", getColorHex("rose")];
const WARNING_PREFIX = ["WARNING", getColorHex("amber")];
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
let nextNetworkLogId = 1;

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * @param {string} prefix
 * @param {string} title
 */
export function makeNetworkLogger(prefix, title) {
    const id = nextNetworkLogId++;
    return {
        /**
         * Request logger: blue-ish.
         * @param {() => any} getData
         */
        async logRequest(getData) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (logger.level < LOG_LEVELS.debug) {
=======
            if (!logger.allows("debug")) {
>>>>>>> upstream/18.0
=======
            if (!logger.allows("debug")) {
>>>>>>> upstream/18.0
=======
            if (!logger.allows("debug")) {
>>>>>>> upstream/18.0
                return;
            }
            const color = `color: #66e`;
            const styles = [`${color}; font-weight: bold;`, color];
            $groupCollapsed(`-> %c${prefix}#${id}%c<${title}>`, ...styles, await getData());
            $trace("request trace");
            $groupEnd();
        },
        /**
         * Response logger: orange.
         * @param {() => any} getData
         */
        async logResponse(getData) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (logger.level < LOG_LEVELS.debug) {
=======
            if (!logger.allows("debug")) {
>>>>>>> upstream/18.0
=======
            if (!logger.allows("debug")) {
>>>>>>> upstream/18.0
=======
            if (!logger.allows("debug")) {
>>>>>>> upstream/18.0
                return;
            }
            const color = `color: #f80`;
            const styles = [`${color}; font-weight: bold;`, color];
            $log(`<- %c${prefix}#${id}%c<${title}>`, ...styles, await getData());
        },
    };
}

export const LOG_LEVELS = {
    runner: 0,
    suites: 1,
    tests: 2,
    debug: 3,
};

export const logger = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    level: urlParams.loglevel ?? LOG_LEVELS.runner,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    suppressed: "",
>>>>>>> upstream/18.0
=======
    /** @private */
    currentLevel: urlParams.loglevel ?? LOG_LEVELS.runner,
    suppressed: "",
>>>>>>> upstream/18.0
=======
    /** @private */
    currentLevel: urlParams.loglevel ?? LOG_LEVELS.runner,
    suppressed: "",
>>>>>>> upstream/18.0
=======
    /** @private */
    currentLevel: urlParams.loglevel ?? LOG_LEVELS.runner,
    suppressed: "",
>>>>>>> upstream/18.0

    // Standard console methods

    /**
     * @param {...any} args
     */
    debug(...args) {
        $debug(...styledArguments(args));
    },
    /**
     * @param {...any} args
     */
    error(...args) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        console.error(...styledArguments(args));
    },
    /**
     * @param {...any} args
     */
    groupCollapsed(...args) {
        $groupCollapsed(...styledArguments(args));
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        if (logger.suppressed) {
            $groupCollapsed(...styledArguments([logger.suppressed], ...ERROR_PREFIX));
            $trace(...args);
            $groupEnd();
        } else {
            $trace(...styledArguments(args, ...ERROR_PREFIX));
        }
    },
    /**
     * @param {any} arg
     * @param {() => any} callback
     */
    group(title, callback) {
        $groupCollapsed(...styledArguments([title]));
        callback();
        $groupEnd();
    },
    /**
     * @param  {...any} args
     */
    table(...args) {
        $table(...args);
    },
    /**
     * @param  {...any} args
     */
    trace(...args) {
        $trace(...args);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    },
    /**
     * @param {...any} args
     */
    warn(...args) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        console.warn(...styledArguments(args));
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        if (logger.suppressed) {
            $groupCollapsed(...styledArguments([logger.suppressed], ...WARNING_PREFIX));
            $trace(...args);
            $groupEnd();
        } else {
            $warn(...styledArguments(args));
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    },

    // Level-specific methods

    /**
     * @param {...any} args
     */
    logDebug(...args) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if (logger.level < LOG_LEVELS.debug) {
            return;
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        $debug(...styledArguments(args, "DEBUG", "#ffb000"));
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
=======
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
>>>>>>> upstream/18.0
    },
    /**
     * @param {import("./test").Test} test
     */
    logTest(test) {
        if (logger.level < LOG_LEVELS.tests) {
            return;
        }
        const { fullName, lastResults } = test;
        $log(
            ...styledArguments([
                `Test ${stringify(fullName)} passed (assertions:`,
                lastResults.counts.assertion || 0,
                `/ time:`,
                lastResults.duration,
                `ms)`,
            ])
        );
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        if (!logger.allows("debug")) {
            return;
        }
        $debug(...styledArguments(args, ...DEBUG_PREFIX));
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    },
    /**
     * @param {import("./suite").Suite} suite
     */
    logSuite(suite) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if (logger.level < LOG_LEVELS.suites) {
=======
        if (!logger.allows("suites")) {
>>>>>>> upstream/18.0
=======
        if (!logger.allows("suites")) {
>>>>>>> upstream/18.0
=======
        if (!logger.allows("suites")) {
>>>>>>> upstream/18.0
            return;
        }
        const args = [`${stringify(suite.fullName)} ended`];
        const withArgs = [];
        if (suite.reporting.passed) {
            withArgs.push("passed:", suite.reporting.passed, "/");
        }
        if (suite.reporting.failed) {
            withArgs.push("failed:", suite.reporting.failed, "/");
        }
        if (suite.reporting.skipped) {
            withArgs.push("skipped:", suite.reporting.skipped, "/");
        }
        if (withArgs.length) {
            args.push(
                `(${withArgs.shift()}`,
                ...withArgs,
                "time:",
                suite.jobs.reduce((acc, job) => acc + (job.duration || 0), 0),
                "ms)"
            );
        }
        $log(...styledArguments(args));
    },
    /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
     * @param {...any} args
     */
    logRun(...args) {
        if (logger.level < LOG_LEVELS.runner) {
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
     * @param {import("./test").Test} test
     */
    logTest(test) {
        if (!logger.allows("tests")) {
            return;
        }
        const { fullName, lastResults } = test;
        $log(
            ...styledArguments([
                `Test ${stringify(fullName)} passed (assertions:`,
                lastResults.counts.assertion || 0,
                `/ time:`,
                lastResults.duration,
                `ms)`,
            ])
        );
    },
    /**
     * @param {[label: string, color: string]} prefix
     * @param {...any} args
     */
    logTestEvent(prefix, ...args) {
        $log(...styledArguments(args, ...prefix));
    },
    /**
     * @param {...any} args
     */
    logRun(...args) {
        if (!logger.allows("runner")) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            return;
        }
        $log(...styledArguments(args));
    },
    /**
     * @param {...any} args
     */
    logGlobal(...args) {
        $dir(...unstyledArguments(args));
    },
    /**
     * @param {...any} args
     */
    logGlobalError(...args) {
        $error(...styledArguments(args));
    },
    /**
     * @param {...any} args
     */
    logGlobalWarning(...args) {
        $warn(...styledArguments(args));
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

    // Other methods

    /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
     * @param {string} reason
     */
    suppressIssues(reason) {
        const restore = () => {
            logger.suppressed = "";
        };
        logger.suppressed = reason || "(suppressed)";
        return restore;
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
     * @param {keyof typeof LOG_LEVELS} level
     */
    allows(level) {
        return logger.currentLevel >= LOG_LEVELS[level];
    },
    /**
     * @param {keyof typeof LOG_LEVELS} level
     */
    setLevel(level) {
        logger.currentLevel = LOG_LEVELS[level];
    },
    /**
     * @param {string} reason
     */
    suppressIssues(reason) {
        logger.suppressed = reason || "(suppressed)";
        return function restore() {
            logger.suppressed = "";
        };
    },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
};
