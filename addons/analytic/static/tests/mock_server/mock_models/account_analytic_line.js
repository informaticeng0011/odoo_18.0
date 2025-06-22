<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { models } from "@web/../tests/web_test_helpers";

export class AccountAnalyticLine extends models.ServerModel {
    _name = "account.analytic.line";
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
import { models, fields } from "@web/../tests/web_test_helpers";

export class AccountAnalyticLine extends models.ServerModel {
    _name = "account.analytic.line";

    amount = fields.Float()
    account_id = fields.Many2one({ relation: "account.analytic.account" })
    x_plan122_id = fields.Many2one({ string: "State", relation: "account.analytic.account" })
    x_plan122_id_1 = fields.Many2one({ string: "Continent", relation: "account.analytic.plan" })
    x_plan122_id_2 = fields.Many2one({ string: "Country ", relation: "account.analytic.plan" })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
}
