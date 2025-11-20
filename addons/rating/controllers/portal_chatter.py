# Part of Odoo. See LICENSE file for full copyright and licensing details.

<<<<<<< HEAD
from odoo.osv import expression

=======
>>>>>>> upstream/18.0
from odoo.addons.portal.controllers import mail


class PortalChatter(mail.PortalChatter):
<<<<<<< HEAD

    def _get_non_empty_message_domain(self):
        return expression.OR(
            [super()._get_non_empty_message_domain(), [("rating_value", "!=", False)]]
        )
=======
    pass
>>>>>>> upstream/18.0
