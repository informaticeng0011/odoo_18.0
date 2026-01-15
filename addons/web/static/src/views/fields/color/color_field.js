import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { standardFieldProps } from "../standard_field_props";
<<<<<<< HEAD
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
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0
=======
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0
=======
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0
=======
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0
=======
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0
=======
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0
=======
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0
=======
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0
=======
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0
=======
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0

export class ColorField extends Component {
    static template = "web.ColorField";
    static props = {
        ...standardFieldProps,
<<<<<<< HEAD
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
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
=======
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
=======
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
=======
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
=======
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
=======
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
=======
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
=======
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
=======
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
=======
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
    };

    get color() {
        return this.props.record.data[this.props.name] || "";
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

    onChange(ev) {
        this.props.record.update(
            { [this.props.name]: ev.target.value },
            { save: this.props.autosave }
        );
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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

export const colorField = {
    component: ColorField,
    supportedTypes: ["char"],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    extractProps(fieldInfo, dynamicInfo) {
        return {
            readonly: dynamicInfo.readonly,
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
    extractProps({ viewType, options }, dynamicInfo) {
        let autosave = false;
        if ("autosave" in options) {
            autosave = exprToBoolean(options.autosave);
        } else if (["list", "kanban"].includes(viewType)) {
            autosave = true;
        }
        return {
            readonly: dynamicInfo.readonly,
            autosave,
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
        };
    },
};

registry.category("fields").add("color", colorField);
