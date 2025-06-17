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
import odoo
import odoo.tests
import logging

_logger = logging.getLogger(__name__)


@odoo.tests.common.tagged('post_install', '-at_install')
class TestSnippets(odoo.tests.HttpCase):
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
from odoo.tests.common import tagged
from odoo.addons.base.tests.common import HttpCaseWithUserPortal


@tagged('post_install', '-at_install')
class TestSnippets(HttpCaseWithUserPortal):
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

    def test_01_donation(self):
        payment_demo = self.env['ir.module.module']._get('payment_demo')
        if payment_demo.state != 'installed':
            self.skipTest("payment_demo module is not installed")

        demo_provider = self.env['payment.provider'].search([('code', '=', "demo")])
        demo_provider.write({'state': 'test'})
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
        self.env.ref('base.user_admin').partner_id.country_id = self.env.ref('base.be')
        self.start_tour("/?enable_editor=1", "donation_snippet_edition", login='admin')
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
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
        self.start_tour("/", "donation_snippet_use", login="portal")
>>>>>>> upstream/18.0
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

        belgium = self.env.ref('base.be')

        self.env.ref('base.user_admin').write({
            'country_id': belgium.id,
            'email': 'mitchell.admin@example.com',
        })
        self.env.company.write({
            'email': 'no-reply@company.com',
        })

        self.user_portal.country_id = belgium.id

        self.start_tour("/?enable_editor=1", "donation_snippet_edition", login='admin')
        self.start_tour("/", "donation_snippet_use", login="portal")
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
