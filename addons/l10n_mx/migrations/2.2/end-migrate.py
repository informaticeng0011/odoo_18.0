from odoo import api, SUPERUSER_ID


def migrate(cr, version):
    env = api.Environment(cr, SUPERUSER_ID, {})
    for company in env['res.company'].search([('chart_template', '=', 'mx')], order="parent_path"):
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        env['account.chart.template'].try_loading('mx', company)
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('mx', company, force_create=False)
>>>>>>> upstream/18.0
