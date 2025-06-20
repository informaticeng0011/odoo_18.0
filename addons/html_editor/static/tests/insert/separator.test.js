import { describe, expect, test } from "@odoo/hoot";
import { setupEditor, testEditor } from "../_helpers/editor";
import { getContent } from "../_helpers/selection";
import { execCommand } from "../_helpers/userCommands";

async function insertSeparator(editor) {
    execCommand(editor, "insertSeparator");
}

describe("insert separator", () => {
    test("should insert a separator inside editable with contenteditable set to false", async () => {
        await testEditor({
            contentBefore: "<p>[]<br></p>",
            stepFunction: insertSeparator,
            contentAfterEdit: `<hr contenteditable="false"><p placeholder='Type "/" for commands' class="o-we-hint">[]<br></p>`,
            contentAfter: "<hr><p>[]<br></p>",
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
    test("should insert a separator before current element", async () => {
=======
    test("should insert a separator before current element if empty", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before current element if empty", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before current element if empty", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before current element if empty", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before current element if empty", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before current element if empty", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before current element if empty", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before current element if empty", async () => {
>>>>>>> upstream/18.0
        await testEditor({
            contentBefore: "<p>content</p><p>[]<br></p>",
            stepFunction: insertSeparator,
            contentAfterEdit: `<p>content</p><hr contenteditable="false"><p placeholder='Type "/" for commands' class="o-we-hint">[]<br></p>`,
            contentAfter: "<p>content</p><hr><p>[]<br></p>",
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
    test("should insert a separator before current paragraph related element but remain inside the div", async () => {
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
    test("should insert a separator after current element if it contains text", async () => {
        await testEditor({
            contentBefore: "<p>content</p><p>text[]</p>",
            stepFunction: insertSeparator,
            contentAfterEdit: `<p>content</p><p>text</p><hr contenteditable="false"><p placeholder='Type "/" for commands' class="o-we-hint">[]<br></p>`,
            contentAfter: "<p>content</p><p>text</p><hr><p>[]<br></p>",
        });
    });

    test("should insert a separator before current empty paragraph related element but remain inside the div", async () => {
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
        await testEditor({
            contentBefore: "<div><p>[]<br></p></div>",
            stepFunction: insertSeparator,
            contentAfter: "<div><hr><p>[]<br></p></div>",
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
    test("should insert a separator after current paragraph related element containing text but remain inside the div", async () => {
        await testEditor({
            contentBefore: "<div><p>content[]</p></div>",
            stepFunction: insertSeparator,
            contentAfter: "<div><p>content</p><hr><p>[]<br></p></div>",
        });
    });

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
    test("should not insert a separator inside a list", async () => {
        await testEditor({
            contentBefore: "<ul><li>[]<br></li></ul>",
            stepFunction: insertSeparator,
            contentAfter: "<ul><li>[]<br></li></ul>",
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
    test("should insert a separator before a p element inside a table cell", async () => {
=======
    test("should insert a separator before a empty p element inside a table cell", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before a empty p element inside a table cell", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before a empty p element inside a table cell", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before a empty p element inside a table cell", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before a empty p element inside a table cell", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before a empty p element inside a table cell", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before a empty p element inside a table cell", async () => {
>>>>>>> upstream/18.0
=======
    test("should insert a separator before a empty p element inside a table cell", async () => {
>>>>>>> upstream/18.0
        await testEditor({
            contentBefore: "<table><tbody><tr><td><p>[]<br></p></td></tr></tbody></table>",
            stepFunction: insertSeparator,
            contentAfter: "<table><tbody><tr><td><hr><p>[]<br></p></td></tr></tbody></table>",
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
    test("should insert a seperator within a block node", async () => {
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
    test("should insert a separator after a p element containing text inside a table cell", async () => {
        await testEditor({
            contentBefore: "<table><tbody><tr><td><p>content[]</p></td></tr></tbody></table>",
            stepFunction: insertSeparator,
            contentAfter:
                "<table><tbody><tr><td><p>content</p><hr><p>[]<br></p></td></tr></tbody></table>",
        });
    });

    test("should insert a seperator before a empty block node", async () => {
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
        await testEditor({
            contentBefore: "<div>[]<br></div>",
            stepFunction: insertSeparator,
            contentAfter: "<hr><div>[]<br></div>",
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
    test("should insert a seperator after a block node containing text", async () => {
        await testEditor({
            contentBefore: "<div>content[]</div>",
            stepFunction: insertSeparator,
            contentAfter: "<div>content</div><hr><p>[]<br></p>",
        });
    });

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
    test("should set the contenteditable attribute to false on the separator when inserted as a child after normalization", async () => {
        const { el, editor } = await setupEditor("<p>[]<br></p>");
        const div = editor.document.createElement("div");
        const separator = editor.document.createElement("hr");
        div.append(separator);
        el.append(div);
        editor.shared.history.addStep();
        expect(getContent(el)).toBe(
            `<p placeholder='Type "/" for commands' class="o-we-hint">[]<br></p><div><hr contenteditable="false"></div>`
        );
    });
});
