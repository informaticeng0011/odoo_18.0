from odoo import api, models, _


class AccountMoveSend(models.AbstractModel):
    _inherit = 'account.move.send'

    @api.model
    def _is_gr_edi_applicable(self, move):
        return move.l10n_gr_edi_enable_send_invoices

    def _get_all_extra_edis(self) -> dict:
        # EXTENDS 'account'
        res = super()._get_all_extra_edis()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        res['gr_edi'] = {'label': _("MyDATA"), 'is_applicable': self._is_gr_edi_applicable}
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
=======
        res['gr_edi'] = {'label': _("myDATA"), 'is_applicable': self._is_gr_edi_applicable}
>>>>>>> upstream/18.0
        return res

    # -------------------------------------------------------------------------
    # ALERTS
    # -------------------------------------------------------------------------

    def _get_alerts(self, moves, moves_data):
        # EXTENDS 'account'
        alerts = super()._get_alerts(moves, moves_data)
        invoices_with_alert = moves.filtered('l10n_gr_edi_alerts')

        if len(invoices_with_alert) == 1:
            alerts = invoices_with_alert.l10n_gr_edi_alerts
        elif len(invoices_with_alert) > 1:
            alerts['l10n_gr_edi_not_ready_invoice'] = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                'message': _("The following invoice(s) are not ready to be sent to MyDATA: \n%s",
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
=======
                'message': _("The following invoice(s) are not ready to be sent to myDATA: \n%s",
>>>>>>> upstream/18.0
                             '\n'.join(f"- {move.display_name}" for move in invoices_with_alert)),
                'action_text': _("View Invoice(s)"),
                'action': invoices_with_alert._get_records_action(name=_("Check Invoice(s)")),
            }

        return alerts

    # -------------------------------------------------------------------------
    # SENDING METHODS
    # -------------------------------------------------------------------------

    def _call_web_service_before_invoice_pdf_render(self, invoices_data):
        # EXTENDS 'account'
        super()._call_web_service_before_invoice_pdf_render(invoices_data)

        invoices = self.env['account.move']
        for invoice, invoice_data in invoices_data.items():
            if 'gr_edi' in invoice_data['extra_edis']:
                invoices |= invoice

        # Send multiple invoice at once (if available) in one batch
        if invoices:
            invoices.l10n_gr_edi_try_send_invoices()

        for invoice, invoice_data in invoices_data.items():
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if invoice in invoices and invoice.l10n_gr_edi_state == 'invoice_error':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to MyDATA"),
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
=======
            if invoice in invoices and invoice.l10n_gr_edi_state != 'invoice_sent':
                invoice_data['error'] = {
                    'error_title': _("Error when sending invoice to myDATA"),
>>>>>>> upstream/18.0
                    'errors': [invoice.l10n_gr_edi_document_ids.sorted()[0].message],
                }
