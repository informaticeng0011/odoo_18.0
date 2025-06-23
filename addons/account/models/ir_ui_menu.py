from odoo import models


class IrUiMenu(models.Model):
    _inherit = 'ir.ui.menu'

    def _load_menus_blacklist(self):
        res = super()._load_menus_blacklist()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if not any(company.check_account_audit_trail for company in self.env.user.company_ids):
            res.append(self.env.ref('account.account_audit_trail_menu').id)
=======
        menu = self.env.ref('account.account_audit_trail_menu', raise_if_not_found=False)
        if menu and not any(company.check_account_audit_trail for company in self.env.user.company_ids):
            res.append(menu.id)
>>>>>>> upstream/18.0
=======
        menu = self.env.ref('account.account_audit_trail_menu', raise_if_not_found=False)
        if menu and not any(company.check_account_audit_trail for company in self.env.user.company_ids):
            res.append(menu.id)
>>>>>>> upstream/18.0
=======
        menu = self.env.ref('account.account_audit_trail_menu', raise_if_not_found=False)
        if menu and not any(company.check_account_audit_trail for company in self.env.user.company_ids):
            res.append(menu.id)
>>>>>>> upstream/18.0
=======
        menu = self.env.ref('account.account_audit_trail_menu', raise_if_not_found=False)
        if menu and not any(company.check_account_audit_trail for company in self.env.user.company_ids):
            res.append(menu.id)
>>>>>>> upstream/18.0
=======
        menu = self.env.ref('account.account_audit_trail_menu', raise_if_not_found=False)
        if menu and not any(company.check_account_audit_trail for company in self.env.user.company_ids):
            res.append(menu.id)
>>>>>>> upstream/18.0
=======
        menu = self.env.ref('account.account_audit_trail_menu', raise_if_not_found=False)
        if menu and not any(company.check_account_audit_trail for company in self.env.user.company_ids):
            res.append(menu.id)
>>>>>>> upstream/18.0
        return res
