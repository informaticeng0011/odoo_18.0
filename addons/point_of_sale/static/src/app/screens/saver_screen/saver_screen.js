import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";
import { useTime } from "@point_of_sale/app/utils/time_hook";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0
=======
import { useService } from "@web/core/utils/hooks";
>>>>>>> upstream/18.0

export class SaverScreen extends Component {
    static template = "point_of_sale.SaverScreen";
    static storeOnOrder = false;
    static updatePreviousScreen = false;
    static props = [];

    setup() {
        this.time = useTime();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
=======
        this.dialog = useService("dialog");
        this.dialog.closeAll();
>>>>>>> upstream/18.0
    }
}

registry.category("pos_screens").add("SaverScreen", SaverScreen);
