# Part of Odoo. See LICENSE file for full copyright and licensing details.
from odoo import api, SUPERUSER_ID


def migrate(cr, version):
    env = api.Environment(cr, SUPERUSER_ID, {})
    for company in env['res.company'].search([('chart_template', '=', 'cz')], order="parent_path"):
<<<<<<< HEAD
        env['account.chart.template'].try_loading('cz', company)
=======
        env['account.chart.template'].try_loading('cz', company, force_create=False)
>>>>>>> upstream/18.0
