import { serializeDateTime } from "@web/core/l10n/dates";
import { registry } from "@web/core/registry";

<<<<<<< HEAD
registry.category("mock_rpc").add("/bus/get_autovacuum_info", () => ({
    lastcall: serializeDateTime(luxon.DateTime.now().minus({ days: 1 }).toUTC()),
    nextcall: serializeDateTime(luxon.DateTime.now().plus({ days: 1 }).toUTC()),
}));
=======
registry
    .category("mock_rpc")
    .add("/bus/get_autovacuum_info", () => ({
        lastcall: serializeDateTime(luxon.DateTime.now().minus({ days: 1 }).toUTC()),
        nextcall: serializeDateTime(luxon.DateTime.now().plus({ days: 1 }).toUTC()),
    }))
    .add("/bus/has_missed_notifications", () => false);
>>>>>>> upstream/18.0
