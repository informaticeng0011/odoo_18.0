import { SuggestionService } from "@mail/core/common/suggestion_service";

import { patch } from "@web/core/utils/patch";

patch(SuggestionService.prototype, {
    async fetchPartners(term, thread, { abortSignal } = {}) {
        if (thread.model === "project.task") {
            const suggestedPartners = await this.makeOrmCall(
                "project.task",
                "get_mention_suggestions",
                [thread.id],
                { search: term },
                { abortSignal }
            );
            this.store.insert(suggestedPartners);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            const suggestedPartnersIds = suggestedPartners["res.partner"].map(
                (partner) => partner.id
            );
            thread.limitedMentions = Object.values(this.store.Persona.records).filter((persona) =>
                suggestedPartnersIds.includes(persona.id)
            );
=======
            thread.limitedMentions = suggestedPartners["res.partner"];
>>>>>>> upstream/18.0
=======
            thread.limitedMentions = suggestedPartners["res.partner"];
>>>>>>> upstream/18.0
=======
            thread.limitedMentions = suggestedPartners["res.partner"];
>>>>>>> upstream/18.0
=======
            thread.limitedMentions = suggestedPartners["res.partner"];
>>>>>>> upstream/18.0
=======
            thread.limitedMentions = suggestedPartners["res.partner"];
>>>>>>> upstream/18.0
=======
            thread.limitedMentions = suggestedPartners["res.partner"];
>>>>>>> upstream/18.0
=======
            thread.limitedMentions = suggestedPartners["res.partner"];
>>>>>>> upstream/18.0
=======
            thread.limitedMentions = suggestedPartners["res.partner"];
>>>>>>> upstream/18.0
=======
            thread.limitedMentions = suggestedPartners["res.partner"];
>>>>>>> upstream/18.0
=======
            thread.limitedMentions = suggestedPartners["res.partner"];
>>>>>>> upstream/18.0
        }
        return super.fetchPartners(...arguments);
    },

    getPartnerSuggestions(thread) {
        if (thread.model === "project.task") {
            return thread.limitedMentions;
        }
        return super.getPartnerSuggestions(...arguments);
    },
});
