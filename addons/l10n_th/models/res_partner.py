# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
from odoo import models, fields

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> upstream/18.0
class ResPartner(models.Model):
    _inherit = "res.partner"

    l10n_th_branch_name = fields.Char(compute="_compute_l10n_th_branch_name")

    def _compute_l10n_th_branch_name(self):
        for partner in self:
            if not partner.is_company or partner.country_code != 'TH':
                partner.l10n_th_branch_name = ""
            else:
                code = partner.company_registry
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                partner.l10n_th_branch_name = f"Branch {code}" if code else "Headquarter"
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
=======
                partner.l10n_th_branch_name = partner.env._("Branch %(code)s", code=code) if code else partner.env._(
                    "Headquarter")
>>>>>>> upstream/18.0
