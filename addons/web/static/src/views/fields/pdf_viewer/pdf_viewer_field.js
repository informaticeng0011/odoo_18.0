import { _t } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { url } from "@web/core/utils/urls";
import { standardFieldProps } from "../standard_field_props";
import { FileUploader } from "../file_handler";

import { Component, onWillUpdateProps, useState } from "@odoo/owl";

export class PdfViewerField extends Component {
    static template = "web.PdfViewerField";
    static components = {
        FileUploader,
    };
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
=======
        fileNameField: { type: String, optional: true },
>>>>>>> upstream/18.0
    };

    setup() {
        this.notification = useService("notification");
        this.state = useState({
            isValid: true,
            objectUrl: "",
        });
        onWillUpdateProps((nextProps) => {
            if (nextProps.readonly) {
                this.state.objectUrl = "";
            }
        });
    }

    get url() {
        if (!this.state.isValid || !this.props.record.data[this.props.name]) {
            return null;
        }
        const page = this.props.record.data[`${this.props.name}_page`] || 1;
        const file = encodeURIComponent(
            this.state.objectUrl ||
                url("/web/content", {
                    model: this.props.record.resModel,
                    field: this.props.name,
                    id: this.props.record.resId,
                })
        );
        return `/web/static/lib/pdfjs/web/viewer.html?file=${file}#page=${page}`;
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
    update({ data }) {
        const changes = { [this.props.name]: data || false };
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
    update({ name, data }) {
        const changes = {
            [this.props.name]: data || false,
        };
        if (this.props.fileNameField && this.props.record.data[this.props.fileNameField] !== name) {
            changes[this.props.fileNameField] = name || false;
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        return this.props.record.update(changes);
    }

    onFileRemove() {
        this.state.isValid = true;
        this.update({});
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
    onFileUploaded({ data, objectUrl }) {
        this.state.isValid = true;
        this.state.objectUrl = objectUrl;
        this.update({ data });
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
    onFileUploaded({ name, data, objectUrl }) {
        this.state.isValid = true;
        this.state.objectUrl = objectUrl;
        this.update({ name, data });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    }

    onLoadFailed() {
        this.state.isValid = false;
        this.notification.add(_t("Could not display the selected pdf"), {
            type: "danger",
        });
    }
}

export const pdfViewerField = {
    component: PdfViewerField,
    displayName: _t("PDF Viewer"),
    supportedOptions: [
        {
            label: _t("Preview image"),
            name: "preview_image",
            type: "field",
            availableTypes: ["binary"],
        },
    ],
    supportedTypes: ["binary"],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
=======
    extractProps: ({ attrs }) => ({ fileNameField: attrs.filename }),
>>>>>>> upstream/18.0
};

registry.category("fields").add("pdf_viewer", pdfViewerField);
