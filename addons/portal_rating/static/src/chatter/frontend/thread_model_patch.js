import { Thread } from "@mail/core/common/thread_model";

import { patch } from "@web/core/utils/patch";

patch(Thread.prototype, {
<<<<<<< HEAD
=======
    setup() {
        super.setup();
        this.selectedRating;
        this.rating_stats;
    }, 

>>>>>>> upstream/18.0
    getFetchParams() {
        const params = super.getFetchParams(...arguments);
        if (this.model !== "discuss.channel") {
            params["rating_include"] = true;
<<<<<<< HEAD
=======
            if (this.selectedRating) {
                params["rating_value"] = this.selectedRating;
            }
>>>>>>> upstream/18.0
        }
        return params;
    },
});
