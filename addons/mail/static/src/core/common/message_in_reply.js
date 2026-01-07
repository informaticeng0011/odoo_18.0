import { Component, useState } from "@odoo/owl";

import { useService } from "@web/core/utils/hooks";
import { url } from "@web/core/utils/urls";

export class MessageInReply extends Component {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    static props = ["message", "onClick?"];
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
=======
    static props = ["class?", "message", "onClick?"];
    static defaultProps = { class: "" };
>>>>>>> upstream/18.0
    static template = "mail.MessageInReply";

    setup() {
        super.setup();
        this.store = useState(useService("mail.store"));
    }

    get authorAvatarUrl() {
        if (
            this.props.message.message_type &&
            this.props.message.message_type.includes("email") &&
            !["partner", "guest"].includes(this.props.message.author?.type)
        ) {
            return url("/mail/static/src/img/email_icon.png");
        }

        if (this.props.message.parentMessage.author) {
            return this.props.message.parentMessage.author.avatarUrl;
        }

        return this.store.DEFAULT_AVATAR;
    }
}
