import { patch } from "@web/core/utils/patch";
import { SelfOrder } from "@pos_self_order/app/self_order_service";
import { session } from "@web/session";

patch(SelfOrder.prototype, {
    async setup(...args) {
        await super.setup(...args);
        this.onlinePaymentStatus = null;
        this.data.connectWebSocket("ONLINE_PAYMENT_STATUS", ({ status, data }) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            // Ignore updates for orders from other devices
            let order = this.models["pos.order"].find((o) => o.uuid === data["pos.order"][0].uuid);
            if (!order) {
                return;
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            this.models.loadData(data, [], false);
            this.onlinePaymentStatus = status;
            this.paymentError = status === "fail";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            const order = this.models["pos.order"].find(
                (o) => o.access_token === data["pos.order"][0].access_token
            );
            if (status === "success" && !this.currentOrder.access_token && order) {
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
            order = this.models["pos.order"].find(
                (o) => o.access_token === data["pos.order"][0].access_token
            );
            if (
                status === "success" &&
                !this.currentOrder.access_token &&
                order &&
                order.uuid === this.currentOrder.uuid
            ) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                this.confirmationPage("order", this.config.self_ordering_mode, order.access_token);
            }
        });
    },
    getOnlinePaymentUrl(
        { id: order_id, access_token: order_access_token, config_id: order_pos_config_id },
        exitRoute = true
    ) {
        const baseUrl = session.base_url;
        const order = this.currentOrder;
        let exitRouteUrl = baseUrl;

        if (exitRoute) {
            let table = "";
            exitRouteUrl += `/pos-self/${order_pos_config_id.id}`;

            if (this.config.self_ordering_pay_after === "each") {
                exitRouteUrl += `/confirmation/${order.access_token}/order`;
            }

            if (this.currentTable) {
                table = `&table_identifier=${this.currentTable.identifier}`;
            }

            exitRouteUrl += `?access_token=${this.access_token}${table}`;
        }

        const exit = encodeURIComponent(exitRouteUrl);
        return `${baseUrl}/pos/pay/${order_id}?access_token=${order_access_token}&exit_route=${exit}`;
    },
    filterPaymentMethods(pms) {
        const pm = super.filterPaymentMethods(...arguments);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
=======
        const pmIds = this.config.payment_method_ids.map((o) => o.id);
>>>>>>> upstream/18.0
        const online_pms = pms.filter(
            (rec) =>
                rec.is_online_payment &&
                (this.config.self_order_online_payment_method_id?.id === rec.id ||
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    (this.config.self_ordering_mode === "kiosk" &&
                        this.config.payment_method_ids.includes(rec.id)))
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
=======
                    (this.config.self_ordering_mode === "kiosk" && pmIds.includes(rec.id)))
>>>>>>> upstream/18.0
        );
        return [...new Set([...pm, ...online_pms])];
    },
});
