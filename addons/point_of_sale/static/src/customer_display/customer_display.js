<<<<<<< HEAD
import { Component, useState, whenReady } from "@odoo/owl";
=======
import { Component, useEffect, useState, whenReady } from "@odoo/owl";
>>>>>>> upstream/18.0
import { OdooLogo } from "@point_of_sale/app/generic_components/odoo_logo/odoo_logo";
import { OrderWidget } from "@point_of_sale/app/generic_components/order_widget/order_widget";
import { Orderline } from "@point_of_sale/app/generic_components/orderline/orderline";
import { MainComponentsContainer } from "@web/core/main_components_container";
import { session } from "@web/session";
import { useService } from "@web/core/utils/hooks";
import { mountComponent } from "@web/env";
<<<<<<< HEAD
=======
import { CustomerFacingQR } from "./customer_facing_qr";

function useSingleDialog() {
    let close = null;
    const dialog = useService("dialog");
    return {
        open(dialogClass, props) {
            // If the dialog is already open, we don't want to open a new one
            if (!close) {
                close = dialog.add(dialogClass, props, {
                    onClose: () => {
                        close = null;
                    },
                });
            }
        },
        close() {
            close?.();
        },
    };
}
>>>>>>> upstream/18.0

export class CustomerDisplay extends Component {
    static template = "point_of_sale.CustomerDisplay";
    static components = { OdooLogo, OrderWidget, Orderline, MainComponentsContainer };
    static props = [];
<<<<<<< HEAD
=======

>>>>>>> upstream/18.0
    setup() {
        this.session = session;
        this.dialog = useService("dialog");
        this.order = useState(useService("customer_display_data"));
<<<<<<< HEAD
    }
}
=======
        const singleDialog = useSingleDialog();

        useEffect(
            (qrPaymentData) => {
                if (qrPaymentData) {
                    singleDialog.open(CustomerFacingQR, qrPaymentData);
                } else {
                    singleDialog.close();
                }
            },
            () => [this.order.qrPaymentData]
        );
    }
}

>>>>>>> upstream/18.0
whenReady(() => mountComponent(CustomerDisplay, document.body));
