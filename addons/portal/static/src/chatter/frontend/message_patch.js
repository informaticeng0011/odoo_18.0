import { Message } from "@mail/core/common/message";

import { patch } from "@web/core/utils/patch";

patch(Message.prototype, {
    get authorAvatarUrl() {
        if (this.message.author_avatar_url) {
            return this.message.author_avatar_url;
        }
        if (this.message.thread.access_token) {
            return `/mail/avatar/mail.message/${this.message.id}/author_avatar/50x50?access_token=${this.message.thread.access_token}`;
        }
        return super.authorAvatarUrl;
    },
<<<<<<< HEAD
=======

    get shouldHideFromMessageListOnDelete() {
        return this.env.inFrontendPortalChatter || super.shouldHideFromMessageListOnDelete;
    },
>>>>>>> upstream/18.0
});
