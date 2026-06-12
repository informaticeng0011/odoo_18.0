/** @odoo-module */

import { RelationalModel } from "@web/model/relational_model/relational_model";
import { Record } from "@web/model/relational_model/record";
import { makeActiveField } from "@web/model/relational_model/utils";

export class ProjectTaskKanbanDynamicGroupList extends RelationalModel.DynamicGroupList {
    get isGroupedByStage() {
        return !!this.groupByField && this.groupByField.name === "stage_id";
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

    async _unlinkGroups(groups) {
        if (this.groupByField.name === "stage_id") {
            const action = await this.model.orm.call(
                this.groupByField.relation,
                'unlink_wizard',
                groups.map((g) => g.value),
                { context: this.context },
            );
            return new Promise((resolve) => {
                this.model.action.doAction(action, {
                    onClose: ({ success }) => resolve(!!success),
                });
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
        return super._unlinkGroups();
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
=======
        return super._unlinkGroups(groups);
    }
>>>>>>> upstream/18.0
}

export class ProjectTaskRecord extends Record {
    setup() {
        super.setup(...arguments);
        this.displaySubtasks = false;
        this.canSaveOnUpdate = true;
    }

    async toggleSubtasksList() {
        const { display_name, project_id, state, user_ids } = this.config.fields;
        const activeField = makeActiveField({ onChange: true });
        activeField.related = {
            activeFields: {
                display_name: makeActiveField(),
                state: makeActiveField(),
                user_ids: makeActiveField(),
                project_id: makeActiveField(),
            },
            fields: {
                display_name,
                project_id,
                state,
                user_ids,
            },
        };
        await this._load({
            activeFields: { ...this.config.activeFields, child_ids: activeField },
        });
        this.displaySubtasks = !this.displaySubtasks;
    }
}

export class ProjectTaskKanbanModel extends RelationalModel {
    async _webReadGroup(config, firstGroupByName, orderBy) {
        config.context = {
            ...config.context,
            project_kanban: true,
        };
        return super._webReadGroup(...arguments);
    }
}

ProjectTaskKanbanModel.DynamicGroupList = ProjectTaskKanbanDynamicGroupList;
ProjectTaskKanbanModel.Record = ProjectTaskRecord;
