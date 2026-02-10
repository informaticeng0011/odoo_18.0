/** @odoo-module */

import * as ProductScreen from "@point_of_sale/../tests/tours/utils/product_screen_util";
import * as PaymentScreen from "@point_of_sale/../tests/tours/utils/payment_screen_util";
import * as Dialog from "@point_of_sale/../tests/tours/utils/dialog_util";
import * as Chrome from "@point_of_sale/../tests/tours/utils/chrome_util";

import { registry } from "@web/core/registry";

/**
 * HELPERS
 */

function isQRDisplayedinDialog() {
    return [
        Dialog.is({ title: "QR Code" }),
        {
            content: "Verify QR image is displayed",
            trigger: ".modal-content img[src^='data:image/png;base64,']",
            run: "click",
        },
    ].flat();
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
function addProductandPay() {
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
=======
function addProductandPay(isPartialPay = false) {
>>>>>>> upstream/18.0
    return [
        ProductScreen.addOrderline("Hand Bag", "10"),
        ProductScreen.selectedOrderlineHas("Hand Bag", "10.0"),
        ProductScreen.clickPayButton(),

        PaymentScreen.totalIs("48"),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" }),
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
=======
        ...(isPartialPay
            ? [PaymentScreen.clickPaymentMethod("QR Code"), PaymentScreen.clickNumpad("+10")]
            : [PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" })]),
>>>>>>> upstream/18.0
        {
            content: "Display QR Code Payment dialog",
            trigger: ".button.send_payment_request.highlight",
            run: "click",
        },
    ].flat();
}

/**
 * TOURS
 */

registry.category("web_tour.tours").add("PaymentScreenWithQRPaymentFailure", {
    steps: () =>
        [
            Chrome.startPoS(),
            Dialog.confirm("Open Register"),
            addProductandPay(),
            Dialog.is({ title: "Failure to generate Payment QR Code" }),
            Dialog.confirm(),
        ].flat(),
});

registry.category("web_tour.tours").add("PaymentScreenWithQRPayment", {
    steps: () =>
        [
            Chrome.startPoS(),
            Dialog.confirm("Open Register"),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
=======

            // --- FULL PAYMENT ---
>>>>>>> upstream/18.0
            addProductandPay(),
            isQRDisplayedinDialog(),
            Dialog.cancel(),
            PaymentScreen.validateButtonIsHighlighted(false),
            {
                content: "Retry to display QR Code Payment dialog",
                trigger: ".button.send_payment_request.highlight",
                run: "click",
            },
            isQRDisplayedinDialog(),
            Dialog.confirm(),
            {
                content: "Immediately at the receipt screen.",
                trigger: '.receipt-screen .button.next.highlight:contains("New Order")',
                run: "click",
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

            // --- PARTIAL PAYMENT ---
            addProductandPay(true),
            isQRDisplayedinDialog(),
            Dialog.confirm(),
            {
                trigger: ".electronic_status:contains('Successful')",
            },
            PaymentScreen.clickPaymentMethod("Bank"),
            PaymentScreen.clickValidate(),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        ].flat(),
});

registry.category("web_tour.tours").add("PaymentScreenWithQRPaymentSwiss", {
    steps: () =>
        [
            Chrome.startPoS(),
            Dialog.confirm("Open Register"),
            ProductScreen.addOrderline("Hand Bag", "10"),
            ProductScreen.selectedOrderlineHas("Hand Bag", "10.0"),
            ProductScreen.clickPartnerButton(),
            ProductScreen.clickCustomer("AAA Partner Swiss"),
            ProductScreen.clickPayButton(),
            PaymentScreen.totalIs("48"),
            PaymentScreen.clickPaymentMethod("QR Code", true, { amount: "48" }),
            {
                content: "Display QR Code Payment dialog",
                trigger: ".button.send_payment_request.highlight",
                run: "click",
            },
            PaymentScreen.validateButtonIsHighlighted(false),
            isQRDisplayedinDialog(),
            Dialog.confirm(),
            {
                content: "Immediately at the receipt screen.",
                trigger: '.receipt-screen .button.next.highlight:contains("New Order")',
                run: "click",
            },
        ].flat(),
});
