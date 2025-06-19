<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { memoize } from "@web/core/utils/functions";
import { useAutofocus, useService } from "@web/core/utils/hooks";
import { ModelFieldSelectorPopover } from "@web/core/model_field_selector/model_field_selector_popover";
import { Component, onWillStart, useState } from "@odoo/owl";
import { user } from "@web/core/user";

const allowedQwebExpressions = memoize(async (model, orm) => {
    return await orm.call(model, "mail_allowed_qweb_expressions");
});
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
import { useAutofocus } from "@web/core/utils/hooks";
import { ModelFieldSelectorPopover } from "@web/core/model_field_selector/model_field_selector_popover";
import { Component, onWillStart, useState } from "@odoo/owl";
import { user } from "@web/core/user";
import { registry } from "@web/core/registry";

const allowedQwebExpressionsService = {
    dependencies: ["orm"],
    start(env, { orm }) {
        const cache = new Map();
        return (resModel) => {
            if (cache.has(resModel)) {
                return cache.get(resModel);
            }
            const prom = orm.call(resModel, "mail_allowed_qweb_expressions").catch((e) => {
                cache.delete(resModel);
                return Promise.reject(e);
            });
            cache.set(resModel, prom);
            return prom;
        };
    },
};
registry.category("services").add("allowed_qweb_expressions", allowedQwebExpressionsService);
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

export class DynamicPlaceholderPopover extends Component {
    static template = "web.DynamicPlaceholderPopover";
    static components = {
        ModelFieldSelectorPopover,
    };
    static props = ["resModel", "validate", "close"];

    setup() {
        useAutofocus();
        this.state = useState({
            path: "",
            isPathSelected: false,
            defaultValue: "",
        });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.orm = useService("orm");

        onWillStart(async () => {
            [this.isTemplateEditor, this.allowedQwebExpressions] = await Promise.all([
                user.hasGroup("mail.group_mail_template_editor"),
                // (only the first element is the cache key)
                allowedQwebExpressions(this.props.resModel, this.orm),
            ]);
        });
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
        onWillStart(() => this._loadAllowedExpressions());
    }

    async _loadAllowedExpressions() {
        const getAllowedQwebExpressions = this.env.services["allowed_qweb_expressions"];
        [this.isTemplateEditor, this.allowedQwebExpressions] = await Promise.all([
            user.hasGroup("mail.group_mail_template_editor"),
            getAllowedQwebExpressions(this.props.resModel),
        ]);
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
    }

    filter(fieldDef, path) {
        const fullPath = `object${path ? `.${path}` : ""}.${fieldDef.name}`;
        if (!this.isTemplateEditor && !this.allowedQwebExpressions.includes(fullPath)) {
            return false;
        }
        return !["one2many", "boolean", "many2many"].includes(fieldDef.type) && fieldDef.searchable;
    }
    closeFieldSelector(isPathSelected = false) {
        if (isPathSelected) {
            this.state.isPathSelected = true;
            return;
        }
        this.props.close();
    }
    setPath(path, fieldInfo) {
        this.state.path = path;
        this.state.fieldName = fieldInfo?.string;
    }
    setDefaultValue(value) {
        this.state.defaultValue = value;
    }
    validate() {
        this.props.validate(this.state.path, this.state.defaultValue);
        this.props.close();
    }

    onBack() {
        this.state.defaultValue = "";
        this.state.isPathSelected = false;
        this.state.path = "";
    }

    // @TODO should rework this to use hotkeys
    async onInputKeydown(ev) {
        switch (ev.key) {
            case "Enter": {
                this.validate();
                ev.stopPropagation();
                ev.preventDefault();
                break;
            }
            case "Escape": {
                this.props.close();
                break;
            }
        }
    }
}
