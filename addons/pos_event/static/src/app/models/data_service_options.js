import { DataServiceOptions } from "@point_of_sale/app/models/data_service_options";
import { patch } from "@web/core/utils/patch";

patch(DataServiceOptions.prototype, {
    get databaseTable() {
        return {
            ...super.databaseTable,
            "event.registration": {
                key: "id",
                condition: (record) => {
                    return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        !record.pos_order_line_id || record.pos_order_line_id?.order_id?.finalized
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        !record.pos_order_line_id ||
                        record.pos_order_line_id?.order_id?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
                    );
                },
            },
            "event.registration.answer": {
                key: "id",
                condition: (record) => {
                    return (
                        !record.registration_id ||
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        record.registration_id?.pos_order_line_id?.order_id?.finalized
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
=======
                        record.registration_id?.pos_order_line_id?.order_id
                            ?.canBeRemovedFromIndexedDB
>>>>>>> upstream/18.0
                    );
                },
            },
        };
    },
    get dynamicModels() {
        return [...super.dynamicModels, "event.registration", "event.registration.answer"];
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
=======
    get pohibitedAutoLoadedModels() {
        return [...super.pohibitedAutoLoadedModels, "event.registration"];
    },
>>>>>>> upstream/18.0
});
