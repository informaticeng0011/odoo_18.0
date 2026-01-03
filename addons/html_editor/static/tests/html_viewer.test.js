import { HtmlViewer } from "@html_editor/fields/html_viewer";
import { expect, test } from "@odoo/hoot";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
=======
import { waitFor } from "@odoo/hoot-dom";
>>>>>>> upstream/18.0
import { animationFrame } from "@odoo/hoot-mock";
import { markup } from "@odoo/owl";
import { mountWithCleanup } from "@web/../tests/web_test_helpers";
import { registry } from "@web/core/registry";
import { WebClient } from "@web/webclient/webclient";

test(`XML-like self-closing elements are fixed in a standalone HtmlViewer`, async () => {
    await mountWithCleanup(WebClient);

    registry.category("main_components").add("mycomponent", {
        Component: HtmlViewer,
        props: {
            config: {
                value: markup(`<a href="#"/>outside<a href="#">inside</a>`),
            },
        },
    });
    await animationFrame();
    expect(".o_readonly").toHaveInnerHTML(
        `<a href="#" target="_blank" rel="noreferrer"></a>outside<a href="#" target="_blank" rel="noreferrer">inside</a>`
    );
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

test(`copy from HtmlViewer must support application/vnd.odoo.odoo-editor`, async () => {
    await mountWithCleanup(WebClient);

    registry.category("main_components").add("mycomponent", {
        Component: HtmlViewer,
        props: {
            config: {
                value: markup(`
                    <p>before</p>
                    <table class="table table-bordered o_table">
                        <tbody>
                            <tr style="height: 49.1875px;">
                                <td style="background-color: rgba(214, 239, 214, 0.6); color: rgb(55, 65, 81);">
                                    <p>A</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>after</p>
                `),
            },
        },
    });
    await animationFrame();
    const beforeNode = await waitFor("p:contains('before')");
    const afterNode = await waitFor("p:contains('after')");
    const range = new Range();
    range.setStart(beforeNode, 1);
    range.setEnd(afterNode, 0);
    getSelection().addRange(range);
    await animationFrame();

    const clipboardData = new DataTransfer();
    const ev = new ClipboardEvent("copy", { bubbles: true, clipboardData });
    beforeNode.dispatchEvent(ev);

    expect(clipboardData.getData("text/plain").trim()).toBe("A");
    expect(clipboardData.getData("text/html")).toInclude("background-color");
    expect(clipboardData.getData("application/vnd.odoo.odoo-editor")).toBe(
        clipboardData.getData("text/html")
    );
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
