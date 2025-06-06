import { mailModels } from "@mail/../tests/mail_test_helpers";
import { fields } from "@web/../tests/web_test_helpers";
<<<<<<< HEAD
import { DEFAULT_MAIL_VIEW_ID } from "@mail/../tests/mock_server/mock_models/constants";

export class ResFake extends mailModels.ResFake {
    _views = {
        [`form,${DEFAULT_MAIL_VIEW_ID}`]: /* xml */ `
            <form>
                <field name="duration" widget="mrp_timer" readonly="1"/>
            </form>`,
    }
    duration = fields.Float({ string: "duration" });
=======

export class ResFake extends mailModels.ResFake {
    duration = fields.Float({ string: "duration" });

    _views = {
        form: /* xml */ `
            <form>
                <field name="duration" widget="mrp_timer" readonly="1"/>
            </form>`,
    };
>>>>>>> upstream/18.0
}
