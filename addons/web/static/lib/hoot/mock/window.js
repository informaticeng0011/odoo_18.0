/** @odoo-module */

import { EventBus, whenReady } from "@odoo/owl";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { getCurrentDimensions } from "@web/../lib/hoot-dom/helpers/dom";
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
=======
import { getCurrentDimensions, getDocument, getWindow } from "@web/../lib/hoot-dom/helpers/dom";
>>>>>>> upstream/18.0
import {
    mockedCancelAnimationFrame,
    mockedClearInterval,
    mockedClearTimeout,
    mockedRequestAnimationFrame,
    mockedSetInterval,
    mockedSetTimeout,
} from "@web/../lib/hoot-dom/helpers/time";
import { interactor } from "../../hoot-dom/hoot_dom_utils";
import { MockEventTarget, strictEqual } from "../hoot_utils";
import { getRunner } from "../main_runner";
import {
    MockAnimation,
    mockedAnimate,
    mockedScroll,
    mockedScrollBy,
    mockedScrollIntoView,
    mockedScrollTo,
    mockedWindowScroll,
    mockedWindowScrollBy,
    mockedWindowScrollTo,
} from "./animation";
import { MockConsole } from "./console";
import { MockDate, MockIntl } from "./date";
import { MockClipboardItem, mockNavigator } from "./navigator";
import {
    MockBroadcastChannel,
    MockMessageChannel,
    MockMessagePort,
    MockRequest,
    MockResponse,
    MockSharedWorker,
    MockURL,
    MockWebSocket,
    MockWorker,
    MockXMLHttpRequest,
    MockXMLHttpRequestUpload,
    mockCookie,
    mockHistory,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
=======
    mockLocation,
>>>>>>> upstream/18.0
    mockedFetch,
} from "./network";
import { MockNotification } from "./notification";
import { MockStorage } from "./storage";
import { MockBlob } from "./sync_values";

//-----------------------------------------------------------------------------
// Global
//-----------------------------------------------------------------------------

const {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    document,
    Document,
    HTMLBodyElement,
    HTMLHeadElement,
    HTMLHtmlElement,
    Map,
    Number: { isNaN: $isNaN, parseFloat: $parseFloat },
    Object: {
        assign: $assign,
        defineProperty: $defineProperty,
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
    EventTarget,
    HTMLAnchorElement,
    Number: { isNaN: $isNaN, parseFloat: $parseFloat },
    Object: {
        assign: $assign,
        defineProperties: $defineProperties,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        entries: $entries,
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        getPrototypeOf: $getPrototypeOf,
        keys: $keys,
        hasOwn: $hasOwn,
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
    ontouchcancel,
    ontouchend,
    ontouchmove,
    ontouchstart,
    Reflect: { ownKeys: $ownKeys },
    Set,
    Window,
} = globalThis;

const touchFunctions = { ontouchcancel, ontouchend, ontouchmove, ontouchstart };
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
    Reflect: { ownKeys: $ownKeys },
    Set,
    WeakMap,
} = globalThis;

const { addEventListener, removeEventListener } = EventTarget.prototype;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
 * @param {any} target
 * @param {Record<string, PropertyDescriptor>} descriptors
 */
const applyPropertyDescriptors = (target, descriptors) => {
    for (const [property, rawDescriptor] of $entries(descriptors)) {
        const owner = findPropertyOwner(target, property);
        originalDescriptors.push({
            descriptor: $getOwnPropertyDescriptor(owner, property),
            owner,
            property,
            target,
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
 * @param {unknown} target
 * @param {Record<string, PropertyDescriptor>} descriptors
 */
function applyPropertyDescriptors(target, descriptors) {
    if (!originalDescriptors.has(target)) {
        originalDescriptors.set(target, {});
    }
    const targetDescriptors = originalDescriptors.get(target);
    const ownerDecriptors = new Map();
    for (const [property, rawDescriptor] of $entries(descriptors)) {
        const owner = findPropertyOwner(target, property);
        targetDescriptors[property] = $getOwnPropertyDescriptor(owner, property);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        const descriptor = { ...rawDescriptor };
        if ("value" in descriptor) {
            descriptor.writable = false;
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
        $defineProperty(owner, property, descriptor);
    }
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
        if (!ownerDecriptors.has(owner)) {
            ownerDecriptors.set(owner, {});
        }
        const nextDescriptors = ownerDecriptors.get(owner);
        nextDescriptors[property] = descriptor;
    }
    for (const [owner, nextDescriptors] of ownerDecriptors) {
        $defineProperties(owner, nextDescriptors);
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
 * @param {string[]} [changedKeys]
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
const callMediaQueryChanges = (changedKeys) => {
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
=======
function callMediaQueryChanges(changedKeys) {
>>>>>>> upstream/18.0
    for (const mediaQueryList of mediaQueryLists) {
        if (!changedKeys || changedKeys.some((key) => mediaQueryList.media.includes(key))) {
            const event = new MediaQueryListEvent("change", {
                matches: mediaQueryList.matches,
                media: mediaQueryList.media,
            });
            mediaQueryList.dispatchEvent(event);
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

/**
 * @template T
 * @param {T} target
 * @param {keyof T} property
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
const findOriginalDescriptor = (target, property) => {
    for (const od of originalDescriptors) {
        if (od.target === target && od.property === property) {
            return od.descriptor;
        }
    }
    return null;
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
function findOriginalDescriptor(target, property) {
    if (originalDescriptors.has(target)) {
        const descriptors = originalDescriptors.get(target);
        if (descriptors && property in descriptors) {
            return descriptors[property];
        }
    }
    return null;
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
 * @param {unknown} object
 * @param {string} property
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @returns {any}
 */
const findPropertyOwner = (object, property) => {
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
=======
 * @returns {unknown}
 */
function findPropertyOwner(object, property) {
>>>>>>> upstream/18.0
    if ($hasOwn(object, property)) {
        return object;
    }
    const prototype = $getPrototypeOf(object);
    if (prototype) {
        return findPropertyOwner(prototype, property);
    }
    return object;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
 * @param {unknown} object
 */
function getTouchDescriptors(object) {
    const descriptors = {};
    const toDelete = [];
    for (const eventName of TOUCH_EVENTS) {
        const fnName = `on${eventName}`;
        if (fnName in object) {
            const owner = findPropertyOwner(object, fnName);
            descriptors[fnName] = $getOwnPropertyDescriptor(owner, fnName);
        } else {
            toDelete.push(fnName);
        }
    }
    /** @type {({ descriptors?: Record<string, PropertyDescriptor>; toDelete?: string[]})} */
    const result = {};
    if ($keys(descriptors).length) {
        result.descriptors = descriptors;
    }
    if (toDelete.length) {
        result.toDelete = toDelete;
    }
    return result;
}

/**
 * @param {typeof globalThis} view
 */
function getTouchTargets(view) {
    return [view, view.Document.prototype];
}

/**
 * @param {typeof globalThis} view
 */
function getWatchedEventTargets(view) {
    return [
        view,
        view.document,
        // Permanent DOM elements
        view.HTMLDocument.prototype,
        view.HTMLBodyElement.prototype,
        view.HTMLHeadElement.prototype,
        view.HTMLHtmlElement.prototype,
        // Other event targets
        EventBus.prototype,
        MockEventTarget.prototype,
    ];
}

/**
 * @param {string} type
 * @returns {PropertyDescriptor}
 */
function makeEventDescriptor(type) {
    let callback = null;
    return {
        enumerable: true,
        configurable: true,
        get() {
            return callback;
        },
        set(value) {
            if (callback === value) {
                return;
            }
            if (typeof callback === "function") {
                this.removeEventListener(type, callback);
            }
            callback = value;
            if (typeof callback === "function") {
                this.addEventListener(type, callback);
            }
        },
    };
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
 * @param {string} mediaQueryString
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
const matchesQueryPart = (mediaQueryString) => {
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
=======
function matchesQueryPart(mediaQueryString) {
>>>>>>> upstream/18.0
    const [, key, value] = mediaQueryString.match(R_MEDIA_QUERY_PROPERTY) || [];
    let match = false;
    if (mockMediaValues[key]) {
        match = strictEqual(value, mockMediaValues[key]);
    } else if (key) {
        switch (key) {
            case "max-height": {
                match = getCurrentDimensions().height <= $parseFloat(value);
                break;
            }
            case "max-width": {
                match = getCurrentDimensions().width <= $parseFloat(value);
                break;
            }
            case "min-height": {
                match = getCurrentDimensions().height >= $parseFloat(value);
                break;
            }
            case "min-width": {
                match = getCurrentDimensions().width >= $parseFloat(value);
                break;
            }
            case "orientation": {
                const { width, height } = getCurrentDimensions();
                match = value === "landscape" ? width > height : width < height;
                break;
            }
        }
    }
    return mediaQueryString.startsWith("not") ? !match : match;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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

/** @type {addEventListener} */
function mockedAddEventListener(...args) {
    const runner = getRunner();
    if (runner.dry || !runner.suiteStack.length) {
        // Ignore listeners during dry run or outside of a test suite
        return;
    }
    if (!R_OWL_SYNTHETIC_LISTENER.test(String(args[1]))) {
        // Ignore cleanup for Owl synthetic listeners
        runner.after(removeEventListener.bind(this, ...args));
    }
    return addEventListener.call(this, ...args);
}

/** @type {Document["elementFromPoint"]} */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
function mockedElementFromPoint(...args) {
    return mockedElementsFromPoint.call(this, ...args)[0];
}

/**
 * Mocked version of {@link document.elementsFromPoint} to:
 * - remove "HOOT-..." elements from the result
 * - put the <body> & <html> elements at the end of the list, as they may be ordered
 *  incorrectly due to the fixture being behind the body.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
=======
 * @type {Document["elementsFromPoint"]}
>>>>>>> upstream/18.0
 */
function mockedElementsFromPoint(...args) {
    const { value: elementsFromPoint } = findOriginalDescriptor(this, "elementsFromPoint");
    const result = [];
    let hasDocumentElement = false;
    let hasBody = false;
    for (const element of elementsFromPoint.call(this, ...args)) {
        if (element.tagName.startsWith("HOOT")) {
            continue;
        }
        if (element === this.body) {
            hasBody = true;
        } else if (element === this.documentElement) {
            hasDocumentElement = true;
        } else {
            result.push(element);
        }
    }
    if (hasBody) {
        result.push(this.body);
    }
    if (hasDocumentElement) {
        result.push(this.documentElement);
    }
    return result;
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
/**
 * @type {typeof matchMedia}
 */
const mockedMatchMedia = (mediaQueryString) => new MockMediaQueryList(mediaQueryString);
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
function mockedHref() {
    return this.hasAttribute("href") ? new MockURL(this.getAttribute("href")).href : "";
}

/** @type {typeof matchMedia} */
function mockedMatchMedia(mediaQueryString) {
    return new MockMediaQueryList(mediaQueryString);
}

/** @type {typeof removeEventListener} */
function mockedRemoveEventListener(...args) {
    if (getRunner().dry) {
        // Ignore listeners during dry run
        return;
    }
    return removeEventListener.call(this, ...args);
}

/**
 * @param {PointerEvent} ev
 */
function onAnchorHrefClick(ev) {
    if (ev.defaultPrevented) {
        return;
    }
    const href = ev.target.closest("a[href]")?.href;
    if (!href) {
        return;
    }

    ev.preventDefault();

    // Assign href to mock location instead of actual location
    mockLocation.href = href;

    const [, hash] = href.split("#");
    if (hash) {
        // Scroll to the target element if the href is/has a hash
        getDocument().getElementById(hash)?.scrollIntoView();
    }
}

function onWindowResize() {
    callMediaQueryChanges();
}

/**
 * @param {typeof globalThis} view
 */
function restoreTouch(view) {
    const touchObjects = getTouchTargets(view);
    for (let i = 0; i < touchObjects.length; i++) {
        const object = touchObjects[i];
        const { descriptors, toDelete } = originalTouchFunctions[i];
        if (descriptors) {
            $defineProperties(object, descriptors);
        }
        if (toDelete) {
            for (const fnName of toDelete) {
                delete object[fnName];
            }
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

class MockMediaQueryList extends MockEventTarget {
    static publicListeners = ["change"];

    get matches() {
        return this.media
            .split(R_COMMA)
            .some((orPart) => orPart.split(R_AND).every(matchesQueryPart));
    }

    /**
     * @param {string} mediaQueryString
     */
    constructor(mediaQueryString) {
        super(...arguments);

        this.media = mediaQueryString.trim().toLowerCase();

        mediaQueryLists.add(this);
    }
}

const DEFAULT_MEDIA_VALUES = {
    "display-mode": "browser",
    pointer: "fine",
    "prefers-color-scheme": "light",
    "prefers-reduced-motion": "reduce",
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
const EVENT_TARGET_PROTOTYPES = new Map(
    [
        // Top level objects
        Window,
        Document,
        // Permanent DOM elements
        HTMLBodyElement,
        HTMLHeadElement,
        HTMLHtmlElement,
        // Other event targets
        EventBus,
        MockEventTarget,
    ].map(({ prototype }) => [
        prototype,
        [prototype.addEventListener, prototype.removeEventListener],
    ])
);
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0
=======
const TOUCH_EVENTS = ["touchcancel", "touchend", "touchmove", "touchstart"];
>>>>>>> upstream/18.0

const R_AND = /\s*\band\b\s*/;
const R_COMMA = /\s*,\s*/;
const R_MEDIA_QUERY_PROPERTY = /\(\s*([\w-]+)\s*:\s*(.+)\s*\)/;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

/** @type {{ descriptor: PropertyDescriptor; owner: any; property: string; target: any }[]} */
const originalDescriptors = [];
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
const R_OWL_SYNTHETIC_LISTENER = /\bnativeToSyntheticEvent\b/;

/** @type {WeakMap<unknown, Record<string, PropertyDescriptor>>} */
const originalDescriptors = new WeakMap();
const originalTouchFunctions = getTouchTargets(globalThis).map(getTouchDescriptors);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

/** @type {Set<MockMediaQueryList>} */
const mediaQueryLists = new Set();
const mockConsole = new MockConsole();
const mockLocalStorage = new MockStorage();
const mockMediaValues = { ...DEFAULT_MEDIA_VALUES };
const mockSessionStorage = new MockStorage();
let mockTitle = "";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const R_OWL_SYNTHETIC_LISTENER = /\bnativeToSyntheticEvent\b/;

// Mock descriptors
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
// Mock descriptors
const ANCHOR_MOCK_DESCRIPTORS = {
    href: {
        ...$getOwnPropertyDescriptor(HTMLAnchorElement.prototype, "href"),
        get: mockedHref,
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
const DOCUMENT_MOCK_DESCRIPTORS = {
    cookie: {
        get: () => mockCookie.get(),
        set: (value) => mockCookie.set(value),
    },
    elementFromPoint: { value: mockedElementFromPoint },
    elementsFromPoint: { value: mockedElementsFromPoint },
    title: {
        get: () => mockTitle,
        set: (value) => (mockTitle = value),
    },
};
const ELEMENT_MOCK_DESCRIPTORS = {
    animate: { value: mockedAnimate },
    scroll: { value: mockedScroll },
    scrollBy: { value: mockedScrollBy },
    scrollIntoView: { value: mockedScrollIntoView },
    scrollTo: { value: mockedScrollTo },
};
const WINDOW_MOCK_DESCRIPTORS = {
    Animation: { value: MockAnimation },
    Blob: { value: MockBlob },
    BroadcastChannel: { value: MockBroadcastChannel },
    cancelAnimationFrame: { value: mockedCancelAnimationFrame, writable: false },
    clearInterval: { value: mockedClearInterval, writable: false },
    clearTimeout: { value: mockedClearTimeout, writable: false },
    ClipboardItem: { value: MockClipboardItem },
    console: { value: mockConsole, writable: false },
    Date: { value: MockDate, writable: false },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    EventTarget: { value: MockEventTarget },
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    fetch: { value: interactor("server", mockedFetch).as("fetch"), writable: false },
    history: { value: mockHistory },
    innerHeight: { get: () => getCurrentDimensions().height },
    innerWidth: { get: () => getCurrentDimensions().width },
    Intl: { value: MockIntl },
    localStorage: { value: mockLocalStorage, writable: false },
    matchMedia: { value: mockedMatchMedia },
    MessageChannel: { value: MockMessageChannel },
    MessagePort: { value: MockMessagePort },
    navigator: { value: mockNavigator },
    Notification: { value: MockNotification },
    outerHeight: { get: () => getCurrentDimensions().height },
    outerWidth: { get: () => getCurrentDimensions().width },
    Request: { value: MockRequest, writable: false },
    requestAnimationFrame: { value: mockedRequestAnimationFrame, writable: false },
    Response: { value: MockResponse, writable: false },
    scroll: { value: mockedWindowScroll },
    scrollBy: { value: mockedWindowScrollBy },
    scrollTo: { value: mockedWindowScrollTo },
    sessionStorage: { value: mockSessionStorage, writable: false },
    setInterval: { value: mockedSetInterval, writable: false },
    setTimeout: { value: mockedSetTimeout, writable: false },
    SharedWorker: { value: MockSharedWorker },
    URL: { value: MockURL },
    WebSocket: { value: MockWebSocket },
    Worker: { value: MockWorker },
    XMLHttpRequest: { value: MockXMLHttpRequest },
    XMLHttpRequestUpload: { value: MockXMLHttpRequestUpload },
};

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

export function cleanupWindow() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
=======
    const view = getWindow();

>>>>>>> upstream/18.0
    // Storages
    mockLocalStorage.clear();
    mockSessionStorage.clear();

    // Media
    mediaQueryLists.clear();
    $assign(mockMediaValues, DEFAULT_MEDIA_VALUES);

    // Title
    mockTitle = "";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // Body & head attributes
    for (const { name } of document.head.attributes) {
        document.head.removeAttribute(name);
    }
    for (const { name } of document.body.attributes) {
        document.body.removeAttribute(name);
    }

    // Touch
    for (const [fnName, originalFn] of $entries(touchFunctions)) {
        globalThis[fnName] = originalFn;
    }
}

export function getTitle() {
    const titleDescriptor = findOriginalDescriptor(document, "title");
    if (titleDescriptor) {
        return titleDescriptor.get.call(document);
    } else {
        return document.title;
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
    // Listeners
    view.removeEventListener("click", onAnchorHrefClick);
    view.removeEventListener("resize", onWindowResize);

    // Head & body attributes
    const { head, body } = view.document;
    for (const { name } of head.attributes) {
        head.removeAttribute(name);
    }
    for (const { name } of body.attributes) {
        body.removeAttribute(name);
    }

    // Touch
    restoreTouch(view);
}

export function getTitle() {
    const doc = getDocument();
    const titleDescriptor = findOriginalDescriptor(doc, "title");
    if (titleDescriptor) {
        return titleDescriptor.get.call(doc);
    } else {
        return doc.title;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    }
}

export function getViewPortHeight() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const heightDescriptor = findOriginalDescriptor(window, "innerHeight");
    if (heightDescriptor) {
        return heightDescriptor.get.call(window);
    } else {
        return window.innerHeight;
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
    const view = getWindow();
    const heightDescriptor = findOriginalDescriptor(view, "innerHeight");
    if (heightDescriptor) {
        return heightDescriptor.get.call(view);
    } else {
        return view.innerHeight;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    }
}

export function getViewPortWidth() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const titleDescriptor = findOriginalDescriptor(window, "innerWidth");
    if (titleDescriptor) {
        return titleDescriptor.get.call(window);
    } else {
        return window.innerWidth;
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
    const view = getWindow();
    const titleDescriptor = findOriginalDescriptor(view, "innerWidth");
    if (titleDescriptor) {
        return titleDescriptor.get.call(view);
    } else {
        return view.innerWidth;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    }
}

/**
 * @param {Record<string, string>} name
 */
export function mockMatchMedia(values) {
    $assign(mockMediaValues, values);

    callMediaQueryChanges($keys(values));
}

/**
 * @param {boolean} setTouch
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @param {typeof globalThis} [window=globalThis]
 */
export function mockTouch(setTouch, { Document, HTMLElement, SVGElement } = globalThis) {
    const prototypes = [Document.prototype, HTMLElement.prototype, SVGElement.prototype];
    if (setTouch) {
        for (const fnName in touchFunctions) {
            globalThis[fnName] ??= null;
            for (const proto of prototypes) {
                if (!(fnName in proto)) {
                    proto[fnName] = null;
                }
            }
        }
    } else {
        for (const fnName in touchFunctions) {
            delete globalThis[fnName];
            for (const proto of prototypes) {
                delete proto[fnName];
            }
        }
    }

    mockMatchMedia({ pointer: setTouch ? "coarse" : "fine" });
}

/**
 * @param {typeof globalThis} global
 */
export function patchWindow({ document, window } = globalThis) {
    applyPropertyDescriptors(window, WINDOW_MOCK_DESCRIPTORS);
    applyPropertyDescriptors(window.Element.prototype, ELEMENT_MOCK_DESCRIPTORS);
    whenReady(() => {
        applyPropertyDescriptors(document, DOCUMENT_MOCK_DESCRIPTORS);
    });

    window.addEventListener("resize", () => callMediaQueryChanges());
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
 */
export function mockTouch(setTouch) {
    const objects = getTouchTargets(getWindow());
    if (setTouch) {
        for (const object of objects) {
            const descriptors = {};
            for (const eventName of TOUCH_EVENTS) {
                const fnName = `on${eventName}`;
                if (!$hasOwn(object, fnName)) {
                    descriptors[fnName] = makeEventDescriptor(eventName);
                }
            }
            $defineProperties(object, descriptors);
        }
        mockMatchMedia({ pointer: "coarse" });
    } else {
        for (const object of objects) {
            for (const eventName of TOUCH_EVENTS) {
                delete object[`on${eventName}`];
            }
        }
        mockMatchMedia({ pointer: "fine" });
    }
}

/**
 * @param {typeof globalThis} [view=getWindow()]
 */
export function patchWindow(view = getWindow()) {
    // Window (doesn't need to be ready)
    applyPropertyDescriptors(view, WINDOW_MOCK_DESCRIPTORS);

    whenReady(() => {
        // Document
        applyPropertyDescriptors(view.document, DOCUMENT_MOCK_DESCRIPTORS);

        // Element prototypes
        applyPropertyDescriptors(view.Element.prototype, ELEMENT_MOCK_DESCRIPTORS);
        applyPropertyDescriptors(view.HTMLAnchorElement.prototype, ANCHOR_MOCK_DESCRIPTORS);
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
<<<<<<< HEAD
<<<<<<< HEAD
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
}

/**
 * @param {string} value
 */
export function setTitle(value) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const titleDescriptor = findOriginalDescriptor(document, "title");
    if (titleDescriptor) {
        titleDescriptor.set.call(document, value);
    } else {
        document.title = value;
    }
}

export function watchListeners() {
    /**
     * @param {WeakRef<EventTarget>} targetRef
     */
    const removeRefListener = (targetRef) => {
        if (!listenerRefs.has(targetRef)) {
            return;
        }
        const [removeEventListener, args] = listenerRefs.get(targetRef);
        listenerRefs.delete(targetRef);
        const target = targetRef.deref();
        if (target) {
            removeEventListener.call(target, ...args);
        }
    };

    /** @type {Map<WeakRef<EventTarget>, [EventTarget["removeEventListener"], any[]]>} */
    const listenerRefs = new Map();
    const runner = getRunner();

    for (const [proto, [addEventListener, removeEventListener]] of EVENT_TARGET_PROTOTYPES) {
        proto.addEventListener = function mockedAddEventListener(...args) {
            if (runner.dry) {
                // Ignore listeners during dry run
                return;
            }
            if (runner.suiteStack.length && !R_OWL_SYNTHETIC_LISTENER.test(String(args[1]))) {
                // Do not cleanup:
                // - listeners outside of suites
                // - Owl synthetic listeners
                const ref = new WeakRef(this);
                listenerRefs.set(ref, [removeEventListener, args]);
                runner.after(() => removeRefListener(ref));
            }
            return addEventListener.call(this, ...args);
        };
        proto.removeEventListener = function mockedRemoveEventListener(...args) {
            if (runner.dry) {
                // Ignore listeners during dry run
                return;
            }
            return removeEventListener.call(this, ...args);
        };
    }

    return function unwatchAllListeners() {
        for (const ref of listenerRefs.keys()) {
            removeRefListener(ref);
        }

        for (const [proto, [addEventListener, removeEventListener]] of EVENT_TARGET_PROTOTYPES) {
            proto.addEventListener = addEventListener;
            proto.removeEventListener = removeEventListener;
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
    const doc = getDocument();
    const titleDescriptor = findOriginalDescriptor(doc, "title");
    if (titleDescriptor) {
        titleDescriptor.set.call(doc, value);
    } else {
        doc.title = value;
    }
}

export function setupWindow() {
    const view = getWindow();

    // Listeners
    view.addEventListener("click", onAnchorHrefClick);
    view.addEventListener("resize", onWindowResize);
}

export function watchListeners() {
    const targets = getWatchedEventTargets(getWindow());
    for (const target of targets) {
        target.addEventListener = mockedAddEventListener;
        target.removeEventListener = mockedRemoveEventListener;
    }

    return function unwatchAllListeners() {
        for (const target of targets) {
            target.addEventListener = addEventListener;
            target.removeEventListener = removeEventListener;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        }
    };
}

/**
 * Returns a function checking that the given target does not contain any unexpected
 * key. The list of accepted keys is the initial list of keys of the target, along
 * with an optional `whiteList` argument.
 *
 * @template T
 * @param {T} target
 * @param {string[]} [whiteList]
 * @example
 *  afterEach(watchKeys(window, ["odoo"]));
 */
export function watchKeys(target, whiteList) {
    const acceptedKeys = new Set([...$ownKeys(target), ...(whiteList || [])]);

    return function checkKeys() {
        const keysDiff = $ownKeys(target).filter(
            (key) => $isNaN($parseFloat(key)) && !acceptedKeys.has(key)
        );
        for (const key of keysDiff) {
            const descriptor = $getOwnPropertyDescriptor(target, key);
            if (descriptor.configurable) {
                delete target[key];
            } else if (descriptor.writable) {
                target[key] = undefined;
            }
        }
    };
}
