/** @odoo-module */

import { patch } from "@web/core/utils/patch";
import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
import { SelectCreateDialog } from "@web/views/view_dialogs/select_create_dialog";

patch(ControlButtons.prototype, {
    onClickQuotation() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        let domain = [
            ["state", "!=", "cancel"],
            ["invoice_status", "!=", "invoiced"],
            ["currency_id", "=", this.pos.currency.id],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
=======
            ["amount_unpaid", ">", 0],
>>>>>>> upstream/18.0
        ];
        if (this.pos.get_order()?.get_partner()) {
            domain = [
                ...domain,
                [
                    "partner_id",
                    "any",
                    [["id", "child_of", [this.pos.get_order().get_partner().id]]],
                ],
            ];
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        this.dialog.add(SelectCreateDialog, {
            resModel: "sale.order",
            noCreate: true,
            multiSelect: false,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            domain: [
                ["state", "!=", "cancel"],
                ["invoice_status", "!=", "invoiced"],
                ["currency_id", "=", this.pos.currency.id],
            ],
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
=======
            domain,
>>>>>>> upstream/18.0
            onSelected: async (resIds) => {
                await this.pos.onClickSaleOrder(resIds[0]);
            },
        });
    },
});
