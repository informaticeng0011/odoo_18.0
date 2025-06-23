import { describe, expect, test } from "@odoo/hoot";
import { click, press, waitFor } from "@odoo/hoot-dom";
import { animationFrame, tick } from "@odoo/hoot-mock";
import { makeMockEnv, onRpc } from "@web/../tests/web_test_helpers";
import { setupEditor } from "./_helpers/editor";
import { getContent } from "./_helpers/selection";
import { insertText } from "./_helpers/user_actions";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0

test("Can replace an image", async () => {
    onRpc("/web/dataset/call_kw/ir.attachment/search_read", () => {
        return [
            {
                id: 1,
                name: "logo",
                mimetype: "image/png",
                image_src: "/web/static/img/logo2.png",
                access_token: false,
                public: true,
            },
        ];
    });
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
import { expectElementCount } from "./_helpers/ui_expectations";

test("Can replace an image", async () => {
    onRpc("ir.attachment", "search_read", () => [
        {
            id: 1,
            name: "logo",
            mimetype: "image/png",
            image_src: "/web/static/img/logo2.png",
            access_token: false,
            public: true,
        },
    ]);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    const env = await makeMockEnv();
    await setupEditor(`<p> <img class="img-fluid" src="/web/static/img/logo.png"> </p>`, { env });
    expect("img[src='/web/static/img/logo.png']").toHaveCount(1);
    await click("img");
    await tick(); // selectionchange
    await waitFor(".o-we-toolbar");
    expect("button[name='replace_image']").toHaveCount(1);
    await click("button[name='replace_image']");
    await animationFrame();
    await click("img.o_we_attachment_highlight");
    await animationFrame();
    expect("img[src='/web/static/img/logo.png']").toHaveCount(0);
    expect("img[src='/web/static/img/logo2.png']").toHaveCount(1);
});

test.tags("focus required");
test("Selection is collapsed after the image after replacing it", async () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    onRpc("/web/dataset/call_kw/ir.attachment/search_read", () => {
        return [
            {
                id: 1,
                name: "logo",
                mimetype: "image/png",
                image_src: "/web/static/img/logo2.png",
                access_token: false,
                public: true,
            },
        ];
    });
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    onRpc("ir.attachment", "search_read", () => [
        {
            id: 1,
            name: "logo",
            mimetype: "image/png",
            image_src: "/web/static/img/logo2.png",
            access_token: false,
            public: true,
        },
    ]);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    const env = await makeMockEnv();
    const { el } = await setupEditor(
        `<p>abc<img class="img-fluid" src="/web/static/img/logo.png">def</p>`,
        { env }
    );
    await click("img");
    await waitFor(".o-we-toolbar");
    expect("button[name='replace_image']").toHaveCount(1);
    await click("button[name='replace_image']");
    await animationFrame();
    await click("img.o_we_attachment_highlight");
    await animationFrame();
    expect(getContent(el).replace(/<img.*?>/, "<img>")).toBe("<p>abc<img>[]def</p>");
});

test.tags("focus required");
test("Can insert an image, and selection should be collapsed after it", async () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    onRpc("/web/dataset/call_kw/ir.attachment/search_read", () => {
        return [
            {
                id: 1,
                name: "logo",
                mimetype: "image/png",
                image_src: "/web/static/img/logo2.png",
                access_token: false,
                public: true,
            },
        ];
    });
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    onRpc("ir.attachment", "search_read", () => [
        {
            id: 1,
            name: "logo",
            mimetype: "image/png",
            image_src: "/web/static/img/logo2.png",
            access_token: false,
            public: true,
        },
    ]);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    const env = await makeMockEnv();
    const { editor, el } = await setupEditor("<p>a[]bc</p>", { env });
    await insertText(editor, "/image");
    await animationFrame();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(".o-we-powerbox").toHaveCount(1);
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-powerbox", 1);
>>>>>>> upstream/18.0
    await press("Enter");
    await animationFrame();
    await click("img.o_we_attachment_highlight");
    await animationFrame();
    expect("img[src='/web/static/img/logo2.png']").toHaveCount(1);
    expect(getContent(el).replace(/<img.*?>/, "<img>")).toBe("<p>a<img>[]bc</p>");
});

test("press escape to close media dialog", async () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    onRpc("/web/dataset/call_kw/ir.attachment/search_read", () => {
        return [];
    });
    const env = await makeMockEnv();
    const { editor, el } = await setupEditor("<p>a[]bc</p>", { env });
    insertText(editor, "/image");
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    onRpc("ir.attachment", "search_read", () => []);
    const env = await makeMockEnv();
    const { editor, el } = await setupEditor("<p>a[]bc</p>", { env });
    await insertText(editor, "/image");
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    await waitFor(".o-we-powerbox");
    await press("Enter");
    await animationFrame();
    expect(".modal .o_select_media_dialog .o_we_search").toBeFocused();

    await press("escape");
    await animationFrame();
    expect(".modal .o_select_media_dialog").toHaveCount(0);
    expect(getContent(el)).toBe("<p>a[]bc</p>");
});

describe("Powerbox search keywords", () => {
    test("Image and Icon are keywords for the Media command", async () => {
        const { editor } = await setupEditor("<p>[]<br></p>");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        insertText(editor, "/");
        for (const word of ["image", "icon"]) {
            insertText(editor, word);
=======
        await insertText(editor, "/");
        for (const word of ["image", "icon"]) {
            await insertText(editor, word);
>>>>>>> upstream/18.0
=======
        await insertText(editor, "/");
        for (const word of ["image", "icon"]) {
            await insertText(editor, word);
>>>>>>> upstream/18.0
=======
        await insertText(editor, "/");
        for (const word of ["image", "icon"]) {
            await insertText(editor, word);
>>>>>>> upstream/18.0
            await animationFrame();
            expect(".active .o-we-command-name").toHaveText("Media");
            // delete the keyword to try the next one
            for (let i = 0; i < word.length; i++) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                press("backspace");
=======
                await press("backspace");
>>>>>>> upstream/18.0
=======
                await press("backspace");
>>>>>>> upstream/18.0
=======
                await press("backspace");
>>>>>>> upstream/18.0
            }
        }
    });
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

test("cropper should not open for external image", async () => {
    onRpc("/html_editor/get_image_info", () => {
        return {
            original: false,
        };
    });
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

test("cropper should not open for external image", async () => {
    onRpc("/html_editor/get_image_info", () => ({
        original: false,
    }));
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

    await setupEditor(
        `<p>[<img src="https://download.odoocdn.com/icons/website/static/description/icon.png">]</p>`
    );
    await waitFor('div[name="image_transform"]');

    await click('div[name="image_transform"] > .btn');
    await animationFrame();

    await click('.btn[name="image_crop"]');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    await waitFor(".o_notification_manager .o_notification");
    expect("img.o_we_cropper_img").toHaveCount(0);
});
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
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
=======
    await waitFor(".o_notification_manager .o_notification", { timeout: 1000 });
    expect("img.o_we_cropper_img").toHaveCount(0);
});
>>>>>>> upstream/18.0
