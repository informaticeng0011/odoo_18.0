import { describe, test } from "@odoo/hoot";
import { testEditor } from "../_helpers/editor";
import { insertLineBreak } from "../_helpers/user_actions";

describe("Selection collapsed", () => {
    describe("Basic", () => {
        test("should insert a <br> into an empty paragraph", async () => {
            await testEditor({
                contentBefore: "<p>[]<br></p>",
                stepFunction: insertLineBreak,
                contentAfter: "<p><br>[]<br></p>",
            });
            // TODO this cannot actually be tested currently as a
            // backspace/delete in that case is not even detected
            // (no input event to rollback)
            // await testEditor({
            //     contentBefore: '<p>[<br>]</p>',
            //     stepFunction: insertLineBreak,
            //     contentAfter: '<p><br>[]<br></p>',
            // });
            // TODO to check: the cursor cannot be in that position...
            // await testEditor({
            //     contentBefore: '<p><br>[]</p>',
            //     stepFunction: insertLineBreak,
            //     contentAfter: '<p><br>[]<br></p>',
            // });
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        test("should insert a <br> at the beggining of a paragraph", async () => {
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beggining of a paragraph (1)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p>[]abc</p>",
                stepFunction: insertLineBreak,
                contentAfter: "<p><br>[]abc</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beggining of a paragraph (2)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p>[] abc</p>",
                stepFunction: insertLineBreak,
                // The space should have been parsed away.
                contentAfter: "<p><br>[]abc</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        test("should insert a <br> within text", async () => {
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within text (1)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p>ab[]cd</p>",
                stepFunction: insertLineBreak,
                contentAfter: "<p>ab<br>[]cd</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (2)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p>ab []cd</p>",
                stepFunction: insertLineBreak,
                // The space is converted to a non-breaking space so it
                // is visible (because it's before a <br>).
                contentAfter: "<p>ab&nbsp;<br>[]cd</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within text (3)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p>ab[] cd</p>",
                stepFunction: insertLineBreak,
                // The space is converted to a non-breaking space so it
                // is visible (because it's after a <br>).
                contentAfter: "<p>ab<br>[]&nbsp;cd</p>",
            });
        });

        test("should insert a line break (2 <br>) at the end of a paragraph", async () => {
            await testEditor({
                contentBefore: "<p>abc[]</p>",
                stepFunction: insertLineBreak,
                // The second <br> is needed to make the first
                // one visible.
                contentAfter: "<p>abc<br>[]<br></p>",
            });
        });
    });

    describe("Consecutive", () => {
        test("should insert two <br> at the beggining of an empty paragraph", async () => {
            await testEditor({
                contentBefore: "<p>[]<br></p>",
                stepFunction: async (editor) => {
                    await insertLineBreak(editor);
                    await insertLineBreak(editor);
                },
                contentAfter: "<p><br><br>[]<br></p>",
            });
            // TODO this cannot actually be tested currently as a
            // backspace/delete in that case is not even detected
            // (no input event to rollback)
            // await testEditor({
            //     contentBefore: '<p>[<br>]</p>',
            //     stepFunction: async (editor) => {
            //         await insertLineBreak(editor);
            //         await insertLineBreak(editor);
            //     },
            //     contentAfter: '<p><br><br>[]<br></p>',
            // });
            // TODO seems like a theoretical case, if needed it could
            // be about checking at the start of the shift-enter if
            // we are not between left-state BR and right-state block.
            // await testEditor({
            //     contentBefore: '<p><br>[]</p>',
            //     stepFunction: async (editor) => {
            //         await insertLineBreak(editor);
            //         await insertLineBreak(editor);
            //     },
            //     contentAfter: '<p><br><br>[]<br></p>',
            // });
        });

        test("should insert two <br> at the beggining of a paragraph", async () => {
            await testEditor({
                contentBefore: "<p>[]abc</p>",
                stepFunction: async (editor) => {
                    await insertLineBreak(editor);
                    await insertLineBreak(editor);
                },
                contentAfter: "<p><br><br>[]abc</p>",
            });
        });

        test("should insert two <br> within text", async () => {
            await testEditor({
                contentBefore: "<p>ab[]cd</p>",
                stepFunction: async (editor) => {
                    await insertLineBreak(editor);
                    await insertLineBreak(editor);
                },
                contentAfter: "<p>ab<br><br>[]cd</p>",
            });
        });

        test("should insert two line breaks (3 <br>) at the end of a paragraph", async () => {
            await testEditor({
                contentBefore: "<p>abc[]</p>",
                stepFunction: async (editor) => {
                    await insertLineBreak(editor);
                    await insertLineBreak(editor);
                },
                // the last <br> is needed to make the first one
                // visible.
                contentAfter: "<p>abc<br><br>[]<br></p>",
            });
        });
    });

    describe("Format", () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        test("should insert a <br> before a format node", async () => {
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> before a format node (1)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p>abc[]<b>def</b></p>",
                stepFunction: insertLineBreak,
                contentAfter: "<p>abc<br><b>[]def</b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (2)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                // That selection is equivalent to []<b>
                contentBefore: "<p>abc<b>[]def</b></p>",
                stepFunction: insertLineBreak,
                // JW cAfter: '<p>abc<br><b>[]def</b></p>',
                contentAfter: "<p>abc<b><br>[]def</b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (3)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p>abc <b>[]def</b></p>",
                stepFunction: insertLineBreak,
                // The space is converted to a non-breaking space so it
                // is visible (because it's before a <br>).
                contentAfter: "<p>abc&nbsp;<b><br>[]def</b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> before a format node (4)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p>abc<b>[] def </b></p>",
                stepFunction: insertLineBreak,
                // The space is converted to a non-breaking space so it
                // is visible (because it's before a <br>).
                contentAfter: "<p>abc<b><br>[]&nbsp;def </b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        test("should insert a <br> after a format node", async () => {
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> after a format node (1)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p><b>abc</b>[]def</p>",
                stepFunction: insertLineBreak,
                // JW cAfter: '<p><b>abc[]<br></b>def</p>',
                contentAfter: "<p><b>abc</b><br>[]def</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (2)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                // That selection is equivalent to </b>[]
                contentBefore: "<p><b>abc[]</b>def</p>",
                stepFunction: insertLineBreak,
                // JW cAfter: '<p><b>abc[]<br></b>def</p>',
                contentAfter: "<p><b>abc<br>[]</b>def</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (3)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p><b>abc[]</b> def</p>",
                stepFunction: insertLineBreak,
                // The space is converted to a non-breaking space so
                // it is visible (because it's after a <br>).
                // Visually, the caret does show _after_ the line
                // break.
                // JW cAfter: '<p><b>abc[]<br></b>&nbsp;def</p>',
                contentAfter: "<p><b>abc<br>[]</b>&nbsp;def</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> after a format node (4)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p><b>abc []</b>def</p>",
                stepFunction: insertLineBreak,
                // The space is converted to a non-breaking space so it
                // is visible (because it's before a <br>).
                contentAfter: "<p><b>abc&nbsp;<br>[]</b>def</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        test("should insert a <br> at the beginning of a format node", async () => {
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> at the beginning of a format node (1)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p>[]<b>abc</b></p>",
                stepFunction: insertLineBreak,
                // JW cAfter: '<p><b><br>[]abc</b></p>',
                contentAfter: "<p><br><b>[]abc</b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (2)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                // That selection is equivalent to []<b>
                contentBefore: "<p><b>[]abc</b></p>",
                stepFunction: insertLineBreak,
                contentAfter: "<p><b><br>[]abc</b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> at the beginning of a format node (3)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p><b>[] abc</b></p>",
                stepFunction: insertLineBreak,
                // The space should have been parsed away.
                contentAfter: "<p><b><br>[]abc</b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        test("should insert a <br> within a format node", async () => {
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a <br> within a format node (1)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p><b>ab[]cd</b></p>",
                stepFunction: insertLineBreak,
                contentAfter: "<p><b>ab<br>[]cd</b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (2)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p><b>ab []cd</b></p>",
                stepFunction: insertLineBreak,
                // The space is converted to a non-breaking space so it
                // is visible (because it's before a <br>).
                contentAfter: "<p><b>ab&nbsp;<br>[]cd</b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a <br> within a format node (3)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p><b>ab[] cd</b></p>",
                stepFunction: insertLineBreak,
                // The space is converted to a non-breaking
                // space so it is visible.
                contentAfter: "<p><b>ab<br>[]&nbsp;cd</b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        test("should insert a line break (2 <br>) at the end of a format node", async () => {
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
=======
        test("should insert a line break (2 <br>) at the end of a format node (1)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p><b>abc</b>[]</p>",
                stepFunction: insertLineBreak,
                // The second <br> is needed to make the first
                // one visible.
                // JW cAfter: '<p><b>abc<br>[]<br></b></p>',
                contentAfter: "<p><b>abc</b><br>[]<br></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (2)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                // That selection is equivalent to </b>[]
                contentBefore: "<p><b>abc[]</b></p>",
                stepFunction: insertLineBreak,
                // The second <br> is needed to make the first
                // one visible.
                contentAfter: "<p><b>abc<br>[]<br></b></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
=======
        });

        test("should insert a line break (2 <br>) at the end of a format node (3)", async () => {
>>>>>>> upstream/18.0
            await testEditor({
                contentBefore: "<p><b>abc[] </b></p>",
                stepFunction: insertLineBreak,
                // The space should have been parsed away.
                // The second <br> is needed to make the first
                // one visible.
                contentAfter: "<p><b>abc<br>[]<br></b></p>",
            });
        });
    });

    describe("With attributes", () => {
        test("should insert a line break before a span with class", async () => {
            await testEditor({
                contentBefore:
                    '<p><span class="a">dom to</span></p><p><span class="b">[]edit</span></p>',
                stepFunction: insertLineBreak,
                contentAfter:
                    '<p><span class="a">dom to</span></p><p><span class="b"><br>[]edit</span></p>',
            });
        });

        test("should insert a line break within a span with a bold", async () => {
            await testEditor({
                contentBefore: '<p><span class="a"><b>ab[]cd</b></span></p>',
                stepFunction: insertLineBreak,
                contentAfter: '<p><span class="a"><b>ab<br>[]cd</b></span></p>',
            });
        });
    });
});

describe("Selection not collapsed", () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    test("should delete the first half of a paragraph, then insert a <br>", async () => {
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the first half of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
        // Forward selection
        await testEditor({
            contentBefore: "<p>[ab]cd</p>",
            stepFunction: insertLineBreak,
            contentAfter: "<p><br>[]cd</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the first half of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
        // Backward selection
        await testEditor({
            contentBefore: "<p>]ab[cd</p>",
            stepFunction: insertLineBreak,
            contentAfter: "<p><br>[]cd</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    test("should delete part of a paragraph, then insert a <br>", async () => {
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete part of a paragraph, then insert a <br> (1)", async () => {
>>>>>>> upstream/18.0
        // Forward selection
        await testEditor({
            contentBefore: "<p>a[bc]d</p>",
            stepFunction: insertLineBreak,
            contentAfter: "<p>a<br>[]d</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete part of a paragraph, then insert a <br> (2)", async () => {
>>>>>>> upstream/18.0
        // Backward selection
        await testEditor({
            contentBefore: "<p>a]bc[d</p>",
            stepFunction: insertLineBreak,
            contentAfter: "<p>a<br>[]d</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    test("should delete the last half of a paragraph, then insert a line break (2 <br>)", async () => {
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (1)", async () => {
>>>>>>> upstream/18.0
        // Forward selection
        await testEditor({
            contentBefore: "<p>ab[cd]</p>",
            stepFunction: insertLineBreak,
            // the second <br> is needed to make the first one
            // visible.
            contentAfter: "<p>ab<br>[]<br></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete the last half of a paragraph, then insert a line break (2 <br>) (2)", async () => {
>>>>>>> upstream/18.0
        // Backward selection
        await testEditor({
            contentBefore: "<p>ab]cd[</p>",
            stepFunction: insertLineBreak,
            // the second <br> is needed to make the first one
            // visible.
            contentAfter: "<p>ab<br>[]<br></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    test("should delete all contents of a paragraph, then insert a line break", async () => {
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
=======
    test("should delete all contents of a paragraph, then insert a line break (1)", async () => {
>>>>>>> upstream/18.0
        // Forward selection
        await testEditor({
            contentBefore: "<p>[abcd]</p>",
            stepFunction: insertLineBreak,
            contentAfter: "<p><br>[]<br></p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
=======
    });

    test("should delete all contents of a paragraph, then insert a line break (2)", async () => {
>>>>>>> upstream/18.0
        // Backward selection
        await testEditor({
            contentBefore: "<p>]abcd[</p>",
            stepFunction: insertLineBreak,
            contentAfter: "<p><br>[]<br></p>",
        });
    });
});

describe("table", () => {
    test("should remove all contents of an anchor td and insert a line break on forward selection", async () => {
        // Forward selection
        await testEditor({
            contentBefore: `
                <table>
                    <tbody>
                        <tr>
                            <td><p>[abc</p><p>def</p></td>
                            <td><p>abcd</p></td>
                            <td><p>ab]</p></td>
                        </tr>
                        <tr>
                            <td><p><br></p></td>
                            <td><p><br></p></td>
                            <td><p><br></p></td>
                        </tr>
                    </tbody>
                </table>`,
            stepFunction: insertLineBreak,
            contentAfter: `
                <table>
                    <tbody>
                        <tr>
                            <td><p><br>[]<br></p></td>
                            <td><p>abcd</p></td>
                            <td><p>ab</p></td>
                        </tr>
                        <tr>
                            <td><p><br></p></td>
                            <td><p><br></p></td>
                            <td><p><br></p></td>
                        </tr>
                    </tbody>
                </table>`,
        });
    });
    test("should remove all contents of an anchor td and insert a line break on backward selection", async () => {
        // Backward selection
        await testEditor({
            contentBefore: `
                <table>
                    <tbody>
                        <tr>
                            <td><p>]ab</p></td>
                            <td><p>abcd</p></td>
                            <td><p>abc</p><p>def[</p></td>
                        </tr>
                        <tr>
                            <td><p><br></p></td>
                            <td><p><br></p></td>
                            <td><p><br></p></td>
                        </tr>
                    </tbody>
                </table>`,
            stepFunction: insertLineBreak,
            contentAfter: `
                <table>
                    <tbody>
                        <tr>
                            <td><p>ab</p></td>
                            <td><p>abcd</p></td>
                            <td><p><br>[]<br></p></td>
                        </tr>
                        <tr>
                            <td><p><br></p></td>
                            <td><p><br></p></td>
                            <td><p><br></p></td>
                        </tr>
                    </tbody>
                </table>`,
        });
    });
});
