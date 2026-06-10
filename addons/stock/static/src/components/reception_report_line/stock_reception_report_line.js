/** @odoo-module **/
import { useService } from "@web/core/utils/hooks";
import { formatFloat } from "@web/views/fields/formatters";
import { Component } from "@odoo/owl";

export class ReceptionReportLine extends Component {
    static template = "stock.ReceptionReportLine";
    static props = {
        data: Object,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
=======
        labelReport: Object,
>>>>>>> upstream/18.0
        parentIndex: String,
        showUom: Boolean,
        precision: Number,
    };

    setup() {
        this.ormService = useService("orm");
        this.actionService = useService("action");
        this.formatFloat = (val) => formatFloat(val, { digits: [false, this.props.precision] });
    }

    //---- Handlers ----

    async onClickForecast() {
        const action = await this.ormService.call(
            "stock.move",
            "action_product_forecast_report",
            [[this.data.move_out_id]],
        );

        return this.actionService.doAction(action);
    }

    async onClickPrint() {
        if (!this.data.move_out_id) {
            return;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const reportFile = 'stock.report_reception_report_label';
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        const modelIds = [this.data.move_out_id];
        const productQtys = [Math.ceil(this.data.quantity) || '1'];

        return this.actionService.doAction({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            type: "ir.actions.report",
            report_type: "qweb-pdf",
            report_name: `${reportFile}?docids=${modelIds}&quantity=${productQtys}`,
            report_file: reportFile,
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
=======
            ...this.props.labelReport,
            context: { active_ids: modelIds },
            data: { docids: modelIds, quantity: productQtys.join(",") },
>>>>>>> upstream/18.0
        });
    }

    async onClickAssign() {
        await this.ormService.call(
            "report.stock.report_reception",
            "action_assign",
            [false, [this.data.move_out_id], [this.data.quantity], [this.data.move_ins]],
        );
        this.env.bus.trigger("update-assign-state", { isAssigned: true, tableIndex: this.props.parentIndex, lineIndex: this.data.index });
    }

    async onClickUnassign() {
        const done = await this.ormService.call(
            "report.stock.report_reception",
            "action_unassign",
            [false, this.data.move_out_id, this.data.quantity, this.data.move_ins]
        )
        if (done) {
            this.env.bus.trigger("update-assign-state", { isAssigned: false, tableIndex: this.props.parentIndex, lineIndex: this.data.index });
        }
    }

    //---- Getters ----

    get data() {
        return this.props.data;
    }
}
