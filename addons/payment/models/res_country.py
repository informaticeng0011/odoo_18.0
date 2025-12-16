# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models
<<<<<<< HEAD
import odoo.addons.payment_stripe as stripe  # prevent circular import error with payment_stripe
=======
try:
    import odoo.addons.payment_stripe as stripe  # prevent circular import error with payment_stripe
except ModuleNotFoundError:
    stripe = None
>>>>>>> upstream/18.0


class ResCountry(models.Model):
    _inherit = 'res.country'

    is_stripe_supported_country = fields.Boolean(compute='_compute_is_stripe_supported_country')

    @api.depends('code')
    def _compute_is_stripe_supported_country(self):
        for country in self:
<<<<<<< HEAD
            country.is_stripe_supported_country = stripe.const.COUNTRY_MAPPING.get(
                country.code, country.code
            ) in stripe.const.SUPPORTED_COUNTRIES
=======
            country.is_stripe_supported_country = (
                stripe is not None
                and stripe.const.COUNTRY_MAPPING.get(
                    country.code, country.code
                ) in stripe.const.SUPPORTED_COUNTRIES
            )
>>>>>>> upstream/18.0
