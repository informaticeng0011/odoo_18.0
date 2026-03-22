import { deduceUrl } from "@point_of_sale/utils";
import { _t } from "@web/core/l10n/translation";

export function openCustomerDisplay(
    displayDeviceIp,
    accessToken,
    configId,
    notificationService = undefined
) {
    if (!displayDeviceIp) {
        return;
    }

    notificationService?.add(_t("Connecting to the IoT Box"));
    fetch(`${deduceUrl(displayDeviceIp)}/hw_proxy/customer_facing_display`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        targetAddressSpace: "local",
>>>>>>> upstream/18.0
=======
        targetAddressSpace: "local",
>>>>>>> upstream/18.0
=======
        targetAddressSpace: "local",
>>>>>>> upstream/18.0
=======
        targetAddressSpace: "local",
>>>>>>> upstream/18.0
=======
        targetAddressSpace: "local",
>>>>>>> upstream/18.0
=======
        targetAddressSpace: "local",
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        body: JSON.stringify({
            params: {
                action: "open",
                access_token: accessToken,
                pos_id: configId,
            },
        }),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
=======
        targetAddressSpace: odoo.use_lna ? "local" : undefined,
>>>>>>> upstream/18.0
    })
        .then(() => {
            notificationService?.add(_t("Connection successful"), { type: "success" });
        })
        .catch(() => {
            notificationService?.add(_t("Connection failed"), { type: "danger" });
        });
}
