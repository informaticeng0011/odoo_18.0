import { expect, test } from "@odoo/hoot";
import { press } from "@odoo/hoot-dom";
import { animationFrame, tick } from "@odoo/hoot-mock";
import { defineModels, fields, models, serverState } from "@web/../tests/web_test_helpers";
import { setupEditor } from "./_helpers/editor";
import { getContent } from "./_helpers/selection";
import { insertText, undo } from "./_helpers/user_actions";
class ResUsers extends models.Model {
    _name = "res.users";

    signature = fields.Html();
    _records = [
        {
            id: serverState.userId,
            signature: "<h1>Hello</h1>",
        },
    ];
}
defineModels([ResUsers]);

test("apply 'Signature' command", async () => {
    const { el, editor } = await setupEditor("<p>ab[]cd</p>");
    await insertText(editor, "/signature");
    await animationFrame();
    expect(".active .o-we-command-name").toHaveText("Signature");

    await press("enter");
    await tick();
    expect(getContent(el)).toBe(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        `<p>ab</p><div class="o-signature-container"><h1>Hello[]</h1></div><p>cd</p>`
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>ab</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
    );
});

test("undo a 'Signature' command", async () => {
    const { el, editor } = await setupEditor("<p>ab[]cd</p>");
    await insertText(editor, "test");
    await insertText(editor, "/signature");
    await press("enter");
    await tick();
    expect(getContent(el)).toBe(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        `<p>abtest</p><div class="o-signature-container"><h1>Hello[]</h1></div><p>cd</p>`
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
=======
        `<p>abtest</p><div class="o-signature-container" data-o-mail-quote="1"><h1>Hello[]</h1></div><p>cd</p>`
>>>>>>> upstream/18.0
    );

    undo(editor);
    expect(getContent(el)).toBe("<p>abtest[]cd</p>");
});
