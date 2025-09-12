import { Composer } from "@mail/core/common/composer";
import { patch } from "@web/core/utils/patch";

patch(Composer.prototype, {
    get allowUpload() {
<<<<<<< HEAD
        const thread = this.thread ?? this.message.thread;
        return (
            super.allowUpload &&
            (thread.model !== "discuss.channel" ||
=======
        const thread = this.thread ?? this.message?.thread;
        return (
            super.allowUpload &&
            (thread?.model !== "discuss.channel" ||
>>>>>>> upstream/18.0
                thread?.allow_public_upload ||
                this.store.self.isInternalUser)
        );
    },
});
