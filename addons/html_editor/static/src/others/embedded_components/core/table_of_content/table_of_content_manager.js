import { batched, reactive } from "@odoo/owl";

export const HEADINGS = ["H1", "H2", "H3", "H4", "H5", "H6"];

export class TableOfContentManager {
    constructor(containerRef) {
        this.containerRef = containerRef;
        this.structure = reactive({
            headings: [],
        });
        this.batchedUpdateStructure = batched(this.updateStructure.bind(this));
    }

    getContainerEl() {
        return this.containerRef.el;
    }

    /**
     * Allows to fetch relevant headings in the page when building the Table of Content.
     * Will filter out things we don't want:
     * - Empty headers
     * - Headers only containing the 'ZeroWidthSpace' element ('\u200B')
     * - Headers descendants of an element with `data-embedded`
     *
     * @param {Element} element
     */
    fetchValidHeadings(element) {
        const inEmbeddedHeadings = new Set(
            element.querySelectorAll(
                HEADINGS.map((heading) => `[data-embedded] ${heading}`).join(",")
            )
        );
        return Array.from(element.querySelectorAll(HEADINGS.join(",")))
            .filter((heading) => heading.innerText.trim().replaceAll("\u200B", "").length > 0)
            .filter((heading) => !inEmbeddedHeadings.has(heading));
    }

    scrollIntoView(heading) {
        if (!heading) {
            return;
        }
        const { target } = heading;
        target.scrollIntoView({ behavior: "smooth" });
        target.classList.add("o_embedded_toc_header_highlight");
        window.setTimeout(() => {
            target.classList.remove("o_embedded_toc_header_highlight");
        }, 2000);
    }

    updateStructure() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        let currentDepthByTag = {};
        let previousTag;
        let previousDepth = -1;
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        const container = this.getContainerEl();
        if (!container) {
            return;
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.structure.headings = this.fetchValidHeadings(container).map((heading) => {
            let depth = HEADINGS.indexOf(heading.tagName);
            if (depth !== previousDepth && heading.tagName === previousTag) {
                depth = previousDepth;
            } else if (depth > previousDepth) {
                if (heading.tagName !== previousTag && HEADINGS.indexOf(previousTag) < depth) {
                    depth = previousDepth + 1;
                } else {
                    depth = previousDepth;
                }
            } else if (depth < previousDepth) {
                if (currentDepthByTag.hasOwnProperty(heading.tagName)) {
                    depth = currentDepthByTag[heading.tagName];
                }
            }

            previousTag = heading.tagName;
            previousDepth = depth;

            // going back to 0 depth, wipe-out the 'currentDepthByTag'
            if (depth === 0) {
                currentDepthByTag = {};
            }
            currentDepthByTag[heading.tagName] = depth;

            return {
                depth: depth,
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        const tagDepthStack = [];
        this.structure.headings = this.fetchValidHeadings(container).map((heading) => {
            while (tagDepthStack.at(-1) >= heading.tagName) {
                tagDepthStack.pop();
            }
            const depth = tagDepthStack.length;
            tagDepthStack.push(heading.tagName);
            return {
                depth,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                name: heading.innerText,
                target: heading,
            };
        });
    }
}
