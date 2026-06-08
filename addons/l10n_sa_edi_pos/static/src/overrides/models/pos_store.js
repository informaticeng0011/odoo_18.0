import { PosStore } from "@point_of_sale/app/store/pos_store";
import { qrCodeSrc } from "@point_of_sale/utils";
import { patch } from "@web/core/utils/patch";

patch(PosStore.prototype, {
    getReceiptHeaderData(order) {
        const result = super.getReceiptHeaderData(...arguments);
        if (order && order.isSACompany && !result.is_settlement) {
            // is_settlement is assigned in super l10n_sa_pos
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            result.not_legal =
                !order.l10n_sa_invoice_qr_code_str || order.l10n_sa_invoice_edi_state !== "sent";
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
=======
            result.not_legal = !order.l10n_sa_invoice_qr_code_str;
>>>>>>> upstream/18.0
            result.qr_code = result.not_legal ? "" : qrCodeSrc(order.l10n_sa_invoice_qr_code_str);
        }
        return result;
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

    getSyncAllOrdersContext() {
        const context = super.getSyncAllOrdersContext(...arguments);
        // For SA companies, defer PDF generation to avoid blocking checkout on wkhtmltopdf.
        // ZATCA EDI (clearance/reporting) is still processed synchronously on the server.
        if (this.company.country_id?.code === "SA") {
            context.generate_pdf = false;
        }
        return context;
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
});
