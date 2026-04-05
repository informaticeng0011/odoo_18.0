from odoo import models


class AccountEdiXmlUBLRO(models.AbstractModel):
    _inherit = "account.edi.xml.ubl_ro"

    def _get_invoice_line_item_vals(self, line, taxes_vals):
        vals = super()._get_invoice_line_item_vals(line, taxes_vals)
        vals['commodity_classification_vals'] = [{
            'item_classification_code': line.product_id.cpv_code_id.code,
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
            'item_classification_attrs': {'listID': 'CPV'},
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
=======
            'item_classification_attrs': {'listID': 'STI'},
>>>>>>> upstream/18.0
        }]
        return vals
