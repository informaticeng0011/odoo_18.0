from odoo import fields, models


class AccountFiscalPosition(models.Model):
    _inherit = 'account.fiscal.position'

    l10n_gr_edi_preferred_classification_ids = fields.One2many(
        comodel_name='l10n_gr_edi.preferred_classification',
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
        string='Preferred MyDATA Classification',
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
=======
        string='Preferred myDATA Classification',
>>>>>>> upstream/18.0
        inverse_name='fiscal_position_id',
    )
