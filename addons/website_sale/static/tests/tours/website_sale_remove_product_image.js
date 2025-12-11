/** @odoo-module **/

import {
    clickOnEditAndWaitEditMode,
    clickOnSave,
    registerWebsitePreviewTour,
} from '@website/js/tours/tour_utils';
import { stepUtils } from "@web_tour/tour_service/tour_utils";

const clickOnImgAndWaitForLoad = [
    {
        content: "Click on the product image",
        trigger: ":iframe #o-carousel-product img[alt='Test Remove Image']",
        run: "click",
    },
    {
        content: "Check that the snippet editor of the clicked image has been loaded",
        trigger: "we-customizeblock-options:has(we-title:contains('Re-order'))",
    },
];
const enterEditModeOfTestProduct = () => [
    stepUtils.waitIframeIsReady(),
    {
        content: "Click on the product anchor",
        trigger: ":iframe a:contains('Test Remove Image')",
        run: "click",
    },
    ...clickOnEditAndWaitEditMode(),
];

const removeImg = [
    {
        content: "Click on Remove",
        trigger: "we-customizeblock-options:has(we-title:contains('Image')) we-button[data-name='media_wsale_remove']",
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
    // If the snippet editor is not visible, the remove process is considered as
    // finished.
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    {
        content: "Check that the snippet editor is not visible",
        trigger: ".o_we_customize_panel:not(:has(we-customizeblock-options:has(we-title:contains('Re-order'))))",
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
    {
        content: "Wait until the the image removal is saved",
        trigger: ':iframe #o-carousel-product div:not(.o_dirty) > img',
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
];

registerWebsitePreviewTour("add_and_remove_main_product_image_no_variant", {
    url: "/shop?search=Test Remove Image",
}, () => [
    ...enterEditModeOfTestProduct(),
    {
        content: "Double click on the product image",
        trigger: ":iframe #o-carousel-product img[alt='Test Remove Image']",
        run: "dblclick",
    },
    {
        content: "Click on the new image",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        trigger: ".o_select_media_dialog img[title='s_default_image.jpg']",
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
=======
        trigger: ".o_select_media_dialog img[title='green.jpg']",
>>>>>>> upstream/18.0
        run: "click",
    },
    {
        content: "Check that the snippet editor of the clicked image has been loaded",
        trigger: "we-customizeblock-options:has(we-title:contains('Re-order'))",
    },
    ...removeImg,
]);
registerWebsitePreviewTour("remove_main_product_image_with_variant", {
    url: "/shop?search=Test Remove Image",
}, () => [
    ...enterEditModeOfTestProduct(),
    ...clickOnImgAndWaitForLoad,
    ...clickOnSave(),
    ...clickOnEditAndWaitEditMode(),
    ...clickOnImgAndWaitForLoad,
    ...removeImg,
]);
