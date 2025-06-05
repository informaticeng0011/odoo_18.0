<<<<<<< HEAD
import { models } from "@web/../tests/web_test_helpers";
=======
import { fields, models } from "@web/../tests/web_test_helpers";
>>>>>>> upstream/18.0

export class MailTestTrackAll extends models.ServerModel {
    _name = "mail.test.track.all";
    _inherit = ["mail.thread"];
<<<<<<< HEAD
=======

    float_field_with_digits = fields.Float({
        digits: [10, 8],
    });
>>>>>>> upstream/18.0
}
