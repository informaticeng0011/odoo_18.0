import { DiscussClientAction } from "@mail/core/public_web/discuss_client_action";
import { WelcomePage } from "@mail/discuss/core/public/welcome_page";
import { useState } from "@odoo/owl";
import { browser } from "@web/core/browser/browser";
import { patch } from "@web/core/utils/patch";

DiscussClientAction.components = { ...DiscussClientAction.components, WelcomePage };
patch(DiscussClientAction.prototype, {
    setup() {
        super.setup(...arguments);
        this.publicState = useState({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            welcome: this.store.shouldDisplayWelcomeViewInitially,
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
=======
            welcome: this.store.shouldDisplayWelcomeView,
>>>>>>> upstream/18.0
        });
        if (this.store.isChannelTokenSecret) {
            // Change the URL to avoid leaking the invitation link.
            browser.history.replaceState(
                browser.history.state,
                null,
                `/discuss/channel/${this.store.discuss_public_thread.id}${browser.location.search}`
            );
        }
        browser.addEventListener("popstate", () => this.restoreDiscussThread(this.props));
    },
    getActiveId() {
        const currentURL = new URL(browser.location);
        if (!/\/discuss\/channel\/\d+$/.test(currentURL.pathname)) {
            return null;
        }
        return `discuss.channel_${currentURL.pathname.split("/")[3]}`;
    },
    async restoreDiscussThread() {
        await super.restoreDiscussThread(...arguments);
        this.publicState.welcome ||=
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            this.store.discuss.thread?.defaultDisplayMode === "video_full_screen";
    },
    closeWelcomePage() {
        this.publicState.welcome = false;
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            this.store.shouldDisplayWelcomeView ??
            this.store.discuss.thread?.defaultDisplayMode === "video_full_screen";
        this.store.shouldDisplayWelcomeView = this.publicState.welcome;
    },
    closeWelcomePage() {
        this.publicState.welcome = false;
        this.store.shouldDisplayWelcomeView = false;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    },
});
