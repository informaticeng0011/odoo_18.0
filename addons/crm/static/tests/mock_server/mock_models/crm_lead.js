import { models } from "@web/../tests/web_test_helpers";

export class CrmLead extends models.ServerModel {
    _name = "crm.lead";
    _views = {
<<<<<<< HEAD
        search: /* xml */ `<search/>`,
        'form,false': /* xml */ `
=======
        form: /* xml */ `
>>>>>>> upstream/18.0
            <form string="Lead">
                <sheet>
                    <field name="name"/>
                </sheet>
<<<<<<< HEAD
            </form>`
=======
            </form>`,
>>>>>>> upstream/18.0
    };
}
