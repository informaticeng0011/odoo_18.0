import { Thread } from "@mail/core/common/thread_model";

import { patch } from "@web/core/utils/patch";

patch(Thread.prototype, {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    setup() {
        super.setup();
        this.selectedRating;
        this.rating_stats;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    getFetchParams() {
        const params = super.getFetchParams(...arguments);
        if (this.model !== "discuss.channel") {
            params["rating_include"] = true;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
        }
        return params;
    },
});
