<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from "@odoo/owl";
=======
import { Component, useEffect, useRef } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, useEffect, useRef } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, useEffect, useRef } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, useEffect, useRef } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, useEffect, useRef } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, useEffect, useRef } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, useEffect, useRef } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, useEffect, useRef } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, useEffect, useRef } from "@odoo/owl";
>>>>>>> upstream/18.0
=======
import { Component, useEffect, useRef } from "@odoo/owl";
>>>>>>> upstream/18.0
import { useDropdownCloser } from "@web/core/dropdown/dropdown_hooks";

export class KanbanDropdownMenuWrapper extends Component {
    static template = "web.KanbanDropdownMenuWrapper";
    static props = {
        slots: Object,
    };

    setup() {
        this.dropdownControl = useDropdownCloser();
<<<<<<< HEAD
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
        this.rootRef = useRef("rootRef");
        useEffect(() => {
            const dropdownEls = this.rootRef.el.querySelectorAll(".dropdown-item");
            dropdownEls.forEach((el) => el.classList.add("o-navigable"));
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
    }

    onClick(ev) {
        this.dropdownControl.closeAll();
    }
}
