/** @odoo-module **/

import { rpc } from "@web/core/network/rpc";
import { registry } from "@web/core/registry";
import { FormController } from "@web/views/form/form_controller";
import { formView } from "@web/views/form/form_view";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { startAuthentication } from "../../lib/simplewebauthn.js";
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0
=======
import * as passkeyLib from "../../lib/simplewebauthn.js";
>>>>>>> upstream/18.0

export class PassKeyIdentityCheckFormController extends FormController {
    /**
     * @override
     */
    async beforeExecuteActionButton(clickParams) {
        if (
            clickParams.name === "run_check" &&
            this.model.root.data.auth_method == "webauthn"
        ) {
            const serverOptions = await rpc("/auth/passkey/start-auth");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            const auth = await startAuthentication(serverOptions).catch(e => console.log(e));
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
=======
            const auth = await passkeyLib.startAuthentication(serverOptions).catch(e => console.log(e));
>>>>>>> upstream/18.0
            // In case the user cancelled the passkey browser check, just interrupt.
            if(!auth) return false;
            this.model.root.update({password: JSON.stringify(auth)});
        }
        return super.beforeExecuteActionButton(...arguments);
    }
}

export const PassKeyIdentityCheckFormView = {
    ...formView,
    Controller: PassKeyIdentityCheckFormController,
};

registry.category("views").add("auth_passkey_identity_check_view_form", PassKeyIdentityCheckFormView);
