/** @odoo-module */

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { queryAll } from "@odoo/hoot-dom";
import { reactive, useEffect, useExternalListener } from "@odoo/owl";
import { isNode } from "@web/../lib/hoot-dom/helpers/dom";
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
import { isIterable, toSelector } from "@web/../lib/hoot-dom/hoot_dom_utils";
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
import {
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
import { on, queryAll } from "@odoo/hoot-dom";
import { reactive, useComponent, useEffect, useExternalListener } from "@odoo/owl";
import { isNode } from "@web/../lib/hoot-dom/helpers/dom";
import {
    isInstanceOf,
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
    isIterable,
    parseRegExp,
    R_WHITE_SPACE,
    toSelector,
} from "@web/../lib/hoot-dom/hoot_dom_utils";
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
import { DiffMatchPatch } from "./lib/diff_match_patch";
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
import { getRunner } from "./main_runner";

/**
 * @typedef {ArgumentPrimitive | `${ArgumentPrimitive}[]` | null} ArgumentType
 *
 * @typedef {"any"
 *  | "bigint"
 *  | "boolean"
 *  | "date"
 *  | "error"
 *  | "function"
 *  | "integer"
 *  | "node"
 *  | "null"
 *  | "number"
 *  | "object"
 *  | "regex"
 *  | "string"
 *  | "symbol"
 *  | "url"
 *  | "undefined"} ArgumentPrimitive
 *
 * @typedef {{
 *  ignoreOrder?: boolean;
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
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
=======
 *  partial?: boolean;
>>>>>>> upstream/18.0
 * }} DeepEqualOptions
 *
 * @typedef {[string, ArgumentType]} Label
 *
 * @typedef {"expected" | "group" | "received" | "technical"} MarkupType
 *
 * @typedef {string | RegExp | { new(): any }} Matcher
 *
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
=======
 * @typedef {QueryRegExp | QueryExactString | QueryPartialString} QueryPart
 *
>>>>>>> upstream/18.0
 * @typedef {{
 *  assertions: number;
 *  failed: number;
 *  passed: number;
 *  skipped: number;
 *  suites: number;
 *  tests: number;
 *  todo: number;
 * }} Reporting
 *
 * @typedef {import("./core/runner").Runner} Runner
 */

/**
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
 * @template {unknown[]} T
 * @typedef {T extends [any, ...infer U] ? U : never} DropFirst
 */

/**
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
 * @template T
 * @typedef {T | Iterable<T>} MaybeIterable
 */

/**
 * @template T
 * @typedef {T | PromiseLike<T>} MaybePromise
 */

//-----------------------------------------------------------------------------
// Global
//-----------------------------------------------------------------------------

const {
    Array: { from: $from, isArray: $isArray },
    BigInt,
    Boolean,
    clearTimeout,
    console: { debug: $debug },
    Date,
    Error,
    ErrorEvent,
    JSON: { parse: $parse, stringify: $stringify },
    localStorage,
    Map,
    Math: { floor: $floor, max: $max, min: $min },
    Number: { isInteger: $isInteger, isNaN: $isNaN, parseFloat: $parseFloat },
    navigator: { clipboard: $clipboard },
    Object: {
        assign: $assign,
        create: $create,
        defineProperty: $defineProperty,
        entries: $entries,
        fromEntries: $fromEntries,
        getOwnPropertyDescriptors: $getOwnPropertyDescriptors,
        getPrototypeOf: $getPrototypeOf,
        keys: $keys,
    },
    Promise,
    PromiseRejectionEvent,
    Reflect: { ownKeys: $ownKeys },
    RegExp,
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
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
=======
    requestAnimationFrame,
>>>>>>> upstream/18.0
    Set,
    setTimeout,
    String,
    Symbol,
    TypeError,
    URL,
    URLSearchParams,
<<<<<<< HEAD
=======
    WeakMap,
>>>>>>> upstream/18.0
    WeakSet,
    window,
} = globalThis;
/** @type {Storage["getItem"]} */
const $getItem = localStorage.getItem.bind(localStorage);
/** @type {Clipboard["readText"]} */
const $readText = $clipboard?.readText.bind($clipboard);
/** @type {Storage["setItem"]} */
const $setItem = localStorage.setItem.bind(localStorage);
/** @type {Storage["removeItem"]} */
const $removeItem = localStorage.removeItem.bind(localStorage);
/** @type {Clipboard["writeText"]} */
const $writeText = $clipboard?.writeText.bind($clipboard);

//-----------------------------------------------------------------------------
// Internal
//-----------------------------------------------------------------------------

/**
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
 * Returns the constructor of the given value, and if it is "Object": tries to
 * infer the actual constructor name from the string representation of the object.
 *
 * This is needed for cursed JavaScript objects such as "Arguments", which is an
 * array-like object without a proper constructor.
 *
 * @param {any} value
 */
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
const getConstructor = (value) => {
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
=======
function getConstructor(value) {
>>>>>>> upstream/18.0
    const { constructor } = value;
    if (constructor !== Object) {
        return constructor || { name: null };
    }
    const str = value.toString();
    const match = str.match(R_OBJECT);
    if (!match || match[1] === "Object") {
        return constructor;
    }

    // Custom constructor
    const className = match[1];
    if (!objectConstructors.has(className)) {
        objectConstructors.set(
            className,
            class {
                static name = className;
                constructor(...values) {
                    $assign(this, ...values);
                }
            }
        );
    }
    return objectConstructors.get(className);
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
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
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
 * @param {(...args: any[]) => any} fn
 */
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
const getFunctionString = (fn) => {
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
=======
 * @param {(...args: any[]) => any} fn
 */
function getFunctionString(fn) {
>>>>>>> upstream/18.0
    if (R_CLASS.test(fn.name)) {
        return `${fn.name ? `class ${fn.name}` : "anonymous class"} { ${ELLIPSIS} }`;
    }
    const strFn = fn.toString();
    const prefix = R_ASYNC_FUNCTION.test(strFn) ? "async " : "";

    if (R_NAMED_FUNCTION.test(strFn)) {
        return `${
            fn.name ? `${prefix}function ${fn.name}` : `anonymous ${prefix}function`
        }() { ${ELLIPSIS} }`;
    }

    const args = fn.length ? "...args" : "";
    return `${prefix}(${args}) => { ${ELLIPSIS} }`;
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
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
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
 * @param {unknown} value
 */
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
const getGenericSerializer = (value) => {
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
>>>>>>> upstream/18.0
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (value instanceof constructor) {
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
=======
function getGenericSerializer(value) {
    for (const [constructor, serialize] of GENERIC_SERIALIZERS) {
        if (isInstanceOf(value, constructor)) {
>>>>>>> upstream/18.0
            return serialize;
        }
    }
    return null;
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
};

const makeObjectCache = () => {
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
=======
}

function makeObjectCache() {
>>>>>>> upstream/18.0
    const cache = new Set();
    return {
        add: (...values) => values.forEach((value) => cache.add(value)),
        has: (...values) => values.every((value) => cache.has(value)),
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};

/**
 * @template {(...args: any[]) => T} T
 * @param {T} instanceGetter
 * @returns {T}
 */
const memoize = (instanceGetter) => {
    let called = false;
    let value;
    return function memoized(...args) {
        if (!called) {
            called = true;
            value = instanceGetter(...args);
        }
        return value;
    };
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
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
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
}

function makeObjectCache() {
    const cache = new WeakSet();
    return {
        add: (...values) => {
            for (const value of values) {
                cache.add(value);
            }
        },
        has: (...values) => {
            for (const value of values) {
                if (!cache.has(value)) {
                    return false;
                }
            }
            return true;
        },
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
}

/**
 * @template T
 * @param {T | (() => T)} value
 * @returns {T}
 */
function resolve(value) {
    if (typeof value === "function") {
        return value();
    } else {
        return value;
    }
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

/**
 * Useful to deal with symbols as primitives
 * @param {unknown} a
 * @param {unknown} b
 */
function stringSort(a, b) {
    const strA = String(a).toLowerCase();
    const strB = String(b).toLowerCase();
    return strA > strB ? 1 : strA < strB ? -1 : 0;
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

/**
 * @param {string} value
 * @param {number} [length=MAX_HUMAN_READABLE_SIZE]
 */
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
const truncate = (value, length = MAX_HUMAN_READABLE_SIZE) => {
    const strValue = String(value);
    return strValue.length <= length ? strValue : strValue.slice(0, length) + ELLIPSIS;
};
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
function truncate(value, length = MAX_HUMAN_READABLE_SIZE) {
    const strValue = String(value);
    return strValue.length <= length ? strValue : strValue.slice(0, length) + ELLIPSIS;
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

/**
 * @template T
 * @param {T} value
 * @param {ReturnType<makeObjectCache>} cache
 * @returns {T}
 */
function _deepCopy(value, cache) {
    if (!value) {
        return value;
    }
    if (typeof value === "function") {
        if (value.name) {
            return `<function ${value.name}>`;
        } else {
            return "<anonymous function>";
        }
    }
    if (typeof value === "object" && !Markup.isMarkup(value)) {
        if (isInstanceOf(value, String, Number, Boolean)) {
            return value;
        }
        if (isNode(value)) {
            // Nodes
            return value.cloneNode(true);
        } else if (isInstanceOf(value, Date, RegExp)) {
            // Dates & regular expressions
            return new (getConstructor(value))(value);
        } else if (isIterable(value)) {
            const isArray = $isArray(value);
            const valueArray = isArray ? value : [...value];
            // Iterables
            const values = valueArray.map((item) => _deepCopy(item, cache));
            return $isArray(value) ? values : new (getConstructor(value))(values);
        } else {
            // Other objects
            if (cache.has(value)) {
                return S_CIRCULAR;
            }
            cache.add(value);
            return $fromEntries($ownKeys(value).map((key) => [key, _deepCopy(value[key], cache)]));
        }
    }
    return value;
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

/**
 * @param {unknown} a
 * @param {unknown} b
 * @param {boolean} ignoreOrder
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
 * @param {ReturnType<makeObjectCache>} cache
 * @returns {boolean}
 */
const _deepEqual = (a, b, ignoreOrder, cache) => {
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
 * @param {boolean} partial
 * @param {ReturnType<makeObjectCache>} cache
 * @returns {boolean}
 */
function _deepEqual(a, b, ignoreOrder, partial, cache) {
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
    // Primitives
    if (strictEqual(a, b)) {
        return true;
    }
    const aType = typeof a;
    if (aType !== typeof b || !a || !b || aType !== "object") {
        return false;
    }

    // Objects
    if (cache.has(a, b)) {
        return true;
    }
    cache.add(a, b);

    // Nodes
    if (isNode(a)) {
        return isNode(b) && a.isEqualNode(b);
    }

    // Files
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (a instanceof File) {
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(a, File)) {
>>>>>>> upstream/18.0
        // Files
        return a.name === b.name && a.size === b.size && a.type === b.type;
    }

    // Generic objects
    const serialize = getGenericSerializer(a);
    if (serialize) {
        return strictEqual(serialize(a), serialize(b));
    }

    const aIsIterable = isIterable(a);
    if (aIsIterable !== isIterable(b)) {
        return false;
    }

    // Non-iterable objects
    if (!aIsIterable) {
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
        const aKeys = $ownKeys(a);
        if (aKeys.length !== $ownKeys(b).length) {
            return false;
        }
        for (const key of aKeys) {
            if (!_deepEqual(a[key], b[key], ignoreOrder, cache)) {
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
        const bKeys = $ownKeys(b);
        const diff = $ownKeys(a).length - bKeys.length;
        if (partial ? diff < 0 : diff !== 0) {
            return false;
        }
        for (const key of bKeys) {
            if (!_deepEqual(a[key], b[key], ignoreOrder, partial, cache)) {
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
                return false;
            }
        }
        return true;
    }

    // Iterable objects
    const aIsArray = $isArray(a);
    if (aIsArray !== $isArray(b)) {
        return false;
    }
    if (!aIsArray) {
        a = [...a];
    }
    b = [...b];
    if (a.length !== b.length) {
        return false;
    }

    // Unordered iterables
    if (ignoreOrder) {
        // Needs a different cache since the deepEqual calls here are not "definitive",
        // meaning that values may need to be re-evaluated later.
        const comparisonCache = makeObjectCache();
        for (let i = 0; i < a.length; i++) {
            const bi = b.findIndex((bValue) =>
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
                _deepEqual(a[i], bValue, ignoreOrder, comparisonCache)
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
=======
                _deepEqual(a[i], bValue, ignoreOrder, partial, comparisonCache)
>>>>>>> upstream/18.0
            );
            if (bi < 0) {
                return false;
            }
            b.splice(bi, 1);
        }
    } else {
        // Ordered iterables
        for (let i = 0; i < a.length; i++) {
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
            if (!_deepEqual(a[i], b[i], ignoreOrder, cache)) {
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
=======
            if (!_deepEqual(a[i], b[i], ignoreOrder, partial, cache)) {
>>>>>>> upstream/18.0
                return false;
            }
        }
    }

    return true;
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
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
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
 * @param {unknown} value
 * @param {number} length
 * @param {ReturnType<makeObjectCache>} cache
 * @returns {[string, number]}
 */
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
const _formatHumanReadable = (value, length, cache) => {
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
=======
function _formatHumanReadable(value, length, cache) {
>>>>>>> upstream/18.0
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
=======
>>>>>>> upstream/18.0
function _formatHumanReadable(value, length, cache) {
    if (!isSafe(value)) {
        return `<cannot read value of ${getConstructor(value).name}>`;
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
=======
>>>>>>> upstream/18.0
    // Primitives
    switch (typeof value) {
        case "function": {
            return getFunctionString(value);
        }
        case "number": {
            if (value << 0 === value) {
                return truncate(value);
            }
            let fixed = value.toFixed(3);
            while (fixed.endsWith("0")) {
                fixed = fixed.slice(0, -1);
            }
            return truncate(fixed);
        }
        case "string": {
            return stringify(truncate(value));
        }
    }
    if (!value || typeof value !== "object") {
        return String(value);
    }

    // Objects
    if (cache.has(value)) {
        return ELLIPSIS;
    }
    cache.add(value);

    // Generic objects
    const serialize = getGenericSerializer(value);
    if (serialize) {
        return truncate(serialize(value));
    }

    // Iterable objects
    if (isIterable(value)) {
        const values = [...value];
        if (values.length === 1 && isNode(values[0])) {
            // Special case for single-element nodes arrays
            return _formatHumanReadable(values[0], length, cache);
        }
        const constructor = getConstructor(value);
        const constructorPrefix = constructor.name === "Array" ? "" : `${constructor.name} `;
        const content = [];
        if (values.length) {
            const bitSize = $max(
                MIN_HUMAN_READABLE_SIZE,
                $floor(MAX_HUMAN_READABLE_SIZE / values.length)
            );
            for (const val of values) {
                const hVal = truncate(_formatHumanReadable(val, length, cache), bitSize);
                content.push(hVal);
                length += hVal.length;
                if (length > MAX_HUMAN_READABLE_SIZE) {
                    content.push(ELLIPSIS);
                    break;
                }
            }
        }
        return `${constructorPrefix}[${truncate(content.join(", "))}]`;
    }

    // Non-iterable objects
    const keys = $keys(value);
    const constructor = getConstructor(value);
    const constructorPrefix = constructor.name === "Object" ? "" : `${constructor.name} `;
    const content = [];
    if (constructor.name !== "Window" && keys.length) {
        const bitSize = $max(
            MIN_HUMAN_READABLE_SIZE,
            $floor(MAX_HUMAN_READABLE_SIZE / keys.length)
        );
        const descriptors = $getOwnPropertyDescriptors(value);
        for (const key of keys) {
            if (!("value" in descriptors[key])) {
                continue;
            }
            const hVal = truncate(
                _formatHumanReadable(descriptors[key].value, length, cache),
                bitSize
            );
            content.push(`${key}: ${hVal}`);
            length += hVal.length;
            if (length > MAX_HUMAN_READABLE_SIZE) {
                content.push(ELLIPSIS);
                break;
            }
        }
    }
    return `${constructorPrefix}{ ${truncate(content.join(", "))} }`;
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
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
=======
}
>>>>>>> upstream/18.0
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
 * @param {unknown} value
 * @param {number} depth
 * @param {boolean} isObjectValue
 * @param {ReturnType<makeObjectCache>} cache
 * @returns {string}
 */
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
const _formatTechnical = (value, depth, isObjectValue, cache) => {
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
=======
function _formatTechnical(value, depth, isObjectValue, cache) {
>>>>>>> upstream/18.0
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
=======
>>>>>>> upstream/18.0
function _formatTechnical(value, depth, isObjectValue, cache) {
    if (!isSafe(value)) {
        return `<cannot read value of ${getConstructor(value).name}>`;
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
=======
>>>>>>> upstream/18.0
    if (value === S_ANY || value === S_NONE) {
        // Special case: internal symbols
        return "";
    }

    // Primitives
    const baseIndent = isObjectValue ? "" : " ".repeat(depth * 2);
    switch (typeof value) {
        case "function": {
            return `${baseIndent}${getFunctionString(value)}`;
        }
        case "number": {
            return `${baseIndent}${value << 0 === value ? String(value) : value.toFixed(3)}`;
        }
        case "string": {
            return `${baseIndent}${stringify(value)}`;
        }
    }
    if (!value || typeof value !== "object") {
        return `${baseIndent}${String(value)}`;
    }

    // Objects
    if (cache.has(value)) {
        return `${baseIndent}${$isArray(value) ? `[${ELLIPSIS}]` : `{ ${ELLIPSIS} }`}`;
    }
    cache.add(value);

    const startIndent = " ".repeat((depth + 1) * 2);
    const endIndent = " ".repeat(depth * 2);
    const constructor = getConstructor(value);

    const serialize = getGenericSerializer(value);
    if (serialize) {
        return `${baseIndent}${serialize(value)}`;
    }

    // Iterable objects
    if (isIterable(value)) {
        const proto = constructor.name === "Array" ? "" : `${constructor.name} `;
        const content = [...value].map(
            (val) => `${startIndent}${_formatTechnical(val, depth + 1, true, cache)},\n`
        );
        return `${baseIndent}${proto}[${
            content.length ? `\n${content.join("")}${endIndent}` : ""
        }]`;
    }

    // Non-iterable objects
    const proto = !constructor.name || constructor.name === "Object" ? "" : `${constructor.name} `;
    const content = $ownKeys(value)
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
        .sort()
        .map(
            (key) =>
                `${startIndent}${key}: ${_formatTechnical(value[key], depth + 1, true, cache)},\n`
        );
    return `${baseIndent}${proto}{${content.length ? `\n${content.join("")}${endIndent}` : ""}}`;
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
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
=======
}

>>>>>>> upstream/18.0
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
        .sort(stringSort)
        .map(
            (key) =>
                `${startIndent}${String(key)}: ${_formatTechnical(
                    value[key],
                    depth + 1,
                    true,
                    cache
                )},\n`
        );
    return `${baseIndent}${proto}{${content.length ? `\n${content.join("")}${endIndent}` : ""}}`;
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
class QueryRegExp extends RegExp {
    /**
     * @param {string} value
     */
    matchValue(value) {
        return this.test(value);
    }
}

class QueryString extends String {
    /** @type {(a: string; b: string) => boolean} */
    compareFn;

    /**
     * @param {string} value
     * @param {boolean} exclude
     */
    constructor(value, exclude) {
        super(value);
        this.exclude = exclude;
    }

    /**
     * @param {string} value
     */
    matchValue(value) {
        return this.compareFn(this.toString(), value);
    }
}

class QueryExactString extends QueryString {
    compareFn = (a, b) => b.includes(a);
}

class QueryPartialString extends QueryString {
    compareFn = getFuzzyScore;
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
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
=======
const EMPTY_CONSTRUCTOR = { name: null };

>>>>>>> upstream/18.0
/** @type {Map<Function, (value: unknown) => string>} */
const GENERIC_SERIALIZERS = new Map([
    [BigInt, (v) => v.valueOf()],
    [Boolean, (v) => v.valueOf()],
    [Date, (v) => v.toISOString()],
    [Error, (v) => v.toString()],
    [Node, (v) => (v.nodeType === Node.ELEMENT_NODE ? `<${toSelector(v)}>` : toSelector(v))],
    [Number, (v) => v.valueOf()],
    [RegExp, (v) => v.toString()],
    [String, (v) => v.valueOf()],
    [URL, (v) => v.toString()],
    [URLSearchParams, (v) => v.toString()],
]);

const BACK_TICK = "`";
const DOUBLE_QUOTES = '"';
const SINGLE_QUOTE = "'";

const ELLIPSIS = "…";
const MAX_HUMAN_READABLE_SIZE = 80;
const MIN_HUMAN_READABLE_SIZE = 8;

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
=======
const QUERY_EXCLUDE = "-";

>>>>>>> upstream/18.0
const R_ASYNC_FUNCTION = /^\s*async/;
const R_CLASS = /^[A-Z][a-z]/;
const R_NAMED_FUNCTION = /^\s*(async\s+)?function/;
const R_INVISIBLE_CHARACTERS = /[\u00a0\u200b-\u200d\ufeff]/g;
const R_OBJECT = /^\[object ([\w-]+)\]$/;

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const dmp = new DiffMatchPatch();
const { DIFF_INSERT, DIFF_DELETE } = DiffMatchPatch;

const labelObjects = new WeakSet();
const objectConstructors = new Map();
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
const labelObjects = new WeakSet();
const objectConstructors = new Map();
/** @type {(KeyboardEventInit & { callback: (ev: KeyboardEvent) => any })[]} */
const hootKeys = [];
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
/** @type {(KeyboardEventInit & { callback: (ev: KeyboardEvent) => any })[]} */
const hootKeys = [];
const labelObjects = new WeakSet();
const objectConstructors = new Map();
/** @type {WeakMap<unknown, unknown>} */
const syncValues = new WeakMap();
>>>>>>> upstream/18.0
const windowTarget = {
    addEventListener: window.addEventListener.bind(window),
    removeEventListener: window.removeEventListener.bind(window),
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
/**
 * Global object used in {@link getFuzzyScore} when performing a lookup, to avoid
 * computing score for the same string twice.
 * @type {Record<string, number> | null}
 */
let fuzzyScoreMap = null;

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
//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @template P
 * @param {((...args: P[]) => any)[]} callbacks
 * @param {"pop" | "shift"} method
 * @param {...P} args
 */
export function consumeCallbackList(callbacks, method, ...args) {
    while (callbacks.length) {
        if (method === "shift") {
            callbacks.shift()(...args);
        } else {
            callbacks.pop()(...args);
        }
    }
}
/**
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
 * @param {string} text
 */
export async function copy(text) {
    try {
        await $writeText(text);
        $debug(`Copied to clipboard: ${stringify(text)}`);
    } catch (error) {
        console.warn("Could not copy to clipboard:", error);
    }
}

/**
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
 * @template T
 * @template {(previous: T | null) => T} F
 * @param {F} instanceGetter
 * @param {() => any} [afterCallback]
 * @returns {F}
 */
export function createJobScopedGetter(instanceGetter, afterCallback) {
    /** @type {F} */
    const getInstance = () => {
        if (runner.dry) {
            return memoized();
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
 * @param {KeyboardEvent} ev
 */
export function callHootKey(ev) {
    for (const { callback, ...params } of hootKeys) {
        if ($entries(params).every(([k, v]) => ev[k] === v)) {
            callback(ev);
            if (ev.defaultPrevented) {
                return;
            }
        }
    }
}

/**
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
 * @template T
 * @param {T} object
 * @returns {T}
 */
export function copyAndBind(object) {
    const copy = {};
    for (const [key, desc] of $entries($getOwnPropertyDescriptors(object))) {
        if (key !== "constructor" && typeof desc.value === "function") {
            desc.value = desc.value.bind(object);
        }
        $defineProperty(copy, key, desc);
    }
    return copy;
}

/**
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
 * @template {(previous: any, ...args: any[]) => any} T
 * @param {T} instanceGetter
 * @param {() => any} [afterCallback]
 * @returns {(...args: DropFirst<Parameters<T>>) => ReturnType<T>}
 */
export function createJobScopedGetter(instanceGetter, afterCallback) {
    /** @type {(...args: DropFirst<Parameters<T>>) => ReturnType<T>} */
    function getInstance(...args) {
        if (runner.dry) {
            return memoized(...args);
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
        }

        const currentJob = runner.state.currentTest || runner.suiteStack.at(-1) || runner;
        if (!instances.has(currentJob)) {
            const parentInstance = [...instances.values()].at(-1);
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
            instances.set(currentJob, instanceGetter(parentInstance));
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0
=======
            instances.set(currentJob, instanceGetter(parentInstance, ...args));
>>>>>>> upstream/18.0

            if (canCallAfter) {
                runner.after(() => {
                    instances.delete(currentJob);

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
=======
>>>>>>> upstream/18.0
            instances.set(currentJob, instanceGetter(parentInstance, ...args));

            if (canCallAfter) {
                runner.after(function instanceGetterCleanup() {
                    instances.delete(currentJob);
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
=======
>>>>>>> upstream/18.0
                    canCallAfter = false;
                    afterCallback?.();
                    canCallAfter = true;
                });
            }
        }

        return instances.get(currentJob);
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
    };

    const memoized = memoize(instanceGetter);

    /** @type {Map<Job, T>} */
    const instances = new Map();
    const runner = getRunner();
    let canCallAfter = true;
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
    }

    /** @type {(...args: DropFirst<Parameters<T>>) => ReturnType<T>} */
    function memoized(...args) {
        if (!memoizedCalled) {
            memoizedCalled = true;
            memoizedValue = instanceGetter(null, ...args);
        }
        return memoizedValue;
    }

    /** @type {Map<Job, Parameters<T>[0]>} */
    const instances = new Map();
    const runner = getRunner();
    let canCallAfter = true;
    let memoizedCalled = false;
    let memoizedValue;
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

    runner.after(() => instances.clear());

    return getInstance;
}

/**
 * @param {Reporting} [parentReporting]
 */
export function createReporting(parentReporting) {
    /**
     * @param {Partial<Reporting>} values
     */
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
    const add = (values) => {
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
=======
    function add(values) {
>>>>>>> upstream/18.0
        for (const [key, value] of $entries(values)) {
            reporting[key] += value;
        }

        parentReporting?.add(values);
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
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0

    const reporting = reactive({
        assertions: 0,
        failed: 0,
        passed: 0,
        skipped: 0,
        suites: 0,
        tests: 0,
        todo: 0,
        add,
    });

    return reporting;
}

/**
 * @template T
 * @param {T} target
 * @param {Record<keyof T, PropertyDescriptor>} descriptors
 * @returns {T}
 */
export function createMock(target, descriptors) {
    let owner = target;
    let keys = $ownKeys(owner);
    while (!keys.length) {
        owner = $getPrototypeOf(owner);
        keys = $ownKeys(owner);
    }

    // Copy original descriptors
    const mock = $assign($create(owner), target);
    for (const property of keys) {
        $defineProperty(mock, property, {
            get() {
                return target[property];
            },
            set(value) {
                target[property] = value;
            },
            configurable: true,
        });
    }

    // Apply new descriptors
    for (const [property, descriptor] of $entries(descriptors)) {
        $defineProperty(mock, property, descriptor);
    }

    return mock;
}

/**
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @template T
 * @param {T} value
 * @returns {T}
 */
export function deepCopy(value) {
    if (!value) {
        return value;
    }
    if (typeof value === "function") {
        if (value.name) {
            return `<function ${value.name}>`;
        } else {
            return "<anonymous function>";
        }
    }

    if (typeof value === "object" && !Markup.isMarkup(value)) {
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
        if (value instanceof String || value instanceof Number || value instanceof Boolean) {
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(value, String, Number, Boolean)) {
>>>>>>> upstream/18.0
            return value;
        }
        if (isNode(value)) {
            // Nodes
            return value.cloneNode(true);
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
        } else if (value instanceof Date || value instanceof RegExp) {
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
=======
        } else if (isInstanceOf(value, Date, RegExp)) {
>>>>>>> upstream/18.0
            // Dates & regular expressions
            return new (getConstructor(value))(value);
        } else if (isIterable(value)) {
            // Iterables
            const values = [...value].map(deepCopy);
            return $isArray(value) ? values : new (getConstructor(value))(values);
        } else {
            // Other objects
            return $fromEntries($ownKeys(value).map((key) => [key, deepCopy(value[key])]));
        }
    }
    return value;
}

/**
 * @template {(...args: any[]) => any} T
 * @param {T} fn
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
 * @param {number} [interval]
 */
export function batch(fn, interval) {
    /** @type {(() => ReturnType<T>)[]} */
    const currentBatch = [];
    let timeoutId = 0;

    /** @type {T} */
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const batched = (...args) => {
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
=======
    function batched(...args) {
>>>>>>> upstream/18.0
        currentBatch.push(() => fn(...args));
        if (timeoutId) {
            return;
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            flush();
        }, interval);
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    };

    const flush = () => {
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
=======
    }

    function flush() {
>>>>>>> upstream/18.0
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = 0;
        }
        consumeCallbackList(currentBatch, "shift");
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
=======
    }
>>>>>>> upstream/18.0
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
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
=======
 * @template {(...args: any[]) => any} T
 * @param {T} fn
>>>>>>> upstream/18.0
 */
export function batch(fn) {
    /** @type {Parameters<T>[]} */
    const currentBatch = [];

    /** @type {T} */
    function batched(...args) {
        currentBatch.push(args);
        throttledFlush();
    }

    function flush() {
        for (const args of currentBatch) {
            fn(...args);
        }
        currentBatch.length = 0;
    }

    const throttledFlush = throttle(flush);
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

    return [batched, flush];
}

/**
 * @template {(...args: any[]) => any} T
 * @param {T} fn
 * @param {number} delay
 * @returns {T}
 */
export function debounce(fn, delay) {
    let timeout = 0;
    const name = `${fn.name} (debounced)`;
    return {
        [name](...args) {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                timeout = 0;
                fn(args);
            }, delay);
        },
    }[name];
}

/**
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
 * @template T
 * @param {T} value
 * @returns {T}
 */
export function deepCopy(value) {
    return _deepCopy(value, makeObjectCache());
}

/**
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
 * @param {unknown} a
 * @param {unknown} b
 * @param {DeepEqualOptions} [options]
 * @returns {boolean}
 */
export function deepEqual(a, b, options) {
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
    return _deepEqual(a, b, options?.ignoreOrder, makeObjectCache());
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
=======
    return _deepEqual(a, b, !!options?.ignoreOrder, !!options?.partial, makeObjectCache());
>>>>>>> upstream/18.0
}

/**
 * @param {any[]} args
 * @param {...(ArgumentType | ArgumentType[])} argumentsDefs
 */
export function ensureArguments(args, ...argumentsDefs) {
    if (args.length > argumentsDefs.length) {
        throw new HootError(
            `expected a maximum of ${argumentsDefs.length} arguments and got ${args.length}`
        );
    }
    for (let i = 0; i < argumentsDefs.length; i++) {
        const value = args[i];
        const acceptedType = argumentsDefs[i];
        const types = isIterable(acceptedType) ? [...acceptedType] : [acceptedType];
        if (!types.some((type) => isOfType(value, type))) {
            const strTypes = types.map(formatHumanReadable);
            const last = strTypes.pop();
            throw new TypeError(
                `expected ${ordinal(i + 1)} argument to be of type ${[strTypes.join(", "), last]
                    .filter(Boolean)
                    .join(" or ")}, got ${formatHumanReadable(value)}`
            );
        }
    }
}

/**
 * @template T
 * @param {MaybeIterable<T>} value
 * @returns {T[]}
 */
export function ensureArray(value) {
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
    return isIterable(value) ? [...value] : [value];
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
    if (Array.isArray(value)) {
        return value;
    }
    if (isIterable(value)) {
        return [...value];
    }
    return [value];
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
}

/**
 * @param {unknown} value
 * @returns {Error}
 */
export function ensureError(value) {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (value instanceof Error) {
        return value;
    }
    if (value instanceof ErrorEvent) {
        return ensureError(value.error || value.message);
    }
    if (value instanceof PromiseRejectionEvent) {
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
    if (isInstanceOf(value, Error)) {
        return value;
    }
    if (isInstanceOf(value, ErrorEvent)) {
        return ensureError(value.error || value.message);
    }
    if (isInstanceOf(value, PromiseRejectionEvent)) {
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
        return ensureError(value.reason || value.message);
    }
    return new Error(String(value || "unknown error"));
}

/**
 * @param {unknown} value
 * @returns {string}
 */
export function formatHumanReadable(value) {
    return _formatHumanReadable(value, 0, makeObjectCache());
}

/**
 * @param {unknown} value
 * @returns {string}
 */
export function formatTechnical(value) {
    return _formatTechnical(value, 0, false, makeObjectCache());
}

/**
 * @param {number} value
 * @param {"ms" | "s"} [unit]
 */
export function formatTime(value, unit) {
    value ||= 0;
    if (unit) {
        if (unit === "s") {
            value /= 1_000;
        }
        if (value < 10) {
            value = $parseFloat(value.toFixed(3));
        } else if (value < 100) {
            value = $parseFloat(value.toFixed(2));
        } else if (value < 1_000) {
            value = $parseFloat(value.toFixed(1));
        } else {
            const str = String($floor(value));
            return `${str.slice(0, -3) + "," + str.slice(-3)}${unit}`;
        }
        return value + unit;
    }

    value = $floor(value / 1_000);

    const seconds = value % 60;
    value -= seconds;

    const minutes = (value / 60) % 60;
    value -= minutes * 60;

    const hours = value / 3_600;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
        seconds
    ).padStart(2, "0")}`;
}

/**
 * Based on Java's String.hashCode, a simple but not rigorously collision resistant
 * hashing function.
 *
 * @param {...string} strings
 */
export function generateHash(...strings) {
    const str = strings.join("\x1C");

    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }

    // Convert the possibly negative number hash code into an 8 character
    // hexadecimal string
    return (hash + 16 ** 8).toString(16).slice(-8);
}

/**
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
=======
>>>>>>> upstream/18.0
 * Returns the constructor of the given value, and if it is "Object": tries to
 * infer the actual constructor name from the string representation of the object.
 *
 * This is needed for cursed JavaScript objects such as "Arguments", which is an
 * array-like object without a proper constructor.
 *
 * @param {unknown} value
 */
export function getConstructor(value) {
    const { constructor } = value;
    if (constructor !== Object) {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return constructor || { name: null };
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
=======
        return constructor || EMPTY_CONSTRUCTOR;
>>>>>>> upstream/18.0
    }
    const str = value.toString();
    const match = str.match(R_OBJECT);
    if (!match || match[1] === "Object") {
        return constructor;
    }

    // Custom constructor
    const className = match[1];
    if (!objectConstructors.has(className)) {
        objectConstructors.set(
            className,
            class {
                static name = className;
                constructor(...values) {
                    $assign(this, ...values);
                }
            }
        );
    }
    return objectConstructors.get(className);
}

/**
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
=======
>>>>>>> upstream/18.0
 * This function computes a score that represent the fact that the
 * string contains the pattern, or not
 *
 * - If the score is 0, the string does not contain the letters of the pattern in
 *   the correct order.
 * - if the score is > 0, it actually contains the letters.
 *
 * Better matches will get a higher score: consecutive letters are better,
 * and a match closer to the beginning of the string is also scored higher.
 *
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @param {string} pattern (normalized)
 * @param {string} string (normalized)
 */
export function getFuzzyScore(pattern, string) {
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
 * @param {string} pattern (normalized & lower-cased)
 * @param {string} string (normalized)
 */
export function getFuzzyScore(pattern, string) {
    string = string.toLowerCase();
    if (fuzzyScoreMap && string in fuzzyScoreMap) {
        return fuzzyScoreMap[string];
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
    let totalScore = 0;
    let currentScore = 0;
    let patternIndex = 0;

    const length = string.length;
    for (let i = 0; i < length; i++) {
        if (string[i] === pattern[patternIndex]) {
            patternIndex++;
            currentScore += 100 + currentScore - i / 200;
        } else {
            currentScore = 0;
        }
        totalScore = totalScore + currentScore;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return patternIndex === pattern.length ? totalScore : 0;
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
    const score = patternIndex === pattern.length ? totalScore : 0;
    if (fuzzyScoreMap) {
        fuzzyScoreMap[string] = score;
    }
    return score;
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
}

/**
 * Returns the value associated to the given object.
 * If 'toStringValue' is set, the result will concatenate any inner object that
 * also has an associated sync value. This is typically useful for nested Blobs.
 *
 * @param {unknown} object
 * @param {boolean} toStringValue
 */
export function getSyncValue(object, toStringValue) {
    const result = syncValues.get(object);
    if (!toStringValue) {
        return result;
    }
    let textResult = "";
    if (isIterable(result)) {
        for (const part of result) {
            textResult += syncValues.has(part) ? getSyncValue(part, toStringValue) : String(part);
        }
    } else {
        textResult += String(result);
    }
    return textResult;
>>>>>>> upstream/18.0
}

/**
 * @param {unknown} value
 * @returns {ArgumentType}
 */
export function getTypeOf(value) {
    const type = typeof value;
    switch (type) {
        case "number": {
            return $isInteger(value) ? "integer" : "number";
        }
        case "object": {
            if (value === null) {
                return "null";
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (value instanceof Date) {
                return "date";
            }
            if (value instanceof Error) {
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
            if (isInstanceOf(value, Date)) {
                return "date";
            }
            if (isInstanceOf(value, Error)) {
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
                return "error";
            }
            if (isNode(value)) {
                return "node";
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (value instanceof RegExp) {
                return "regex";
            }
            if (value instanceof URL) {
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
            if (isInstanceOf(value, RegExp)) {
                return "regex";
            }
            if (isInstanceOf(value, URL)) {
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
                return "url";
            }
            if ($isArray(value)) {
                const types = [...value].map(getTypeOf);
                const arrayType = new Set(types).size === 1 ? types[0] : "any";
                if (arrayType.endsWith("[]")) {
                    return "object[]";
                } else {
                    return `${arrayType}[]`;
                }
            }
            /** fallsthrough */
        }
        default: {
            return type;
        }
    }
}

export function hasClipboard() {
    return Boolean($clipboard);
}

/**
 * @param {[string, ArgumentType]} label
 */
export function isLabel(label) {
    return labelObjects.has(label);
}

/**
 * Returns whether the given value is either `null` or `undefined`.
 *
 * @template T
 * @param {T} value
 * @returns {T extends (undefined | null) ? true : false}
 */
export function isNil(value) {
    return value === null || value === undefined;
}

/**
 * @param {unknown} value
 * @param {ArgumentType} type
 * @returns {boolean}
 */
export function isOfType(value, type) {
    if (typeof type === "string" && type.endsWith("[]")) {
        const itemType = type.slice(0, -2);
        return isIterable(value) && [...value].every((v) => isOfType(v, itemType));
    }
    switch (type) {
        case "null":
        case null:
        case undefined:
            return value === null || value === undefined;
        case "any":
            return true;
        case "date":
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            return value instanceof Date;
        case "error":
            return value instanceof Error;
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, Date);
        case "error":
            return isInstanceOf(value, Error);
>>>>>>> upstream/18.0
        case "integer":
            return $isInteger(value);
        case "node":
            return isNode(value);
        case "regex":
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            return value instanceof RegExp;
        case "url":
            return value instanceof URL;
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
=======
            return isInstanceOf(value, RegExp);
        case "url":
            return isInstanceOf(value, URL);
>>>>>>> upstream/18.0
        default:
            return typeof value === type;
    }
}

/**
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
=======
>>>>>>> upstream/18.0
 * @param {unknown} value
 */
export function isSafe(value) {
    if (value && typeof value.valueOf === "function") {
        try {
            value.valueOf();
        } catch {
            return false;
        }
    }
    return true;
}

/**
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
=======
>>>>>>> upstream/18.0
 * Returns the edit distance between 2 strings
 *
 * @param {string} a
 * @param {string} b
 * @returns {number}
 * @example
 *  levenshtein("abc", "àbc"); // => 0
 * @example
 *  levenshtein("abc", "def"); // => 3
 * @example
 *  levenshtein("abc", "adc"); // => 1
 */
export function levenshtein(a, b) {
    if (!a.length) {
        return b.length;
    }
    if (!b.length) {
        return a.length;
    }
    const dp = $from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
        let prev = dp[0];
        dp[0] = i;
        for (let j = 1; j <= b.length; j++) {
            const temp = dp[j];
            dp[j] = a[i - 1] === b[j - 1] ? prev : 1 + $min(dp[j - 1], dp[j], prev);
            prev = temp;
        }
    }
    return dp[b.length];
}

/**
 * Returns a list of items that match the given pattern, ordered by their 'score'
 * (descending). A higher score means that the match is closer (e.g. consecutive
 * letters).
 *
 * @template {{ key: string }} T
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @param {string | RegExp} pattern normalized string or RegExp
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
=======
 * @param {QueryPart[]} parsedQuery normalized string or RegExp
>>>>>>> upstream/18.0
 * @param {Iterable<T>} items
 * @param {keyof T} [property]
 * @returns {T[]}
 */
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function lookup(pattern, items, property = "key") {
    /** @type {T[]} */
    const result = [];
    if (pattern instanceof RegExp) {
        // Regex lookup
        for (const item of items) {
            if (pattern.test(item[property])) {
                result.push(item);
            }
        }
    } else {
        // Fuzzy lookup
        const scores = new Map();
        for (const item of items) {
            if (scores.has(item)) {
                result.push(item);
                continue;
            }
            const score = getFuzzyScore(pattern, item[property]);
            if (score > 0) {
                scores.set(item, score);
                result.push(item);
            }
        }
        result.sort((a, b) => scores.get(b) - scores.get(a));
    }
    return result;
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
export function lookup(parsedQuery, items, property = "key") {
    for (const queryPart of parsedQuery) {
        const isPartial = queryPart instanceof QueryPartialString;
        if (isPartial) {
            fuzzyScoreMap = $create(null);
        }
        const result = [];
        for (const item of items) {
            const pass = queryPart.matchValue(String(item[property]));
            if (queryPart.exclude ? !pass : pass) {
                result.push(item);
            }
        }
        if (isPartial) {
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
            result.sort((a, b) => fuzzyScoreMap[b[property]] - fuzzyScoreMap[a[property]]);
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
            result.sort(
                (a, b) =>
                    fuzzyScoreMap[b[property].toLowerCase()] -
                    fuzzyScoreMap[a[property].toLowerCase()]
            );
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
        }
        items = result;
    }
    fuzzyScoreMap = null;
    return items;
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
}

/**
 * @template [T=any]
 * @param {T} value
 * @param {ArgumentType} type
 */
export function makeLabel(value, type) {
    if (isLabel(value)) {
        [value, type] = value;
    } else if (type === undefined) {
        type = getTypeOf(value);
    }
    if (type !== null) {
        value = formatHumanReadable(value);
    }
    const label = [value, type];
    labelObjects.add(label);
    return label;
}

/**
 * Special label type used in test results
 * @param {string} className
 */
export function makeLabelIcon(className) {
    const label = [className, "icon"];
    labelObjects.add(label);
    return label;
}

/**
 * @template {keyof Runner} T
 * @param {T} name
 * @returns {Runner[T]}
 */
export function makeRuntimeHook(name) {
    return {
        [name](...callbacks) {
            const runner = getRunner();
            if (runner.dry) {
                return;
            }
            let valid = Boolean(runner.suiteStack.length);
            const last = callbacks.at(-1);
            if (last && typeof last === "object") {
                callbacks.pop();
                valid ||= Boolean(last.global);
            }
            if (!valid) {
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
                throw new HootError(`cannot call "${name}" callback outside of a suite`);
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
=======
                throw new HootError(`cannot call "${name}" callback outside of a suite`, {
                    level: "critical",
                });
>>>>>>> upstream/18.0
            }
            return runner[name](...callbacks);
        },
    }[name];
}

/**
 * Returns whether one of the given `matchers` matches the given `value`.
 *
 * @param {unknown} value
 * @param {...Matcher} matchers
 * @returns {boolean}
 */
export function match(value, ...matchers) {
    if (!matchers.length) {
        return !value;
    }
    return matchers.some((matcher) => {
        if (typeof matcher === "function") {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (value instanceof matcher) {
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
=======
            if (isInstanceOf(value, matcher)) {
>>>>>>> upstream/18.0
                return true;
            }
            matcher = new RegExp(matcher.name);
        }
        let strValue = String(value);
        if (R_OBJECT.test(strValue)) {
            strValue = getConstructor(value).name;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if (matcher instanceof RegExp) {
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
=======
        if (isInstanceOf(matcher, RegExp)) {
>>>>>>> upstream/18.0
            return matcher.test(strValue);
        } else {
            return strValue.includes(String(matcher));
        }
    });
}

/**
 * @param {string} string
 * @returns {string}
 */
export function normalize(string) {
    return string
        .trim()
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .toLowerCase()
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
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

/**
 * @param {unknown} number
 */
export function ordinal(number) {
    const strNumber = String(number);
    if (strNumber.at(-2) === "1") {
        return `${strNumber}th`;
    }
    switch (strNumber.at(-1)) {
        case "1": {
            return `${strNumber}st`;
        }
        case "2": {
            return `${strNumber}nd`;
        }
        case "3": {
            return `${strNumber}rd`;
        }
        default: {
            return `${strNumber}th`;
        }
    }
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
/**
 * @param {string} query
 * @returns {QueryPart[]}
 */
export function parseQuery(query) {
    const nQuery = normalize(query);
    if (!nQuery) {
        return [];
    }
    const regex = parseRegExp(nQuery, { safe: true });
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (regex instanceof RegExp) {
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
=======
    if (isInstanceOf(regex, RegExp)) {
>>>>>>> upstream/18.0
        // Do not go further: the entire query is treated as a regular expression
        return [new QueryRegExp(regex)];
    }

    /** @type {QueryPart[]} */
    const parsedQuery = [];

    // Step 1: remove "exact" parts of the string query and add them as exact string
    // matchers
    const nQueryPartial = nQuery
        .replaceAll(R_QUERY_EXACT, (...args) => {
            const { content, exclude } = args.at(-1);
            if (content) {
                parsedQuery.push(new QueryExactString(content, Boolean(exclude)));
            }
            return "";
        })
        .toLowerCase(); // Lower-cased *after* extracting the exact matches

    // Step 2: split remaining string query on white spaces and:
    //  - add all excluding parts as separate partial matchers
    //  - aggregate non-excluding parts as one partial matcher
    const partialIncludeParts = [];
    for (const part of nQueryPartial.split(R_WHITE_SPACE)) {
        if (!part) {
            continue;
        }
        if (part.startsWith(QUERY_EXCLUDE)) {
            const woExclude = part.slice(QUERY_EXCLUDE.length);
            parsedQuery.push(new QueryPartialString(woExclude, true));
        } else {
            partialIncludeParts.push(part);
        }
    }
    if (partialIncludeParts.length) {
        parsedQuery.push(new QueryPartialString(partialIncludeParts.join(" "), false));
    }

    return parsedQuery;
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
export async function paste() {
    try {
        await $readText();
    } catch (error) {
        console.warn("Could not paste from clipboard:", error);
    }
}

/**
<<<<<<< HEAD
=======
 * @param {unknown} object
 * @param {unknown} value
 */
export function setSyncValue(object, value) {
    syncValues.set(object, value);
}

/**
>>>>>>> upstream/18.0
 * @param {string} key
 */
export function storageGet(key) {
    const value = $getItem(key);
    if (value) {
        try {
            const parsed = $parse(value);
            return parsed;
        } catch (err) {
            console.warn(`Couldn't parse value for storage key "${key}":`, err);
            $removeItem(key);
        }
    }
    return null;
}

/**
 * @param {string} key
 * @param {any} value
 */
export function storageSet(key, value) {
    return $setItem(key, $stringify(value));
}

/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
export function strictEqual(a, b) {
    return $isNaN(a) ? $isNaN(b) : a === b;
}

/**
 * @param {unknown} value
 */
export function stringify(value) {
    const strValue = String(value);
    const quotes = strValue.includes(DOUBLE_QUOTES)
        ? strValue.includes(SINGLE_QUOTE)
            ? BACK_TICK
            : SINGLE_QUOTE
        : DOUBLE_QUOTES;
    return quotes + strValue + quotes;
}

/**
 * @param {string} string
 */
export function stringToNumber(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result += string.charCodeAt(i);
    }
    return $parseFloat(result);
}

/**
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
 * @template {(...args: any[]) => any} T
 * @param {T} fn
 * @returns {T}
 */
export function throttle(fn) {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    let canRun = true;
    return function throttled(...args) {
        if (!canRun) {
            return;
        }
        canRun = false;
        requestAnimationFrame(() => (canRun = true));
        return fn(...args);
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
    function unlock() {
        locked = false;
    }

    let locked = false;

    return function throttled(...args) {
        if (locked) {
            return;
        }
        locked = true;
        requestAnimationFrame(unlock);
        fn(...args);
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
    };
}

/**
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
 * @param {string} string
 */
export function title(string) {
    return string[0].toUpperCase() + string.slice(1);
}

/**
 * Replaces invisible characters in a given value with their unicode value.
 *
 * @param {unknown} value
 */
export function toExplicitString(value) {
    const strValue = String(value);
    switch (strValue) {
        case "\n": {
            return "\\n";
        }
        case "\t": {
            return "\\t";
        }
    }
    return strValue.replace(
        R_INVISIBLE_CHARACTERS,
        (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`
    );
}

/**
 * @param {{ el?: HTMLElement }} ref
 */
export function useAutofocus(ref) {
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
    let displayed = new Set();
    useEffect(() => {
        if (!ref.el) {
            return;
        }
        const nextDisplayed = new Set();
        for (const element of ref.el.querySelectorAll("[autofocus]")) {
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
=======
>>>>>>> upstream/18.0
    /**
     * @param {HTMLElement} el
     */
    function autofocus(el) {
        const nextDisplayed = new Set();
        for (const element of el.querySelectorAll("[autofocus]")) {
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
=======
>>>>>>> upstream/18.0
            if (!displayed.has(element)) {
                element.focus();
                if (["INPUT", "TEXTAREA"].includes(element.tagName)) {
                    element.selectionStart = 0;
                    element.selectionEnd = element.value;
                }
            }
            nextDisplayed.add(element);
        }
        displayed = nextDisplayed;
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
    });
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
=======
>>>>>>> upstream/18.0
    }

    let displayed = new Set();
    useEffect(autofocus, () => [ref.el]);
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
}

/**
 * @param {string[]} keyStroke
 * @param {(ev: KeyboardEvent) => any} callback
 */
export function useHootKey(keyStroke, callback) {
    const component = useComponent();
    /** @type {KeyboardEventInit} */
    const params = { callback: callback.bind(component) };
    for (const key of keyStroke) {
        switch (key) {
            case "Alt": {
                params.altKey = true;
                break;
            }
            case "Control": {
                params.ctrlKey = true;
                break;
            }
            case "Meta": {
                params.metaKey = true;
                break;
            }
            case "Shift": {
                params.shiftKey = true;
                break;
            }
            default: {
                params.key = key;
                break;
            }
        }
    }
    hootKeys.push(params);
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
}

/** @type {EventTarget["addEventListener"]} */
export function useWindowListener(type, callback, options) {
    return useExternalListener(windowTarget, type, (ev) => ev.isTrusted && callback(ev), options);
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
/**
 * @param {Document} doc
 */
export function waitForDocument(doc) {
    return new Promise(function (resolve) {
        if (doc.readyState !== "loading") {
            return resolve(true);
        }
        const removeListener = on(doc, "readystatechange", function checkReadyState() {
            if (doc.readyState !== "loading") {
                removeListener();
                resolve(true);
            }
        });
    });
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
export class Callbacks {
    /** @type {Map<string, ((...args: any[]) => MaybePromise<((...args: any[]) => void) | void>)[]>} */
    _callbacks = new Map();

    /**
     * @template P
     * @param {string} type
     * @param {MaybePromise<(...args: P[]) => MaybePromise<((...args: P[]) => void) | void>>} callback
     * @param {boolean} [once]
     */
    add(type, callback, once) {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if (callback instanceof Promise) {
            const promiseValue = callback;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            callback = () =>
                Promise.resolve(promiseValue).then((result) => {
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
=======
            callback = function () {
                return Promise.resolve(promiseValue).then((result) => {
>>>>>>> upstream/18.0
                    if (typeof result === "function") {
                        result();
                    }
                });
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
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
=======
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
            };
>>>>>>> upstream/18.0
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
        if (isInstanceOf(callback, Promise)) {
            const promiseValue = callback;
            callback = function waitForPromise() {
                return Promise.resolve(promiseValue).then(resolve);
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
        } else if (typeof callback !== "function") {
            return;
        }

        if (once) {
            // Convert callback to be automatically removed
            const originalCallback = callback;
            callback = (...args) => {
                this._callbacks.set(
                    type,
                    this._callbacks.get(type).filter((fn) => fn !== callback)
                );
                return originalCallback(...args);
            };
            $assign(callback, { original: originalCallback });
        }

        if (!this._callbacks.has(type)) {
            this._callbacks.set(type, []);
        }
        if (type.startsWith("after")) {
            this._callbacks.get(type).unshift(callback);
        } else {
            this._callbacks.get(type).push(callback);
        }
    }

    /**
     * @template T
     * @param {string} type
     * @param {T} detail
     * @param {(error: Error) => any} [onError]
     */
    async call(type, detail, onError) {
        const fns = this._callbacks.get(type);
        if (!fns?.length) {
            return;
        }

        const afterCallback = this._getAfterCallback(type);
        for (const fn of fns) {
            try {
                const result = await fn(detail);
                afterCallback(result);
            } catch (error) {
                if (typeof onError === "function") {
                    onError(error);
                } else {
                    throw error;
                }
            }
        }
    }

    /**
     * @template T
     * @param {string} type
     * @param {T} detail
     * @param {(error: Error) => any} [onError]
     */
    callSync(type, detail, onError) {
        const fns = this._callbacks.get(type);
        if (!fns?.length) {
            return;
        }

        const afterCallback = this._getAfterCallback(type);
        for (const fn of fns) {
            try {
                const result = fn(detail);
                afterCallback(result);
            } catch (error) {
                if (typeof onError === "function") {
                    onError(error);
                } else {
                    throw error;
                }
            }
        }
    }

    clear() {
        this._callbacks.clear();
    }

    /**
     * @param {string} type
     */
    _getAfterCallback(type) {
        if (!type.startsWith("before")) {
            return () => {};
        }
        const relatedType = `after${type.slice(6)}`;
        return (result) => this.add(relatedType, result, true);
    }
}

/**
 * @template T
 * @extends {Map<Element, T>}
 */
export class ElementMap extends Map {
    /** @type {string | null} */
    selector = null;

    /**
     * @param {Target} target
     * @param {(element: Element) => T} [mapFn]
     */
    constructor(target, mapFn) {
        const mapValues = [];
        for (const element of queryAll(target)) {
            mapValues.push([element, mapFn ? mapFn(element) : element]);
        }

        super(mapValues);

        if (typeof target === "string") {
            this.selector = target;
        }
    }

    /**
     * @param {(value: T, element: Element, map: ElementMap) => boolean} predicate
     * @returns {boolean}
     */
    every(predicate) {
        if (!this.size) {
            return false;
        }
        for (const [el, value] of this) {
            const pass = predicate(value, el, this);
            if (!pass) {
                return false;
            }
        }
        return true;
    }

    /**
     * Returns a flat list of values mapped by the given function.
     * Additionnaly, group headers are inserted if the map has more than 1 element.
     *
     * @template [N=T]
     * @param {(value: T, element: Element, map: ElementMap) => N[]} mapFn
     * @param {(value: T, element: Element, map: ElementMap) => boolean} predicate
     * @returns {N[]}
     */
    mapFailedDetails(mapFn, predicate) {
        if (!this.size) {
            return [Markup.received("Elements found:", 0)];
        }
        const result = [];
        let groupIndex = 1;
        for (const [el, value] of this) {
            result.push(
                new Markup({
                    content: el,
                    groupIndex: groupIndex++,
                    type: "group",
                }),
                ...Markup.resolveDetails(mapFn(value, el, this), predicate(value, el, this))
            );
        }
        return result;
    }
}

export class HootError extends Error {
    name = "HootError";
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
    /** @type {keyof typeof import("./core/logger").ISSUE_LEVELS} */
    level;

    /**
     *
     * @param {string} [message]
     * @param {ErrorOptions & {
     *  level?: keyof typeof import("./core/logger").ISSUE_LEVELS;
     * }} [options]
     */
    constructor(message, options) {
        super(message, options);

        // See 'logger.js' for details on each issue level
        this.level = options?.level;
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
}

/** @template [T=string] */
export class Markup {
    className = "";
    /** @type {T} */
    content = "";
    tagName = "div";
    /** @type {MarkupType} */
    type;
    /** @type {number} */
    groupIndex;

    /**
     * @param {Partial<Markup<T>>} params
     */
    constructor(params) {
        $assign(this, params);

        this.content = deepCopy(this.content);
    }

    /**
     * @param {unknown} expected
     * @param {unknown} actual
     */
    static diff(expected, actual) {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const eType = typeof expected;
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
        if (eType !== typeof actual || !(eType === "object" || eType === "string")) {
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
=======
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
>>>>>>> upstream/18.0
            // Cannot diff
            return null;
        }
        let hasDiff;
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
        if (!window.DiffMatchPatch) {
            return null;
        }
        const eType = typeof expected;
        if (eType !== typeof actual || !((expected && eType === "object") || eType === "string")) {
            // Cannot diff
            return null;
        }
        let hasDiff = false;
        const { DIFF_INSERT, DIFF_DELETE } = window.DiffMatchPatch;
        const dmp = new window.DiffMatchPatch();
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
        const diff = dmp
            .diff_main(formatTechnical(expected), formatTechnical(actual))
            .map((diff) => {
                let className = "no-underline";
                let tagName = "t";
                if (diff[0] === DIFF_INSERT) {
                    className += " text-emerald bg-emerald-900";
                    tagName = "ins";
                    hasDiff = true;
                } else if (diff[0] === DIFF_DELETE) {
                    className += " text-rose bg-rose-900";
                    tagName = "del";
                    hasDiff = true;
                }
                return new Markup({
                    className,
                    content: toExplicitString(diff[1]),
                    tagName,
                });
            });
        return hasDiff
            ? [
                  new Markup({ content: "Diff:" }),
                  new Markup({
                      content: diff,
                      type: "technical",
                  }),
              ]
            : null;
    }

    /**
     * @param {string} content
     * @param {unknown} value
     */
    static expected(content, value) {
        return [new Markup({ content, type: "expected" }), deepCopy(value)];
    }

    /**
     * @param {unknown} object
     * @param {MarkupType} [type]
     */
    static isMarkup(object, type) {
        if (!(object instanceof Markup)) {
            return false;
        }
        return !type || object.type === type;
    }

    /**
     * @param {string} content
     * @param {unknown} value
     */
    static received(content, value) {
        return [new Markup({ content, type: "received" }), deepCopy(value)];
    }

    /**
     * @param {Markup[][]} details
     * @param {boolean} [pass=false]
     */
    static resolveDetails(details, pass = false) {
        const result = [];
        for (let detail of details) {
            if (!detail) {
                continue;
            }
            if (isIterable(detail)) {
                for (const detailPart of detail) {
                    if (Markup.isMarkup(detailPart, "expected")) {
                        if (pass) {
                            detail = null;
                            break;
                        }
                        detailPart.className ||= "text-emerald";
                    } else if (Markup.isMarkup(detailPart, "received")) {
                        detailPart.className ||= pass ? "text-emerald" : "text-rose";
                    }
                }
            }
            if (detail) {
                result.push(detail);
            }
        }
        return result;
    }

    /**
     * @param {string} content
     * @param {unknown} value
     */
    static text(content, value) {
        return [new Markup({ content }), deepCopy(value)];
    }
}

/**
 * Centralized version of {@link EventTarget} to make cleanups more streamlined.
 */
export class MockEventTarget extends EventTarget {
    /** @type {string[]} */
    static publicListeners = [];

    constructor() {
        super(...arguments);

        for (const type of this.constructor.publicListeners) {
            let listener = null;
            $defineProperty(this, `on${type}`, {
                get() {
                    return listener;
                },
                set(value) {
                    if (listener) {
                        this.removeEventListener(type, listener);
                    }
                    listener = value;
                    if (listener) {
                        this.addEventListener(type, listener);
                    }
                },
            });
        }
    }
}

export const CASE_EVENT_TYPES = {
    assertion: {
        value: 0b1,
        icon: "fa-check",
        color: "emerald",
    },
    error: {
        value: 0b10,
        icon: "fa-exclamation",
        color: "rose",
    },
    interaction: {
        value: 0b100,
        icon: "fa-bolt",
        color: "purple",
    },
    query: {
        value: 0b1000,
        icon: "fa-search text-sm",
        color: "amber",
    },
    server: {
        value: 0b10000,
        icon: "fa-globe",
        color: "lime",
    },
    step: {
        value: 0b100000,
        icon: "fa-arrow-right text-sm",
        color: "orange",
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
};
export const DEFAULT_EVENT_TYPES = CASE_EVENT_TYPES.assertion.value | CASE_EVENT_TYPES.error.value;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
=======
export const EXACT_MARKER = `"`;
>>>>>>> upstream/18.0
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
=======
>>>>>>> upstream/18.0
    time: {
        value: 0b1000000,
        icon: "fa fa-hourglass text-sm",
        color: "blue",
    },
};
export const DEFAULT_EVENT_TYPES = CASE_EVENT_TYPES.assertion.value | CASE_EVENT_TYPES.error.value;
export const EXACT_MARKER = `"`;
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
=======
>>>>>>> upstream/18.0

export const INCLUDE_LEVEL = {
    url: 1,
    tag: 2,
    preset: 3,
};

export const MIME_TYPE = {
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
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
=======
    formData: "multipart/form-data",
>>>>>>> upstream/18.0
    blob: "application/octet-stream",
    json: "application/json",
    text: "text/plain",
};

export const STORAGE = {
    failed: "hoot-failed-tests",
    scheme: "hoot-color-scheme",
    searches: "hoot-latest-searches",
};

export const S_ANY = Symbol("any value");
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const S_NONE = Symbol("no value");
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
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0
=======
export const S_CIRCULAR = Symbol("circular object");
export const S_NONE = Symbol("no value");
>>>>>>> upstream/18.0

export const R_QUERY_EXACT = new RegExp(
    `(?<exclude>-)?${EXACT_MARKER}(?<content>[^${EXACT_MARKER}]*)${EXACT_MARKER}`,
    "g"
);
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
