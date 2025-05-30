/** @odoo-module */

import { createMock, HootError, MIME_TYPE, MockEventTarget } from "../hoot_utils";
import { getSyncValue, setSyncValue } from "./sync_values";

/**
 * @typedef {"android" | "ios" | "linux" | "mac" | "windows"} Platform
 */

//-----------------------------------------------------------------------------
// Global
//-----------------------------------------------------------------------------

const {
    Blob,
    ClipboardItem = class NonSecureClipboardItem {},
    navigator,
    Object: { assign: $assign },
    Set,
    TypeError,
} = globalThis;
const { userAgent: $userAgent } = navigator;

//-----------------------------------------------------------------------------
// Internal
//-----------------------------------------------------------------------------

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const getBlobValue = (value) => (value instanceof Blob ? value.text() : value);
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0
=======
function getBlobValue(value) {
    return value instanceof Blob ? value.text() : value;
}
>>>>>>> upstream/18.0

/**
 * Returns the final synchronous value of several item types.
 *
 * @param {unknown} value
 * @param {string} type
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
const getClipboardValue = (value, type) =>
    getBlobValue(value instanceof ClipboardItem ? value.getType(type) : value);

const getMockValues = () => ({
    /** @type {Navigator["sendBeacon"]} */
    sendBeacon: throwNotImplemented("sendBeacon"),
    userAgent: makeUserAgent("linux"),
    /** @type {Navigator["vibrate"]} */
    vibrate: throwNotImplemented("vibrate"),
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
function getClipboardValue(value, type) {
    return getBlobValue(value instanceof ClipboardItem ? value.getType(type) : value);
}

function getMockValues() {
    return {
        sendBeacon: throwNotImplemented("sendBeacon"),
        userAgent: makeUserAgent("linux"),
        /** @type {Navigator["vibrate"]} */
        vibrate: throwNotImplemented("vibrate"),
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
 * @returns {Record<PermissionName, { name: string; state: PermissionState }>}
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
const getPermissions = () => ({
    "background-sync": {
        state: "granted", // should always be granted
        name: "background_sync",
    },
    "local-fonts": {
        state: "denied",
        name: "local_fonts",
    },
    "payment-handler": {
        state: "denied",
        name: "payment_handler",
    },
    "persistent-storage": {
        state: "denied",
        name: "durable_storage",
    },
    "screen-wake-lock": {
        state: "denied",
        name: "screen_wake_lock",
    },
    "storage-access": {
        state: "denied",
        name: "storage-access",
    },
    "window-management": {
        state: "denied",
        name: "window_placement",
    },
    accelerometer: {
        state: "denied",
        name: "sensors",
    },
    camera: {
        state: "denied",
        name: "video_capture",
    },
    geolocation: {
        state: "denied",
        name: "geolocation",
    },
    gyroscope: {
        state: "denied",
        name: "sensors",
    },
    magnetometer: {
        state: "denied",
        name: "sensors",
    },
    microphone: {
        state: "denied",
        name: "audio_capture",
    },
    midi: {
        state: "denied",
        name: "midi",
    },
    notifications: {
        state: "denied",
        name: "notifications",
    },
    push: {
        state: "denied",
        name: "push",
    },
});

const getUserAgentBrowser = () => {
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
function getPermissions() {
    return {
        "background-sync": {
            state: "granted", // should always be granted
            name: "background_sync",
        },
        "local-fonts": {
            state: "denied",
            name: "local_fonts",
        },
        "payment-handler": {
            state: "denied",
            name: "payment_handler",
        },
        "persistent-storage": {
            state: "denied",
            name: "durable_storage",
        },
        "screen-wake-lock": {
            state: "denied",
            name: "screen_wake_lock",
        },
        "storage-access": {
            state: "denied",
            name: "storage-access",
        },
        "window-management": {
            state: "denied",
            name: "window_placement",
        },
        accelerometer: {
            state: "denied",
            name: "sensors",
        },
        camera: {
            state: "denied",
            name: "video_capture",
        },
        geolocation: {
            state: "denied",
            name: "geolocation",
        },
        gyroscope: {
            state: "denied",
            name: "sensors",
        },
        magnetometer: {
            state: "denied",
            name: "sensors",
        },
        microphone: {
            state: "denied",
            name: "audio_capture",
        },
        midi: {
            state: "denied",
            name: "midi",
        },
        notifications: {
            state: "denied",
            name: "notifications",
        },
        push: {
            state: "denied",
            name: "push",
        },
    };
}

function getUserAgentBrowser() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    if (/Firefox/i.test($userAgent)) {
        return "Gecko/20100101 Firefox/1000.0"; // Firefox
    }
    if (/Chrome/i.test($userAgent)) {
        return "AppleWebKit/1000.00 (KHTML, like Gecko) Chrome/1000.00 Safari/1000.00"; // Chrome
    }
    if (/Safari/i.test($userAgent)) {
        return "AppleWebKit/1000.00 (KHTML, like Gecko) Version/1000.00 Safari/1000.00"; // Safari
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

/**
 * @param {Platform} platform
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
const makeUserAgent = (platform) => {
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
=======
function makeUserAgent(platform) {
>>>>>>> upstream/18.0
    const userAgent = ["Mozilla/5.0"];
    switch (platform.toLowerCase()) {
        case "android": {
            userAgent.push("(Linux; Android 1000)");
            break;
        }
        case "ios": {
            userAgent.push("(iPhone; CPU iPhone OS 1000_0 like Mac OS X)");
            break;
        }
        case "linux": {
            userAgent.push("(X11; Linux x86_64)");
            break;
        }
        case "mac":
        case "macintosh": {
            userAgent.push("(Macintosh; Intel Mac OS X 10_15_7)");
            break;
        }
        case "win":
        case "windows": {
            userAgent.push("(Windows NT 10.0; Win64; x64)");
            break;
        }
        default: {
            userAgent.push(platform);
        }
    }
    if (userAgentBrowser) {
        userAgent.push(userAgentBrowser);
    }
    return userAgent.join(" ");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

/**
 * @param {string} fnName
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
const throwNotImplemented = (fnName) => {
    return function notImplemented() {
        throw new HootError(`Unmocked navigator method: ${fnName}`);
    };
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
function throwNotImplemented(fnName) {
    return function notImplemented() {
        throw new HootError(`Unmocked navigator method: ${fnName}`);
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

/** @type {Set<MockPermissionStatus>} */
const permissionStatuses = new Set();
const userAgentBrowser = getUserAgentBrowser();
const mockValues = getMockValues();

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

export class MockClipboard {
    /** @type {unknown} */
    _value = null;

    async read() {
        return this._value;
    }

    async readText() {
        return String(getClipboardValue(this._value, MIME_TYPE.text) ?? "");
    }

    async write(value) {
        this._value = value;
    }

    async writeText(value) {
        this._value = String(getClipboardValue(value, MIME_TYPE.text) ?? "");
    }
}

export class MockClipboardItem extends ClipboardItem {
    constructor(items) {
        super(items);

        setSyncValue(this, items);
    }

    // Added synchronous methods to enhance speed in tests

    async getType(type) {
        return getSyncValue(this)[type];
    }
}

export class MockPermissions {
    /**
     * @param {PermissionDescriptor} permissionDesc
     */
    async query({ name }) {
        if (!(name in currentPermissions)) {
            throw new TypeError(
                `The provided value '${name}' is not a valid enum value of type PermissionName`
            );
        }
        return new MockPermissionStatus(name);
    }
}

export class MockPermissionStatus extends MockEventTarget {
    static publicListeners = ["change"];

    /** @type {typeof currentPermissions[PermissionName]} */
    _permission;

    /**
     * @param {PermissionName} name
     * @param {PermissionState} value
     */
    constructor(name) {
        super(...arguments);

        this._permission = currentPermissions[name];
        permissionStatuses.add(this);
    }

    get name() {
        return this._permission.name;
    }

    get state() {
        return this._permission.state;
    }
}

export const currentPermissions = getPermissions();

export const mockClipboard = new MockClipboard();

export const mockPermissions = new MockPermissions();

export const mockNavigator = createMock(navigator, {
    clipboard: { value: mockClipboard },
    maxTouchPoints: { get: () => (globalThis.ontouchstart === undefined ? 0 : 1) },
    permissions: { value: mockPermissions },
    sendBeacon: { get: () => mockValues.sendBeacon },
    serviceWorker: { get: () => undefined },
    userAgent: { get: () => mockValues.userAgent },
    vibrate: { get: () => mockValues.vibrate },
});

export function cleanupNavigator() {
    permissionStatuses.clear();
    $assign(currentPermissions, getPermissions());
    $assign(mockValues, getMockValues());
}

/**
 * @param {PermissionName} name
 * @param {PermissionState} [value]
 */
export function mockPermission(name, value) {
    if (!(name in currentPermissions)) {
        throw new TypeError(
            `The provided value '${name}' is not a valid enum value of type PermissionName`
        );
    }

    currentPermissions[name].state = value;

    for (const permissionStatus of permissionStatuses) {
        if (permissionStatus.name === name) {
            permissionStatus.dispatchEvent(new Event("change"));
        }
    }
}

/**
 * @param {Navigator["sendBeacon"]} callback
 */
export function mockSendBeacon(callback) {
    mockValues.sendBeacon = callback;
}

/**
 * @param {Platform} platform
 */
export function mockUserAgent(platform = "linux") {
    mockValues.userAgent = makeUserAgent(platform);
}

/**
 * @param {Navigator["vibrate"]} callback
 */
export function mockVibrate(callback) {
    mockValues.vibrate = callback;
}
