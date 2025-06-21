/** @odoo-module alias=root.widget */

import { createPublicRoot } from "@web/legacy/js/public/public_root";
import lazyloader from "@web/legacy/js/public/lazyloader";
import { WebsiteRoot } from "./website_root";
import { loadBundle } from "@web/core/assets";

const prom = createPublicRoot(WebsiteRoot).then(async rootInstance => {
    // This data attribute is set by the WebsitePreview client action for a
    // restricted editor user.
    if (window.frameElement) {
        if (window.frameElement.dataset.loadWysiwyg === 'true') {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            await loadBundle("website.assets_all_wysiwyg");
=======
            await loadBundle("website.assets_all_wysiwyg_inside");
>>>>>>> upstream/18.0
=======
            await loadBundle("website.assets_all_wysiwyg_inside");
>>>>>>> upstream/18.0
=======
            await loadBundle("website.assets_all_wysiwyg_inside");
>>>>>>> upstream/18.0
=======
            await loadBundle("website.assets_all_wysiwyg_inside");
>>>>>>> upstream/18.0
=======
            await loadBundle("website.assets_all_wysiwyg_inside");
>>>>>>> upstream/18.0
        }
        window.dispatchEvent(new CustomEvent('PUBLIC-ROOT-READY', {detail: {rootInstance}}));
    }
    return rootInstance;
});
lazyloader.registerPageReadinessDelay(prom);
export default prom;
