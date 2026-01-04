import { Message } from "@mail/core/common/message";
import { convertBrToLineBreak } from "@mail/utils/common/format";

import { rpc } from "@web/core/network/rpc";
import { patch } from "@web/core/utils/patch";

patch(Message.prototype, {
    setup() {
        super.setup(...arguments);
        this.state.editRating = false;
    },

    get ratingValue() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return this.message.rating_id?.rating || this.message.rating_value;
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
=======
        return this.message.rating_value || this.message.rating_id?.rating;
>>>>>>> upstream/18.0
    },

    onClikEditComment() {
        this.state.editRating = !this.state.editRating;
        if (this.state.editRating) {
            const messageContent = convertBrToLineBreak(
                this.props.message.rating.publisher_comment
            );
            this.props.message.composer = {
                message: this.props.message,
                text: messageContent,
                portalComment: true,
                selection: {
                    start: messageContent.length,
                    end: messageContent.length,
                    direction: "none",
                },
            };
        }
    },

    exitEditCommentMode() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
=======
        this.props.message.composer.clear();
>>>>>>> upstream/18.0
        this.message.composer = null;
        this.state.editRating = false;
    },

    async deleteComment() {
        const data = await rpc("/website/rating/comment", {
            rating_id: this.message.rating.id,
            publisher_comment: "",
        });
        this.message.rating = data;
    },
});
