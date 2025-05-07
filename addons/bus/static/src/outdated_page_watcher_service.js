import { browser } from "@web/core/browser/browser";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { deserializeDateTime } from "@web/core/l10n/dates";
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
import { _t } from "@web/core/l10n/translation";
import { rpc } from "@web/core/network/rpc";
import { registry } from "@web/core/registry";

const { DateTime } = luxon;
export class OutdatedPageWatcherService {
    constructor(env, services) {
        this.setup(env, services);
    }

    /**
     * @param {import("@web/env").OdooEnv}
     * @param {Partial<import("services").Services>} services
     */
    setup(env, { bus_service, multi_tab, notification }) {
        this.notification = notification;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const vacuumInfo = multi_tab.getSharedValue("bus.autovacuum_info");
        this.lastAutovacuumDt = vacuumInfo ? deserializeDateTime(vacuumInfo.lastcall) : null;
        this.nextAutovacuumDt = vacuumInfo ? deserializeDateTime(vacuumInfo.nextcall) : null;
        this.lastDisconnectDt = null;
        this.closeNotificationFn;
        bus_service.addEventListener("disconnect", () => (this.lastDisconnectDt = DateTime.now()));
        bus_service.addEventListener("reconnect", async () => {
            if (!multi_tab.isOnMainTab() || !this.lastDisconnectDt) {
                return;
            }
            if (!this.lastAutovacuumDt || DateTime.now() >= this.nextAutovacuumDt) {
                const { lastcall, nextcall } = await rpc(
                    "/bus/get_autovacuum_info",
                    {},
                    { silent: true }
                );
                this.lastAutovacuumDt = deserializeDateTime(lastcall);
                this.nextAutovacuumDt = deserializeDateTime(nextcall);
                multi_tab.setSharedValue("bus.autovacuum_info", { lastcall, nextcall });
            }
            if (this.lastDisconnectDt <= this.lastAutovacuumDt) {
                this.showOutdatedPageNotification();
            }
        });
        multi_tab.bus.addEventListener("shared_value_updated", ({ detail: { key, newValue } }) => {
            if (key !== "bus.autovacuum_info") {
                return;
            }
            const infos = JSON.parse(newValue);
            this.lastAutovacuumDt = deserializeDateTime(infos.lastcall);
            this.nextAutovacuumDt = deserializeDateTime(infos.nextcall);
            if (this.lastDisconnectDt <= this.lastAutovacuumDt) {
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
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
=======
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
=======
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
=======
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
=======
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
=======
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
=======
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
=======
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
=======
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
=======
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
=======
        this.multi_tab = multi_tab;
>>>>>>> upstream/18.0
        this.lastNotificationId = null;
        /** @deprecated */
        this.lastDisconnectDt = null;
        this.closeNotificationFn;
<<<<<<< HEAD
<<<<<<< HEAD
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
        this.multi_tab = multi_tab;
        this.lastNotificationId = multi_tab.getSharedValue("last_notification_id");
        /** @deprecated */
        this.lastDisconnectDt = null;
        this.closeNotificationFn;
>>>>>>> upstream/18.0
        let wasBusAlreadyConnected;
        bus_service.addEventListener(
            "worker_state_updated",
            ({ detail: state }) => {
                wasBusAlreadyConnected = state !== "IDLE";
            },
            { once: true }
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        bus_service.addEventListener("disconnect", () => {
            this.lastNotificationId = bus_service.lastNotificationId;
            this.lastDisconnectDt = DateTime.now();
        });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        bus_service.addEventListener("reconnect", async () => {
            if (!multi_tab.isOnMainTab()) {
                return;
            }
            const hasMissedNotifications = await rpc(
                "/bus/has_missed_notifications",
                { last_notification_id: this.lastNotificationId },
                { silent: true }
            );
            if (hasMissedNotifications) {
                this.showOutdatedPageNotification();
                multi_tab.setSharedValue("bus.has_missed_notifications", Date.now());
            }
        });
        multi_tab.bus.addEventListener("shared_value_updated", ({ detail: { key } }) => {
            if (key === "bus.has_missed_notifications") {
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
        bus_service.addEventListener("disconnect", () => {
            this.lastNotificationId = multi_tab.getSharedValue("last_notification_id");
            this.lastDisconnectDt = DateTime.now();
        });
>>>>>>> upstream/18.0
        bus_service.addEventListener("connect", async () => {
            if (wasBusAlreadyConnected) {
                this.checkHasMissedNotifications();
            }
            wasBusAlreadyConnected = true;
        });
        bus_service.addEventListener("reconnect", () => this.checkHasMissedNotifications());
        multi_tab.bus.addEventListener("shared_value_updated", ({ detail: { key } }) => {
            if (key === "bus.has_missed_notifications") {
<<<<<<< HEAD
<<<<<<< HEAD
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
                this.showOutdatedPageNotification();
            }
        });
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
    async checkHasMissedNotifications() {
        if (!this.multi_tab.isOnMainTab()) {
            return;
        }
        const hasMissedNotifications = await rpc(
            "/bus/has_missed_notifications",
            { last_notification_id: this.lastNotificationId },
            { silent: true }
        );
        if (hasMissedNotifications) {
            this.showOutdatedPageNotification();
            this.multi_tab.setSharedValue("bus.has_missed_notifications", Date.now());
        }
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    showOutdatedPageNotification() {
        this.closeNotificationFn?.();
        this.closeNotificationFn = this.notification.add(
            _t("Save your work and refresh to get the latest updates and avoid potential issues."),
            {
                title: _t("The page is out of date"),
                type: "warning",
                sticky: true,
                buttons: [
                    {
                        name: _t("Refresh"),
                        primary: true,
                        onClick: () => browser.location.reload(),
                    },
                ],
            }
        );
    }
}

export const outdatedPageWatcherService = {
    dependencies: ["bus_service", "multi_tab", "notification"],
    start(env, services) {
        return new OutdatedPageWatcherService(env, services);
    },
};

registry.category("services").add("bus.outdated_page_watcher", outdatedPageWatcherService);
