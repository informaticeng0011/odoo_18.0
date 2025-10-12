import { Store } from "@mail/core/common/store_service";
import { patch } from "@web/core/utils/patch";

/** @type {import("models").Store} */
const storeServicePatch = {
    get onlineMemberStatuses() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return super.onlineMemberStatuses + ["leave_online", "leave_away"];
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
=======
        return [...super.onlineMemberStatuses, "leave_online", "leave_away"];
>>>>>>> upstream/18.0
    },
};

patch(Store.prototype, storeServicePatch);
