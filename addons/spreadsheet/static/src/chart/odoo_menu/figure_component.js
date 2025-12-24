/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import * as spreadsheet from "@odoo/o-spreadsheet";
import { useService } from "@web/core/utils/hooks";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { _t } from "@web/core/l10n/translation";
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0
=======
import { navigateToOdooMenu } from "@spreadsheet/helpers/helpers";
>>>>>>> upstream/18.0

patch(spreadsheet.components.FigureComponent.prototype, {
    setup() {
        super.setup();
        this.menuService = useService("menu");
        this.actionService = useService("action");
        this.notificationService = useService("notification");
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    async navigateToOdooMenu() {
        const menu = this.env.model.getters.getChartOdooMenu(this.props.figure.id);
        if (!menu) {
            throw new Error(`Cannot find any menu associated with the chart`);
        }
        if (!menu.actionID) {
            this.notificationService.add(
                _t(
                    "The menu linked to this chart doesn't have an corresponding action. Please link the chart to another menu."
                ),
                { type: "danger" }
            );
            return;
        }
        await this.actionService.doAction(menu.actionID);
    },
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    get hasOdooMenu() {
        return this.env.model.getters.getChartOdooMenu(this.props.figure.id) !== undefined;
    },
    async onClick() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if (this.env.isDashboard() && this.hasOdooMenu) {
            this.navigateToOdooMenu();
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
        if (this.hasOdooMenu) {
            await navigateToOdooMenu({
                figureId: this.props.figure.id,
                model: this.env.model,
                notificationService: this.notificationService,
                actionService: this.actionService,
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        }
    },
});
