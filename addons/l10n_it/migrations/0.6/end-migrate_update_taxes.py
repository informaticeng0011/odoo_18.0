# Part of Odoo. See LICENSE file for full copyright and licensing details.
from odoo import api, SUPERUSER_ID


def migrate(cr, version):
    env = api.Environment(cr, SUPERUSER_ID, {})
    for company in env['res.company'].search([('chart_template', '=', 'it')], order="parent_path"):
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        env['account.chart.template'].try_loading('it', company)
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('it', company, force_create=False)
>>>>>>> upstream/18.0
