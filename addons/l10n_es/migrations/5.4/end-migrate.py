from odoo import api, SUPERUSER_ID


def migrate(cr, version):
    env = api.Environment(cr, SUPERUSER_ID, {})
    for company in env['res.company'].search([('chart_template', 'like', r'es\_%')], order="parent_path"):
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        env['account.chart.template'].try_loading(company.chart_template, company)
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading(company.chart_template, company, force_create=False)
>>>>>>> upstream/18.0
