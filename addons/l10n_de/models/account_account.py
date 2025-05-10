from odoo import models, _
from odoo.exceptions import UserError


class AccountAccount(models.Model):
    _inherit = ['account.account']

    def write(self, vals):
        if (
            'code' in vals
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            and 'DE' in self.company_ids.account_fiscal_country_id.mapped('code')
            and any(a.code != vals['code'] for a in self)
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            and self.env.company.account_fiscal_country_id.code == 'DE'
            and any(
                self.env.company in a.company_ids and a.code != vals['code']
                for a in self
            )
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
        ):
            if self.env['account.move.line'].search_count([('account_id', 'in', self.ids)], limit=1):
                raise UserError(_("You can not change the code of an account."))
        return super().write(vals)
