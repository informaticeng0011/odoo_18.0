import { floatIsZero, roundPrecision } from "@web/core/utils/numbers";
import { _t } from "@web/core/l10n/translation";

export const accountTaxHelpers = {
    // -------------------------------------------------------------------------
    // HELPERS IN BOTH PYTHON/JAVASCRIPT (account_tax.js / account_tax.py)
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
    // -------------------------------------------------------------------------

    /**
     * Helper to stringify a grouping key that could contains some records.
     *
     * [!] Only added javascript-side.
     */
    stringify_grouping_key(grouping_key) {
        if (!grouping_key || typeof grouping_key !== "object") {
            return grouping_key;
        }

        if ("id" in grouping_key) {
            return grouping_key.id;
        }

        const serializable_grouping_key = { ...grouping_key };
        for (const [key, value] of Object.entries(grouping_key)) {
            if (typeof value === "object" && "id" in value) {
                serializable_grouping_key[key] = value.id;
            }
        }
        return JSON.stringify(serializable_grouping_key);
    },

    // -------------------------------------------------------------------------
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
    // PREPARE TAXES COMPUTATION
    // -------------------------------------------------------------------------

    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
    eval_taxes_computation_prepare_product_values(default_product_values, product) {
        const product_values = {};
        for (const [field_name, field_info] of Object.entries(default_product_values)) {
            product_values[field_name] = product
                ? product[field_name] || field_info.default_value
                : field_info.default_value;
        }
        return product_values;
    },

    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    batch_for_taxes_computation(taxes, { special_mode = null } = {}) {
        function sort_key(taxes) {
            return taxes.sort((t1, t2) => t1.sequence - t2.sequence || t1.id - t2.id);
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
     flatten_taxes_and_sort_them(taxes) {
         function sort_key(taxes) {
             return taxes.toSorted((t1, t2) => t1.sequence - t2.sequence || t1.id - t2.id);
         }

         const group_per_tax = {};
         const sorted_taxes = [];
         for (const tax of sort_key(taxes)) {
             if (tax.amount_type === "group") {
                 const children = sort_key(tax.children_tax_ids);
                 for (const child of children) {
                     group_per_tax[child.id] = tax;
                     sorted_taxes.push(child);
                 }
             } else {
                 sorted_taxes.push(tax);
             }
         }
         return { sorted_taxes, group_per_tax };
     },

    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
    batch_for_taxes_computation(taxes, { special_mode = null, filter_tax_function = null } = {}) {
        let { sorted_taxes, group_per_tax } = this.flatten_taxes_and_sort_them(taxes);
        if (filter_tax_function) {
            sorted_taxes = sorted_taxes.filter(filter_tax_function);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        }

        const results = {
            batch_per_tax: {},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            group_per_tax: {},
            sorted_taxes: [],
        };

        // Flatten the taxes.
        for (const tax of sort_key(taxes)) {
            if (tax.amount_type === "group") {
                const children = sort_key(tax.children_tax_ids);
                for (const child of children) {
                    results.group_per_tax[child.id] = tax;
                    results.sorted_taxes.push(child);
                }
            } else {
                results.sorted_taxes.push(tax);
            }
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            group_per_tax: group_per_tax,
            sorted_taxes: sorted_taxes,
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        // Group them per batch.
        let batch = [];
        let is_base_affected = false;
        for (const tax of results.sorted_taxes.toReversed()) {
            if (batch.length > 0) {
                const same_batch =
                    tax.amount_type === batch[0].amount_type &&
                    (special_mode || tax.price_include === batch[0].price_include) &&
                    tax.include_base_amount === batch[0].include_base_amount &&
                    ((tax.include_base_amount && !is_base_affected) || !tax.include_base_amount);
                if (!same_batch) {
                    for (const batch_tax of batch) {
                        results.batch_per_tax[batch_tax.id] = batch;
                    }
                    batch = [];
                }
            }

            is_base_affected = tax.is_base_affected;
            batch.push(tax);
        }

        if (batch.length !== 0) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        // Group them per batch.
        let batch = [];
        let is_base_affected = false;
        let include_base_amount = false;
        let is_first_batch = true;
        for (const tax of results.sorted_taxes.toReversed()) {
            let same_batch = false;
            if (batch.length) {
                same_batch =
                    tax.amount_type === batch[0].amount_type &&
                    (special_mode || tax.price_include === batch[0].price_include);
                if (same_batch) {
                    same_batch = false;
                    if (is_first_batch && tax.include_base_amount !== include_base_amount) {
                        include_base_amount = tax.include_base_amount;
                    }
                    if (!include_base_amount && !tax.include_base_amount) {
                        // No tax affecting another one.
                        same_batch = true;
                    } else if (
                        include_base_amount &&
                        tax.include_base_amount &&
                        !is_base_affected &&
                        tax.is_base_affected
                    ) {
                        // Tax affecting the following taxes but in batch using 'is_base_affected'.
                        is_base_affected = tax.is_base_affected;
                        same_batch = true;
                    }
                }

                if (!same_batch) {
                    for (let batch_tax of batch) {
                        results.batch_per_tax[batch_tax.id] = batch;
                    }
                    batch = [];
                    is_first_batch = false;
                }
            }

            if (!same_batch) {
                is_base_affected = tax.is_base_affected;
                include_base_amount = tax.include_base_amount;
            }
            batch.push(tax);
        }

        if (batch.length) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            for (const batch_tax of batch) {
                results.batch_per_tax[batch_tax.id] = batch;
            }
        }
        return results;
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
    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    propagate_extra_taxes_base(taxes, tax, taxes_data, { special_mode = null } = {}) {
        function* get_tax_before() {
            for (const tax_before of taxes) {
                if (taxes_data[tax.id].batch.includes(tax_before)) {
                    break;
                }
                yield tax_before;
            }
        }

        function* get_tax_after() {
            for (const tax_after of taxes.toReversed()) {
                if (taxes_data[tax.id].batch.includes(tax_after)) {
                    break;
                }
                yield tax_after;
            }
        }

        function add_extra_base(other_tax, sign) {
            const tax_amount = taxes_data[tax.id].tax_amount;
            if (!("tax_amount" in taxes_data[other_tax.id])) {
                taxes_data[other_tax.id].extra_base_for_tax += sign * tax_amount;
            }
            taxes_data[other_tax.id].extra_base_for_base += sign * tax_amount;
        }

        if (tax.price_include) {
            // Case: special mode is False or 'total_included'
            if (!special_mode || special_mode === "total_included") {
                if (tax.include_base_amount) {
                    for (const other_tax of get_tax_after()) {
                        if (!other_tax.is_base_affected) {
                            add_extra_base(other_tax, -1)
                        }
                    }
                } else {
                    for (const other_tax of get_tax_after()) {
                        add_extra_base(other_tax, -1)
                    }
                }
                for (const other_tax of get_tax_before()) {
                    add_extra_base(other_tax, -1);
                }

            // Case: special_mode = 'total_excluded'
            } else {
                if (tax.include_base_amount) {
                    for (const other_tax of get_tax_after()) {
                        if (other_tax.is_base_affected) {
                            add_extra_base(other_tax, 1);
                        }
                    }
                }
            }

        } else if (!tax.price_include) {
            // Case: special_mode is False or 'total_excluded'
            if (!special_mode || special_mode === "total_excluded") {
                if (tax.include_base_amount) {
                    for (const other_tax of get_tax_after()) {
                        if (other_tax.is_base_affected) {
                            add_extra_base(other_tax, 1);
                        }
                    }
                }

            // Case: special_mode = 'total_included'
            } else {
                if (!tax.include_base_amount) {
                    for (const other_tax of get_tax_after()) {
                        add_extra_base(other_tax, -1);
                    }
                }
                for (const other_tax of get_tax_before()) {
                    add_extra_base(other_tax, -1);
                }
            }
        }
    },

    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
    eval_tax_amount_fixed_amount(tax, batch, raw_base, evaluation_context) {
        if (tax.amount_type === "fixed") {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            return evaluation_context.quantity * tax.amount;
=======
            const sign = evaluation_context.price_unit < 0.0 ? -1 : 1;
            return sign * evaluation_context.quantity * tax.amount;
>>>>>>> upstream/18.0
=======
            const sign = evaluation_context.price_unit < 0.0 ? -1 : 1;
            return sign * evaluation_context.quantity * tax.amount;
>>>>>>> upstream/18.0
=======
            const sign = evaluation_context.price_unit < 0.0 ? -1 : 1;
            return sign * evaluation_context.quantity * tax.amount;
>>>>>>> upstream/18.0
=======
            const sign = evaluation_context.price_unit < 0.0 ? -1 : 1;
            return sign * evaluation_context.quantity * tax.amount;
>>>>>>> upstream/18.0
=======
            const sign = evaluation_context.price_unit < 0.0 ? -1 : 1;
            return sign * evaluation_context.quantity * tax.amount;
>>>>>>> upstream/18.0
=======
            const sign = evaluation_context.price_unit < 0.0 ? -1 : 1;
            return sign * evaluation_context.quantity * tax.amount;
>>>>>>> upstream/18.0
=======
            const sign = evaluation_context.price_unit < 0.0 ? -1 : 1;
            return sign * evaluation_context.quantity * tax.amount;
>>>>>>> upstream/18.0
=======
            const sign = evaluation_context.price_unit < 0.0 ? -1 : 1;
            return sign * evaluation_context.quantity * tax.amount;
>>>>>>> upstream/18.0
        }
        return null;
    },

    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
    eval_tax_amount_price_included(tax, batch, raw_base, evaluation_context) {
        if (tax.amount_type === "percent") {
            const total_percentage =
                batch.reduce(
                    (sum, batch_tax) => sum + batch_tax.amount,
                    0
                ) / 100.0;
            const to_price_excluded_factor =
                total_percentage !== -1 ? 1 / (1 + total_percentage) : 0.0;
            return (raw_base * to_price_excluded_factor * tax.amount) / 100.0;
        }

        if (tax.amount_type === "division") {
            return (raw_base * tax.amount) / 100.0;
        }
        return null;
    },

    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
    eval_tax_amount_price_excluded(tax, batch, raw_base, evaluation_context) {
        if (tax.amount_type === "percent") {
            return (raw_base * tax.amount) / 100.0;
        }

        if (tax.amount_type === "division") {
            const total_percentage =
                batch.reduce(
                    (sum, batch_tax) => sum + batch_tax.amount,
                    0
                ) / 100.0;
            const incl_base_multiplicator = total_percentage === 1.0 ? 1.0 : 1 - total_percentage;
            return (raw_base * tax.amount) / 100.0 / incl_base_multiplicator;
        }
        return null;
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
    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    get_tax_details(
        taxes,
        price_unit,
        quantity,
        {
            precision_rounding = null,
            rounding_method = "round_per_line",
            // When product is null, we need the product default values to make the "formula" taxes
            // working. In that case, we need to deal with the product default values before calling this
            // method because we have no way to deal with it automatically in this method since it depends of
            // the type of involved fields and we don't have access to this information js-side.
            product = null,
            special_mode = null,
            manual_tax_amounts = null,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
=======
            filter_tax_function = null,
>>>>>>> upstream/18.0
        } = {}
    ) {
        const self = this;

        function add_tax_amount_to_results(tax, tax_amount) {
            taxes_data[tax.id].tax_amount = tax_amount;
            if (rounding_method === "round_per_line") {
                taxes_data[tax.id].tax_amount = roundPrecision(
                    taxes_data[tax.id].tax_amount,
                    precision_rounding
                );
            }
            if (tax.has_negative_factor){
                reverse_charge_taxes_data[tax.id].tax_amount = -taxes_data[tax.id].tax_amount;
            }

            self.propagate_extra_taxes_base(sorted_taxes, tax, taxes_data, {
                special_mode: special_mode,
            });
        }

        function eval_tax_amount(tax_amount_function, tax) {
            const is_already_computed = "tax_amount" in taxes_data[tax.id];
            if (is_already_computed) {
                return;
            }

            let tax_amount = null;
            if (manual_tax_amounts && tax.id in manual_tax_amounts) {
                tax_amount = manual_tax_amounts[tax.id].tax_amount_currency;
            } else {
                tax_amount = tax_amount_function(
                    tax,
                    taxes_data[tax.id].batch,
                    raw_base + taxes_data[tax.id].extra_base_for_tax,
                    evaluation_context
                );
            }
            if (tax_amount !== null) {
                add_tax_amount_to_results(tax, tax_amount);
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
        // Flatten the taxes and order them.
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0
=======
        // Flatten the taxes, order them and filter them if necessary.
>>>>>>> upstream/18.0

        function prepare_tax_extra_data(tax, kwargs = {}) {
            let price_include;
            if (special_mode === "total_included") {
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
        // Flatten the taxes, order them and filter them if necessary.

        function prepare_tax_extra_data(tax, kwargs = {}) {
            let price_include;
            if (tax.has_negative_factor) {
                price_include = false;
            } else if (special_mode === "total_included") {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                price_include = true;
            } else if (special_mode === "total_excluded") {
                price_include = false;
            } else {
                price_include = tax.price_include;
            }
            return {
                ...kwargs,
                tax: tax,
                price_include: price_include,
                extra_base_for_tax: 0.0,
                extra_base_for_base: 0.0,
            };
        }

        const batching_results = this.batch_for_taxes_computation(taxes, {
            special_mode: special_mode,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        const sorted_taxes = batching_results.sorted_taxes;
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
=======
            filter_tax_function: filter_tax_function,
        });
        let sorted_taxes = batching_results.sorted_taxes;
>>>>>>> upstream/18.0
        const taxes_data = {};
        const reverse_charge_taxes_data = {};
        for (const tax of sorted_taxes) {
            taxes_data[tax.id] = prepare_tax_extra_data(tax, {
                group: batching_results.group_per_tax[tax.id],
                batch: batching_results.batch_per_tax[tax.id],
            });
            if (tax.has_negative_factor) {
                reverse_charge_taxes_data[tax.id] = {
                    ...taxes_data[tax.id],
                    is_reverse_charge: true,
                }
            }
        }

        let raw_base = quantity * price_unit;
        if (rounding_method === "round_per_line") {
            raw_base = roundPrecision(raw_base, precision_rounding);
        }

        let evaluation_context = {
            product: product || {},
            price_unit: price_unit,
            quantity: quantity,
            raw_base: raw_base,
            special_mode: special_mode,
        };

        // Define the order in which the taxes must be evaluated.
        // Fixed taxes are computed directly because they could affect the base of a price included batch right after.
        for (const tax of sorted_taxes.toReversed()) {
            eval_tax_amount(this.eval_tax_amount_fixed_amount.bind(this), tax);
        }

        // Then, let's travel the batches in the reverse order and process the price-included taxes.
        for (const tax of sorted_taxes.toReversed()) {
            if (taxes_data[tax.id].price_include) {
                eval_tax_amount(this.eval_tax_amount_price_included.bind(this), tax);
            }
        }

        // Then, let's travel the batches in the normal order and process the price-excluded taxes.
        for (const tax of sorted_taxes) {
            if (!taxes_data[tax.id].price_include) {
                eval_tax_amount(this.eval_tax_amount_price_excluded.bind(this), tax);
            }
        }

        // Mark the base to be computed in the descending order. The order doesn't matter for no special mode or 'total_excluded' but
        // it must be in the reverse order when special_mode is 'total_included'.
        for (const tax of sorted_taxes.toReversed()) {
            const tax_data = taxes_data[tax.id];
            if (!("tax_amount" in tax_data)) {
                continue;
            }

            // Base amount.
            let base = null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (manual_tax_amounts && "base_amount_currency" in manual_tax_amounts[tax.id]) {
                base = manual_tax_amounts[tax.id].base_amount_currency;
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
=======
            const tax_id_str = tax.id.toString();
            if (manual_tax_amounts && "base_amount_currency" in (manual_tax_amounts[tax_id_str] || {})) {
                base = manual_tax_amounts[tax_id_str].base_amount_currency;
>>>>>>> upstream/18.0
            } else {
                let total_tax_amount = taxes_data[tax.id].batch.reduce(
                    (sum, other_tax) => sum + taxes_data[other_tax.id].tax_amount,
                    0
                );
                total_tax_amount += Object.values(taxes_data[tax.id].batch)
                    .filter(other_tax => other_tax.has_negative_factor)
                    .reduce((sum, other_tax) => sum + reverse_charge_taxes_data[other_tax.id].tax_amount, 0);
                base = raw_base + taxes_data[tax.id].extra_base_for_base;
                if (
                    tax_data.price_include &&
                    (!special_mode || special_mode === "total_included")
                ) {
                    base -= total_tax_amount;
                }
            }
            tax_data.base = base;

            // Reverse charge.
            if (tax.has_negative_factor) {
                const reverse_charge_tax_data = reverse_charge_taxes_data[tax.id];
                reverse_charge_tax_data.base = base;
            }
        }

        const taxes_data_list = [];
        for (const tax of sorted_taxes) {
            const tax_data = taxes_data[tax.id];
            if ("tax_amount" in tax_data){
                taxes_data_list.push(tax_data);
                if (tax.has_negative_factor) {
                    taxes_data_list.push(reverse_charge_taxes_data[tax.id]);
                }
            }
        }

        let total_excluded, total_included;
        if (taxes_data_list.length > 0) {
            total_excluded = taxes_data_list[0].base;
            const tax_amount = taxes_data_list.reduce(
                (sum, tax_data) => sum + tax_data.tax_amount,
                0
            );
            total_included = total_excluded + tax_amount;
        } else {
            total_excluded = total_included = raw_base;
        }

        return {
            total_excluded: total_excluded,
            total_included: total_included,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            taxes_data: taxes_data_list.map(tax_data => Object.assign({}, {
                tax: tax_data.tax,
                group: batching_results.group_per_tax[tax_data.tax.id],
                batch: batching_results.batch_per_tax[tax_data.tax.id],
                tax_amount: tax_data.tax_amount,
                base_amount: tax_data.base,
                is_reverse_charge: tax_data.is_reverse_charge || false
            })),
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
            taxes_data: taxes_data_list.map((tax_data) =>
                Object.assign(
                    {},
                    {
                        tax: tax_data.tax,
                        taxes: tax_data.taxes,
                        group: batching_results.group_per_tax[tax_data.tax.id],
                        batch: batching_results.batch_per_tax[tax_data.tax.id],
                        tax_amount: tax_data.tax_amount,
                        price_include: tax_data.price_include,
                        base_amount: tax_data.base,
                        is_reverse_charge: tax_data.is_reverse_charge || false,
                    }
                )
            ),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        };
    },

    // -------------------------------------------------------------------------
    // MAPPING PRICE_UNIT
    // -------------------------------------------------------------------------

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    adapt_price_unit_to_another_taxes(price_unit, product, original_taxes, new_taxes) {
        const original_tax_ids = new Set(original_taxes.map((x) => x.id));
        const new_tax_ids = new Set(new_taxes.map((x) => x.id));
        if (
            (original_tax_ids.size === new_tax_ids.size &&
                [...original_tax_ids].every((value) => new_tax_ids.has(value))) ||
            original_taxes.some((x) => !x.price_include)
        ) {
            return price_unit;
        }

        // Find the price unit without tax.
        let taxes_computation = this.get_tax_details(original_taxes, price_unit, 1.0, {
            rounding_method: "round_globally",
            product: product,
        });
        price_unit = taxes_computation.total_excluded;

        // Find the new price unit after applying the price included taxes.
        taxes_computation = this.get_tax_details(new_taxes, price_unit, 1.0, {
            rounding_method: "round_globally",
            product: product,
            special_mode: "total_excluded",
        });
        let delta = 0.0;
        for (const tax_data of taxes_computation.taxes_data) {
            if (tax_data.tax.price_include) {
                delta += tax_data.tax_amount;
            }
        }
        return price_unit + delta;
    },

    // -------------------------------------------------------------------------
    // GENERIC REPRESENTATION OF BUSINESS OBJECTS & METHODS
    // -------------------------------------------------------------------------

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    get_base_line_field_value_from_record(record, field, extra_values, fallback) {
        if (field in extra_values) {
            return extra_values[field] || fallback;
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
        if (field in record) {
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
=======
        if (record && field in record) {
>>>>>>> upstream/18.0
            return record[field] || fallback;
        }
        return fallback;
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
    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    prepare_base_line_for_taxes_computation(record, kwargs = {}){
        const load = (field, fallback) => this.get_base_line_field_value_from_record(record, field, kwargs, fallback);

        const currency = (
            load('currency_id', null)
            || load('company_currency_id', null)
            || load('company_id', {}).currency_id
            || {}
        )

        return {
            ...kwargs,
            record: record,
            id: load('id', 0),
            product_id: load('product_id', {}),
            product_uom_id: load('product_uom_id', {}),
            tax_ids: load('tax_ids', {}),
            price_unit: load('price_unit', 0.0),
            quantity: load('quantity', 0.0),
            discount: load('discount', 0.0),
            currency_id: currency,
            sign: load('sign', 1.0),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            special_mode: kwargs.special_mode || null,
            special_type: kwargs.special_type || null,
            rate: load("rate", 1.0),
            manual_tax_amounts: kwargs.manual_tax_amounts || null,
        }
    },

    add_tax_details_in_base_line(base_line, company) {
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
            special_mode: load('special_mode', null),
            special_type: load('special_type', null),
            rate: load("rate", 1.0),
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
            special_mode: load('special_mode', null),
            special_type: load('special_type', null),
            rate: load("rate", 1.0),
            manual_total_excluded_currency: load("manual_total_excluded_currency", null),
            manual_total_excluded: load("manual_total_excluded", null),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            manual_tax_amounts: load("manual_tax_amounts", null),
            filter_tax_function: load("filter_tax_function", null),
        }
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
    add_tax_details_in_base_line(base_line, company, { rounding_method = null } = {}) {
        rounding_method = rounding_method || company.tax_calculation_rounding_method;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
    add_tax_details_in_base_line(base_line, company, { rounding_method = null } = {}) {
        rounding_method = rounding_method || company.tax_calculation_rounding_method;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        const price_unit_after_discount = base_line.price_unit * (1 - (base_line.discount / 100.0));
        const currency_pd = base_line.currency_id.rounding;
        const company_currency_pd = company.currency_id.rounding;
        const taxes_computation = this.get_tax_details(
            base_line.tax_ids,
            price_unit_after_discount,
            base_line.quantity,
            {
                precision_rounding: currency_pd,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                rounding_method: company.tax_calculation_rounding_method,
                product: base_line.product_id,
                special_mode: base_line.special_mode,
                manual_tax_amounts: base_line.manual_tax_amounts
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
                rounding_method: rounding_method,
                product: base_line.product_id,
                special_mode: base_line.special_mode,
                manual_tax_amounts: base_line.manual_tax_amounts,
                filter_tax_function: base_line.filter_tax_function
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            }
        );

        const rate = base_line.rate;
        const tax_details = base_line.tax_details = {
            raw_total_excluded_currency: taxes_computation.total_excluded,
            raw_total_excluded: rate ? taxes_computation.total_excluded / rate : 0.0,
            raw_total_included_currency: taxes_computation.total_included,
            raw_total_included: rate ? taxes_computation.total_included / rate : 0.0,
            taxes_data: []
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
        if (company.tax_calculation_rounding_method === 'round_per_line') {
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
        if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
            tax_details.raw_total_excluded = roundPrecision(tax_details.raw_total_excluded, currency_pd);
            tax_details.raw_total_included = roundPrecision(tax_details.raw_total_included, currency_pd);
        }

        for (const tax_data of taxes_computation.taxes_data) {
            let tax_amount = rate ? tax_data.tax_amount / rate : 0.0;
            let base_amount = rate ? tax_data.base_amount / rate : 0.0;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (company.tax_calculation_rounding_method === 'round_per_line') {
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
=======
            if (rounding_method === "round_per_line") {
>>>>>>> upstream/18.0
                tax_amount = roundPrecision(tax_amount, company_currency_pd);
                base_amount = roundPrecision(base_amount, company_currency_pd);
            }

            tax_details.taxes_data.push({
                ...tax_data,
                raw_tax_amount_currency: tax_data.tax_amount,
                raw_tax_amount: tax_amount,
                raw_base_amount_currency: tax_data.base_amount,
                raw_base_amount: base_amount
            });
        }
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
    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    add_tax_details_in_base_lines(base_lines, company) {
        for(const base_line of base_lines){
            this.add_tax_details_in_base_line(base_line, company);
        }
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
    round_base_lines_tax_details(base_lines, company) {
        const total_per_tax = {};
        const total_per_base = {};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
>>>>>>> upstream/18.0
=======
        const country_code = company.account_fiscal_country_id.code;
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
    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
    distribute_delta_amount_smoothly(precision_digits, delta_amount, target_factors) {
        const precision_rounding = Number(`1e-${precision_digits}`);
        const amounts_to_distribute = target_factors.map((x) => 0.0);
        if (floatIsZero(delta_amount, precision_digits)) {
            return amounts_to_distribute;
        }

        const sign = delta_amount < 0.0 ? -1 : 1;
        const nb_of_errors = Math.round(Math.abs(delta_amount / precision_rounding));
        let remaining_errors = nb_of_errors;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        for (let i = 0; i < target_factors.length; i++) {
            const factor = target_factors[i].factor;
=======
=======
>>>>>>> upstream/18.0
        // Take absolute value of factors and sort them by largest absolute value first
        const factors = target_factors.map((x) => Math.abs(x.factor));
        factors.sort((a, b) => b - a);
        const sum_of_factors = factors.reduce((a, b) => a + b, 0);
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
        // Take absolute value of factors and sort them by largest absolute value first
        const factors = target_factors.map((x, i) => [i, Math.abs(x.factor)]);
        factors.sort((a, b) => b[1] - a[1]);
        const sum_of_factors = factors.reduce((sum, x) => sum + x[1], 0.0);
<<<<<<< HEAD
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
        if (sum_of_factors === 0.0) {
            return amounts_to_distribute;
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
        for (let i = 0; i < target_factors.length; i++) {
            const factor = factors[i];
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
=======
        for (const [i, factor] of factors) {
>>>>>>> upstream/18.0
            if (remaining_errors === 0) {
                break;
            }

            const nb_of_amount_to_distribute = Math.min(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                Math.ceil(Math.abs(factor * nb_of_errors)),
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
=======
                Math.ceil(Math.abs(factor / sum_of_factors * nb_of_errors)),
>>>>>>> upstream/18.0
                remaining_errors
            );

            remaining_errors -= nb_of_amount_to_distribute;
            const amount_to_distribute = sign * nb_of_amount_to_distribute * precision_rounding;
            amounts_to_distribute[i] += amount_to_distribute;
        }

        return amounts_to_distribute;
    },

    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    round_base_lines_tax_details(base_lines, company) {
        const total_per_tax = {};
        const total_per_base = {};
        const country_code = company.account_fiscal_country_id.code;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

        for (const base_line of base_lines) {
            const currency = base_line.currency_id;
            const tax_details = base_line.tax_details;
            tax_details.total_excluded_currency = roundPrecision(
                tax_details.raw_total_excluded_currency,
                currency.rounding
            );
            tax_details.total_excluded = roundPrecision(
                tax_details.raw_total_excluded,
                company.currency_id.rounding
            );
            tax_details.delta_total_excluded_currency = 0.0;
            tax_details.delta_total_excluded = 0.0;
            tax_details.total_included_currency = roundPrecision(
                tax_details.raw_total_included_currency,
                currency.rounding
            );
            tax_details.total_included = roundPrecision(
                tax_details.raw_total_included,
                company.currency_id.rounding
            );
            const taxes_data = tax_details.taxes_data;

            // If there are taxes on it, account the amounts from taxes_data.
            let index = 0;
            for (const tax_data of taxes_data) {
                const tax = tax_data.tax;
                tax_data.tax_amount_currency = roundPrecision(
                    tax_data.raw_tax_amount_currency,
                    currency.rounding
                );
                tax_data.tax_amount = roundPrecision(
                    tax_data.raw_tax_amount,
                    company.currency_id.rounding
                );
                tax_data.base_amount_currency = roundPrecision(
                    tax_data.raw_base_amount_currency,
                    currency.rounding
                );
                tax_data.base_amount = roundPrecision(
                    tax_data.raw_base_amount,
                    company.currency_id.rounding
                );

                const tax_rounding_key = [tax.id, currency.id, base_line.is_refund, tax_data.is_reverse_charge];
                if (!(tax_rounding_key in total_per_tax)) {
                    total_per_tax[tax_rounding_key] = {
                        tax: tax,
                        is_reverse_charge: tax_data.is_reverse_charge,
                        currency: currency,
                        base_amount_currency: 0.0,
                        base_amount: 0.0,
                        raw_base_amount_currency: 0.0,
                        raw_base_amount: 0.0,
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
                        raw_tax_amount_currency: 0.0,
                        raw_tax_amount: 0.0,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
                        base_lines: [],
                    };
                }

                const tax_amounts = total_per_tax[tax_rounding_key];
                tax_amounts.tax_amount_currency += tax_data.tax_amount_currency;
                tax_amounts.raw_tax_amount_currency += tax_data.raw_tax_amount_currency;
                tax_amounts.tax_amount += tax_data.tax_amount;
                tax_amounts.raw_tax_amount += tax_data.raw_tax_amount;
                tax_amounts.base_amount_currency += tax_data.base_amount_currency;
                tax_amounts.raw_base_amount_currency += tax_data.raw_base_amount_currency;
                tax_amounts.base_amount += tax_data.base_amount;
                tax_amounts.raw_base_amount += tax_data.raw_base_amount;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency + tax_data.raw_tax_amount_currency;
                tax_amounts.raw_total_amount += tax_data.raw_base_amount + tax_data.raw_tax_amount;
>>>>>>> upstream/18.0
                if (!base_line.special_type) {
                    tax_amounts.base_lines.push(base_line);
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
                if (index === 0) {
                    const base_rounding_key = [currency.id, base_line.is_refund];
                    if (!(base_rounding_key in total_per_base)) {
                        total_per_base[base_rounding_key] = {
                            currency: currency,
                            base_amount_currency: 0.0,
                            base_amount: 0.0,
                            raw_base_amount_currency: 0.0,
                            raw_base_amount: 0.0,
                            base_lines: [],
                        };
                    }

                    const base_amounts = total_per_base[base_rounding_key];
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
                const base_rounding_key = [currency.id, base_line.is_refund];
                if (!(base_rounding_key in total_per_base)) {
                    total_per_base[base_rounding_key] = {
                        currency: currency,
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
                        base_amount_currency: 0.0,
                        base_amount: 0.0,
                        raw_base_amount_currency: 0.0,
                        raw_base_amount: 0.0,
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
                        base_lines: [],
                    };
                }
                const base_amounts = total_per_base[base_rounding_key];
                base_amounts.tax_amount_currency += tax_data.tax_amount_currency;
                base_amounts.tax_amount += tax_data.tax_amount;
                base_amounts.raw_total_amount_currency += tax_data.raw_tax_amount_currency;
                base_amounts.raw_total_amount += tax_data.raw_tax_amount;
                if (index === 0) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                    base_amounts.base_amount_currency += tax_data.base_amount_currency;
                    base_amounts.raw_base_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.base_amount += tax_data.base_amount;
                    base_amounts.raw_base_amount += tax_data.raw_base_amount;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
=======
                    base_amounts.raw_total_amount_currency += tax_data.raw_base_amount_currency;
                    base_amounts.raw_total_amount += tax_data.raw_base_amount;
>>>>>>> upstream/18.0
                    if (!base_line.special_type) {
                        base_amounts.base_lines.push(base_line);
                    }
                }

                index++;
            }

            // If not, just account the base amounts.
            if(!taxes_data.length){
                const tax_rounding_key = [null, currency.id, base_line.is_refund, false];
                if (!(tax_rounding_key in total_per_tax)) {
                    total_per_tax[tax_rounding_key] = {
                        tax: null,
                        currency: currency,
                        base_amount_currency: 0.0,
                        base_amount: 0.0,
                        raw_base_amount_currency: 0.0,
                        raw_base_amount: 0.0,
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
                        raw_tax_amount_currency: 0.0,
                        raw_tax_amount: 0.0,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
                        base_lines: []
                    };
                }
                const tax_amounts = total_per_tax[tax_rounding_key];
                tax_amounts.base_amount_currency += tax_details.total_excluded_currency;
                tax_amounts.raw_base_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.base_amount += tax_details.total_excluded;
                tax_amounts.raw_base_amount += tax_details.raw_total_excluded;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                tax_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                tax_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
                if(!base_line.special_type){
                    tax_amounts.base_lines.push(base_line);
                }

                const base_rounding_key = [currency.id, base_line.is_refund];
                if (!(base_rounding_key in total_per_base)) {
                    total_per_base[base_rounding_key] = {
                        currency: currency,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        tax_amount_currency: 0.0,
                        tax_amount: 0.0,
>>>>>>> upstream/18.0
                        base_amount_currency: 0.0,
                        base_amount: 0.0,
                        raw_base_amount_currency: 0.0,
                        raw_base_amount: 0.0,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
=======
                        raw_total_amount_currency: 0.0,
                        raw_total_amount: 0.0,
>>>>>>> upstream/18.0
                        base_lines: []
                    };
                }
                const base_amounts = total_per_base[base_rounding_key];
                base_amounts.base_amount_currency += tax_details.total_excluded_currency;
                base_amounts.raw_base_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.base_amount += tax_details.total_excluded;
                base_amounts.raw_base_amount += tax_details.raw_total_excluded;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
=======
                base_amounts.raw_total_amount_currency += tax_details.raw_total_excluded_currency;
                base_amounts.raw_total_amount += tax_details.raw_total_excluded;
>>>>>>> upstream/18.0
                if(!base_line.special_type){
                    base_amounts.base_lines.push(base_line);
                }
            }
        }

        // Round 'total_per_tax'.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        for (const amounts of Object.values(total_per_tax)) {
            amounts.raw_tax_amount_currency = roundPrecision(
                amounts.raw_tax_amount_currency,
                amounts.currency.rounding
            );
            amounts.raw_tax_amount = roundPrecision(
                amounts.raw_tax_amount,
                company.currency_id.rounding
            );
            amounts.raw_base_amount_currency = roundPrecision(
                amounts.raw_base_amount_currency,
                amounts.currency.rounding
            );
            amounts.raw_base_amount = roundPrecision(
                amounts.raw_base_amount,
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
        for (const tax_amounts of Object.values(total_per_tax)) {
            tax_amounts.raw_tax_amount_currency = roundPrecision(
                tax_amounts.raw_tax_amount_currency,
                tax_amounts.currency.rounding
            );
            tax_amounts.raw_tax_amount = roundPrecision(
                tax_amounts.raw_tax_amount,
                company.currency_id.rounding
            );
            tax_amounts.raw_base_amount_currency = roundPrecision(
                tax_amounts.raw_base_amount_currency,
                tax_amounts.currency.rounding
            );
            tax_amounts.raw_base_amount = roundPrecision(
                tax_amounts.raw_base_amount,
                company.currency_id.rounding
            );
            tax_amounts.raw_total_amount_currency = roundPrecision(
                tax_amounts.raw_total_amount_currency,
                tax_amounts.currency.rounding
            );
            tax_amounts.raw_total_amount = roundPrecision(
                tax_amounts.raw_total_amount,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                company.currency_id.rounding
            );
        }

        // Round 'total_per_base'.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        for (const amounts of Object.values(total_per_base)) {
            amounts.raw_base_amount_currency = roundPrecision(
                amounts.raw_base_amount_currency,
                amounts.currency.rounding
            );
            amounts.raw_base_amount = roundPrecision(
                amounts.raw_base_amount,
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
        for (const base_amounts of Object.values(total_per_base)) {
            base_amounts.raw_base_amount_currency = roundPrecision(
                base_amounts.raw_base_amount_currency,
                base_amounts.currency.rounding
            );
            base_amounts.raw_base_amount = roundPrecision(
                base_amounts.raw_base_amount,
                company.currency_id.rounding
            );
            base_amounts.raw_total_amount_currency = roundPrecision(
                base_amounts.raw_total_amount_currency,
                base_amounts.currency.rounding
            );
            base_amounts.raw_total_amount = roundPrecision(
                base_amounts.raw_total_amount,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                company.currency_id.rounding
            );
        }

        // Dispatch the delta in term of tax amounts across the tax details when dealing with the 'round_globally' method.
        // Suppose 2 lines:
        // - quantity=12.12, price_unit=12.12, tax=23%
        // - quantity=12.12, price_unit=12.12, tax=23%
        // The tax of each line is computed as round(12.12 * 12.12 * 0.23) = 33.79
        // The expected tax amount of the whole document is round(12.12 * 12.12 * 0.23 * 2) = 67.57
        // The delta in term of tax amount is 67.57 - 33.79 - 33.79 = -0.01
        for (const tax_amounts of Object.values(total_per_tax)) {
            const is_reverse_charge = tax_amounts.is_reverse_charge;
            const currency = tax_amounts.currency;
            const tax = tax_amounts.tax;
            if (!tax_amounts.base_lines.length) {
                continue;
            }

            tax_amounts.sorted_base_line_x_tax_data = tax_amounts.base_lines
                .sort((a, b) => b.tax_details.total_included_currency - a.tax_details.total_included_currency)
                .map(base_line => [
                    base_line,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    base_line.tax_details.taxes_data.find(
                        tax_data => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
=======
                    base_line.tax_details.taxes_data.map((tax_data, index) => [index, tax_data]).find(
                        ([index, tax_data]) => tax_data.tax.id === tax.id && tax_data.is_reverse_charge === is_reverse_charge
>>>>>>> upstream/18.0
                    ) || null
                ]);

            tax_amounts.total_included_currency = tax_amounts.base_lines.reduce(
                (sum, base_line) => sum + Math.abs(base_line.tax_details.total_included_currency),
                0
            );

            if (!tax || !tax_amounts.total_included_currency) {
                continue;
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
            const delta_tax_amount_currency = tax_amounts.raw_tax_amount_currency - tax_amounts.tax_amount_currency;
            const delta_tax_amount = tax_amounts.raw_tax_amount - tax_amounts.tax_amount;
            for (const [delta, delta_field, delta_currency] of [
                [delta_tax_amount_currency, 'tax_amount_currency', currency],
                [delta_tax_amount, 'tax_amount', company.currency_id]
            ]) {
                if (floatIsZero(delta, delta_currency.decimal_places)) {
                    continue;
                }

                const sign = delta < 0.0 ? -1 : 1;
                let nb_of_errors = Math.round(Math.abs(delta / delta_currency.rounding));
                let remaining_errors = nb_of_errors;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                for (const [base_line, tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
                    const tax_details = base_line.tax_details;
                    if (!remaining_errors || !tax_data) {
                        break;
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
                    const tax_details = base_line.tax_details;
                    if (!remaining_errors || !index_tax_data) {
                        break;
                    }

                    const index = index_tax_data[0];
                    const tax_data = index_tax_data[1];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                    const nb_of_amount_to_distribute = Math.min(
                        Math.ceil(Math.abs(tax_details.total_included_currency * nb_of_errors / tax_amounts.total_included_currency)),
                        remaining_errors
                    );
                    remaining_errors -= nb_of_amount_to_distribute;
                    const amount_to_distribute = sign * nb_of_amount_to_distribute * delta_currency.rounding;
                    tax_data[delta_field] += amount_to_distribute;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                    tax_amounts[delta_field] += amount_to_distribute;

                    if (index === 0) {
                         const base_rounding_key = [tax_amounts.currency.id, base_line.is_refund];
                         const base_amounts = total_per_base[base_rounding_key];
                         base_amounts[delta_field] += amount_to_distribute;
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
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
            for (const [delta_field, delta_currency] of [
                ["tax_amount_currency", currency],
                ["tax_amount", company.currency_id],
            ]) {
                const delta_amount = tax_amounts[`raw_${delta_field}`] - tax_amounts[delta_field];
                const target_factors = tax_amounts.sorted_base_line_x_tax_data
                    .filter(([base_line, index_tax_data]) => index_tax_data)
                    .map(([base_line, index_tax_data]) => ({
                        factor: Math.abs(
                            base_line.tax_details.total_included_currency /
                                tax_amounts.total_included_currency
                        ),
                        base_line: base_line,
                        index_tax_data: index_tax_data,
                    }));
                const amounts_to_distribute = this.distribute_delta_amount_smoothly(
                    delta_currency.decimal_places,
                    delta_amount,
                    target_factors
                );
                for (let i = 0; i < target_factors.length; i++) {
                    const target_factor = target_factors[i];
                    const amount_to_distribute = amounts_to_distribute[i];

                    const base_line = target_factor.base_line;
                    const [index, tax_data] = target_factor.index_tax_data;
                    tax_data[delta_field] += amount_to_distribute;
                    tax_amounts[delta_field] += amount_to_distribute;

                    if (index === 0) {
                        const base_rounding_key = [currency.id, base_line.is_refund];
                        const base_amounts = total_per_base[base_rounding_key];
                        base_amounts[delta_field] += amount_to_distribute;
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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

        // Dispatch the delta of base amounts accross the base lines.
        // Suppose 2 lines:
        // - quantity=12.12, price_unit=12.12, tax=23%
        // - quantity=12.12, price_unit=12.12, tax=23%
        // The base amount of each line is computed as round(12.12 * 12.12) = 146.89
        // The expected base amount of the whole document is round(12.12 * 12.12 * 2) = 293.79
        // The delta in term of base amount is 293.79 - 146.89 - 146.89 = 0.01
        for (const tax_amounts of Object.values(total_per_tax)) {
            const currency = tax_amounts.currency;
            if (!tax_amounts.sorted_base_line_x_tax_data || !tax_amounts.total_included_currency) {
                continue;
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
            const delta_base_amount_currency = tax_amounts.raw_base_amount_currency - tax_amounts.base_amount_currency;
            const delta_base_amount = tax_amounts.raw_base_amount - tax_amounts.base_amount;
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
            let delta_base_amount_currency;
            let delta_base_amount;
            if (country_code === "PT") {
                delta_base_amount_currency = tax_amounts.raw_total_amount_currency - tax_amounts.base_amount_currency - tax_amounts.tax_amount_currency;
                delta_base_amount = tax_amounts.raw_total_amount - tax_amounts.base_amount - tax_amounts.tax_amount;
            } else {
                delta_base_amount_currency = tax_amounts.raw_base_amount_currency - tax_amounts.base_amount_currency;
                delta_base_amount = tax_amounts.raw_base_amount - tax_amounts.base_amount;
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            for (const [delta, delta_currency_indicator, delta_currency] of [
                [delta_base_amount_currency, '_currency', currency],
                [delta_base_amount, '', company.currency_id]
            ]) {
                if (floatIsZero(delta, delta_currency.decimal_places)) {
                    continue;
                }

                const sign = delta < 0.0 ? -1 : 1;
                let nb_of_errors = Math.round(Math.abs(delta / delta_currency.rounding));
                let remaining_errors = nb_of_errors;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                for (const [base_line, tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
=======
                for (const [base_line, index_tax_data] of tax_amounts.sorted_base_line_x_tax_data) {
>>>>>>> upstream/18.0
                    const tax_details = base_line.tax_details;
                    if (!remaining_errors) {
                        break;
                    }

                    const nb_of_amount_to_distribute = Math.min(
                        Math.ceil(Math.abs(tax_details.total_included_currency * nb_of_errors / tax_amounts.total_included_currency)),
                        remaining_errors
                    );
                    remaining_errors -= nb_of_amount_to_distribute;
                    const amount_to_distribute = sign * nb_of_amount_to_distribute * delta_currency.rounding;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    if (tax_data) {
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
>>>>>>> upstream/18.0
=======
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    round_tax_details_tax_amounts(base_lines, company, { mode = "mixed" } = {}) {
        function grouping_function(base_line, tax_data) {
            if (!tax_data) {
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
            const common_grouping_key = {
                is_refund: base_line.is_refund,
                is_reverse_charge: tax_data.is_reverse_charge,
                price_include: tax_data.price_include,
            };
            return {
                grouping_key: {
                    ...common_grouping_key,
                    tax: tax_data.tax.id,
                    currency: base_line.currency_id.id,
                },
                raw_grouping_key: {
                    ...common_grouping_key,
                    tax: tax_data.tax,
                    currency: base_line.currency_id,
                },
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
            return {
                is_refund: base_line.is_refund,
                is_reverse_charge: tax_data.is_reverse_charge,
                price_include: tax_data.price_include,
                tax: tax_data.tax,
                currency: base_line.currency_id,
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
            };
        }

        const base_lines_aggregated_values = this.aggregate_base_lines_tax_details(
            base_lines,
            grouping_function
        );
        const values_per_grouping_key = this.aggregate_base_lines_aggregated_values(
            base_lines_aggregated_values
        );
        for (const values of Object.values(values_per_grouping_key)) {
            const grouping_key = values.grouping_key;
            if (!grouping_key) {
                continue;
            }

            const price_include = grouping_key.price_include;
            const currency = grouping_key.currency;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            for (const [delta_currency_indicator, delta_currency] of [
                ["_currency", currency],
                ["", company.currency_id],
            ]) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                let delta_amount;
                if (country_code === "PT") {
                    delta_amount =
                        tax_amounts[`raw_total_amount${delta_currency_indicator}`] -
                        tax_amounts[`base_amount${delta_currency_indicator}`] -
                        tax_amounts[`tax_amount${delta_currency_indicator}`];
                } else {
                    delta_amount =
                        tax_amounts[`raw_base_amount${delta_currency_indicator}`] -
                        tax_amounts[`base_amount${delta_currency_indicator}`];
                }

                const target_factors = tax_amounts.sorted_base_line_x_tax_data.map(
                    ([base_line, index_tax_data]) => ({
                        factor: Math.abs(
                            base_line.tax_details.total_included_currency /
                                tax_amounts.total_included_currency
                        ),
                        base_line: base_line,
                        index_tax_data: index_tax_data,
                    })
                );
                const amounts_to_distribute = this.distribute_delta_amount_smoothly(
                    delta_currency.decimal_places,
                    delta_amount,
                    target_factors
                );
                for (let i = 0; i < target_factors.length; i++) {
                    const target_factor = target_factors[i];
                    const amount_to_distribute = amounts_to_distribute[i];

                    const base_line = target_factor.base_line;
                    const tax_details = base_line.tax_details;
                    const index_tax_data = target_factor.index_tax_data;
                    if (index_tax_data) {
                        const tax_data = index_tax_data[1];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                        tax_data[`base_amount${delta_currency_indicator}`] += amount_to_distribute;
                    } else {
                        tax_details[`delta_total_excluded${delta_currency_indicator}`] += amount_to_distribute;

                        const base_rounding_key = [currency.id, base_line.is_refund];
                        const base_amounts = total_per_base[base_rounding_key];
                        base_amounts[`base_amount${delta_currency_indicator}`] += amount_to_distribute;
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
                // Tax amount
                const raw_total_tax_amount = values[`target_tax_amount${delta_currency_indicator}`];
                const rounded_raw_total_tax_amount = roundPrecision(
                    raw_total_tax_amount,
                    delta_currency.rounding
                );
                const total_tax_amount = values[`tax_amount${delta_currency_indicator}`];
                const delta_total_tax_amount = rounded_raw_total_tax_amount - total_tax_amount;

                if (raw_total_tax_amount) {
                    const target_factors = values.base_line_x_taxes_data.flatMap(
                        ([_, taxes_data]) =>
                            taxes_data.map((tax_data) => ({
                                factor: tax_data[`raw_tax_amount${delta_currency_indicator}`],
                                tax_data: tax_data,
                            }))
                    );

                    const amounts_to_distribute = this.distribute_delta_amount_smoothly(
                        delta_currency.decimal_places,
                        delta_total_tax_amount,
                        target_factors
                    );

                    for (let i = 0; i < target_factors.length; i++) {
                        const tax_data = target_factors[i].tax_data;
                        const amount_to_distribute = amounts_to_distribute[i];
                        tax_data[`tax_amount${delta_currency_indicator}`] += amount_to_distribute;
                    }
                }

                // Base amount
                const raw_total_base_amount =
                    values[`target_base_amount${delta_currency_indicator}`];
                let delta_total_base_amount = 0.0;

                if ((mode === "mixed" && price_include) || mode === "included") {
                    const raw_total_amount = raw_total_base_amount + raw_total_tax_amount;
                    const rounded_raw_total_amount = roundPrecision(
                        raw_total_amount,
                        delta_currency.rounding
                    );
                    const total_amount =
                        values[`base_amount${delta_currency_indicator}`] +
                        total_tax_amount +
                        delta_total_tax_amount;
                    delta_total_base_amount = rounded_raw_total_amount - total_amount;
                } else if ((mode === "mixed" && !price_include) || mode === "excluded") {
                    const rounded_raw_total_base_amount = roundPrecision(
                        raw_total_base_amount,
                        delta_currency.rounding
                    );
                    const total_base_amount = values[`base_amount${delta_currency_indicator}`];
                    delta_total_base_amount = rounded_raw_total_base_amount - total_base_amount;
                }

                if (raw_total_base_amount) {
                    const target_factors = values.base_line_x_taxes_data.flatMap(
                        ([_, taxes_data]) =>
                            taxes_data.map((tax_data) => ({
                                factor: tax_data[`raw_base_amount${delta_currency_indicator}`],
                                tax_data: tax_data,
                            }))
                    );

                    const amounts_to_distribute = this.distribute_delta_amount_smoothly(
                        delta_currency.decimal_places,
                        delta_total_base_amount,
                        target_factors
                    );

                    for (let i = 0; i < target_factors.length; i++) {
                        const tax_data = target_factors[i].tax_data;
                        const amount_to_distribute = amounts_to_distribute[i];
                        tax_data[`base_amount${delta_currency_indicator}`] += amount_to_distribute;
                    }
                }
            }
        }
    },

    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
    round_tax_details_base_lines(base_lines, company, { mode = "mixed" } = {}) {
        function grouping_function(base_line, tax_data) {
            return {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                grouping_key: {
                    is_refund: base_line.is_refund,
                    currency: base_line.currency_id.id,
                },
                raw_grouping_key: {
                    is_refund: base_line.is_refund,
                    currency: base_line.currency_id,
                },
            };
=======
                is_refund: base_line.is_refund,
                currency: base_line.currency_id,
            }
>>>>>>> upstream/18.0
=======
                is_refund: base_line.is_refund,
                currency: base_line.currency_id,
            }
>>>>>>> upstream/18.0
=======
                is_refund: base_line.is_refund,
                currency: base_line.currency_id,
            }
>>>>>>> upstream/18.0
=======
                is_refund: base_line.is_refund,
                currency: base_line.currency_id,
            }
>>>>>>> upstream/18.0
=======
                is_refund: base_line.is_refund,
                currency: base_line.currency_id,
            }
>>>>>>> upstream/18.0
=======
                is_refund: base_line.is_refund,
                currency: base_line.currency_id,
            }
>>>>>>> upstream/18.0
=======
                is_refund: base_line.is_refund,
                currency: base_line.currency_id,
            }
>>>>>>> upstream/18.0
=======
                is_refund: base_line.is_refund,
                currency: base_line.currency_id,
            }
>>>>>>> upstream/18.0
        }

        const base_lines_aggregated_values = this.aggregate_base_lines_tax_details(
            base_lines,
            grouping_function
        );
        const values_per_grouping_key = this.aggregate_base_lines_aggregated_values(
            base_lines_aggregated_values
        );
        for (const values of Object.values(values_per_grouping_key)) {
            const grouping_key = values.grouping_key;
            let current_mode = mode;
            if (current_mode === "mixed") {
                current_mode = "included";
                for (const base_line_taxes_data of values.base_line_x_taxes_data) {
                    const taxes_data = base_line_taxes_data[1];
                    if (taxes_data.some((tax_data) => !tax_data.price_include)) {
                        current_mode = "excluded";
                        break;
                    }
                }
            }

            const currency = grouping_key.currency;
            for (const [delta_currency_indicator, delta_currency] of [
                ["_currency", currency],
                ["", company.currency_id],
            ]) {
                let delta_total_excluded = 0.0;
                let target_factors = [];
                if (current_mode === "excluded") {
                    // Price-excluded rounding.
                    const raw_total_excluded =
                        values[`target_total_excluded${delta_currency_indicator}`];
                    if (!raw_total_excluded) {
                        continue;
                    }

                    const rounded_raw_total_excluded = roundPrecision(
                        raw_total_excluded,
                        delta_currency.rounding
                    );
                    const total_excluded = values[`total_excluded${delta_currency_indicator}`];
                    delta_total_excluded = rounded_raw_total_excluded - total_excluded;
                    target_factors = values.base_line_x_taxes_data.map(([base_line]) => ({
                        factor: base_line.tax_details[`raw_total_excluded${delta_currency_indicator}`],
                        base_line: base_line,
                    }));
                } else {
                    // Price-included rounding.
                    const raw_total_included =
                        values[`target_total_excluded${delta_currency_indicator}`] +
                        values[`target_tax_amount${delta_currency_indicator}`];
                    if (!raw_total_included) {
                        continue;
                    }
                    const rounded_raw_total_included = roundPrecision(
                        raw_total_included,
                        delta_currency.rounding
                    );
                    const total_included =
                        values[`total_excluded${delta_currency_indicator}`] +
                        values[`tax_amount${delta_currency_indicator}`];
                    delta_total_excluded = rounded_raw_total_included - total_included;
                    target_factors = values.base_line_x_taxes_data.map(([base_line]) => ({
                        factor: base_line.tax_details[`raw_total_included${delta_currency_indicator}`],
                        base_line: base_line,
                    }));
                }

                const amounts_to_distribute = this.distribute_delta_amount_smoothly(
                    delta_currency.decimal_places,
                    delta_total_excluded,
                    target_factors
                );
                for (let i = 0; i < target_factors.length; i++) {
                    const base_line = target_factors[i].base_line;
                    const amount_to_distribute = amounts_to_distribute[i];
                    base_line.tax_details[`delta_total_excluded${delta_currency_indicator}`] +=
                        amount_to_distribute;
                }
            }
        }
    },

    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
    round_base_lines_tax_details(base_lines, company) {
        // Raw rounding.
        for (const base_line of base_lines) {
            const tax_details = base_line.tax_details;

            for (const [suffix, currency] of [
                ["_currency", base_line.currency_id],
                ["", company.currency_id],
            ]) {
                const total_excluded_field = `total_excluded${suffix}`;
                tax_details[total_excluded_field] = roundPrecision(
                    tax_details[`raw_${total_excluded_field}`],
                    currency.rounding
                );

                for (const tax_data of tax_details.taxes_data) {
                    for (const prefix of ["base", "tax"]) {
                        const field = `${prefix}_amount${suffix}`;
                        tax_data[field] = roundPrecision(
                            tax_data[`raw_${field}`],
                            currency.rounding
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
        // Dispatch the delta of base amounts accross the base lines.
        // Suppose 2 lines:
        // - quantity=12.12, price_unit=12.12, tax=23%
        // - quantity=12.12, price_unit=12.12, tax=13%
        // The base amount of each line is computed as round(12.12 * 12.12) = 146.89
        // The expected base amount of the whole document is round(12.12 * 12.12 * 2) = 293.79
        // Currently, the base amount has already been rounded per tax. So the tax details for the whole document is currently:
        // 23%: base = 146.89, tax = 33.79
        // 13%: base = 146.89, tax = 19.1
        // However, for the whole document, there is a delta in term of base amount: 293.79 - 146.89 - 146.89 = 0.01
        // This delta won't be there in any base but still has to be accounted.
        for (const base_amounts of Object.values(total_per_base)) {
            if (!base_amounts.base_lines.length) {
                continue;
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
            const base_line = base_amounts.base_lines.sort(
                (a, b) =>
                    a.tax_details.total_included_currency - b.tax_details.total_included_currency
            )[0];

            const tax_details = base_line.tax_details;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            const delta_base_amount_currency = base_amounts.raw_base_amount_currency - base_amounts.base_amount_currency;
            const delta_base_amount = base_amounts.raw_base_amount - base_amounts.base_amount;
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
            let delta_base_amount_currency;
            let delta_base_amount;
            if (country_code === "PT") {
                delta_base_amount_currency = base_amounts.raw_total_amount_currency - base_amounts.base_amount_currency - base_amounts.tax_amount_currency;
                delta_base_amount = base_amounts.raw_total_amount - base_amounts.base_amount - base_amounts.tax_amount;
            } else {
                delta_base_amount_currency = base_amounts.raw_base_amount_currency - base_amounts.base_amount_currency;
                delta_base_amount = base_amounts.raw_base_amount - base_amounts.base_amount;
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            if (floatIsZero(delta_base_amount_currency, base_amounts.currency.decimal_places) && floatIsZero(delta_base_amount, company.currency_id.decimal_places)) {
                continue;
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
            tax_details.delta_total_excluded_currency += delta_base_amount_currency;
            tax_details.delta_total_excluded += delta_base_amount;
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
            // Dispatch the base delta evenly on the base lines, starting from the biggest line.
            const factors = Array(base_amounts.base_lines.length).fill({ factor: 1.0 / base_amounts.base_lines.length });
            const base_lines_sorted = base_amounts.base_lines.sort((a, b) => 
                a.tax_details.total_included_currency - b.tax_details.total_included_currency
            );
            for (const [delta_currency_indicator, delta_currency, delta_amount] of [
                ["_currency", base_amounts.currency, delta_base_amount_currency],
                ["", company.currency_id, delta_base_amount],
            ]) {
                const amounts_to_distribute = this.distribute_delta_amount_smoothly(
                    delta_currency.decimal_places,
                    delta_amount,
                    factors,
                );

                for (const [i, base_line] of base_lines_sorted.entries()) {
                    base_line.tax_details[`delta_total_excluded${delta_currency_indicator}`] += amounts_to_distribute[i];
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
        // Apply 'manual_tax_amounts'.
        for (const base_line of base_lines) {
            const manual_tax_amounts = base_line.manual_tax_amounts;
            const rate = base_line.rate;
            const tax_details = base_line.tax_details;

            for (const [suffix, currency] of [
                ["_currency", base_line.currency_id],
                ["", company.currency_id],
            ]) {
                const total_field = `total_excluded${suffix}`;
                const manual_field = `manual_${total_field}`;
                if (base_line[manual_field] !== null) {
                    tax_details[total_field] = base_line[manual_field];
<<<<<<< HEAD
<<<<<<< HEAD
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
                    if (suffix === "_currency" && rate) {
                        tax_details.total_excluded = roundPrecision(
                            tax_details[total_field] / rate,
                            company.currency_id.rounding
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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

                for (const tax_data of tax_details.taxes_data) {
                    const tax = tax_data.tax;
                    const reverse_charge_sign = tax_data.is_reverse_charge ? -1 : 1;
                    const current_manual_tax_amounts =
                        (manual_tax_amounts && manual_tax_amounts[String(tax.id)]) || {};

                    for (const [prefix, factor] of [
                        ["base", 1],
                        ["tax", reverse_charge_sign],
                    ]) {
                        const field = `${prefix}_amount${suffix}`;
                        if (field in current_manual_tax_amounts) {
                            tax_data[field] = roundPrecision(
                                factor * current_manual_tax_amounts[field],
                                currency.rounding
                            );
                            if (suffix === "_currency" && rate) {
                                tax_data[`${prefix}_amount`] = roundPrecision(
                                    tax_data[field] / rate,
                                    company.currency_id.rounding
                                );
                            }
                        }
                    }
                }
            }
        }

        // Compute 'total_included' & add 'delta_total_excluded'.
        for (const base_line of base_lines) {
            const tax_details = base_line.tax_details;
            for (const suffix of ["_currency", ""]) {
                tax_details[`delta_total_excluded${suffix}`] = 0.0;
                tax_details[`total_included${suffix}`] = tax_details[`total_excluded${suffix}`];
                for (const tax_data of tax_details.taxes_data) {
                    tax_details[`total_included${suffix}`] += tax_data[`tax_amount${suffix}`];
                }
            }
        }

        this.round_tax_details_tax_amounts(base_lines, company);
        this.round_tax_details_base_lines(base_lines, company);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    },

    // -------------------------------------------------------------------------
    // TAX TOTALS SUMMARY
    // -------------------------------------------------------------------------

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    get_tax_totals_summary(base_lines, currency, company, {cash_rounding = null} = {}) {
        const company_pd = company.currency_id.rounding;
        const tax_totals_summary = {
            currency_id: currency.id,
            currency_pd: currency.rounding,
            company_currency_id: company.currency_id.id,
            company_currency_pd: company.currency_id.rounding,
            has_tax_groups: false,
            subtotals: [],
            base_amount_currency: 0.0,
            base_amount: 0.0,
            tax_amount_currency: 0.0,
            tax_amount: 0.0,
        };

        // Global tax values.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const global_grouping_function = (base_line, tax_data) => true;
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0
=======
        const global_grouping_function = (base_line, tax_data) => tax_data !== null;
>>>>>>> upstream/18.0

        let base_lines_aggregated_values = this.aggregate_base_lines_tax_details(base_lines, global_grouping_function);
        let values_per_grouping_key = this.aggregate_base_lines_aggregated_values(base_lines_aggregated_values);

        for (const values of Object.values(values_per_grouping_key)) {
            if (values.grouping_key) {
                tax_totals_summary.has_tax_groups = true;
            }
            tax_totals_summary.base_amount_currency += values.total_excluded_currency;
            tax_totals_summary.base_amount += values.total_excluded;
            tax_totals_summary.tax_amount_currency += values.tax_amount_currency;
            tax_totals_summary.tax_amount += values.tax_amount;
        }

        // Tax groups.
        const untaxed_amount_subtotal_label = _t("Untaxed Amount");
        const subtotals = {};

        const tax_group_grouping_function = (base_line, tax_data) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
=======
            if (!tax_data) {
                return;
            }
>>>>>>> upstream/18.0
            return {
                grouping_key: tax_data.tax.tax_group_id.id,
                raw_grouping_key: tax_data.tax.tax_group_id,
            };
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
            if (!tax_data) {
                return;
            }
            return tax_data.tax.tax_group_id;
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
        }

        base_lines_aggregated_values = this.aggregate_base_lines_tax_details(base_lines, tax_group_grouping_function);
        values_per_grouping_key = this.aggregate_base_lines_aggregated_values(base_lines_aggregated_values);

        const sorted_total_per_tax_group = Object.values(values_per_grouping_key)
            .filter(values => values.grouping_key)
            .sort((a, b) => (a.grouping_key.sequence - b.grouping_key.sequence) || (a.grouping_key.id - b.grouping_key.id));

        const encountered_base_amounts = new Set();
        const subtotals_order = {};

        for (const [order, values] of sorted_total_per_tax_group.entries()) {
            const tax_group = values.grouping_key;

            // Get all involved taxes in the tax group.
            const involved_tax_ids = new Set();
            const involved_amount_types = new Set();
            const involved_price_include = new Set();
            values.base_line_x_taxes_data.forEach(([base_line, taxes_data]) => {
                taxes_data.forEach(tax_data => {
                    const tax = tax_data.tax;
                    involved_tax_ids.add(tax.id);
                    involved_amount_types.add(tax.amount_type);
                    involved_price_include.add(tax.price_include);
                });
            });

            // Compute the display base amounts.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            let display_base_amount = values.base_amount;
            let display_base_amount_currency = values.base_amount_currency;
=======
            let display_base_amount;
            let display_base_amount_currency;
>>>>>>> upstream/18.0
=======
            let display_base_amount;
            let display_base_amount_currency;
>>>>>>> upstream/18.0
=======
            let display_base_amount;
            let display_base_amount_currency;
>>>>>>> upstream/18.0
=======
            let display_base_amount;
            let display_base_amount_currency;
>>>>>>> upstream/18.0
=======
            let display_base_amount;
            let display_base_amount_currency;
>>>>>>> upstream/18.0
=======
            let display_base_amount;
            let display_base_amount_currency;
>>>>>>> upstream/18.0
=======
            let display_base_amount;
            let display_base_amount_currency;
>>>>>>> upstream/18.0
=======
            let display_base_amount;
            let display_base_amount_currency;
>>>>>>> upstream/18.0
            if (involved_amount_types.size === 1 && involved_amount_types.has("fixed")) {
                display_base_amount = null;
                display_base_amount_currency = null;
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            let display_base_amount;
            let display_base_amount_currency;
            if (involved_amount_types.size === 1 && involved_amount_types.has("fixed")) {
                display_base_amount = false;
                display_base_amount_currency = false;
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
            } else if (
                involved_amount_types.size === 1
                && involved_amount_types.has("division")
                && involved_price_include.size === 1
                && involved_price_include.has(true)
            ) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                values.base_line_x_taxes_data.forEach(([base_line, _taxes_data]) => {
                    base_line.tax_details.taxes_data.forEach(tax_data => {
                        if (tax_data.tax.amount_type === 'division') {
                            display_base_amount_currency += tax_data.tax_amount_currency;
                            display_base_amount += tax_data.tax_amount;
                        }
                    });
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
                display_base_amount = 0.0;
                display_base_amount_currency = 0.0;
                values.base_line_x_taxes_data.forEach(([base_line, _taxes_data]) => {
                    const tax_details = base_line.tax_details;
                    display_base_amount +=
                        tax_details.total_excluded + tax_details.delta_total_excluded;
                    display_base_amount_currency +=
                        tax_details.total_excluded_currency +
                        tax_details.delta_total_excluded_currency;
                    for (const tax_data of tax_details.taxes_data) {
                        display_base_amount_currency += tax_data.tax_amount_currency;
                        display_base_amount += tax_data.tax_amount;
                    }
                });
            } else {
                display_base_amount = values.base_amount;
                display_base_amount_currency = values.base_amount_currency;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            }

            if (display_base_amount_currency !== null) {
=======
            }

            if (typeof display_base_amount_currency === "number") {
>>>>>>> upstream/18.0
=======
            }

            if (typeof display_base_amount_currency === "number") {
>>>>>>> upstream/18.0
=======
            }

            if (typeof display_base_amount_currency === "number") {
>>>>>>> upstream/18.0
=======
            }

            if (typeof display_base_amount_currency === "number") {
>>>>>>> upstream/18.0
=======
            }

            if (typeof display_base_amount_currency === "number") {
>>>>>>> upstream/18.0
                encountered_base_amounts.add(parseFloat(display_base_amount_currency.toFixed(currency.decimal_places)));
            }

            // Order of the subtotals.
            const preceding_subtotal = tax_group.preceding_subtotal || untaxed_amount_subtotal_label;
            if (!(preceding_subtotal in subtotals)) {
                subtotals[preceding_subtotal] = {
                    tax_groups: [],
                    tax_amount_currency: 0.0,
                    tax_amount: 0.0,
                    base_amount_currency: 0.0,
                    base_amount: 0.0,
                };
            }
            if (!(preceding_subtotal in subtotals_order)) {
                subtotals_order[preceding_subtotal] = order;
            }

            subtotals[preceding_subtotal].tax_groups.push({
                id: tax_group.id,
                involved_tax_ids: Array.from(involved_tax_ids),
                tax_amount_currency: values.tax_amount_currency,
                tax_amount: values.tax_amount,
                base_amount_currency: values.base_amount_currency,
                base_amount: values.base_amount,
                display_base_amount_currency,
                display_base_amount,
                group_name: tax_group.name,
                group_label: tax_group.pos_receipt_label,
            });
        }

        // Subtotals.
        if (!Object.keys(subtotals).length) {
            subtotals[untaxed_amount_subtotal_label] = {
                tax_groups: [],
                tax_amount_currency: 0.0,
                tax_amount: 0.0,
                base_amount_currency: 0.0,
                base_amount: 0.0,
            };
        }

        const ordered_subtotals = Array.from(Object.entries(subtotals))
            .sort((a, b) => (subtotals_order[a[0]] || 0) - (subtotals_order[b[0]] || 0));
        let accumulated_tax_amount_currency = 0.0;
        let accumulated_tax_amount = 0.0;
        for (const [subtotal_label, subtotal] of ordered_subtotals) {
            subtotal.name = subtotal_label;
            subtotal.base_amount_currency = tax_totals_summary.base_amount_currency + accumulated_tax_amount_currency;
            subtotal.base_amount = tax_totals_summary.base_amount + accumulated_tax_amount;
            for (const tax_group of subtotal.tax_groups) {
                subtotal.tax_amount_currency += tax_group.tax_amount_currency;
                subtotal.tax_amount += tax_group.tax_amount;
                accumulated_tax_amount_currency += tax_group.tax_amount_currency;
                accumulated_tax_amount += tax_group.tax_amount;
            }
            tax_totals_summary.subtotals.push(subtotal);
        }

        // Cash rounding
        const cash_rounding_lines = base_lines.filter(base_line => base_line.special_type === 'cash_rounding');
        if (cash_rounding_lines.length) {
            tax_totals_summary.cash_rounding_base_amount_currency = 0.0;
            tax_totals_summary.cash_rounding_base_amount = 0.0;
            cash_rounding_lines.forEach(base_line => {
                const tax_details = base_line.tax_details;
                tax_totals_summary.cash_rounding_base_amount_currency += tax_details.total_excluded_currency;
                tax_totals_summary.cash_rounding_base_amount += tax_details.total_excluded;
            });
        } else if (cash_rounding !== null) {
            const strategy = cash_rounding.strategy;
            const cash_rounding_pd = cash_rounding.rounding;
            const cash_rounding_method = cash_rounding.rounding_method;
            const total_amount_currency = tax_totals_summary.base_amount_currency + tax_totals_summary.tax_amount_currency;
            const total_amount = tax_totals_summary.base_amount + tax_totals_summary.tax_amount;
            const expected_total_amount_currency = roundPrecision(total_amount_currency, cash_rounding_pd, cash_rounding_method);
            let cash_rounding_base_amount_currency = expected_total_amount_currency - total_amount_currency;
            const rate = total_amount ? Math.abs(total_amount_currency / total_amount) : 0.0;
            let cash_rounding_base_amount = rate ? roundPrecision(cash_rounding_base_amount_currency / rate, company_pd) : 0.0;
            if (!floatIsZero(cash_rounding_base_amount_currency, currency.decimal_places)) {
                if (strategy === 'add_invoice_line') {
                    tax_totals_summary.cash_rounding_base_amount_currency = cash_rounding_base_amount_currency;
                    tax_totals_summary.cash_rounding_base_amount = cash_rounding_base_amount;
                    tax_totals_summary.base_amount_currency += cash_rounding_base_amount_currency;
                    tax_totals_summary.base_amount += cash_rounding_base_amount;
                    subtotals[untaxed_amount_subtotal_label].base_amount_currency += cash_rounding_base_amount_currency;
                    subtotals[untaxed_amount_subtotal_label].base_amount += cash_rounding_base_amount;
                } else if (strategy === 'biggest_tax') {
                    const all_subtotal_tax_group = tax_totals_summary.subtotals
                        .flatMap(subtotal => subtotal.tax_groups.map(tax_group => [subtotal, tax_group]));

                    if (all_subtotal_tax_group.length) {
                        const [max_subtotal, max_tax_group] = all_subtotal_tax_group
                            .reduce((a, b) => (b[1].tax_amount_currency > a[1].tax_amount_currency ? b : a));

                        max_tax_group.tax_amount_currency += cash_rounding_base_amount_currency;
                        max_tax_group.tax_amount += cash_rounding_base_amount;
                        max_subtotal.tax_amount_currency += cash_rounding_base_amount_currency;
                        max_subtotal.tax_amount += cash_rounding_base_amount;
                        tax_totals_summary.tax_amount_currency += cash_rounding_base_amount_currency;
                        tax_totals_summary.tax_amount += cash_rounding_base_amount;
                    } else {
                        // Failed to apply the cash rounding since there is no tax.
                        cash_rounding_base_amount_currency = 0.0
                        cash_rounding_base_amount = 0.0
                    }
                }
            }
        }

        // Subtract the cash rounding from the untaxed amounts.
        const cash_rounding_base_amount_currency = tax_totals_summary.cash_rounding_base_amount_currency || 0.0;
        const cash_rounding_base_amount = tax_totals_summary.cash_rounding_base_amount || 0.0;
        tax_totals_summary.base_amount_currency -= cash_rounding_base_amount_currency;
        tax_totals_summary.base_amount -= cash_rounding_base_amount;
        for (const subtotal of tax_totals_summary.subtotals) {
            subtotal.base_amount_currency -= cash_rounding_base_amount_currency;
            subtotal.base_amount -= cash_rounding_base_amount;
        }
        encountered_base_amounts.add(parseFloat(tax_totals_summary.base_amount_currency.toFixed(currency.decimal_places)));
        tax_totals_summary.same_tax_base = encountered_base_amounts.size === 1;

        // Total amount.
        tax_totals_summary.total_amount_currency = tax_totals_summary.base_amount_currency + tax_totals_summary.tax_amount_currency + cash_rounding_base_amount_currency;
        tax_totals_summary.total_amount = tax_totals_summary.base_amount + tax_totals_summary.tax_amount + cash_rounding_base_amount;

        return tax_totals_summary;
    },

    // -------------------------------------------------------------------------
    // EDI HELPERS
    // -------------------------------------------------------------------------

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    aggregate_base_line_tax_details(base_line, grouping_function) {
        const values_per_grouping_key = {};
        const tax_details = base_line.tax_details;
        const taxes_data = tax_details.taxes_data;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        for (const tax_data of taxes_data) {
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
>>>>>>> upstream/18.0
=======
        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of (taxes_data.length !== 0 ? taxes_data : [null])) {
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
        const manual_tax_amounts = base_line.manual_tax_amounts;

        // If there are no taxes, we pass an empty object to the grouping function.
        for (const tax_data of taxes_data.length !== 0 ? taxes_data : [null]) {
            const current_manual_tax_amounts =
                tax_data && manual_tax_amounts
                    ? manual_tax_amounts[tax_data.tax.id.toString()] || {}
                    : {};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            const generated_grouping_key = grouping_function(base_line, tax_data);
            let raw_grouping_key = generated_grouping_key;
            let grouping_key = generated_grouping_key;

            // There is no FrozenDict in javascript.
            // When the key is a record, it can't be jsonified so this is a trick to provide both the
            // raw_grouping_key (to be jsonified) from the grouping_key (to be added to the values).
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (typeof raw_grouping_key === 'object' && ("raw_grouping_key" in raw_grouping_key)) {
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
=======
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
>>>>>>> upstream/18.0
                raw_grouping_key = generated_grouping_key.raw_grouping_key;
                grouping_key = generated_grouping_key.grouping_key;
            }

            // Handle dictionary-like keys (converted to string in JS)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            if (typeof grouping_key === 'object') {
                grouping_key = JSON.stringify(raw_grouping_key);
            }

            // Base amount
            if(!(grouping_key in values_per_grouping_key)){
                values_per_grouping_key[grouping_key] = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    base_amount_currency: tax_data.base_amount_currency,
                    base_amount: tax_data.base_amount,
                    raw_base_amount_currency: tax_data.raw_base_amount_currency,
                    raw_base_amount: tax_data.raw_base_amount,
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                    tax_amount_currency: 0.0,
                    tax_amount: 0.0,
                    raw_tax_amount_currency: 0.0,
                    raw_tax_amount: 0.0,
                    total_excluded_currency: tax_details.total_excluded_currency + tax_details.delta_total_excluded_currency,
                    total_excluded: tax_details.total_excluded + tax_details.delta_total_excluded,
                    taxes_data: [],
                    grouping_key: raw_grouping_key
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
            }
            const values = values_per_grouping_key[grouping_key];
            values.taxes_data.push(tax_data);

            // Tax amount
            values.tax_amount_currency += tax_data.tax_amount_currency;
            values.tax_amount += tax_data.tax_amount;
            values.raw_tax_amount_currency += tax_data.raw_tax_amount_currency;
            values.raw_tax_amount += tax_data.raw_tax_amount;
        }

        if (!taxes_data.length) {
            values_per_grouping_key[null] = {
                base_amount_currency: tax_details.total_excluded_currency + tax_details.delta_total_excluded_currency,
                base_amount: tax_details.total_excluded + tax_details.delta_total_excluded,
                raw_base_amount_currency: tax_details.raw_total_excluded_currency,
                raw_base_amount: tax_details.raw_total_excluded,
                total_excluded_currency: tax_details.total_excluded_currency + tax_details.delta_total_excluded_currency,
                total_excluded: tax_details.total_excluded + tax_details.delta_total_excluded,
                tax_amount_currency: 0.0,
                tax_amount: 0.0,
                raw_tax_amount_currency: 0.0,
                raw_tax_amount: 0.0,
                taxes_data: [],
                grouping_key: null
            };
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
                const values = values_per_grouping_key[grouping_key];

                if (tax_data) {
                    values.base_amount_currency = tax_data.base_amount_currency;
                    values.base_amount = tax_data.base_amount;
                    values.raw_base_amount_currency = tax_data.raw_base_amount_currency;
                    values.raw_base_amount = tax_data.raw_base_amount;
                } else {
                    values.base_amount_currency = tax_details.total_excluded_currency + tax_details.delta_total_excluded_currency;
                    values.base_amount = tax_details.total_excluded + tax_details.delta_total_excluded;
                    values.raw_base_amount_currency = tax_details.raw_total_excluded_currency;
                    values.raw_base_amount = tax_details.raw_total_excluded;
                }
            }
            const values = values_per_grouping_key[grouping_key];

            // Tax amount
            if (tax_data) {
                values.tax_amount_currency += tax_data.tax_amount_currency;
                values.tax_amount += tax_data.tax_amount;
                values.raw_tax_amount_currency += tax_data.raw_tax_amount_currency;
                values.raw_tax_amount += tax_data.raw_tax_amount;
                values.taxes_data.push(tax_data);
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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

        return values_per_grouping_key;
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
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
            if (typeof grouping_key === "object") {
                grouping_key = JSON.stringify(grouping_key);
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
            let raw_grouping_key = grouping_function(base_line, tax_data);
            let grouping_key;
            if (raw_grouping_key && typeof raw_grouping_key === "object" && "raw_grouping_key" in raw_grouping_key) {
                // TODO: TO BE REMOVED IN MASTER (here for retro-compatibility)
                // There is no FrozenDict in javascript.
                // When the key is a record, it can't be jsonified so this is a trick to provide both the
                // raw_grouping_key (to be jsonified) from the grouping_key (to be added to the values).
                raw_grouping_key = raw_grouping_key.raw_grouping_key;
                grouping_key = raw_grouping_key.grouping_key;

                // Handle dictionary-like keys (converted to string in JS)
                if (typeof grouping_key === "object") {
                    grouping_key = JSON.stringify(grouping_key);
                }
            } else {
                grouping_key = this.stringify_grouping_key(raw_grouping_key);
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
            }

            // Base amount.
            if (!(grouping_key in values_per_grouping_key)) {
                const values = {
                    grouping_key: raw_grouping_key,
                    taxes_data: [],
                };
                values_per_grouping_key[grouping_key] = values;

                for (const suffix of ["_currency", ""]) {
                    const excluded_rounded_field = `total_excluded${suffix}`;
                    const excluded_delta_field = `delta_${excluded_rounded_field}`;
                    const excluded_raw_field = `raw_${excluded_rounded_field}`;
                    const excluded_target_field = `target_${excluded_rounded_field}`;
                    const excluded_manual_field = `manual_${excluded_rounded_field}`;

                    const excluded_rounded_amount =
                        tax_details[excluded_rounded_field] + tax_details[excluded_delta_field];
                    const excluded_raw_amount = tax_details[excluded_raw_field];

                    values[excluded_rounded_field] = excluded_rounded_amount;
                    values[excluded_raw_field] = excluded_raw_amount;

                    let excluded_target_amount;
                    if (base_line[excluded_manual_field] !== null) {
<<<<<<< HEAD
<<<<<<< HEAD
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
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
=======
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
=======
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
=======
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
=======
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
=======
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
=======
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
=======
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
=======
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
=======
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
=======
                        excluded_target_amount = base_line[excluded_manual_field];
                    } else if (suffix === "" && base_line.manual_total_excluded_currency !== null) {
>>>>>>> upstream/18.0
                        excluded_target_amount = excluded_rounded_amount;
                    } else {
                        excluded_target_amount = excluded_raw_amount;
                    }
                    values[excluded_target_field] = excluded_target_amount;

                    const tax_base_rounded_field = `base_amount${suffix}`;
                    const tax_base_raw_field = `raw_${tax_base_rounded_field}`;
                    const tax_base_target_field = `target_${tax_base_rounded_field}`;

                    if (tax_data) {
                        values[tax_base_rounded_field] = tax_data[tax_base_rounded_field];
                        values[tax_base_raw_field] = tax_data[tax_base_raw_field];

                        if (tax_base_rounded_field in current_manual_tax_amounts) {
<<<<<<< HEAD
<<<<<<< HEAD
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
                            values[tax_base_target_field] =
                                current_manual_tax_amounts[tax_base_rounded_field];
                        } else if (
                            suffix === "" &&
                            "base_amount_currency" in current_manual_tax_amounts
                        ) {
<<<<<<< HEAD
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
                            values[tax_base_target_field] = tax_data[tax_base_rounded_field];
                        } else {
                            values[tax_base_target_field] = tax_data[tax_base_raw_field];
                        }
                    } else {
                        values[tax_base_rounded_field] = excluded_rounded_amount;
                        values[tax_base_raw_field] = excluded_raw_amount;
                        values[tax_base_target_field] = excluded_target_amount;
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
                    const tax_tax_rounded_field = `tax_amount${suffix}`;
                    const tax_tax_raw_field = `raw_${tax_tax_rounded_field}`;
                    const tax_tax_target_field = `target_${tax_tax_rounded_field}`;

                    values[tax_tax_rounded_field] = 0.0;
                    values[tax_tax_raw_field] = 0.0;
                    values[tax_tax_target_field] = 0.0;
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
                    const tax_rounded_field = `tax_amount${suffix}`;
                    const tax_raw_field = `raw_${tax_rounded_field}`;
                    const tax_target_field = `target_${tax_rounded_field}`;

                    values[tax_rounded_field] = 0.0;
                    values[tax_raw_field] = 0.0;
                    values[tax_target_field] = 0.0;
<<<<<<< HEAD
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
                }
            }

            // Tax amount.
            if (tax_data) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                const values = values_per_grouping_key[grouping_key];
                for (const suffix of ["_currency", ""]) {
                    const tax_tax_rounded_field = `tax_amount${suffix}`;
                    const tax_tax_raw_field = `raw_${tax_tax_rounded_field}`;
                    const tax_tax_target_field = `target_${tax_tax_rounded_field}`;

                    values[tax_tax_rounded_field] += tax_data[tax_tax_rounded_field];
                    values[tax_tax_raw_field] += tax_data[tax_tax_raw_field];

                    if (tax_tax_rounded_field in current_manual_tax_amounts) {
                        values[tax_tax_target_field] += tax_data[tax_tax_rounded_field];
                    } else {
                        values[tax_tax_target_field] += tax_data[tax_tax_raw_field];
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
                const reverse_charge_sign = tax_data.is_reverse_charge ? -1 : 1;
                const values = values_per_grouping_key[grouping_key];
                for (const suffix of ["_currency", ""]) {
                    const tax_rounded_field = `tax_amount${suffix}`;
                    const tax_raw_field = `raw_${tax_rounded_field}`;
                    const tax_target_field = `target_${tax_rounded_field}`;

                    values[tax_rounded_field] += tax_data[tax_rounded_field];
                    values[tax_raw_field] += tax_data[tax_raw_field];

                    if (tax_rounded_field in current_manual_tax_amounts) {
                        values[tax_target_field] +=
                            reverse_charge_sign * current_manual_tax_amounts[tax_rounded_field];
                    } else if (
                        suffix === "" &&
                        "tax_amount_currency" in current_manual_tax_amounts
                    ) {
                        values[tax_target_field] = tax_data[tax_rounded_field];
                    } else {
                        values[tax_target_field] += tax_data[tax_raw_field];
<<<<<<< HEAD
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
                    }
                }
                values.taxes_data.push(tax_data);
            }
        }
        return values_per_grouping_key;
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    aggregate_base_lines_tax_details(base_lines, grouping_function) {
        return base_lines.map(base_line => [base_line, this.aggregate_base_line_tax_details(base_line, grouping_function)]);
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
    /**
     * [!] Mirror of the same method in account_tax.py.
     * PLZ KEEP BOTH METHODS CONSISTENT WITH EACH OTHERS.
     */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    aggregate_base_lines_aggregated_values(base_lines_aggregated_values) {
        const default_float_fields = new Set([
            'base_amount_currency',
            'base_amount',
            'raw_base_amount_currency',
            'raw_base_amount',
            'tax_amount_currency',
            'tax_amount',
            'raw_tax_amount_currency',
            'raw_tax_amount',
            'total_excluded_currency',
            'total_excluded'
        ]);
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
    aggregate_base_lines_aggregated_values(base_lines_aggregated_values) {
        const default_float_fields = new Set();
        for (const prefix of ["", "raw_", "target_"]) {
            for (const suffix of ["_currency", ""]) {
                for (const field of ["base_amount", "tax_amount", "total_excluded"]) {
                    default_float_fields.add(`${prefix}${field}${suffix}`);
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        const values_per_grouping_key = {};
        for (const [base_line, aggregated_values] of base_lines_aggregated_values) {
            for (const [raw_grouping_key, values] of Object.entries(aggregated_values)) {
                const grouping_key = values.grouping_key;

                if(!(raw_grouping_key in values_per_grouping_key)){
                    const initial_values = values_per_grouping_key[raw_grouping_key] = {
                        base_line_x_taxes_data: [],
                        grouping_key: grouping_key,
                    };
                    default_float_fields.forEach(field => {
                        initial_values[field] = 0.0;
                    });
                }
                const agg_values = values_per_grouping_key[raw_grouping_key];
                default_float_fields.forEach(field => {
                    agg_values[field] += values[field];
                });
                agg_values.base_line_x_taxes_data.push([base_line, values.taxes_data]);
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

        return values_per_grouping_key;
    },

=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
=======
        return values_per_grouping_key;
    },
>>>>>>> upstream/18.0
};
