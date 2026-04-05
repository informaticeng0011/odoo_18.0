import odoo
from odoo.addons.web.tests.test_js import unit_test_error_checker


@odoo.tests.tagged("post_install", "-at_install")
class ExternalTestSuite(odoo.tests.HttpCase):
    def test_external_livechat(self):
        # webclient external test suite
        self.browser_js(
            "/web/tests/livechat?headless&loglevel=2&preset=desktop",
            "",
            "",
            login='admin',
            timeout=1800,
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
            success_signal="[HOOT] test suite succeeded",
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
=======
            success_signal="[HOOT] Test suite succeeded",
>>>>>>> upstream/18.0
            error_checker=unit_test_error_checker
        )
