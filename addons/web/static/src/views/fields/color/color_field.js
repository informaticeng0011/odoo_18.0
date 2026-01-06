import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { standardFieldProps } from "../standard_field_props";
<<<<<<< HEAD
=======
import { exprToBoolean } from "@web/core/utils/strings";
>>>>>>> upstream/18.0

export class ColorField extends Component {
    static template = "web.ColorField";
    static props = {
        ...standardFieldProps,
<<<<<<< HEAD
=======
        autosave: { type: Boolean, optional: true },
>>>>>>> upstream/18.0
    };

    get color() {
        return this.props.record.data[this.props.name] || "";
    }
<<<<<<< HEAD
=======

    onChange(ev) {
        this.props.record.update(
            { [this.props.name]: ev.target.value },
            { save: this.props.autosave }
        );
    }
>>>>>>> upstream/18.0
}

export const colorField = {
    component: ColorField,
    supportedTypes: ["char"],
<<<<<<< HEAD
    extractProps(fieldInfo, dynamicInfo) {
        return {
            readonly: dynamicInfo.readonly,
=======
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
>>>>>>> upstream/18.0
        };
    },
};

registry.category("fields").add("color", colorField);
