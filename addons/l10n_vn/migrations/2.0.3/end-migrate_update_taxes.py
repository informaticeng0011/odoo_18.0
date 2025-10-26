from odoo import api, SUPERUSER_ID


def migrate(cr, version):
    env = api.Environment(cr, SUPERUSER_ID, {})
    for company in env['res.company'].search([('chart_template', '=', 'vn')], order="parent_path"):
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        env['account.chart.template'].try_loading('vn', company)
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
        env['account.chart.template'].try_loading('vn', company, force_create=False)
>>>>>>> upstream/18.0
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        ChartTemplate = env['account.chart.template'].with_company(company)
        data = {
            'account.tax.group': ChartTemplate._get_account_tax_group(company.chart_template),
            'account.tax': ChartTemplate._get_account_tax(company.chart_template)
        }
        ChartTemplate._pre_reload_data(company, {}, data, force_create=False)
        ChartTemplate._load_data(data)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
