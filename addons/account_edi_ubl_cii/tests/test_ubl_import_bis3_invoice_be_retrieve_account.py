from odoo.addons.account_edi_ubl_cii.tests.test_ubl_import_bis3_invoice_be import TestUblImportBis3InvoiceBE
from odoo.tests import tagged

from freezegun import freeze_time


@tagged('post_install_l10n', 'post_install', '-at_install')
class TestUblImportBis3InvoiceBERetrieveAccount(TestUblImportBis3InvoiceBE):

    @freeze_time('2020-01-01')
    def test_partial_import_account_invoice_predictive(self):
        self.ensure_installed('account_accountant')

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        account = self.company_data['default_account_revenue'].copy()

        # First invoice to train the prediction.
        self._create_invoice_one_line(
            name="turlututu",
            price_unit=1.0,
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
        account = self.company_data['default_account_revenue'].copy(default={'name': "turlututu"})
        product = self._create_product(name='turlututu', barcode='12345678912345')

        # Invoice to train the prediction.
        # We also make an exact match with the name to ensure the prediction will
        # also retrieve the product. This is made that way to avoid the call to
        # '_get_most_frequent_account_for_partner' in '_compute_account_id'.
        self._create_invoice_one_line(
            name="turlututu",
            product_id=product,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            account_id=account.id,
            partner_id=self.partner_be,
            post=True,
        )

        # Check the prediction.
        invoice = self._import_invoice_as_attachment_on(
            test_name='test_partial_import_account_invoice_predictive',
            journal=self.company_data['default_journal_sale'],
        )
        self.assertRecordValues(invoice, [{'partner_id': self.partner_be.id}])
        self.assertRecordValues(invoice.invoice_line_ids, [{
            'name': "turlutututu",
            'account_id': account.id,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
=======
            'product_id': product.id,
>>>>>>> upstream/18.0
        }])
