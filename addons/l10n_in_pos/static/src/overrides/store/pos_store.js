/** @odoo-module */

import { PosStore } from "@point_of_sale/app/store/pos_store";
import { patch } from "@web/core/utils/patch";

patch(PosStore.prototype, {
    getReceiptHeaderData() {
        return {
            ...super.getReceiptHeaderData(...arguments),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            partner: this.selectedOrder.partner_id,
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
=======
            partner: this.selectedOrder?.partner_id,
>>>>>>> upstream/18.0
        };
    },
});
