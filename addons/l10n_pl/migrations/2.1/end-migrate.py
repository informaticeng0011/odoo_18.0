from odoo import api, SUPERUSER_ID


def migrate(cr, version):
    env = api.Environment(cr, SUPERUSER_ID, {})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    for company in env['res.company'].search([('chart_template', '=', 'pl')], order="parent_path"):
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
=======
    for company in env['res.company'].search([('chart_template', '=', 'pl'), ('parent_id', '=', False)]):
>>>>>>> upstream/18.0
        Template = env['account.chart.template'].with_company(company)
        Template._load_data({'account.account': Template._get_account_account('pl')})
