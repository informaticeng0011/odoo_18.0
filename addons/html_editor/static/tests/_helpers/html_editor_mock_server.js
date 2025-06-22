import { registry } from "@web/core/registry";

const mockRegistry = registry.category("mock_rpc");

<<<<<<< HEAD
<<<<<<< HEAD
mockRegistry.add("/web/dataset/call_kw/res.lang/get_installed", async function (request) {
    return [["en_US", "English (US)"]];
=======
=======
>>>>>>> upstream/18.0
mockRegistry.add("get_installed", ({ model }) => {
    if (model === "res.lang") {
        return [["en_US", "English (US)"]];
    }
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
});
