import RatingPopupComposer from "@portal_rating/js/portal_rating_composer";
<<<<<<< HEAD
=======
import { _t } from "@web/core/l10n/translation";
>>>>>>> upstream/18.0

RatingPopupComposer.include({
    _update_options: function (data) {
        this._super(...arguments);
        this.options.force_submit_url =
            data.force_submit_url ||
            (this.options.default_message_id && "/slides/mail/update_comment");
    },
<<<<<<< HEAD
=======
    _reloadRatingPopupComposer: function () {
        this._super(...arguments);
        if (this.options.res_model !== "slide.channel") {
            return;
        }
        const reviewEl = document.querySelector("#review-tab");
        if (reviewEl) {
            reviewEl.textContent = this.rating_count
                ? _t("Reviews (%s)", this.rating_count)
                : _t("Reviews");
        }
    },
>>>>>>> upstream/18.0
});
