# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import fields, models


class EventSaleReport(models.Model):
    _inherit = 'event.sale.report'

    is_published = fields.Boolean('Published Events', readonly=True)

<<<<<<< HEAD
    def _select_clause(self, *select):
        return super()._select_clause('event_event.is_published as is_published', *select)
=======
    def _select_additional_fields(self):
        res = super()._select_additional_fields()
        res['is_published'] = 'event_event.is_published'
        return res
>>>>>>> upstream/18.0
