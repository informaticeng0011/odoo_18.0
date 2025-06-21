import { expect, test } from "@odoo/hoot";
import { click, press, waitFor } from "@odoo/hoot-dom";
import { animationFrame } from "@odoo/hoot-mock";
import { loadBundle } from "@web/core/assets";
import { setupEditor } from "./_helpers/editor";
import { getContent } from "./_helpers/selection";
import { insertText, undo } from "./_helpers/user_actions";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { expectElementCount } from "./_helpers/ui_expectations";
>>>>>>> upstream/18.0

test.tags("desktop");
test("add an emoji with powerbox", async () => {
    const { el, editor } = await setupEditor("<p>ab[]</p>");
    await loadBundle("web.assets_emoji");

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(".o-EmojiPicker").toHaveCount(0);
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
    expect(getContent(el)).toBe("<p>ab[]</p>");

    await insertText(editor, "/emoji");
    await press("enter");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    await waitFor(".o-EmojiPicker", { timeout: 1000 });
    expect(".o-EmojiPicker").toHaveCount(1);
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0

    await click(".o-EmojiPicker .o-Emoji");
    expect(getContent(el)).toBe("<p>ab😀[]</p>");
});

test("click on emoji command to open emoji picker", async () => {
    const { el, editor } = await setupEditor("<p>ab[]</p>");
    await loadBundle("web.assets_emoji");

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(".o-EmojiPicker").toHaveCount(0);
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
    expect(getContent(el)).toBe("<p>ab[]</p>");

    await insertText(editor, "/emoji");
    await animationFrame();
    await click(".active .o-we-command-name");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    await waitFor(".o-EmojiPicker", { timeout: 1000 });
    expect(".o-EmojiPicker").toHaveCount(1);
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 1);
>>>>>>> upstream/18.0
});

test.tags("desktop");
test("undo an emoji", async () => {
    const { el, editor } = await setupEditor("<p>ab[]</p>");
    await loadBundle("web.assets_emoji");
    expect(getContent(el)).toBe("<p>ab[]</p>");

    await insertText(editor, "test");
    await insertText(editor, "/emoji");
    await press("enter");
    await waitFor(".o-EmojiPicker", { timeout: 1000 });
    await click(".o-EmojiPicker .o-Emoji");
    expect(getContent(el)).toBe("<p>abtest😀[]</p>");

    undo(editor);
    expect(getContent(el)).toBe("<p>abtest[]</p>");
});

test("close emoji picker with escape", async () => {
    const { el, editor } = await setupEditor("<p>ab[]</p>");
    await loadBundle("web.assets_emoji");
    expect(getContent(el)).toBe("<p>ab[]</p>");

    await insertText(editor, "/emoji");
    await press("enter");
    await waitFor(".o-EmojiPicker", { timeout: 1000 });
    expect(getContent(el)).toBe("<p>ab</p>");

    await press("escape");
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
    expect(".o-EmojiPicker").toHaveCount(0);
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-EmojiPicker", 0);
>>>>>>> upstream/18.0
    expect(getContent(el)).toBe("<p>ab[]</p>");
});
