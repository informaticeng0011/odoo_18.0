/** @odoo-module **/

import { registry } from "@web/core/registry";
import * as tourUtils from "@website_sale/js/tours/tour_utils";

odoo.loader.bus.addEventListener("module-started", (e) => {
    if (e.detail.moduleName === "@website_sale/js/website_sale_tracking") {
        //import websiteSaleTracking from "@website_sale/js/website_sale_tracking";
        e.detail.module[Symbol.for("default")].include({
            // Purposely don't call super to avoid call to third party (GA) during tests
            _onViewItem(event, data) {
                document.body.setAttribute("view-event-id", data.item_id);
            },
            _onAddToCart(event, data) {
                document.body.setAttribute("cart-event-id", data.item_id);
            },
        });
    }
});

let itemId;


registry.category("web_tour.tours").add('google_analytics_view_item', {
    url: '/shop?search=Colored T-Shirt',
    steps: () => [
    {
        content: "select Colored T-Shirt",
        trigger: '.oe_product_cart a:contains("Colored T-Shirt")',
        run: "click",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
        expectUnloadPage: true,
>>>>>>> upstream/18.0
    },
    {
        content: "wait until `_getCombinationInfo()` rpc is done",
        trigger: 'body[view-event-id]',
        timeout: 25000,
        run: () => {
            itemId = document.body.getAttribute("view-event-id");
        }
    },
    {
        content: 'select another variant',
        trigger:
            "ul.js_add_cart_variants ul.list-inline li:has(label.active) + li:has(label) input:not(:visible)",
        run: "click",
    },
    {
        content: 'wait until `_getCombinationInfo()` rpc is done (2)',
        // a new view event should have been generated, for another variant
        trigger: `body[view-event-id]:not([view-event-id="${itemId}"])`,
        timeout: 25000,
    },
]});

registry.category("web_tour.tours").add('google_analytics_add_to_cart', {
    url: '/shop?search=Basic Shirt',
    steps: () => [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false}),
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
=======
    ...tourUtils.addToCart({productName: 'Basic Shirt', search: false, expectUnloadPage: true}),
>>>>>>> upstream/18.0
    {
        trigger: "body[cart-event-id]",
    },
    {
        content: 'check add to cart event',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        trigger: "a:has(.my_cart_quantity:contains(/^1$/))",
=======
        trigger: "a:has(.my_cart_quantity:text(1))",
>>>>>>> upstream/18.0
=======
        trigger: "a:has(.my_cart_quantity:text(1))",
>>>>>>> upstream/18.0
=======
        trigger: "a:has(.my_cart_quantity:text(1))",
>>>>>>> upstream/18.0
=======
        trigger: "a:has(.my_cart_quantity:text(1))",
>>>>>>> upstream/18.0
=======
        trigger: "a:has(.my_cart_quantity:text(1))",
>>>>>>> upstream/18.0
=======
        trigger: "a:has(.my_cart_quantity:text(1))",
>>>>>>> upstream/18.0
=======
        trigger: "a:has(.my_cart_quantity:text(1))",
>>>>>>> upstream/18.0
=======
        trigger: "a:has(.my_cart_quantity:text(1))",
>>>>>>> upstream/18.0
=======
        trigger: "a:has(.my_cart_quantity:text(1))",
>>>>>>> upstream/18.0
        timeout: 25000,
    },
]});
