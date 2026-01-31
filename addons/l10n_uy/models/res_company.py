# Part of Odoo. See LICENSE file for full copyright and licensing details.
from odoo import models


class ResCompany(models.Model):

    _inherit = 'res.company'

    def _localization_use_documents(self):
        """ Uruguayan localization use documents """
        self.ensure_one()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
=======
        return self.chart_template == 'uy' or self.account_fiscal_country_id.code == "UY" or super()._localization_use_documents()
>>>>>>> upstream/18.0
