from odoo import api, models
from odoo.addons.website.models import ir_http
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
from odoo.http import request
>>>>>>> upstream/18.0
=======
from odoo.http import request
>>>>>>> upstream/18.0
=======
from odoo.http import request
>>>>>>> upstream/18.0
=======
from odoo.http import request
>>>>>>> upstream/18.0
=======
from odoo.http import request
>>>>>>> upstream/18.0


class IrRule(models.Model):
    _inherit = 'ir.rule'

    @api.model
    def _eval_context(self):
        res = super(IrRule, self)._eval_context()

        # We need is_frontend to avoid showing website's company items in backend
        # (that could be different than current company). We can't use
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        # `get_current_website(falback=False)` as it could also return a website
        # in backend (if domain set & match)..
        is_frontend = ir_http.get_request_website()
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        # `get_current_website(fallback=False)` as it could also return a
        # website in backend (if domain set & match).
        #
        # Additionally, during early request phases (e.g. access rule evaluation
        # in `_pre_dispatch`), `request.website` is not yet initialized.
        # However, `request.is_frontend` is already set by `_match`, so we use
        # it as a fallback to reliably detect frontend requests.
        is_frontend = ir_http.get_request_website() or request and getattr(request, 'is_frontend', False)
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
        Website = self.env['website']
        res['website'] = is_frontend and Website.get_current_website() or Website
        return res

    def _compute_domain_keys(self):
        """ Return the list of context keys to use for caching ``_compute_domain``. """
        return super(IrRule, self)._compute_domain_keys() + ['website_id']
