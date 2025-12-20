import { _t } from "@web/core/l10n/translation";
import { PaymentInterface } from "@point_of_sale/app/payment/payment_interface";
import { AlertDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { sprintf } from "@web/core/utils/strings";
import { roundPrecision } from "@web/core/utils/numbers";
import { uuidv4 } from "@point_of_sale/utils";

// Due to consistency issues with the webhook, we also poll
// the status of the payment periodically as a fallback.
const POLLING_INTERVAL_MS = 5000;

export class PaymentVivaWallet extends PaymentInterface {
    /*
     Developer documentation:
    https://developer.vivawallet.com/apis-for-point-of-sale/card-terminals-devices/rest-api/eft-pos-api-documentation/
    */

    setup() {
        super.setup(...arguments);
        this.paymentLineResolvers = {};
    }
    send_payment_request(uuid) {
        super.send_payment_request(uuid);
        return this._viva_wallet_pay(uuid);
    }
    send_payment_cancel(order, uuid) {
        super.send_payment_cancel(order, uuid);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return this._viva_wallet_cancel();
    }
    pending_viva_wallet_line() {
        return this.pos.getPendingPaymentLine("viva_wallet");
    }

    _call_viva_wallet(data, action) {
        return this.env.services.orm.silent
            .call("pos.payment.method", action, [[this.payment_method_id.id], data])
            .catch(this._handle_odoo_connection_failure.bind(this));
    }

    _handle_odoo_connection_failure(data = {}) {
        // handle timeout
        var line = this.pending_viva_wallet_line();
        if (line) {
            line.set_payment_status("retry");
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
        return this._viva_wallet_cancel(order, uuid);
    }

    _call_viva_wallet(data, action, paymentLine) {
        return this.env.services.orm.silent
            .call("pos.payment.method", action, [[this.payment_method_id.id], data])
            .catch(this._handle_odoo_connection_failure.bind(this, paymentLine));
    }

    _handle_odoo_connection_failure(paymentLine, data = {}) {
        // handle timeout
        if (!paymentLine.is_done()) {
            paymentLine.set_payment_status("retry");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        }
        this._show_error(
            _t(
                "Could not connect to the Odoo server, please check your internet connection and try again."
            )
        );

        return Promise.reject(data); // prevent subsequent onFullFilled's from being called
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    _viva_wallet_handle_response(response) {
        var line = this.pending_viva_wallet_line();
        line.set_payment_status("waitingCard");
        if (response.error) {
            this._show_error(response.error);
        }
        return this.waitForPaymentConfirmation();
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
    _viva_wallet_handle_response(response, paymentLine) {
        paymentLine.set_payment_status("waitingCard");
        if (response.error) {
            this._show_error(response.error);
        }
        return this.waitForPaymentConfirmation(paymentLine);
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    _viva_wallet_handle_response(response, paymentLine) {
        if (response.error) {
            this._show_error(response.error);
            return false;
        }
        return this.waitForPaymentConfirmation(paymentLine);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    }

    _viva_wallet_pay() {
        /**
         * Override
         */
        super.send_payment_request(...arguments);
        var order = this.pos.get_order();
        var line = order.get_selected_paymentline();
        let customerTrns = " ";
        line.set_payment_status("waitingCard");

        if (line.amount < 0) {
            this._show_error(_t("Cannot process transactions with negative amount."));
            return false;
        }

        if (order.partner) {
            customerTrns = order.partner.name + " - " + order.partner.email;
        }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        line.sessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.sessionId,
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
=======
        line.uiState.vivaSessionId = order.uuid + " - " + uuidv4();
        var data = {
            sessionId: line.uiState.vivaSessionId,
>>>>>>> upstream/18.0
            terminalId: line.payment_method_id.viva_wallet_terminal_id,
            cashRegisterId: this.pos.get_cashier().name,
            amount: roundPrecision(line.amount * 100),
            currencyCode: this.pos.currency.iso_numeric.toString(),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            merchantReference: line.sessionId + "/" + this.pos.session.id,
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
=======
            merchantReference: line.uiState.vivaSessionId + "/" + this.pos.session.id,
>>>>>>> upstream/18.0
            customerTrns: customerTrns,
            preauth: false,
            maxInstalments: 0,
            tipAmount: 0,
        };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return this._call_viva_wallet(data, "viva_wallet_send_payment_request").then((data) => {
            return this._viva_wallet_handle_response(data);
        });
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
        return this._call_viva_wallet(data, "viva_wallet_send_payment_request", line).then(
            (data) => {
                return this._viva_wallet_handle_response(data, line);
            }
        );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    }

    async _viva_wallet_cancel(order, uuid) {
        /**
         * Override
         */
        super.send_payment_cancel(...arguments);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const line = this.pos.get_order().get_selected_paymentline();

        var data = {
            sessionId: line.sessionId,
            cashRegisterId: this.pos.get_cashier().name,
        };
        return this._call_viva_wallet(data, "viva_wallet_send_payment_cancel").then((data) => {
            if (data.error) {
                this._show_error(data.error);
            }
            return true;
        });
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
        const line = order.get_paymentline_by_uuid(uuid);

        var data = {
            sessionId: line.uiState.vivaSessionId,
            cashRegisterId: this.pos.get_cashier().name,
        };
        return this._call_viva_wallet(data, "viva_wallet_send_payment_cancel", line).then(
            (data) => {
                if (data.error) {
                    this._show_error(data.error);
                }
                return true;
            }
        );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    }

    /**
     * This method is called from pos_bus when the payment
     * confirmation from Viva Wallet is received via the webhook and confirmed in the retrieve_session_id.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    async handleVivaWalletStatusResponse() {
        var line = this.pending_viva_wallet_line();
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
=======
    async handleVivaWalletStatusResponse(paymentLine) {
>>>>>>> upstream/18.0
        const notification = await this.env.services.orm.silent.call(
            "pos.payment.method",
            "get_latest_viva_wallet_status",
            [[this.payment_method_id.id]]
        );

        if (!notification) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            this._handle_odoo_connection_failure();
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
=======
    handleVivaWalletStatusResponse(paymentLine, notification) {
        if (!notification) {
            this._handle_odoo_connection_failure(paymentLine);
>>>>>>> upstream/18.0
            return;
        }

        const isPaymentSuccessful = this.isPaymentSuccessful(notification);
        if (isPaymentSuccessful) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            this.handleSuccessResponse(line, notification);
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
=======
            this.handleSuccessResponse(paymentLine, notification);
>>>>>>> upstream/18.0
        } else {
            this._show_error(sprintf(_t("Message from Viva Wallet: %s"), notification.error));
        }

        // when starting to wait for the payment response we create a promise
        // that will be resolved when the payment response is received.
        // In case this resolver is lost ( for example on a refresh ) we
        // we use the handle_payment_response method on the payment line
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const resolver = this.paymentLineResolvers?.[line.uuid];
        if (resolver) {
            this.paymentLineResolvers[line.uuid] = null;
            resolver(isPaymentSuccessful);
        } else {
            line.handle_payment_response(isPaymentSuccessful);
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
        const resolver = this.paymentLineResolvers?.[paymentLine.uuid];
        if (resolver) {
            this.paymentLineResolvers[paymentLine.uuid] = null;
            resolver(isPaymentSuccessful);
        } else {
            paymentLine.handle_payment_response(isPaymentSuccessful);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        }
    }

    isPaymentSuccessful(notification) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return (
            notification &&
            notification.sessionId == this.pending_viva_wallet_line().sessionId &&
            notification.success
        );
    }

    waitForPaymentConfirmation() {
        return new Promise((resolve) => {
            const paymentLine = this.pending_viva_wallet_line();
            const sessionId = paymentLine.sessionId;
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
        return notification && notification.success;
    }

    waitForPaymentConfirmation(paymentLine) {
        return new Promise((resolve) => {
            const sessionId = paymentLine.uiState.vivaSessionId;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            this.paymentLineResolvers[paymentLine.uuid] = resolve;
            const intervalId = setInterval(async () => {
                const isPaymentStillValid = () =>
                    this.paymentLineResolvers[paymentLine.uuid] &&
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    this.pending_viva_wallet_line()?.sessionId === sessionId &&
                    paymentLine.payment_status === "waitingCard";
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
=======
                    paymentLine.payment_status === "waitingCard" &&
                    sessionId === paymentLine.uiState.vivaSessionId;
>>>>>>> upstream/18.0
                if (!isPaymentStillValid()) {
                    clearInterval(intervalId);
                    return;
                }

                const result = await this._call_viva_wallet(
                    sessionId,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    "viva_wallet_get_payment_status"
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
=======
                    "viva_wallet_get_payment_status",
                    paymentLine
>>>>>>> upstream/18.0
                );
                if ("success" in result && isPaymentStillValid()) {
                    clearInterval(intervalId);
                    if (this.isPaymentSuccessful(result)) {
                        this.handleSuccessResponse(paymentLine, result);
                        resolve(true);
                    } else {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
=======
                        this._show_error(_t("Message from Viva Wallet: %s", result.message));
>>>>>>> upstream/18.0
                        resolve(false);
                    }
                    this.paymentLineResolvers[paymentLine.uuid] = null;
                }
            }, POLLING_INTERVAL_MS);
        });
    }

    handleSuccessResponse(line, notification) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        line.transaction_id = notification.transactionId;
        line.card_type = notification.applicationLabel;
        line.cardholder_name = notification.FullName || "";
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
=======
        line.transaction_id = notification.transaction_id;
        line.card_type = notification.card_type;
        line.cardholder_name = notification.cardholder_name;
>>>>>>> upstream/18.0
    }

    _show_error(msg, title) {
        if (!title) {
            title = _t("Viva Wallet Error");
        }
        this.env.services.dialog.add(AlertDialog, {
            title: title,
            body: msg,
        });
    }
}
