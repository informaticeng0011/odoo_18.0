import { describe, expect, test } from "@odoo/hoot";
import { manuallyDispatchProgrammaticEvent, press, queryOne } from "@odoo/hoot-dom";
import { animationFrame, tick } from "@odoo/hoot-mock";
import { patchWithCleanup } from "@web/../tests/web_test_helpers";
import { setupEditor, testEditor } from "../_helpers/editor";
import { unformat } from "../_helpers/format";
import { getContent } from "../_helpers/selection";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { BOLD_TAGS, notStrong, span, strong } from "../_helpers/tags";
import { bold, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
=======
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
import { bold, italic, simulateArrowKeyPress, tripleClick } from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
>>>>>>> upstream/18.0
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
import { BOLD_TAGS, notStrong, span, strong, em } from "../_helpers/tags";
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
import {
    bold,
    insertText,
    italic,
    simulateArrowKeyPress,
    tripleClick,
    undo,
} from "../_helpers/user_actions";
import { expectElementCount } from "../_helpers/ui_expectations";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

const styleH1Bold = `h1 { font-weight: bold; }`;

test("should make a few characters bold", async () => {
    await testEditor({
        contentBefore: "<p>ab[cde]fg</p>",
        stepFunction: bold,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentAfter: `<p>ab${strong(`[cde]`)}fg</p>`,
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p>ab<strong>[cde]</strong>fg</p>`,
>>>>>>> upstream/18.0
    });
});

test("should make a few characters not bold", async () => {
    await testEditor({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentBefore: `<p>${strong(`ab[cde]fg`)}</p>`,
        stepFunction: bold,
        contentAfter: `<p>${strong(`ab`)}[cde]${strong(`fg`)}</p>`,
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>ab[cde]fg</strong></p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>ab</strong>[cde]<strong>fg</strong></p>`,
>>>>>>> upstream/18.0
    });
});

test("should make two paragraphs bold", async () => {
    await testEditor({
        contentBefore: "<p>[abc</p><p>def]</p>",
        stepFunction: bold,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentAfter: `<p>${strong(`[abc`)}</p><p>${strong(`def]`)}</p>`,
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
    });
});

test("should make two paragraphs not bold", async () => {
    await testEditor({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentBefore: `<p>${strong(`[abc`)}</p><p>${strong(`def]`)}</p>`,
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[abc</strong></p><p><strong>def]</strong></p>`,
>>>>>>> upstream/18.0
        stepFunction: bold,
        contentAfter: `<p>[abc</p><p>def]</p>`,
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
test("should make qweb tag bold", async () => {
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
=======
test("should make qweb tag bold (1)", async () => {
>>>>>>> upstream/18.0
    await testEditor({
        contentBefore: `<div><p t-esc="'Test'" contenteditable="false">[Test]</p></div>`,
        stepFunction: bold,
        contentAfter: `<div>[<p t-esc="'Test'" contenteditable="false" style="font-weight: bolder;">Test</p>]</div>`,
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
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
=======
});

test("should make qweb tag bold (2)", async () => {
>>>>>>> upstream/18.0
    await testEditor({
        contentBefore: `<div><p t-field="record.name" contenteditable="false">[Test]</p></div>`,
        stepFunction: bold,
        contentAfter: `<div>[<p t-field="record.name" contenteditable="false" style="font-weight: bolder;">Test</p>]</div>`,
    });
});

test("should make qweb tag bold and create a step even with partial selection inside contenteditable false", async () => {
    const { editor, el } = await setupEditor(
        `<div><p t-esc="'Test'" contenteditable="false">T[e]st</p></div>`
    );
    bold(editor);
    expect(getContent(el)).toBe(
        `<div>[<p t-esc="'Test'" contenteditable="false" style="font-weight: bolder;">Test</p>]</div>`
    );
    expect(queryOne(`p[contenteditable="false"]`).childNodes.length).toBe(1);
    const historySteps = editor.shared.history.getHistorySteps();
    expect(historySteps.length).toBe(2);
    const lastStep = historySteps.at(-1);
    expect(lastStep.mutations.length).toBe(1);
    expect(lastStep.mutations[0].type).toBe("attributes");
    expect(lastStep.mutations[0].attributeName).toBe("style");
    expect(lastStep.mutations[0].value).toBe("font-weight: bolder;");
});

test("should make a whole heading bold after a triple click", async () => {
    await testEditor({
        styleContent: styleH1Bold,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentBefore: `<h1>${notStrong(`[ab`)}</h1><p>]cd</p>`,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        stepFunction: bold,
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p>]cd</p>`,
>>>>>>> upstream/18.0
        stepFunction: async (editor) => {
            await tripleClick(editor.editable.querySelector("h1"));
            bold(editor);
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        contentAfter: `<h1>[ab]</h1><p>cd</p>`,
    });
});

test("should make a whole heading not bold after a triple click (heading is considered bold)", async () => {
    const { el, editor } = await setupEditor(`<h1>[ab</h1><p>]cd</p>`, {
        styleContent: styleH1Bold,
    });
    await tripleClick(el.querySelector("h1"));
    bold(editor);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(getContent(el)).toBe(`<h1>${notStrong(`[ab]`)}</h1><p>cd</p>`);
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<h1><span style="font-weight: normal;">[ab]</span></h1><p>cd</p>`);
>>>>>>> upstream/18.0
});

test("should make a selection starting with bold text fully bold", async () => {
    await testEditor({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentBefore: `<p>${strong(`[ab`)}</p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p>${strong(`[ab`)}</p><p>${strong(`c]`)}d</p>`,
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p><strong>[ab</strong></p><p>c]d</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>c]</strong>d</p>`,
>>>>>>> upstream/18.0
    });
});

test("should make a selection with bold text in the middle fully bold", async () => {
    await testEditor({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentBefore: `<p>[a${strong(`b`)}</p><p>${strong(`c`)}d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p>${strong(`[ab`)}</p><p>${strong(`cd]`)}e</p>`,
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<p>[a<strong>b</strong></p><p><strong>c</strong>d]e</p>`,
        stepFunction: bold,
        contentAfter: `<p><strong>[ab</strong></p><p><strong>cd]</strong>e</p>`,
>>>>>>> upstream/18.0
    });
});

test("should make a selection ending with bold text fully bold", async () => {
    await testEditor({
        styleContent: styleH1Bold,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentBefore: `<h1>${notStrong(`[ab`)}</h1><p>${strong(`c]d`)}</p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p>${strong(`c]d`)}</p>`,
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentBefore: `<h1><span style="font-weight: normal;">[ab</span></h1><p><strong>c]d</strong></p>`,
        stepFunction: bold,
        contentAfter: `<h1>[ab</h1><p><strong>c]d</strong></p>`,
>>>>>>> upstream/18.0
    });
});

test("should get ready to type in bold", async () => {
    await testEditor({
        contentBefore: "<p>ab[]cd</p>",
        stepFunction: bold,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentAfterEdit: `<p>ab${strong(`[]\u200B`, "first")}cd</p>`,
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`,
>>>>>>> upstream/18.0
        contentAfter: `<p>ab[]cd</p>`,
    });
});

test("should get ready to type in not bold", async () => {
    await testEditor({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentBefore: `<p>${strong(`ab[]cd`)}</p>`,
        stepFunction: bold,
        contentAfterEdit: `<p>${strong(`ab`)}${span(`[]\u200B`, "first")}${strong(`cd`)}</p>`,
        contentAfter: `<p>${strong(`ab[]cd`)}</p>`,
    });
});

test("should remove a bold tag that was redondant while performing the command", async () => {
    for (const tag of BOLD_TAGS) {
        await testEditor({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            contentBefore: `<p>a${tag(`b${tag(`[c]`)}d`)}e</p>`,
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<p>a${tag(`b[c]d`)}e</p>`,
>>>>>>> upstream/18.0
            stepFunction: bold,
            contentAfter: `<p>a${tag("b")}[c]${tag("d")}e</p>`,
        });
    }
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
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
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
=======
>>>>>>> upstream/18.0
        contentBefore: `<p><strong>ab[]cd</strong></p>`,
        stepFunction: bold,
        contentAfterEdit: `<p><strong>ab</strong><span data-oe-zws-empty-inline="">[]\u200B</span><strong>cd</strong></p>`,
        contentAfter: `<p><strong>ab[]cd</strong></p>`,
    });
});

describe("Redundant bold tags", () => {
    test(`should remove a strong tag that was redundant while performing the command.`, async () => {
        await testEditor({
            contentBefore: `<p>a<strong>b[c]d</strong>e</p>`,
            stepFunction: bold,
            contentAfter: `<p>a<strong>b</strong>[c]<strong>d</strong>e</p>`,
        });
    });

    test(`should remove a span tag with bold style that was redundant while performing the command.`, async () => {
        await testEditor({
            contentBefore: `<p>a<span style="font-weight: bolder;">b[c]d</span>e</p>`,
            stepFunction: bold,
            contentAfter: `<p>a<span style="font-weight: bolder;">b</span>[c]<span style="font-weight: bolder;">d</span>e</p>`,
        });
    });

    test(`should remove a b tag that was redundant while performing the command.`, async () => {
        await testEditor({
            contentBefore: `<p>a<b>b[c]d</b>e</p>`,
            stepFunction: bold,
            contentAfter: `<p>a<b>b</b>[c]<b>d</b>e</p>`,
        });
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
test("should remove bold format when having newline character nodes in selection", async () => {
    await testEditor({
        contentBefore:
            "<p><strong>[abc</strong></p>\n<p><strong>def</strong></p>\n<p><strong>ghi]</strong></p>",
        stepFunction: bold,
        contentAfter: "<p>[abc</p>\n<p>def</p>\n<p>ghi]</p>",
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
test("should remove a bold tag that was redondant with different tags while performing the command", async () => {
    await testEditor({
        contentBefore: unformat(`<p>
                a
                <span style="font-weight: bolder;">
                    b
                    <strong>c<b>[d]</b>e</strong>
                    f
                </span>
                g
            </p>`),
        stepFunction: bold,
        contentAfter: unformat(`<p>
                a
                <span style="font-weight: bolder;">b<strong>c</strong></span>
                [d]
                <span style="font-weight: bolder;"><strong>e</strong>f</span>
                g
            </p>`),
    });
});

test("should not format non-editable text (bold)", async () => {
    await testEditor({
        contentBefore: '<p>[a</p><p contenteditable="false">b</p><p>c]</p>',
        stepFunction: bold,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentAfter: `<p>${strong("[a")}</p><p contenteditable="false">b</p><p>${strong(
            "c]"
        )}</p>`,
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
=======
        contentAfter: `<p><strong>[a</strong></p><p contenteditable="false">b</p><p><strong>c]</strong></p>`,
>>>>>>> upstream/18.0
    });
});

test("should make a few characters bold inside table (bold)", async () => {
    await testEditor({
        contentBefore: unformat(`
            <table class="table table-bordered o_table o_selected_table">
                <tbody>
                    <tr>
                        <td class="o_selected_td"><p>[abc</p></td>
                        <td class="o_selected_td"><p>def</p></td>
                        <td class="o_selected_td"><p>]<br></p></td>
                    </tr>
                    <tr>
                        <td><p><br></p></td>
                        <td><p><br></p></td>
                        <td><p><br></p></td>
                    </tr>
                    <tr>
                        <td><p><br></p></td>
                        <td><p><br></p></td>
                        <td><p><br></p></td>
                    </tr>
                </tbody>
            </table>`),
        stepFunction: bold,
        contentAfterEdit: unformat(`
            <table class="table table-bordered o_table o_selected_table">
                <tbody>
                    <tr>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        <td class="o_selected_td"><p>${strong(`[abc`)}</p></td>
                        <td class="o_selected_td"><p>${strong(`def`)}</p></td>
                        <td class="o_selected_td"><p>${strong(`]<br>`)}</p></td>
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
=======
                        <td class="o_selected_td"><p><strong>[abc</strong></p></td>
                        <td class="o_selected_td"><p><strong>def</strong></p></td>
                        <td class="o_selected_td"><p><strong>]<br></strong></p></td>
>>>>>>> upstream/18.0
                    </tr>
                    <tr>
                        <td><p><br></p></td>
                        <td><p><br></p></td>
                        <td><p><br></p></td>
                    </tr>
                    <tr>
                        <td><p><br></p></td>
                        <td><p><br></p></td>
                        <td><p><br></p></td>
                    </tr>
            </tbody>
            </table>`),
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
test("should insert a span zws when toggling a formatting command twice", () => {
    return testEditor({
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
=======
test("should insert a span zws when toggling a formatting command twice", () =>
    testEditor({
>>>>>>> upstream/18.0
        contentBefore: `<p>[]<br></p>`,
        stepFunction: async (editor) => {
            bold(editor);
            bold(editor);
        },
        // todo: It would be better to remove the zws entirely so that
        // the P could have the "/" hint but that behavior might be
        // complex with the current implementation.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        contentAfterEdit: `<p>${span(`[]\u200B`, "first")}</p>`,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    });
});
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
=======
    }));
>>>>>>> upstream/18.0
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint">${span(
            `[]\u200B`,
            "first"
        )}</p>`,
    }));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0
=======
        contentAfterEdit: `<p placeholder='Type "/" for commands' class="o-we-hint"><span data-oe-zws-empty-inline="">[]\u200B</span></p>`,
    }));
>>>>>>> upstream/18.0

// This test uses execCommand to reproduce as closely as possible the browser's
// default behaviour when typing in a contenteditable=true zone.
test("should type in bold", async () => {
    async function typeChar(editor, char) {
        await manuallyDispatchProgrammaticEvent(editor.editable, "keydown", { key: char });
        await manuallyDispatchProgrammaticEvent(editor.editable, "beforeinput", {
            inputType: "insertText",
            data: char,
        });
        // Simulate text insertion as done by the contenteditable.
        editor.document.execCommand("insertText", false, char);
        // Input event is dispatched and handlers are called synchronously.
        await manuallyDispatchProgrammaticEvent(editor.editable, "keyup", { key: char });
    }

    const { editor, el } = await setupEditor("<p>ab[]cd</p>");

    /** @todo fix warnings */
    patchWithCleanup(console, { warn: () => {} });

    // Toggle bold on.
    bold(editor);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(getContent(el)).toBe(`<p>ab${strong("[]\u200B", "first")}cd</p>`);
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0

    // Simulate text insertion as done by the contenteditable.
    await typeChar(editor, "x");
    // Check that character was inserted inside the strong tag.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(getContent(el)).toBe(`<p>ab${strong("x[]")}cd</p>`);

    // Keep typing.
    await typeChar(editor, "y");
    expect(getContent(el)).toBe(`<p>ab${strong("xy[]")}cd</p>`);

    // Toggle bold off and type more.
    bold(editor);
    expect(getContent(el)).toBe(`<p>ab${strong("xy")}${span("[]\u200B", "first")}cd</p>`);
    await typeChar(editor, "z");
    expect(getContent(el)).toBe(`<p>ab${strong("xy")}z[]cd</p>`);
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
=======
>>>>>>> upstream/18.0
    expect(getContent(el)).toBe(`<p>ab<strong>x[]</strong>cd</p>`);

    // Keep typing.
    await typeChar(editor, "y");
    expect(getContent(el)).toBe(`<p>ab<strong>xy[]</strong>cd</p>`);

    // Toggle bold off and type more.
    bold(editor);
    expect(getContent(el)).toBe(
        `<p>ab<strong>xy</strong><span data-oe-zws-empty-inline="">[]\u200B</span>cd</p>`
    );
    await typeChar(editor, "z");
    expect(getContent(el)).toBe(`<p>ab<strong>xy</strong>z[]cd</p>`);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
});

test.tags("desktop");
test("create bold with shortcut + selected with arrow", async () => {
    const { editor, el } = await setupEditor("<p>ab[]cd</p>");
    await press(["control", "b"]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(getContent(el)).toBe(`<p>ab${strong("[]\u200B", "first")}cd</p>`);
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0

    await simulateArrowKeyPress(editor, ["Shift", "ArrowRight"]);
    await tick(); // await selectionchange
    await animationFrame();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(".o-we-toolbar").toHaveCount(1);
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
>>>>>>> upstream/18.0
    expect(getContent(el)).toBe(`<p>ab${strong("[\u200B", "first")}c]d</p>`);
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 1);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B</strong>c]d</p>`);
>>>>>>> upstream/18.0

    await simulateArrowKeyPress(editor, ["Shift", "ArrowLeft"]);
    await tick(); // await selectionchange
    await animationFrame();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(".o-we-toolbar").toHaveCount(0);
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
>>>>>>> upstream/18.0
    expect(getContent(el)).toBe(`<p>ab${strong("[\u200B]", "first")}cd</p>`);
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    await expectElementCount(".o-we-toolbar", 0);
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[\u200B]</strong>cd</p>`);
>>>>>>> upstream/18.0
});

const styleContentBold = `.boldClass { font-weight: bold; }`;
describe("inside container or inline with class already bold", () => {
    test("should force the font-weight to normal with an inline with class", async () => {
        await testEditor({
            styleContent: styleContentBold,
            contentBefore: `<div class="o-paragraph">a<span class="boldClass">[b]</span>c</div>`,
            stepFunction: bold,
            contentAfter: `<div>a<span class="boldClass"><span style="font-weight: normal;">[b]</span></span>c</div>`,
        });
    });

    test("should force the font-weight to normal", async () => {
        await testEditor({
            styleContent: styleContentBold,
            contentBefore: `<p class="boldClass">a[b]c</p>`,
            stepFunction: bold,
            contentAfter: `<p class="boldClass">a<span style="font-weight: normal;">[b]</span>c</p>`,
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
    test("should force the font-weight to normal while removing redundant tag", async () => {
        for (const tag of BOLD_TAGS) {
            await testEditor({
                styleContent: styleContentBold,
                contentBefore: `<p class="boldClass">a${tag("[b]")}c</p>`,
                stepFunction: bold,
                contentAfter: `<p class="boldClass">a<span style="font-weight: normal;">[b]</span>c</p>`,
            });
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    test("should force the font-weight to normal while removing redundant tag. (1)", async () => {
        await testEditor({
            styleContent: styleContentBold,
            contentBefore: `<p class="boldClass">a<strong>[b]</strong>c</p>`,
            stepFunction: bold,
            contentAfter: `<p class="boldClass">a<span style="font-weight: normal;">[b]</span>c</p>`,
        });
    });

    test("should force the font-weight to normal while removing redundant tag. (2)", async () => {
        await testEditor({
            styleContent: styleContentBold,
            contentBefore: `<p class="boldClass">a<span style="font-weight: bolder;">[b]</span>c</p>`,
            stepFunction: bold,
            contentAfter: `<p class="boldClass">a<span style="font-weight: normal;">[b]</span>c</p>`,
        });
    });

    test("should force the font-weight to normal while removing redundant tag. (3)", async () => {
        await testEditor({
            styleContent: styleContentBold,
            contentBefore: `<p class="boldClass">a<b>[b]</b>c</p>`,
            stepFunction: bold,
            contentAfter: `<p class="boldClass">a<span style="font-weight: normal;">[b]</span>c</p>`,
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    });
});

describe("inside container font-weight: 500 and strong being strong-weight: 500", () => {
    test("should remove the redundant strong style and add span with a bolder font-weight", async () => {
        await testEditor({
            styleContent: `h1, strong {font-weight: 500;}`,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            contentBefore: `<h1>a${strong(`[b]`)}c</h1>`,
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
=======
            contentBefore: `<h1>a<strong>[b]</strong>c</h1>`,
>>>>>>> upstream/18.0
            stepFunction: bold,
            contentAfter: `<h1>a<span style="font-weight: bolder;">[b]</span>c</h1>`,
        });
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

test("should remove empty bold tag when changing selection", async () => {
    const { editor, el } = await setupEditor("<p>ab[]cd</p>");

    bold(editor);
    await tick();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(getContent(el)).toBe(`<p>ab${strong("[]\u200B", "first")}cd</p>`);
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(`<p>ab<strong data-oe-zws-empty-inline="">[]\u200B</strong>cd</p>`);
>>>>>>> upstream/18.0

    await simulateArrowKeyPress(editor, "ArrowLeft");
    await tick(); // await selectionchange
    expect(getContent(el)).toBe(`<p>a[]bcd</p>`);
});

test("should remove multiple formatted empty bold tag when changing selection", async () => {
    const { editor, el } = await setupEditor("<p>ab[]cd</p>");

    bold(editor);
    italic(editor);
    await tick();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(getContent(el)).toBe(`<p>ab${strong(em("[]\u200B", "first"), "first")}cd</p>`);
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0
=======
    expect(getContent(el)).toBe(
        `<p>ab<strong data-oe-zws-empty-inline=""><em data-oe-zws-empty-inline="">[]\u200B</em></strong>cd</p>`
    );
>>>>>>> upstream/18.0

    await simulateArrowKeyPress(editor, "ArrowLeft");
    await tick(); // await selectionchange
    expect(getContent(el)).toBe(`<p>a[]bcd</p>`);
});

test("should not remove empty bold tag in an empty block when changing selection", async () => {
    const { editor, el } = await setupEditor("<p>abcd</p><p>[]<br></p>");

    bold(editor);
    await tick();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(getContent(el)).toBe(`<p>abcd</p><p>${strong("[]\u200B", "first")}</p>`);
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    expect(getContent(el)).toBe(
        `<p>abcd</p><p placeholder='Type "/" for commands' class="o-we-hint">${strong(
            "[]\u200B",
            "first"
        )}</p>`
    );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

    await simulateArrowKeyPress(editor, "ArrowUp");
    await tick(); // await selectionchange
    expect(getContent(el)).toBe(`<p>[]abcd</p><p>${strong("\u200B", "first")}</p>`);
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
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
=======
>>>>>>> upstream/18.0
    expect(getContent(el)).toBe(
        `<p>abcd</p><p placeholder='Type "/" for commands' class="o-we-hint"><strong data-oe-zws-empty-inline="">[]\u200B</strong></p>`
    );

    await simulateArrowKeyPress(editor, "ArrowUp");
    await tick(); // await selectionchange
    expect(getContent(el)).toBe(
        `<p>[]abcd</p><p><strong data-oe-zws-empty-inline="">\u200B</strong></p>`
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

test("should not add history step for bold on collapsed selection", async () => {
    const { editor, el } = await setupEditor("<p>abcd[]</p>");

    patchWithCleanup(console, { warn: () => {} });

    // Collapsed formatting shortcuts (e.g. Ctrl+B) shouldn’t create a history
    // step. The empty inline tag is temporary: auto-cleaned if unused. We want
    // to avoid having a phantom step in the history.
    await press(["ctrl", "b"]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(getContent(el)).toBe(`<p>abcd${strong("[]\u200B", "first")}</p>`);

    await insertText(editor, "A");
    expect(getContent(el)).toBe(`<p>abcd${strong("A[]")}</p>`);
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
=======
>>>>>>> upstream/18.0
    expect(getContent(el)).toBe(`<p>abcd<strong data-oe-zws-empty-inline="">[]\u200B</strong></p>`);

    await insertText(editor, "A");
    expect(getContent(el)).toBe(`<p>abcd<strong>A[]</strong></p>`);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0

    undo(editor);
    expect(getContent(el)).toBe(`<p>abcd[]</p>`);
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
