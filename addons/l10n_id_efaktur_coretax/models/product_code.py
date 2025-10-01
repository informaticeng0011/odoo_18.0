# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models
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
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0
=======
from odoo.osv import expression
>>>>>>> upstream/18.0

class EfakturProductCode(models.Model):
    _name = "l10n_id_efaktur_coretax.product.code"
    _description = "Product categorization according to E-Faktur"
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
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0
=======
    _rec_name = "code"
>>>>>>> upstream/18.0

    code = fields.Char()
    description = fields.Text()

    @api.depends('code', 'description')
    def _compute_display_name(self):
        for record in self:
            record.display_name = f"{record.code} - {record.description}"
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

    @api.model
    def _name_search(self, name, domain=None, operator='ilike', limit=None, order=None):
        domain = domain or []

        # Try to reverse the `name_get` structure
        parts = name.split(' - ')
        if len(parts) == 2:
            name_domain = [('code', operator, parts[0]), ('description', operator, parts[1])]
            return self._search(expression.AND([name_domain, domain]), limit=limit)

        if name and operator == 'ilike':
            name_domain = ['|',
                ('code', operator, name),
                ('description', operator, name),
            ]
            return self._search(expression.AND([name_domain, domain]), limit=limit)

        return super()._name_search(name=name, domain=domain, operator=operator, limit=limit, order=order)
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
