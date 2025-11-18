import { Composer } from "@mail/core/common/composer";

import { patch } from "@web/core/utils/patch";
<<<<<<< HEAD

patch(Composer.prototype, {
=======
import { onWillStart } from "@odoo/owl";

patch(Composer.prototype, {
    setup() {
        super.setup();
        onWillStart(() => {
            if (!this.thread.id) {
                this.state.active = false;
            }
        });
    },

>>>>>>> upstream/18.0
    get extraData() {
        const extraData = super.extraData;
        if (this.env.projectSharingId) {
            extraData.project_sharing_id = this.env.projectSharingId;
        }
        return extraData;
    },

    get isSendButtonDisabled() {
        if (this.thread && !this.thread.id) {
            return true;
        }
        return super.isSendButtonDisabled;
    },

    get allowUpload() {
        if (this.thread && !this.thread.id) {
            return false;
        }
        return super.allowUpload;
    },
});
