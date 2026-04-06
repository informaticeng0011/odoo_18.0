from odoo import models

class DecimalPrecision(models.Model):
    _inherit = 'decimal.precision'

    def precision_get(self, application):
        stackmap = self.env.cr.cache.get('account_disable_recursion_stack', {})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if application == 'Discount' and stackmap.get('ignore_discount_precision'):
            return 100
=======
        if stackmap.get('ignore_discount_precision') and application in ('Discount', 'Product Unit of Measure'):
            return 14
>>>>>>> upstream/18.0
=======
        if stackmap.get('ignore_discount_precision') and application in ('Discount', 'Product Unit of Measure'):
            return 14
>>>>>>> upstream/18.0
=======
        if stackmap.get('ignore_discount_precision') and application in ('Discount', 'Product Unit of Measure'):
            return 14
>>>>>>> upstream/18.0
        return super().precision_get(application)
