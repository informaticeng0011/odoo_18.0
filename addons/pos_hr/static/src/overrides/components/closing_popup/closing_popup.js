import { ClosePosPopup } from "@point_of_sale/app/navbar/closing_popup/closing_popup";
import { _t } from "@web/core/l10n/translation";
import { patch } from "@web/core/utils/patch";
import { AccordionItem } from "@point_of_sale/app/generic_components/accordion_item/accordion_item";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
patch(ClosePosPopup, {
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
=======
patch(ClosePosPopup.prototype, {
>>>>>>> upstream/18.0
    components: { ...ClosePosPopup.components, AccordionItem },
    get paymentMethodBreakdownTitle() {
        return _t("Payments in %(paymentMethod)s", {
            paymentMethod: this.props.default_cash_details.name,
        });
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
    hasUserAuthority() {
        if (!this.pos.config.module_pos_hr) {
            return super.hasUserAuthority();
        }
        const cashier = this.pos.cashier;
        return (
            (cashier._role == "manager" && cashier._user_role == "admin") ||
            this.allowedDifference()
        );
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
