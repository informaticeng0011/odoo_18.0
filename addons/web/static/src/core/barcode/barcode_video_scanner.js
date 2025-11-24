/* global BarcodeDetector */

import { browser } from "@web/core/browser/browser";
import { delay } from "@web/core/utils/concurrency";
import { loadJS } from "@web/core/assets";
import { isVideoElementReady, buildZXingBarcodeDetector } from "./ZXingBarcodeDetector";
import { CropOverlay } from "./crop_overlay";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Component, onMounted, onWillStart, onWillUnmount, useRef, useState } from "@odoo/owl";
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, onMounted, onWillStart, onWillUnmount, status, useRef, useState } from "@odoo/owl";
>>>>>>> upstream/18.0
import { _t } from "@web/core/l10n/translation";
import { pick } from "@web/core/utils/objects";

export class BarcodeVideoScanner extends Component {
    static template = "web.BarcodeVideoScanner";
    static components = {
        CropOverlay,
    };
    static props = {
        cssClass: { type: String, optional: true },
        facingMode: {
            type: String,
            validate: (fm) => ["environment", "left", "right", "user"].includes(fm),
        },
        close: { type: Function, optional: true },
        onReady: { type: Function, optional: true },
        onResult: Function,
        onError: Function,
        delayBetweenScan: { type: Number, optional: true },
    };
    static defaultProps = {
        cssClass: "w-100 h-100",
    };
    /**
     * @override
     */
    setup() {
        this.videoPreviewRef = useRef("videoPreview");
        this.detectorTimeout = null;
        this.stream = null;
        this.detector = null;
        this.overlayInfo = {};
        this.zoomRatio = 1;
        this.scanPaused = false;
        this.state = useState({
            isReady: false,
        });

        onWillStart(async () => {
            let DetectorClass;
            // Use Barcode Detection API if available.
            // As support is still bleeding edge (mainly Chrome on Android),
            // also provides a fallback using ZXing library.
            if ("BarcodeDetector" in window) {
                DetectorClass = BarcodeDetector;
            } else {
                await loadJS("/web/static/lib/zxing-library/zxing-library.js");
                DetectorClass = buildZXingBarcodeDetector(window.ZXing);
            }
            const formats = await DetectorClass.getSupportedFormats();
            this.detector = new DetectorClass({ formats });
        });

        onMounted(async () => {
            const constraints = {
                video: { facingMode: this.props.facingMode },
                audio: false,
            };

            try {
                this.stream = await browser.navigator.mediaDevices.getUserMedia(constraints);
            } catch (err) {
                const errors = {
                    NotFoundError: _t("No device can be found."),
                    NotAllowedError: _t("Odoo needs your authorization first."),
                };
                const errorMessage = _t("Could not start scanning. %(message)s", {
                    message: errors[err.name] || err.message,
                });
                this.props.onError(new Error(errorMessage));
                return;
            }
            if (!this.videoPreviewRef.el) {
                this.cleanStreamAndTimeout();
                const errorMessage = _t("Barcode Video Scanner could not be mounted properly.");
                this.props.onError(new Error(errorMessage));
                return;
            }
            this.videoPreviewRef.el.srcObject = this.stream;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            await this.isVideoReady();
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
            const ready = await this.isVideoReady();
            if (!ready) {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            const { height, width } = getComputedStyle(this.videoPreviewRef.el);
            const divWidth = width.slice(0, -2);
            const divHeight = height.slice(0, -2);
            const tracks = this.stream.getVideoTracks();
            if (tracks.length) {
                const [track] = tracks;
                const settings = track.getSettings();
                this.zoomRatio = Math.min(divWidth / settings.width, divHeight / settings.height);
            }
            this.detectorTimeout = setTimeout(this.detectCode.bind(this), 100);
        });

        onWillUnmount(() => this.cleanStreamAndTimeout());
    }

    cleanStreamAndTimeout() {
        clearTimeout(this.detectorTimeout);
        this.detectorTimeout = null;
        if (this.stream) {
            this.stream.getTracks().forEach((track) => track.stop());
            this.stream = null;
        }
    }

    isZXingBarcodeDetector() {
        return this.detector && this.detector.__proto__.constructor.name === "ZXingBarcodeDetector";
    }

    /**
     * Check for camera preview element readiness
     *
     * @returns {Promise} resolves when the video element is ready
     */
    async isVideoReady() {
        // FIXME: even if it shouldn't happened, a timeout could be useful here.
        while (!isVideoElementReady(this.videoPreviewRef.el)) {
            await delay(10);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
=======
            if (status(this) === "destroyed"){
                return false;
            }
>>>>>>> upstream/18.0
        }
        this.state.isReady = true;
        if (this.props.onReady) {
            this.props.onReady();
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
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
=======
        return true;
>>>>>>> upstream/18.0
    }

    onResize(overlayInfo) {
        this.overlayInfo = overlayInfo;
        if (this.isZXingBarcodeDetector()) {
            // TODO need refactoring when ZXing will support multiple result in one scan
            // https://github.com/zxing-js/library/issues/346
            this.detector.setCropArea(this.adaptValuesWithRatio(this.overlayInfo, true));
        }
    }

    /**
     * Attempt to detect codes in the current camera preview's frame
     */
    async detectCode() {
        let barcodeDetected = false;
        let codes = [];
        try {
            codes = await this.detector.detect(this.videoPreviewRef.el);
        } catch (err) {
            this.props.onError(err);
        }
        for (const code of codes) {
            if (
                !this.isZXingBarcodeDetector() &&
                this.overlayInfo.x !== undefined &&
                this.overlayInfo.y !== undefined
            ) {
                const { x, y, width, height } = this.adaptValuesWithRatio(code.boundingBox);
                if (
                    x < this.overlayInfo.x ||
                    x + width > this.overlayInfo.x + this.overlayInfo.width ||
                    y < this.overlayInfo.y ||
                    y + height > this.overlayInfo.y + this.overlayInfo.height
                ) {
                    continue;
                }
            }
            barcodeDetected = true;
            this.barcodeDetected(code.rawValue);
            break;
        }
        if (this.stream && (!barcodeDetected || !this.props.delayBetweenScan)) {
            this.detectorTimeout = setTimeout(this.detectCode.bind(this), 100);
        }
    }

    barcodeDetected(barcode) {
        if (this.props.delayBetweenScan && !this.scanPaused) {
            this.scanPaused = true;
            this.detectorTimeout = setTimeout(() => {
                this.scanPaused = false;
                this.detectorTimeout = setTimeout(this.detectCode.bind(this), 100);
            }, this.props.delayBetweenScan);
        }
        this.props.onResult(barcode);
    }

    adaptValuesWithRatio(domRect, dividerRatio = false) {
        const newObject = pick(domRect, "x", "y", "width", "height");
        for (const key of Object.keys(newObject)) {
            if (dividerRatio) {
                newObject[key] /= this.zoomRatio;
            } else {
                newObject[key] *= this.zoomRatio;
            }
        }
        return newObject;
    }
}

/**
 * Check for BarcodeScanner support
 * @returns {boolean}
 */
export function isBarcodeScannerSupported() {
    return Boolean(browser.navigator.mediaDevices && browser.navigator.mediaDevices.getUserMedia);
}
