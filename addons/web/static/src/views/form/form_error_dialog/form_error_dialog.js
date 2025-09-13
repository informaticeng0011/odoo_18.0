import { Dialog } from "@web/core/dialog/dialog";
import { useService } from "@web/core/utils/hooks";

import { Component } from "@odoo/owl";

export class FormErrorDialog extends Component {
    static template = "web.FormErrorDialog";
    static components = { Dialog };
    static props = {
        message: { type: String, optional: true },
        data: { type: Object },
        onDiscard: Function,
        onStayHere: Function,
<<<<<<< HEAD
<<<<<<< HEAD
=======
        onRedirect: { type: Function, optional: true },
>>>>>>> upstream/18.0
=======
        onRedirect: { type: Function, optional: true },
>>>>>>> upstream/18.0
        close: Function,
    };

    setup() {
        this.action = useService("action");
        this.message = this.props.message;
        if (this.props?.data.name === "odoo.exceptions.RedirectWarning") {
            this.message = this.props.data.arguments[0];
            this.redirectAction = this.props.data.arguments[1];
            this.redirectBtnLabel = this.props.data.arguments[2];
<<<<<<< HEAD
<<<<<<< HEAD
        }
    }

    onRedirectBtnClicked() {
        this.action.doAction(this.redirectAction);
        this.stay();
=======
=======
>>>>>>> upstream/18.0
            this.additionalContext = this.props.data.arguments[3];
        }
    }

    async onRedirectBtnClicked() {
        if (this.props.onRedirect) {
            await this.props.onRedirect({
                action: this.redirectAction,
                additionalContext: this.additionalContext,
            });
            this.props.close();
        } else {
            await this.action.doAction(this.redirectAction, {
                additionalContext: this.additionalContext,
            });
            this.stay();
        }
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    }

    async discard() {
        await this.props.onDiscard();
        this.props.close();
    }

    async stay() {
        await this.props.onStayHere();
        this.props.close();
    }
}
