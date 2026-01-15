import { waitForDataLoaded } from "@spreadsheet/helpers/model";
import { generateListDefinition } from "@spreadsheet/../tests/helpers/data";
import { createModelWithDataSource } from "@spreadsheet/../tests/helpers/model";

/**
 * @typedef {import("@spreadsheet/o_spreadsheet/o_spreadsheet").Model} Model
 */

/**
 * Insert a list in a spreadsheet model.
 *
 * @param {Model} model
 * @param {Object} params
 * @param {string} params.model
 * @param {Array<string>} params.columns
 * @param {number} [params.linesNumber]
 * @param {[number, number]} [params.position]
 * @param {string} [params.sheetId]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 */
export function insertListInSpreadsheet(model, params) {
    const { definition, columns } = generateListDefinition(params.model, params.columns);
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
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
 */
export function insertListInSpreadsheet(model, params) {
    const { definition, columns } = generateListDefinition(
        params.model,
        params.columns,
        params.orderBy
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    const [col, row] = params.position || [0, 0];

    model.dispatch("INSERT_ODOO_LIST", {
        sheetId: params.sheetId || model.getters.getActiveSheetId(),
        definition,
        linesNumber: params.linesNumber || 10,
        columns,
        id: model.getters.getNextListId(),
        col,
        row,
    });
}

/**
 *
 * @param {Object} params
 * @param {string} [params.model]
 * @param {Array<string>} [params.columns]
 * @param {Object} [params.serverData]
 * @param {function} [params.mockRPC]
 * @param {number} [params.linesNumber]
 * @param {[number, number]} [params.position]
 * @param {string} [params.sheetId]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
=======
 * @param {{name: string, asc: boolean}[]} [params.orderBy]
>>>>>>> upstream/18.0
 *
 * @returns { Promise<{ model: OdooSpreadsheetModel, env: Object }>}
 */
export async function createSpreadsheetWithList(params = {}) {
    const model = await createModelWithDataSource({
        mockRPC: params.mockRPC,
        serverData: params.serverData,
    });

    insertListInSpreadsheet(model, {
        columns: params.columns || ["foo", "bar", "date", "product_id"],
        model: params.model || "partner",
        linesNumber: params.linesNumber,
        position: params.position,
        sheetId: params.sheetId,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
=======
        orderBy: params.orderBy,
>>>>>>> upstream/18.0
    });

    const env = model.config.custom.env;
    env.model = model;
    await waitForDataLoaded(model);
    return { model, env };
}
