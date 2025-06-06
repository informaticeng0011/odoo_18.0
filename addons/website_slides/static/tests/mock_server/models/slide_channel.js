import { models } from "@web/../tests/web_test_helpers";
<<<<<<< HEAD
import { DEFAULT_MAIL_VIEW_ID } from "@mail/../tests/mock_server/mock_models/constants";
=======
>>>>>>> upstream/18.0

export class SlideChannel extends models.ServerModel {
    _name = "slide.channel";
    _views = {
<<<<<<< HEAD
        [`form,${DEFAULT_MAIL_VIEW_ID}`]: `
=======
        form: /* xml */ `
>>>>>>> upstream/18.0
            <form>
                <chatter/>
            </form>
        `,
    };
}
