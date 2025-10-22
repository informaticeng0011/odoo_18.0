from odoo import _, api, models
from odoo.exceptions import UserError


class StockPickingType(models.Model):
    _inherit = 'stock.picking.type'

    @api.onchange('sequence_code')
    def _onchange_sequence_code(self):
        if (
            self.company_id.account_fiscal_country_id.code == 'TR'
            and self.code == 'outgoing'
            and self.sequence_code
            and len(self.sequence_code) != 3
        ):
            raise UserError(_("Only 3 characters are allowed in the Sequence Prefix by GİB"))
        return super()._onchange_sequence_code()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

    def _get_action(self, action_xmlid):
        action = super()._get_action(action_xmlid)
        action['context']['restricted_picking_type_code'] = self.code
        return action
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
