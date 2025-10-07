/* @odoo-module */

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
=======
import { Domain } from "@web/core/domain";
>>>>>>> upstream/18.0
import { ActivityMenu } from "@mail/core/web/activity_menu";
import { patch } from "@web/core/utils/patch";

patch(ActivityMenu.prototype, {
    availableViews(group) {
        if (group.model === "crm.lead") {
            return [
                [false, "list"],
                [false, "kanban"],
                [false, "form"],
                [false, "calendar"],
                [false, "pivot"],
                [false, "graph"],
                [false, "activity"],
            ];
        }
        return super.availableViews(...arguments);
    },

    openActivityGroup(group, filter = "all") {
        // fetch the data from the button otherwise fetch the ones from the parent (.o_ActivityMenuView_activityGroup).
        const context = {};
        if (group.model === "crm.lead") {
            this.dropdown.close();
            if (filter === "my") {
                context["search_default_activities_overdue"] = 1;
                context["search_default_activities_today"] = 1;
            } else {
                context["search_default_activities_" + filter] = 1;
            }
            // Necessary because activity_ids of mail.activity.mixin has auto_join
            // So, duplicates are faking the count and "Load more" doesn't show up
            context["force_search_count"] = 1;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
=======
            context["active_test"] = 0; // to show lost leads in the activity
>>>>>>> upstream/18.0
            this.action.doAction("crm.crm_lead_action_my_activities", {
                additionalContext: context,
                clearBreadcrumbs: true,
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
            this.action.loadAction("crm.crm_lead_action_my_activities").then((action) => {
                // to show lost leads in the activity
                action.domain = Domain.and([
                    action.domain || [],
                    [["active", "in", [true, false]]],
                ]).toList();
                this.action.doAction(action, {
                    additionalContext: context,
                    clearBreadcrumbs: true,
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            });
        } else {
            return super.openActivityGroup(group, filter);
        }
    },
});
