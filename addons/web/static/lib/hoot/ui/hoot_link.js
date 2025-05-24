/** @odoo-module */

import { Component, useState, xml } from "@odoo/owl";
<<<<<<< HEAD
import { FILTER_KEYS, FILTER_SCHEMA } from "../core/config";
import { createUrlFromId } from "../core/url";
import { INCLUDE_LEVEL } from "../hoot_utils";
=======
import { FILTER_SCHEMA } from "../core/config";
import { createUrlFromId } from "../core/url";
import { ensureArray, INCLUDE_LEVEL } from "../hoot_utils";
>>>>>>> upstream/18.0

/**
 * @typedef {{
 *  class?: string;
<<<<<<< HEAD
 *  id?: string;
=======
 *  ids?: Record<import("../core/config").SearchFilter, string[]>;
>>>>>>> upstream/18.0
 *  onClick?: (event: PointerEvent) => any;
 *  options?: import("../core/url").CreateUrlFromIdOptions;
 *  slots: { default: any };
 *  style?: string;
 *  target?: string;
 *  title?: string;
<<<<<<< HEAD
 *  type?: import("../core/config").SearchFilter;
=======
>>>>>>> upstream/18.0
 * }} HootLinkProps
 */

//-----------------------------------------------------------------------------
<<<<<<< HEAD
=======
// Global
//-----------------------------------------------------------------------------

const {
    Object: { entries: $entries },
} = globalThis;

//-----------------------------------------------------------------------------
>>>>>>> upstream/18.0
// Exports
//-----------------------------------------------------------------------------

/**
 * Link component which computes its href lazily (i.e. on focus or pointerenter).
 *
 * @extends {Component<HootLinkProps, import("../hoot").Environment>}
 */
export class HootLink extends Component {
    static template = xml`
        <a
            t-att-class="props.class"
            t-att-href="state.href"
            t-att-target="props.target"
            t-att-title="props.title"
            t-att-style="props.style"
            t-on-click.stop="onClick"
            t-on-focus="updateHref"
            t-on-pointerenter="updateHref"
        >
            <t t-slot="default" />
        </a>
    `;
    static props = {
        class: { type: String, optional: true },
<<<<<<< HEAD
        id: { type: [String, { type: Array, element: String }], optional: true },
=======
        ids: {
            type: Object,
            values: [String, { type: Array, element: String }],
            optional: true,
        },
>>>>>>> upstream/18.0
        options: {
            type: Object,
            shape: {
                debug: { type: Boolean, optional: true },
                ignore: { type: Boolean, optional: true },
            },
            optional: true,
        },
        slots: {
            type: Object,
            shape: {
                default: { type: Object, optional: true },
            },
        },
        style: { type: String, optional: true },
        target: { type: String, optional: true },
        title: { type: String, optional: true },
<<<<<<< HEAD
        type: { type: FILTER_KEYS.map((value) => ({ value })), optional: true },
=======
>>>>>>> upstream/18.0
    };

    setup() {
        this.state = useState({ href: "#" });
    }

    /**
     * @param {PointerEvent} ev
     */
    onClick(ev) {
<<<<<<< HEAD
        if (ev.altKey) {
            const { includeSpecs } = this.env.runner.state;
            const { id, type, options } = this.props;
            if (!(type in FILTER_SCHEMA)) {
                return;
            }

            ev.preventDefault();

            const targetValue = options?.ignore ? -INCLUDE_LEVEL.url : +INCLUDE_LEVEL.url;
            const finalValue = includeSpecs[type][id] === targetValue ? 0 : targetValue;
            this.env.runner.include(type, id, finalValue);
=======
        const { ids, options } = this.props;
        if (ids && ev.altKey) {
            const { includeSpecs } = this.env.runner.state;
            let appliedFilter = false;
            for (const [type, idOrIds] of $entries(ids)) {
                if (!(type in FILTER_SCHEMA)) {
                    continue;
                }
                const targetValue = options?.ignore ? -INCLUDE_LEVEL.url : +INCLUDE_LEVEL.url;
                for (const id of ensureArray(idOrIds)) {
                    const finalValue = includeSpecs[type][id] === targetValue ? 0 : targetValue;
                    this.env.runner.include(type, id, finalValue);
                    appliedFilter = true;
                }
            }

            if (appliedFilter) {
                ev.preventDefault();
            }
>>>>>>> upstream/18.0
        } else {
            this.props.onClick?.(ev);
        }
    }

    updateHref() {
<<<<<<< HEAD
        const { id, type, options } = this.props;
        this.state.href = createUrlFromId(id, type, options);
=======
        const { ids, options } = this.props;
        const simplifiedIds = this.env.runner.simplifyUrlIds(ids);
        this.state.href = createUrlFromId(simplifiedIds, options);
>>>>>>> upstream/18.0
    }
}
