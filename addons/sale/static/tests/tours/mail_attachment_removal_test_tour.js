import { registry } from "@web/core/registry";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0
=======
import { inputFiles } from "@web/../tests/utils";
>>>>>>> upstream/18.0

registry.category("web_tour.tours").add("mail_attachment_removal_tour", {
    steps: () => [

    {
        content: "click on send by email",
        trigger: ".o_statusbar_buttons > button[name='action_quotation_send']",
        run: "click"
    },
    {
        content: "save a new layout",
        trigger: ".o_technical_modal button[name='document_layout_save']",
        run: "click"
    },
    {
        content: "delete attachment",
        trigger: ".o_field_widget[name='attachment_ids'] li > button .fa-times",
        run: "click"
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
    // Also check that additional attachments are not kept in chatter composer
    {
        content: "add one extra file in composer",
        trigger: ".o_field_mail_composer_attachment_selector button",
        async run() {
            const files = [new File(["hello, world"], "file1.txt", { type: "text/plain" })];
            await inputFiles(".o_field_mail_composer_attachment_selector .o_input_file", files);
        },
    },
    {
        content: "check new attachment is listed",
        trigger: ".o_field_mail_composer_attachment_list a:contains(file1.txt)",
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
        content: "send the email",
        trigger: ".o_mail_send",
        run: "click"
    },
    {
        content: "confirm quotation",
        trigger: "button[name='action_confirm']",
        run: "click"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }
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
    },
    {
        content: "click on Send Message",
        trigger: "button:contains('Send message')",
        run: "click",
    },
    {
        content: "Check that the extra attachment is not listed anymore in chatter composer",
        trigger: ".o-mail-Composer:not(:has(div.o-mail-AttachmentList))",
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
]
})
