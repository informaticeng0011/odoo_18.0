import { Plugin } from "../plugin";

export class InputPlugin extends Plugin {
    static id = "input";
    static dependencies = ["history"];
    setup() {
        this.addDomListener(this.editable, "beforeinput", this.onBeforeInput);
        this.addDomListener(this.editable, "input", this.onInput);
    }

    onBeforeInput(ev) {
<<<<<<< HEAD
=======
        const selection = this.document.getSelection();
        if (!this.editable.contains(selection?.anchorNode)) {
            ev.preventDefault();
            return;
        }
>>>>>>> upstream/18.0
        this.dependencies.history.stageSelection();
        this.dispatchTo("beforeinput_handlers", ev);
    }

    onInput(ev) {
        this.dependencies.history.addStep();
        this.dispatchTo("input_handlers", ev);
    }
}
