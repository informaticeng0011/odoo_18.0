/** @odoo-module */

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
import {
    clickOnSave,
    registerWebsitePreviewTour,
    insertSnippet,
} from "@website/js/tours/tour_utils";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// First part of the tour
>>>>>>> upstream/18.0
=======
// First part of the tour
>>>>>>> upstream/18.0
=======
// First part of the tour
>>>>>>> upstream/18.0
=======
// First part of the tour
>>>>>>> upstream/18.0
=======
// First part of the tour
>>>>>>> upstream/18.0
=======
// First part of the tour
>>>>>>> upstream/18.0
registerWebsitePreviewTour(
    "donation_snippet_edition",
    {
        url: "/",
        edition: true,
    },
    () => [
        ...insertSnippet({
            id: "s_donation",
            name: "Donation",
            groupName: "Contact & Forms",
        }),
        ...clickOnSave(),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        // -- Testing the minimum amount --
        {
            content: "Enter a negative custom amount, testing the minimum amount",
            trigger: ":iframe #s_donation_amount_input",
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
]);

// Second part of the tour
registry.category('web_tour.tours').add('donation_snippet_use', {
    url: '/',
    steps: () => [
        // -- Testing the minimum amount --
        {
            content: "Enter a custom amount smaller than the minimum, testing the minimum amount",
            trigger: "#s_donation_amount_input",
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
            run: "edit 1",
        },
        {
            content: "Donate with custom amount set",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            trigger: ":iframe .s_donation_donate_btn",
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
            run: "click",
        },
        {
            content: "Check if alert-danger element exists",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            trigger: ":iframe p.alert-danger",
=======
            trigger: "p.alert-danger",
>>>>>>> upstream/18.0
=======
            trigger: "p.alert-danger",
>>>>>>> upstream/18.0
=======
            trigger: "p.alert-danger",
>>>>>>> upstream/18.0
=======
            trigger: "p.alert-danger",
>>>>>>> upstream/18.0
=======
            trigger: "p.alert-danger",
>>>>>>> upstream/18.0
=======
            trigger: "p.alert-danger",
>>>>>>> upstream/18.0
        },
        // -- End of testing the minimum amount --
        {
            content: "Enter a custom amount",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            trigger: ":iframe #s_donation_amount_input",
=======
            trigger: "#s_donation_amount_input",
>>>>>>> upstream/18.0
=======
            trigger: "#s_donation_amount_input",
>>>>>>> upstream/18.0
=======
            trigger: "#s_donation_amount_input",
>>>>>>> upstream/18.0
=======
            trigger: "#s_donation_amount_input",
>>>>>>> upstream/18.0
=======
            trigger: "#s_donation_amount_input",
>>>>>>> upstream/18.0
=======
            trigger: "#s_donation_amount_input",
>>>>>>> upstream/18.0
            run: "edit 55",
        },
        {
            content: "Donate with custom amount set",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            trigger: ":iframe .s_donation_donate_btn",
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
=======
            trigger: ".s_donation_donate_btn",
>>>>>>> upstream/18.0
            run: "click",
        },
        {
            content: "Check if custom amount radio input is selected",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            trigger: ":iframe input#other_amount:checked",
        },
        {
            content: "Check if custom amount radio input has value 55",
            trigger: ':iframe input#other_amount[value="55.0"]',
        },
        {
            content: "Select the amount of 25",
            trigger: ":iframe input#amount_1",
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
            trigger: "input#other_amount:checked",
        },
        {
            content: "Check if custom amount radio input has value 55",
            trigger: 'input#other_amount[value="55.0"]',
        },
        {
            content: "Select the amount of 25",
            trigger: "input#amount_1",
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
            run: "click",
        },
        {
            content: "Verify that amount_1 is checked",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            trigger: ":iframe input#amount_1:checked",
        },
        {
            content: "Verify that other_amount is not checked",
            trigger: ":iframe input#other_amount:not(:checked)",
        },
        {
            content: "Change custom amount to 67",
            trigger: ":iframe input[name='o_donation_amount'][type='number']",
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
            trigger: "input#amount_1:checked",
        },
        {
            content: "Verify that other_amount is not checked",
            trigger: "input#other_amount:not(:checked)",
        },
        {
            content: "Change custom amount to 67",
            trigger: "input[name='o_donation_amount'][type='number']",
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
            run: "edit 67",
        },
        {
            content: "Select the custom amount radio button",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            trigger: ":iframe input#other_amount",
=======
            trigger: "input#other_amount",
>>>>>>> upstream/18.0
=======
            trigger: "input#other_amount",
>>>>>>> upstream/18.0
=======
            trigger: "input#other_amount",
>>>>>>> upstream/18.0
=======
            trigger: "input#other_amount",
>>>>>>> upstream/18.0
=======
            trigger: "input#other_amount",
>>>>>>> upstream/18.0
=======
            trigger: "input#other_amount",
>>>>>>> upstream/18.0
            run: "click",
        },
        {
            content: "Submit the donation form",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            trigger: ":iframe button[name='o_payment_submit_button']",
            run: "click",
        },
        {
            trigger: ":iframe body:contains(Your payment has been successfully processed.)",
        },
        {
            content: "Verify that the amount displayed is 67",
            trigger: ':iframe span.oe_currency_value:contains("67.00")',
        },
        {
            trigger: ":iframe [name=o_payment_status_alert]:contains(thank you!)",
        },
    ]
);
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
            trigger: "button[name='o_payment_submit_button']",
            run: "click",
        },
        {
            trigger: "body:contains(Your payment has been successfully processed.)",
        },
        {
            content: "Verify that the amount displayed is 67",
            trigger: 'span.oe_currency_value:contains("67.00")',
        },
        {
            trigger: "[name=o_payment_status_alert]:contains(thank you!)",
        },
    ],
});
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
