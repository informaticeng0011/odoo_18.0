# Part of Odoo. See LICENSE file for full copyright and licensing details.

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
from odoo import api, models
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0
=======
from odoo import models
>>>>>>> upstream/18.0


class Expense(models.Model):
    _inherit = "hr.expense"

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
    @api.depends('sale_order_id')
    def _compute_analytic_distribution(self):
        super()._compute_analytic_distribution()
        if not self.env.context.get('project_id'):
            for expense in self:
                if not self.sale_order_id:
                    continue
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    def _compute_analytic_distribution(self):
        super()._compute_analytic_distribution()
        if not self.env.context.get('project_id'):
            for expense in self.filtered('sale_order_id'):
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
                expense.analytic_distribution = expense.sale_order_id.project_id._get_analytic_distribution()
