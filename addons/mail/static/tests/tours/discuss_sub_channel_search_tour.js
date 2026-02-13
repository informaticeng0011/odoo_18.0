<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { contains, dragenterFiles, dropFiles, scroll } from "@web/../tests/utils";
import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add("test_discuss_sub_channel_search", {
    steps: () => [
        {
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
import { SubChannelList } from "@mail/discuss/core/public_web/sub_channel_list";

import { status } from "@odoo/owl";

import { registry } from "@web/core/registry";
import { Deferred } from "@web/core/utils/concurrency";
import { patch } from "@web/core/utils/patch";
import { effect } from "@web/core/utils/reactive";
import { contains, dragenterFiles, dropFiles, scroll } from "@web/../tests/utils";

let waitForLoadMoreToDisappearDef;
registry.category("web_tour.tours").add("test_discuss_sub_channel_search", {
    steps: () => [
        {
            trigger: "body",
            run() {
                patch(SubChannelList.prototype, {
                    setup() {
                        super.setup(...arguments);
                        effect(
                            (state) => {
                                if (status(this) === "destroyed") {
                                    return;
                                }
                                if (!state.isVisible) {
                                    waitForLoadMoreToDisappearDef?.resolve();
                                }
                            },
                            [this.loadMoreState]
                        );
                    },
                });
            },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            trigger: "button[title='Threads']",
            run: "click",
        },
        {
            trigger: ".o-mail-SubChannelList",
            async run() {
                // 30 newest sub channels are loaded initially.
                for (let i = 99; i > 69; i--) {
                    await contains(".o-mail-SubChannelList-thread", {
                        text: `Sub Channel ${i}`,
                    });
                    await contains(".o-mail-SubChannelList-thread", { count: 30 });
                }
            },
        },
        {
            trigger: ".o-mail-ActionPanel:has(.o-mail-SubChannelList) .o_searchview_input",
            run: "edit Sub Channel 10",
        },
        {
            trigger:
                ".o-mail-ActionPanel:has(.o-mail-SubChannelList) button[aria-label='Search button']",
            run: "click",
        },
        {
            trigger: ".o-mail-SubChannelList-thread:contains(Sub Channel 10)",
            async run() {
                await contains(".o-mail-SubChannelList-thread", { count: 1 });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
            },
        },
        {
            trigger: ".o_searchview_input",
            run: "clear",
        },
        {
            trigger: ".o-mail-SubChannelList-thread:contains(Sub Channel 99)",
            async run() {
                await contains(".o-mail-SubChannelList-thread", { count: 31 });
                // Already fetched sub channels are shown in addition to the one
                // that was fetched during the search.
                for (let i = 99; i > 69; i--) {
                    await contains(".o-mail-SubChannelList-thread", {
                        text: `Sub Channel ${i}`,
                    });
                }
                await contains(".o-mail-SubChannelList-thread", { text: `Sub Channel 10` });
                // Ensure lazy loading is still working after a search.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
                await scroll(".o-mail-ActionPanel:has(.o-mail-SubChannelList)", "bottom");
            },
        },
        {
            trigger: ".o-mail-SubChannelList-thread:contains(Sub Channel 40)",
            async run() {
                await contains(".o-mail-SubChannelList-thread", { count: 61 });
                for (let i = 99; i > 39; i--) {
                    await contains(".o-mail-SubChannelList-thread", {
                        text: `Sub Channel ${i}`,
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
                waitForLoadMoreToDisappearDef = new Deferred();
>>>>>>> upstream/18.0
                await scroll(".o-mail-ActionPanel:has(.o-mail-SubChannelList)", "bottom");
            },
        },
        {
            trigger: ".o-mail-SubChannelList-thread:contains(Sub Channel 11)",
            async run() {
                await contains(".o-mail-SubChannelList-thread", { count: 90 });
                for (let i = 99; i > 9; i--) {
                    await contains(".o-mail-SubChannelList-thread", {
                        text: `Sub Channel ${i}`,
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
=======
                await waitForLoadMoreToDisappearDef;
>>>>>>> upstream/18.0
                await scroll(".o-mail-ActionPanel:has(.o-mail-SubChannelList)", "bottom");
            },
        },
        {
            trigger: ".o-mail-SubChannelList-thread:contains(Sub Channel 0)",
            async run() {
                await contains(".o-mail-SubChannelList-thread", { count: 100 });
                for (let i = 99; i > 0; i--) {
                    await contains(".o-mail-SubChannelList-thread", {
                        text: `Sub Channel ${i}`,
                    });
                }
            },
        },
    ],
});

registry.category("web_tour.tours").add("create_thread_for_attachment_without_body", {
    steps: () => [
        {
            content: "Open general channel",
            trigger: '.o-mail-DiscussSidebarChannel-itemName:contains("general")',
            run: "click",
        },
        {
            content: "Drop a file",
            trigger: ".o-mail-Discuss-main",
            async run() {
                const files = [new File(["hi there"], "file2.txt", { type: "text/plain" })];
                await dragenterFiles(".o-mail-Discuss-main", files);
                await dropFiles(".o-Dropzone", files);
            },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            content: "Click on send button",
            trigger: ".o-mail-Composer-send",
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            trigger: '.o-mail-AttachmentCard:not(.o-isUploading):contains("file2.txt")',
        },
        {
            content: "Click on send button",
            trigger: ".o-mail-Composer-send:enabled",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            run: "click",
        },
        {
            content: "Hover on attachment",
            trigger: '.o-mail-Message .o-mail-AttachmentCard:contains("file2.txt")',
            run: "hover",
        },
        {
            content: "Click on expand button",
            trigger: '.o-mail-Message [title="Expand"]',
            run: "click",
        },
        {
            content: "Create a new thread",
            trigger: '.o-dropdown-item:contains("Create Thread")',
            run: "click",
        },
        {
            content: "Check a new thread is created",
            trigger: '.o-mail-Discuss:contains("New Thread")',
        },
    ],
});
