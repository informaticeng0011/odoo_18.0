import { Plugin } from "@html_editor/plugin";
import { closestElement } from "@html_editor/utils/dom_traversal";
import { reactive } from "@odoo/owl";
import { _t } from "@web/core/l10n/translation";
import { TableMenu } from "./table_menu";
import { TablePicker } from "./table_picker";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0
=======
import { registry } from "@web/core/registry";
>>>>>>> upstream/18.0

/**
 * This plugin only contains the table ui feature (table picker, menus, ...).
 * All actual table manipulation code is located in the table plugin.
 */
export class TableUIPlugin extends Plugin {
    static id = "tableUi";
    static dependencies = ["history", "overlay", "table"];
    resources = {
        user_commands: [
            {
                id: "openTablePicker",
                title: _t("Table"),
                description: _t("Insert a table"),
                icon: "fa-table",
                run: this.openPickerOrInsertTable.bind(this),
            },
        ],
        powerbox_items: [
            {
                categoryId: "structure",
                commandId: "openTablePicker",
            },
        ],
        power_buttons: { commandId: "openTablePicker" },
    };

    setup() {
        /** @type {import("@html_editor/core/overlay_plugin").Overlay} */
        this.picker = this.dependencies.overlay.createOverlay(TablePicker, {
            positionOptions: {
                updatePositionOnResize: false,
                onPositioned: (picker, position) => {
                    const popperRect = picker.getBoundingClientRect();
                    const { left } = position;
                    if (this.config.direction === "rtl") {
                        // position from the right instead of the left as it is needed
                        // to ensure the expand animation is properly done
                        picker.style.right = `${window.innerWidth - left - popperRect.width}px`;
                        picker.style.removeProperty("left");
                    }
                },
            },
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
        this.activeTd = null;

        /** @type {import("@html_editor/core/overlay_plugin").Overlay} */
        this.colMenu = this.dependencies.overlay.createOverlay(TableMenu, {
            positionOptions: {
                position: "top-fit",
                onPositioned: (el, solution) => {
                    // Only accept top position as solution.
                    if (solution.direction !== "top") {
                        el.style.display = "none"; // avoid glitch
                        this.colMenu.close();
                    }
                },
            },
        });
        /** @type {import("@html_editor/core/overlay_plugin").Overlay} */
        this.rowMenu = this.dependencies.overlay.createOverlay(TableMenu, {
            positionOptions: {
                position: "left-fit",
            },
        });
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
        this.columnMenuOverlayKey = "table-column-menu";
        this.rowMenuOverlayKey = "table-row-menu";
        this.activeTd = null;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        this.addDomListener(this.document, "pointermove", this.onMouseMove);
        const closeMenus = () => {
            if (this.isMenuOpened) {
                this.isMenuOpened = false;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                this.colMenu.close();
                this.rowMenu.close();
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
=======
                this.closeColumnMenu();
                this.closeRowMenu();
>>>>>>> upstream/18.0
            }
        };
        this.addDomListener(this.document, "scroll", closeMenus, true);
    }

    openPicker() {
        this.picker.open({
            props: {
                editable: this.editable,
                overlay: this.picker,
                direction: this.config.direction || "ltr",
                insertTable: (params) => this.dependencies.table.insertTable(params),
            },
        });
    }

    openPickerOrInsertTable() {
        if (this.services.ui.isSmall) {
            this.dependencies.table.insertTable({ cols: 3, rows: 3 });
        } else {
            this.openPicker();
        }
    }

    onMouseMove(ev) {
        const target = ev.target;
        if (this.isMenuOpened) {
            return;
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if (
            ["TD", "TH"].includes(target.tagName) &&
            target !== this.activeTd &&
            this.editable.contains(target)
        ) {
            if (ev.target.isContentEditable) {
                this.setActiveTd(target);
            }
        } else if (this.activeTd) {
            const isOverlay = target.closest(".o-overlay-container");
            if (isOverlay) {
                return;
            }
            const parentTd = closestElement(target, "td, th");
            if (!parentTd) {
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
        const targetCell = closestElement(target, "td, th");
        if (targetCell && targetCell !== this.activeTd && this.editable.contains(targetCell)) {
            if (ev.target.isContentEditable) {
                this.setActiveTd(targetCell);
            }
        } else if (this.activeTd) {
            const isOverlay = target.closest(".o-we-table-menu");
            if (isOverlay) {
                return;
            }
            if (!targetCell) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                this.setActiveTd(null);
            }
        }
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    createDropdownState(menuToClose) {
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
=======
    createDropdownState(closeMenu) {
>>>>>>> upstream/18.0
        const dropdownState = reactive({
            isOpen: false,
            open: () => {
                dropdownState.isOpen = true;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                menuToClose.close();
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
=======
                closeMenu();
>>>>>>> upstream/18.0
                this.isMenuOpened = true;
            },
            close: () => {
                dropdownState.isOpen = false;
                this.isMenuOpened = false;
            },
        });
        return dropdownState;
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    setActiveTd(td) {
        this.activeTd = td;
        this.colMenu.close();
        this.rowMenu.close();
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
    closeColumnMenu() {
        registry.category(this.config.localOverlayContainers.key).remove(this.columnMenuOverlayKey);
    }

    closeRowMenu() {
        registry.category(this.config.localOverlayContainers.key).remove(this.rowMenuOverlayKey);
    }

    setActiveTd(td) {
        this.activeTd = td;
        this.closeColumnMenu();
        this.closeRowMenu();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        if (!td) {
            return;
        }
        const withAddStep = (fn) => {
            return (...args) => {
                fn(...args);
                this.dependencies.history.addStep();
            };
        };
        const tableMethods = {
            moveColumn: withAddStep(this.dependencies.table.moveColumn),
            addColumn: withAddStep(this.dependencies.table.addColumn),
            removeColumn: withAddStep(this.dependencies.table.removeColumn),
            moveRow: withAddStep(this.dependencies.table.moveRow),
            addRow: withAddStep(this.dependencies.table.addRow),
            removeRow: withAddStep(this.dependencies.table.removeRow),
            resetTableSize: withAddStep(this.dependencies.table.resetTableSize),
        };
        if (td.cellIndex === 0) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            this.rowMenu.open({
                target: td,
                props: {
                    type: "row",
                    overlay: this.rowMenu,
                    target: td,
                    dropdownState: this.createDropdownState(this.colMenu),
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
            registry.category(this.config.localOverlayContainers.key).add(this.rowMenuOverlayKey, {
                Component: TableMenu,
                props: {
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
            registry.category(this.config.localOverlayContainers.key).add(this.rowMenuOverlayKey, {
                Component: TableMenu,
                props: {
                    document: this.document,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                    type: "row",
                    target: td,
                    dropdownState: this.createDropdownState(this.closeColumnMenu.bind(this)),
                    direction: this.config.direction || "ltr",
                    close: () => this.closeRowMenu(),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                    ...tableMethods,
                },
            });
        }
        if (td.parentElement.rowIndex === 0) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            this.colMenu.open({
                target: td,
                props: {
                    type: "column",
                    overlay: this.colMenu,
                    target: td,
                    dropdownState: this.createDropdownState(this.rowMenu),
                    direction: this.config.direction || "ltr",
                    ...tableMethods,
                },
            });
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
            registry
                .category(this.config.localOverlayContainers.key)
                .add(this.columnMenuOverlayKey, {
                    Component: TableMenu,
                    props: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
=======
                        document: this.document,
>>>>>>> upstream/18.0
                        type: "column",
                        target: td,
                        dropdownState: this.createDropdownState(this.closeRowMenu.bind(this)),
                        direction: this.config.direction || "ltr",
                        close: () => this.closeColumnMenu(),
                        ...tableMethods,
                    },
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
        }
    }
}
