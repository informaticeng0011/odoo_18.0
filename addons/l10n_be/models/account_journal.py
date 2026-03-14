# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
from odoo import fields, models


class AccountJournal(models.Model):
    _inherit = 'account.journal'

<<<<<<< HEAD
    invoice_reference_model = fields.Selection(selection_add=[
        ('be', 'Belgium')
        ], ondelete={'be': lambda recs: recs.write({'invoice_reference_model': 'odoo'})})
=======
    invoice_reference_model = fields.Selection(
        selection_add=[('be', 'Belgium')],
        ondelete={'be': lambda recs: recs.write({'invoice_reference_model': 'odoo'})}
    )
>>>>>>> upstream/18.0
