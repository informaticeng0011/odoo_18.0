# Part of Odoo. See LICENSE file for full copyright and licensing details.
from datetime import datetime

from freezegun import freeze_time

from odoo.addons.account.tests.common import AccountTestInvoicingCommon
from odoo.tools import file_open
from odoo.tests import tagged


@tagged('post_install_l10n', 'post_install', '-at_install')
class TestMyUBLPint(AccountTestInvoicingCommon):

    @classmethod
    @AccountTestInvoicingCommon.setup_country('my')
    def setUpClass(cls):
        super().setUpClass()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0
=======
        cls.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'False')
>>>>>>> upstream/18.0

        cls.other_currency = cls.setup_other_currency('EUR')

        # TIN number is required
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        cls.company_data['company'].write({
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
=======
        cls.company_data['company'].partner_id.write({
>>>>>>> upstream/18.0
            'vat': 'C2584563200',
            'state_id': cls.env.ref('base.state_my_jhr').id,
            'street': 'that one street, 5',
            'city': 'Main city',
            'phone': '+60123456789',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563200',
>>>>>>> upstream/18.0
        })
        cls.partner_a.write({
            'vat': 'C2584563201',
            'country_id': cls.env.ref('base.my').id,
            'state_id': cls.env.ref('base.state_my_jhr').id,
            'street': 'that other street, 3',
            'city': 'Main city',
            'phone': '+60123456786',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
=======
            'peppol_eas': '0230',
            'peppol_endpoint': 'C2584563201',
>>>>>>> upstream/18.0
        })

        cls.fakenow = datetime(2024, 7, 15, 10, 00, 00)
        cls.startClassPatcher(freeze_time(cls.fakenow))

    def test_invoice_no_taxes(self):
        invoice = self.init_invoice('out_invoice', products=self.product_a, taxes=[])
        invoice.action_post()

        actual_xml, errors = self.env['account.edi.xml.pint_my']._export_invoice(invoice)
        self.assertFalse(errors)

        with file_open('l10n_my_ubl_pint/tests/expected_xmls/invoice_no_taxes.xml', 'rb') as f:
            expected_xml = f.read()

        self.assertXmlTreeEqual(
            self.get_xml_tree_from_string(actual_xml),
            self.get_xml_tree_from_string(expected_xml),
        )

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    def test_invoice_no_taxes_new(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')

        invoice = self.init_invoice('out_invoice', products=self.product_a, taxes=[])
        invoice.action_post()

        actual_xml, errors = self.env['account.edi.xml.pint_my']._export_invoice(invoice)
        self.assertFalse(errors)

        with file_open('l10n_my_ubl_pint/tests/expected_xmls/invoice_no_taxes_new.xml', 'rb') as f:
            expected_xml = f.read()

        self.assertXmlTreeEqual(
            self.get_xml_tree_from_string(actual_xml),
            self.get_xml_tree_from_string(expected_xml),
        )

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    def test_invoice_with_sst(self):
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
=======
    def test_invoice_with_sst(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
>>>>>>> upstream/18.0
        invoice = self.init_invoice('out_invoice', currency=self.other_currency, products=self.product_a)

        invoice.write({
            'invoice_incoterm_id': self.env.ref('account.incoterm_CFR').id,
        })

        self.company_data['company'].write({
            'sst_registration_number': 'A01-2345-67891012',
            'ttx_registration_number': '123-4567-89012345',
        })
        self.partner_a.commercial_partner_id.sst_registration_number = 'A01-2345-67891013'

        invoice.action_post()

        actual_xml, errors = self.env['account.edi.xml.pint_my']._export_invoice(invoice)
        self.assertFalse(errors)

        with file_open('l10n_my_ubl_pint/tests/expected_xmls/invoice_with_sst.xml', 'rb') as f:
            expected_xml = f.read()

        self.assertXmlTreeEqual(
            self.get_xml_tree_from_string(actual_xml),
            self.get_xml_tree_from_string(expected_xml),
        )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

    def test_invoice_with_sst_new(self):
        self.env['ir.config_parameter'].set_param('account_edi_ubl_cii.use_new_dict_to_xml_helpers', 'True')
        self.test_invoice_with_sst()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
