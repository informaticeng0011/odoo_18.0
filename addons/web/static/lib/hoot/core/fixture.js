/** @odoo-module */

import { App } from "@odoo/owl";
import {
    defineRootNode,
    getActiveElement,
    getCurrentDimensions,
} from "@web/../lib/hoot-dom/helpers/dom";
import { setupEventActions } from "@web/../lib/hoot-dom/helpers/events";
import { HootError } from "../hoot_utils";
import { subscribeToTransitionChange } from "../mock/animation";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0
=======
import { getViewPortHeight, getViewPortWidth } from "../mock/window";
>>>>>>> upstream/18.0

/**
 * @typedef {Parameters<typeof import("@odoo/owl").mount>[2] & {
 *  className: string | string[];
 *  target?: import("@odoo/hoot-dom").Target;
 * }} MountOnFixtureOptions
 *
 * @typedef {{
 *  component: import("@odoo/owl").ComponentConstructor;
 *  props: unknown;
 * }} TestRootProps
 */

//-----------------------------------------------------------------------------
// Global
//-----------------------------------------------------------------------------

const { customElements, document, getSelection, HTMLElement, WeakSet } = globalThis;

//-----------------------------------------------------------------------------
// Internal
//-----------------------------------------------------------------------------

const destroyed = new WeakSet();
let allowFixture = false;
/** @type {HootFixtureElement | null} */
let currentFixture = null;
let shouldPrepareNextFixture = true; // Prepare setup for first test

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * @param {App | import("@odoo/owl").Component} target
 */
export function destroy(target) {
    const app = target instanceof App ? target : target.__owl__.app;
    if (destroyed.has(app)) {
        return;
    }
    destroyed.add(app);
    app.destroy();
}

/**
 * @param {import("./runner").Runner} runner
 */
export function makeFixtureManager(runner) {
    const cleanupFixture = () => {
        allowFixture = false;

        if (currentFixture) {
            shouldPrepareNextFixture = true;
            currentFixture.remove();
        }
    };

    const getFixture = () => {
        if (!allowFixture) {
            throw new HootError(`Cannot access fixture outside of a test.`);
        }
        if (!currentFixture) {
            // Prepare fixture once to not force layouts/reflows
            /** @type {HootFixtureElement} */
            const fixture = document.createElement(HootFixtureElement.TAG_NAME);
            if (runner.debug || runner.config.headless) {
                fixture.show();
            }

            const { width, height } = getCurrentDimensions();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (width !== window.innerWidth) {
                fixture.style.width = `${width}px`;
            }
            if (height !== window.innerHeight) {
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
            if (width !== getViewPortWidth()) {
                fixture.style.width = `${width}px`;
            }
            if (height !== getViewPortHeight()) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                fixture.style.height = `${height}px`;
            }

            document.body.appendChild(fixture);
        }
        return currentFixture;
    };

    const setupFixture = () => {
        allowFixture = true;

        if (shouldPrepareNextFixture) {
            shouldPrepareNextFixture = false;

            // Reset focus & selection
            getActiveElement().blur();
            getSelection().removeAllRanges();
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

        return cleanupFixture;
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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

    runner.beforeAll(() => {
        defineRootNode(getFixture);
    });
    runner.afterAll(() => {
        defineRootNode(null);
    });

    return {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
=======
        cleanup: cleanupFixture,
>>>>>>> upstream/18.0
        setup: setupFixture,
        get: getFixture,
    };
}

export class HootFixtureElement extends HTMLElement {
    static CLASSES = {
        transitions: "allow-transitions",
        show: "show-fixture",
    };
    static TAG_NAME = "hoot-fixture";

    static styleElement = document.createElement("style");

    static {
        customElements.define(this.TAG_NAME, this);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.styleElement.innerText = /* css */ `
=======
        this.styleElement.textContent = /* css */ `
>>>>>>> upstream/18.0
=======
        this.styleElement.textContent = /* css */ `
>>>>>>> upstream/18.0
=======
        this.styleElement.textContent = /* css */ `
>>>>>>> upstream/18.0
=======
        this.styleElement.textContent = /* css */ `
>>>>>>> upstream/18.0
=======
        this.styleElement.textContent = /* css */ `
>>>>>>> upstream/18.0
=======
        this.styleElement.textContent = /* css */ `
>>>>>>> upstream/18.0
            ${this.TAG_NAME} {
                position: fixed !important;
                height: 100vh;
                width: 100vw;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                z-index: -1;
            }

            ${this.TAG_NAME}.${this.CLASSES.show} {
                background-color: inherit;
                color: inherit;
                opacity: 1;
                z-index: 3;
            }

            ${this.TAG_NAME}:not(.${this.CLASSES.transitions}) * {
                animation: none !important;
                transition: none !important;
            }
        `;
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
    /** @type {(() => any) | null} */
    cleanupEventActions = null;
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
    get hasIframes() {
        return this._iframes.size > 0;
    }

    /** @private */
    _observer = new MutationObserver(this._onFixtureMutation.bind(this));
    /**
     * @private
     * @type {Map<HTMLIFrameElement, Promise<void>>}
     */
    _iframes = new Map();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

    connectedCallback() {
        currentFixture = this;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.cleanupEventActions = setupEventActions(this);
        subscribeToTransitionChange((allowTransitions) =>
            this.classList.toggle(this.constructor.CLASSES.transitions, allowTransitions)
        );
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
        setupEventActions(this);
        subscribeToTransitionChange((allowTransitions) =>
            this.classList.toggle(this.constructor.CLASSES.transitions, allowTransitions)
        );

        this._observer.observe(this, { childList: true, subtree: true });
        this._lookForIframes();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    }

    disconnectedCallback() {
        currentFixture = null;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.cleanupEventActions?.();
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
=======
        this._iframes.clear();
        this._observer.disconnect();
>>>>>>> upstream/18.0
    }

    hide() {
        this.classList.remove(this.constructor.CLASSES.show);
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
    show() {
        this.classList.add(this.constructor.CLASSES.show);
    }
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
    async waitForIframes() {
        await Promise.all(this._iframes.values());
    }

    show() {
        this.classList.add(this.constructor.CLASSES.show);
    }

    /**
     * @private
     */
    _lookForIframes() {
        const toRemove = new Set(this._iframes.keys());
        for (const iframe of this.getElementsByTagName("iframe")) {
            if (toRemove.delete(iframe)) {
                continue;
            }
            this._iframes.set(
                iframe,
                new Promise((resolve) => iframe.addEventListener("load", resolve))
            );
            setupEventActions(iframe.contentWindow);
        }
        for (const iframe of toRemove) {
            this._iframes.delete(iframe);
        }
    }

    /**
     * @private
     * @type {MutationCallback}
     */
    _onFixtureMutation(mutations) {
        if (mutations.some((mutation) => mutation.addedNodes)) {
            this._lookForIframes();
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
