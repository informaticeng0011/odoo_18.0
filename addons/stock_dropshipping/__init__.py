# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from . import models
<<<<<<< HEAD
=======


def uninstall_hook(env):
    # Uninstalling the module will archive the dropshipping picking type.
    env['stock.picking.type'].search([('code', '=', 'dropship')]).active = False
>>>>>>> upstream/18.0
