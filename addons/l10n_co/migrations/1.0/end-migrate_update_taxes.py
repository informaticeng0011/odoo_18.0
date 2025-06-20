# Part of Odoo. See LICENSE file for full copyright and licensing details.
from odoo import api, SUPERUSER_ID


def migrate(cr, version):
    env = api.Environment(cr, SUPERUSER_ID, {})
<<<<<<< HEAD
<<<<<<< HEAD
    for company in env['res.company'].search([('chart_template', '=', 'co')]):
=======
    for company in env['res.company'].search([('chart_template', '=', 'co')], order="parent_path"):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'co')], order="parent_path"):
>>>>>>> upstream/18.0
        env['account.chart.template'].try_loading('co', company)
