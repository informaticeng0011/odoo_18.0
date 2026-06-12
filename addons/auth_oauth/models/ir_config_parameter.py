# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import models


class IrConfigParameter(models.Model):
    _inherit = 'ir.config_parameter'

    def init(self, force=False):
        super(IrConfigParameter, self).init(force=force)
        if force:
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
            oauth_oe = self.env.ref('auth_oauth.provider_openerp')
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
=======
            oauth_oe = self.env.ref('auth_oauth.provider_openerp', raise_if_not_found=False)
>>>>>>> upstream/18.0
            if not oauth_oe:
                return
            dbuuid = self.sudo().get_param('database.uuid')
            oauth_oe.write({'client_id': dbuuid})
