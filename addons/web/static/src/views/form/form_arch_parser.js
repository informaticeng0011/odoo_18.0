import { exprToBoolean } from "@web/core/utils/strings";
import { visitXML } from "@web/core/utils/xml";
import { Field } from "@web/views/fields/field";
import { getActiveActions } from "@web/views/utils";
import { Widget } from "@web/views/widgets/widget";

export class FormArchParser {
    parse(xmlDoc, models, modelName) {
        const jsClass = xmlDoc.getAttribute("js_class");
        const disableAutofocus = exprToBoolean(xmlDoc.getAttribute("disable_autofocus") || "");
        const activeActions = getActiveActions(xmlDoc);
        const fieldNodes = {};
        const widgetNodes = {};
        let widgetNextId = 0;
        const fieldNextIds = {};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        let autofocusFieldId = null;
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
        // autofocusFieldId is now deprecated, it's kept until saas-18.2 for retro-compatibility
        // and is removed in saas-18.3 to let autofocusFieldIds take over.
        let autofocusFieldId = null;
        const autofocusFieldIds = [];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        visitXML(xmlDoc, (node) => {
            if (node.tagName === "field") {
                const fieldInfo = Field.parseFieldNode(node, models, modelName, "form", jsClass);
                if (!(fieldInfo.name in fieldNextIds)) {
                    fieldNextIds[fieldInfo.name] = 0;
                }
                const fieldId = `${fieldInfo.name}_${fieldNextIds[fieldInfo.name]++}`;
                fieldNodes[fieldId] = fieldInfo;
                node.setAttribute("field_id", fieldId);
                if (exprToBoolean(node.getAttribute("default_focus") || "")) {
                    autofocusFieldId = fieldId;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
=======
                    autofocusFieldIds.push(fieldId);
>>>>>>> upstream/18.0
                }
                if (fieldInfo.type === "properties") {
                    activeActions.addPropertyFieldValue = true;
                }
                return false;
            } else if (node.tagName === "widget") {
                const widgetInfo = Widget.parseWidgetNode(node);
                const widgetId = `widget_${++widgetNextId}`;
                widgetNodes[widgetId] = widgetInfo;
                node.setAttribute("widget_id", widgetId);
            }
        });
        return {
            activeActions,
            autofocusFieldId,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
=======
            autofocusFieldIds,
>>>>>>> upstream/18.0
            disableAutofocus,
            fieldNodes,
            widgetNodes,
            xmlDoc,
        };
    }
}
