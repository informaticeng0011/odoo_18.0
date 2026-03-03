import { Plugin } from "@html_editor/plugin";
import {
    isColorGradient,
    rgbaToHex,
    hasColor,
    hasAnyNodesColor,
    TEXT_CLASSES_REGEX,
    BG_CLASSES_REGEX,
    RGBA_REGEX,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
} from "@html_editor/utils/color";
import { fillEmpty, unwrapContents } from "@html_editor/utils/dom";
import {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    isContentEditable,
    isEmptyBlock,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyBlock,
    isRedundantElement,
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    hasTextColorClass,
} from "@html_editor/utils/color";
import { fillEmpty, unwrapContents } from "@html_editor/utils/dom";
import {
    isEmptyBlock,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    isRedundantElement,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
=======
    isEmptyTextNode,
    isRedundantElement,
>>>>>>> upstream/18.0
    isTextNode,
    isWhitespace,
    isZwnbsp,
} from "@html_editor/utils/dom_info";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { closestElement, descendants } from "@html_editor/utils/dom_traversal";
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
>>>>>>> upstream/18.0
=======
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
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
    isEmptyTextNode,
    isRedundantElement,
    isTextNode,
    isWhitespace,
    isZwnbsp,
    PROTECTED_QWEB_SELECTOR,
} from "@html_editor/utils/dom_info";
import { closestElement, descendants, selectElements } from "@html_editor/utils/dom_traversal";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { isCSSColor } from "@web/core/utils/colors";
import { ColorSelector } from "./color_selector";
import { reactive } from "@odoo/owl";
import { _t } from "@web/core/l10n/translation";
import { withSequence } from "@html_editor/utils/resource";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { removeEmptyTextNodes } from "../../utils/dom";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { removeEmptyTextNodes } from "../../utils/dom";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { removeEmptyTextNodes } from "../../utils/dom";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { removeEmptyTextNodes } from "../../utils/dom";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { removeEmptyTextNodes } from "../../utils/dom";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { removeEmptyTextNodes } from "../../utils/dom";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { removeEmptyTextNodes } from "../../utils/dom";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { removeEmptyTextNodes } from "../../utils/dom";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
import { nodeSize } from "@html_editor/utils/position";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0
=======
import { isBlock } from "@html_editor/utils/blocks";
import { callbacksForCursorUpdate } from "@html_editor/utils/selection";
>>>>>>> upstream/18.0

const RGBA_OPACITY = 0.6;
const HEX_OPACITY = "99";

/**
 * @typedef { Object } ColorShared
 * @property { ColorPlugin['colorElement'] } colorElement
 * @property { ColorPlugin['getPropsForColorSelector'] } getPropsForColorSelector
 */
export class ColorPlugin extends Plugin {
    static id = "color";
    static dependencies = ["selection", "split", "history", "format"];
    static shared = ["colorElement", "getPropsForColorSelector"];
    resources = {
        user_commands: [
            {
                id: "applyColor",
                run: this.applyColor.bind(this),
            },
        ],
        toolbar_groups: withSequence(25, {
            id: "color",
        }),
        toolbar_items: [
            {
                id: "forecolor",
                groupId: "color",
                title: _t("Font Color"),
                Component: ColorSelector,
                props: this.getPropsForColorSelector("foreground"),
            },
            {
                id: "backcolor",
                groupId: "color",
                title: _t("Background Color"),
                Component: ColorSelector,
                props: this.getPropsForColorSelector("background"),
            },
        ],

        /** Handlers */
        selectionchange_handlers: this.updateSelectedColor.bind(this),
        remove_format_handlers: this.removeAllColor.bind(this),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
=======
        normalize_handlers: this.normalize.bind(this),
>>>>>>> upstream/18.0
    };

    setup() {
        this.selectedColors = reactive({ color: "", backgroundColor: "" });
        this.previewableApplyColor = this.dependencies.history.makePreviewableOperation(
            (color, mode, previewMode) => this._applyColor(color, mode, previewMode)
        );
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    normalize(root) {
        for (const el of selectElements(root, "font")) {
            if (isRedundantElement(el)) {
                unwrapContents(el);
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    /**
     * @param {'foreground'|'background'} type
     */
    getPropsForColorSelector(type) {
        const mode = type === "foreground" ? "color" : "backgroundColor";
        return {
            type,
            getUsedCustomColors: () => this.getUsedCustomColors(mode),
            getSelectedColors: () => this.selectedColors,
            applyColor: this.applyColor.bind(this),
            applyColorPreview: this.applyColorPreview.bind(this),
            applyColorResetPreview: this.applyColorResetPreview.bind(this),
            focusEditable: () => this.dependencies.selection.focusEditable(),
        };
    }

    updateSelectedColor() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const nodes = this.dependencies.selection.getTraversedNodes().filter(isTextNode);
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
=======
        const nodes = this.dependencies.selection.getTargetedNodes().filter(isTextNode);
>>>>>>> upstream/18.0
        if (nodes.length === 0) {
            return;
        }
        const el = closestElement(nodes[0]);
        if (!el) {
            return;
        }
        const elStyle = getComputedStyle(el);
        const backgroundImage = elStyle.backgroundImage;
        const hasGradient = isColorGradient(backgroundImage);
        const hasTextGradientClass = el.classList.contains("text-gradient");

        let backgroundColor = elStyle.backgroundColor;
        const activeTab = document
            .querySelector(".o_font_color_selector button.active")
            ?.innerHTML.trim();
        if (backgroundColor.startsWith("rgba") && activeTab === "Solid") {
            // Buttons in the solid tab of color selector have no
            // opacity, hence to match selected color correctly,
            // we need to remove applied 0.6 opacity.
            const values = backgroundColor.match(RGBA_REGEX) || [];
            const alpha = parseFloat(values.pop()); // Extract alpha value
            if (alpha === RGBA_OPACITY) {
                backgroundColor = `rgb(${values.slice(0, 3).join(", ")})`; // Remove alpha
            }
        }

        this.selectedColors.color =
            hasGradient && hasTextGradientClass ? backgroundImage : rgbaToHex(elStyle.color);
        this.selectedColors.backgroundColor =
            hasGradient && !hasTextGradientClass ? backgroundImage : rgbaToHex(backgroundColor);
    }

    /**
     * Apply a css or class color on the current selection (wrapped in <font>).
     *
     * @param {Object} param
     * @param {string} param.color hexadecimal or bg-name/text-name class
     * @param {string} param.mode 'color' or 'backgroundColor'
     */
    applyColor({ color, mode }) {
        this.previewableApplyColor.commit(color, mode);
        this.updateSelectedColor();
    }
    /**
     * Apply a css or class color on the current selection (wrapped in <font>)
     * in preview mode so that it can be reset.
     *
     * @param {Object} param
     * @param {string} param.color hexadecimal or bg-name/text-name class
     * @param {string} param.mode 'color' or 'backgroundColor'
     */
    applyColorPreview({ color, mode }) {
        // Preview the color before applying it.
        this.previewableApplyColor.preview(color, mode, true);
        this.updateSelectedColor();
    }
    /**
     * Reset the color applied in preview mode.
     */
    applyColorResetPreview() {
        this.previewableApplyColor.revert();
        this.updateSelectedColor();
    }

    removeAllColor() {
        const colorModes = ["color", "backgroundColor"];
        let someColorWasRemoved = true;
        while (someColorWasRemoved) {
            someColorWasRemoved = false;
            for (const mode of colorModes) {
                let max = 40;
                const hasAnySelectedNodeColor = (mode) => {
                    const nodes = this.dependencies.selection
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        .getTraversedNodes()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        .filter((n) => isTextNode(n) || n.classList.contains("o_selected_td"));
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
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
=======
                        .getTargetedNodes()
>>>>>>> upstream/18.0
                        .filter(
                            (n) =>
                                isTextNode(n) ||
                                (mode === "backgroundColor" &&
                                    n.classList.contains("o_selected_td"))
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
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
                        .getTargetedNodes()
                        .filter(
                            (n) =>
                                (isTextNode(n) ||
                                    n.matches?.(`t, ${PROTECTED_QWEB_SELECTOR}`) ||
                                    (mode === "backgroundColor" &&
                                        n.classList.contains("o_selected_td"))) &&
                                this.dependencies.selection.isNodeEditable(n)
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                    return hasAnyNodesColor(nodes, mode);
                };
                while (hasAnySelectedNodeColor(mode) && max > 0) {
                    this._applyColor("", mode);
                    someColorWasRemoved = true;
                    max--;
                }
                if (max === 0) {
                    someColorWasRemoved = false;
                    throw new Error("Infinite Loop in removeAllColor().");
                }
            }
        }
    }

    /**
     * Apply a css or class color on the current selection (wrapped in <font>).
     *
     * @param {string} color hexadecimal or bg-name/text-name class
     * @param {string} mode 'color' or 'backgroundColor'
     * @param {boolean} [previewMode=false] true - apply color in preview mode
     */
    _applyColor(color, mode, previewMode = false) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if (this.delegateTo("color_apply_overrides", color, mode, previewMode)) {
            return;
        }
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        const activeTab = document
            .querySelector(".o_font_color_selector button.active")
            ?.innerHTML.trim();
        if (mode === "backgroundColor" && activeTab === "Solid" && color.startsWith("#")) {
            // Apply default transparency to selected solid tab colors in background
            // mode to make text highlighting more usable between light and dark modes.
            color += HEX_OPACITY;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        let selection = this.dependencies.selection.getEditableSelection();
        let selectionNodes;
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
        if (this.delegateTo("color_apply_overrides", color, mode, previewMode)) {
            return;
        }
        let cursors;
        let selection = this.dependencies.selection.getEditableSelection();
        let targetedNodes;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        // Get the <font> nodes to color
        if (selection.isCollapsed) {
            let zws;
            if (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                selection.anchorNode.nodeType !== Node.TEXT_NODE &&
                selection.anchorNode.textContent !== "\u200b"
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
=======
                selection.anchorNode.nodeType === Node.TEXT_NODE &&
                selection.anchorNode.textContent === "\u200b"
>>>>>>> upstream/18.0
            ) {
                zws = selection.anchorNode;
            } else {
                zws = this.dependencies.format.insertAndSelectZws();
            }
            selection = this.dependencies.selection.setSelection(
                {
                    anchorNode: zws,
                    anchorOffset: 0,
                },
                { normalize: false }
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            selectionNodes = [zws];
        } else {
            selection = this.dependencies.split.splitSelection();
            selectionNodes = this.dependencies.selection
                .getSelectedNodes()
                .filter((node) => isContentEditable(node) && node.nodeName !== "T");
            if (isEmptyBlock(selection.endContainer)) {
                selectionNodes.push(selection.endContainer, ...descendants(selection.endContainer));
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
            cursors = this.dependencies.selection.preserveSelection();
            targetedNodes = [zws];
        } else {
            selection = this.dependencies.split.splitSelection();
            cursors = this.dependencies.selection.preserveSelection();
            targetedNodes = this.dependencies.selection
                .getTargetedNodes()
                .filter(
                    (node) =>
                        this.dependencies.selection.isNodeEditable(node) && node.nodeName !== "T"
                );
            if (isEmptyBlock(selection.endContainer)) {
                targetedNodes.push(selection.endContainer, ...descendants(selection.endContainer));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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

        const selectedNodes =
            mode === "backgroundColor" && color
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                ? selectionNodes.filter((node) => !closestElement(node, "table.o_selected_table"))
                : selectionNodes;

        const selectedFieldNodes = new Set(
            this.dependencies.selection
                .getSelectedNodes()
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
                ? targetedNodes.filter((node) => !closestElement(node, "table.o_selected_table"))
                : targetedNodes;

        const targetedFieldNodes = new Set(
            this.dependencies.selection
                .getTargetedNodes()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                .map((n) => closestElement(n, "*[t-field],*[t-out],*[t-esc]"))
                .filter(Boolean)
        );

        const getFonts = (selectedNodes) => {
            return selectedNodes.flatMap((node) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                let font = closestElement(node, "font") || closestElement(node, "span");
                const children = font && descendants(font);
                const hasInlineGradient = font && isColorGradient(font.style["background-image"]);
                if (
                    font &&
                    (font.nodeName === "FONT" || (font.nodeName === "SPAN" && font.style[mode])) &&
                    (isColorGradient(color) || color === "" || !hasInlineGradient)
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                .map((node) => closestElement(node, PROTECTED_QWEB_SELECTOR))
                .filter(Boolean)
        );

        const getFonts = (selectedNodes) =>
            selectedNodes.flatMap((node) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                let font =
                    closestElement(node, "font") ||
                    closestElement(
                        node,
                        '[style*="color"], [style*="background-color"], [style*="background-image"]'
                    ) ||
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    closestElement(node, "span");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                if (font && font.querySelector(".fa")) {
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
>>>>>>> upstream/18.0
=======

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                    closestElement(node, "span") ||
                    closestElement(node, (node) => hasTextColorClass(node, mode));

                const faNodes = font?.querySelectorAll(".fa");
                if (faNodes && Array.from(faNodes).some((faNode) => faNode.contains(node))) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                    return font;
                }
                const children = font && descendants(font);
                const hasInlineGradient = font && isColorGradient(font.style["background-image"]);
                const isFullySelected =
                    children && children.every((child) => selectedNodes.includes(child));
                const isTextGradient =
                    hasInlineGradient && font.classList.contains("text-gradient");
                const shouldReplaceExistingGradient =
                    isFullySelected &&
                    ((mode === "color" && isTextGradient) ||
                        (mode === "backgroundColor" && !isTextGradient));
                if (
                    font &&
                    font.nodeName !== "T" &&
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    (font.nodeName !== "SPAN" || font.style[mode] || font.style.backgroundImage) &&
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
                    (font.nodeName !== "SPAN" ||
                        font.style[mode] ||
                        font.style.backgroundImage ||
                        hasTextColorClass(font, mode)) &&
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                    (isColorGradient(color) ||
                        color === "" ||
                        !hasInlineGradient ||
                        shouldReplaceExistingGradient) &&
                    !this.dependencies.split.isUnsplittable(font)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                ) {
                    // Partially selected <font>: split it.
                    const selectedChildren = children.filter((child) =>
                        selectedNodes.includes(child)
                    );
                    if (selectedChildren.length) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        const closestGradientEl = closestElement(
                            node,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                            '[style*="background-image"]'
                        );
                        const isGradientBeingUpdated = closestGradientEl && isColorGradient(color);
                        const splitnode = isGradientBeingUpdated ? closestGradientEl : font;
                        // font = splitAroundUntil(selectedChildren, splitnode);
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                        if (isBlock(font)) {
                            const colorStyles = ["color", "background-color", "background-image"];
                            const newFont = this.document.createElement("font");
                            for (const style of colorStyles) {
                                const styleValue = font.style[style];
                                if (styleValue) {
                                    this.colorElement(newFont, styleValue, style);
                                    font.style.removeProperty(style);
                                }
                            }
                            newFont.append(...font.childNodes);
                            font.append(newFont);
                            font = newFont;
                        }
                        const closestGradientEl = closestElement(
                            node,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                            'font[style*="background-image"], span[style*="background-image"]'
                        );
                        const isGradientBeingUpdated = closestGradientEl && isColorGradient(color);
                        const splitnode = isGradientBeingUpdated ? closestGradientEl : font;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
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
                        const cursors = this.dependencies.selection.preserveSelection();
                        this.dispatchTo("clean_handlers", splitnode);
                        // Remove empty text nodes (replaced FEFFs) before splitting,
                        // to prevent creating empty elements in the DOM.
                        removeEmptyTextNodes(splitnode, cursors);
                        cursors.restore();
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
                        font = this.dependencies.split.splitAroundUntil(
                            selectedChildren,
                            splitnode
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                        cursors.setAnchorOffset(
                            Math.min(nodeSize(cursors.anchor.node), cursors.anchor.offset)
                        );
                        cursors.setFocusOffset(
                            Math.min(nodeSize(cursors.focus.node), cursors.focus.offset)
                        );
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                        // After splitting we need to clear the new nodes created by
                        // `splitElement` that contains only empty text nodes.
                        // We also need to update the outer cursor.
                        for (const child of font.parentElement.children) {
                            if (
                                child.childNodes.length &&
                                [...child.childNodes].every((node) => isEmptyTextNode(node))
                            ) {
                                cursors.update(callbacksForCursorUpdate.remove(child));
                                child.remove();
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                        if (isGradientBeingUpdated) {
                            const classRegex =
                                mode === "color" ? TEXT_CLASSES_REGEX : BG_CLASSES_REGEX;
                            // When updating a gradient, remove color applied to
                            // its descendants.This ensures the gradient remains
                            // visible without being overwritten by a descendant's color.
                            for (const node of descendants(font)) {
                                if (
                                    node.nodeType === Node.ELEMENT_NODE &&
                                    (node.style[mode] || classRegex.test(node.className))
                                ) {
                                    this.colorElement(node, "", mode);
                                    node.style.webkitTextFillColor = "";
                                    if (!node.getAttribute("style")) {
                                        unwrapContents(node);
                                    }
                                }
                            }
                        } else if (
                            mode === "color" &&
                            (font.style.webkitTextFillColor ||
                                (closestGradientEl &&
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                                    closestGradientEl.classList.contains("text-gradient")))
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
=======
                                    closestGradientEl.classList.contains("text-gradient") &&
                                    !shouldReplaceExistingGradient))
>>>>>>> upstream/18.0
                        ) {
                            font.style.webkitTextFillColor = color;
                        }
                    } else {
                        font = [];
                    }
                } else if (
                    (node.nodeType === Node.TEXT_NODE && !isWhitespace(node) && !isZwnbsp(node)) ||
                    (node.nodeName === "BR" && isEmptyBlock(node.parentNode)) ||
                    (node.nodeType === Node.ELEMENT_NODE &&
                        ["inline", "inline-block"].includes(getComputedStyle(node).display) &&
                        !isWhitespace(node.textContent) &&
                        !node.classList.contains("btn") &&
                        !node.querySelector("font") &&
                        node.nodeName !== "A" &&
                        !(node.nodeName === "SPAN" && node.style["fontSize"]))
                ) {
                    // Node is a visible text or inline node without font nor a button:
                    // wrap it in a <font>.
                    const previous = node.previousSibling;
                    const classRegex = mode === "color" ? BG_CLASSES_REGEX : TEXT_CLASSES_REGEX;
                    if (
                        previous &&
                        previous.nodeName === "FONT" &&
                        !previous.style[mode === "color" ? "backgroundColor" : "color"] &&
                        !classRegex.test(previous.className) &&
                        selectedNodes.includes(previous.firstChild) &&
                        selectedNodes.includes(previous.lastChild)
                    ) {
                        // Directly follows a fully selected <font> that isn't
                        // colored in the other mode: append to that.
                        font = previous;
                    } else {
                        // No <font> found: insert a new one.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        const isTextGradient =
                            hasInlineGradient && font.classList.contains("text-gradient");
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                        font = this.document.createElement("font");
                        node.after(font);
                        if (isTextGradient && mode === "color") {
                            font.style.webkitTextFillColor = color;
                        }
                    }
                    if (node.textContent) {
                        font.appendChild(node);
                    } else {
                        fillEmpty(font);
                    }
                } else {
                    font = []; // Ignore non-text or invisible text nodes.
                }
                return font;
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
        };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        for (const fieldNode of selectedFieldNodes) {
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======
        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
=======

        for (const fieldNode of targetedFieldNodes) {
>>>>>>> upstream/18.0
            this.colorElement(fieldNode, color, mode);
        }

        let fonts = getFonts(selectedNodes);
        // Dirty fix as the previous call could have unconnected elements
        // because of the `splitAroundUntil`. Another call should provide he
        // correct list of fonts.
        if (!fonts.every((font) => font.isConnected)) {
            fonts = getFonts(selectedNodes);
        }

        // Color the selected <font>s and remove uncolored fonts.
        const fontsSet = new Set(fonts);
        for (const font of fontsSet) {
            this.colorElement(font, color, mode);
            if (
                !hasColor(font, "color") &&
                !hasColor(font, "backgroundColor") &&
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                (!font.hasAttribute("style") || !color)
            ) {
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
                ["FONT", "SPAN"].includes(font.nodeName) &&
                (!font.hasAttribute("style") || !color)
            ) {
                cursors.update(callbacksForCursorUpdate.unwrap(font));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                for (const child of [...font.childNodes]) {
                    font.parentNode.insertBefore(child, font);
                }
                font.parentNode.removeChild(font);
                fontsSet.delete(font);
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.dependencies.selection.setSelection(selection, { normalize: false });
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
=======
        cursors.restore();
>>>>>>> upstream/18.0
    }

    getUsedCustomColors(mode) {
        const allFont = this.editable.querySelectorAll("font");
        const usedCustomColors = new Set();
        for (const font of allFont) {
            if (isCSSColor(font.style[mode])) {
                usedCustomColors.add(rgbaToHex(font.style[mode]));
            }
        }
        return usedCustomColors;
    }

    /**
     * Applies a css or class color (fore- or background-) to an element.
     * Replace the color that was already there if any.
     *
     * @param {Element} element
     * @param {string} color hexadecimal or bg-name/text-name class
     * @param {'color'|'backgroundColor'} mode 'color' or 'backgroundColor'
     */
    colorElement(element, color, mode) {
        const newClassName = element.className
            .replace(mode === "color" ? TEXT_CLASSES_REGEX : BG_CLASSES_REGEX, "")
            .replace(/\btext-gradient\b/g, "") // cannot be combined with setting a background
            .replace(/\s+/, " ");
        element.className !== newClassName && (element.className = newClassName);
        element.style["background-image"] = "";
        if (mode === "backgroundColor") {
            element.style["background"] = "";
        }
        if (color.startsWith("text") || color.startsWith("bg-")) {
            element.style[mode] = "";
            element.classList.add(color);
        } else if (isColorGradient(color)) {
            element.style[mode] = "";
            if (mode === "color") {
                element.style["background"] = "";
                element.style["background-image"] = color;
                element.classList.add("text-gradient");
            } else {
                element.style["background-image"] = color;
            }
        } else {
            element.style[mode] = color;
        }
    }
}
