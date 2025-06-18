import { MockServerError } from "./mock_server_utils";

/**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @typedef {{
 *  compute?: (() => void) | string;
 *  default?: RecordFieldValue | ((record: ModelRecord) => RecordFieldValue);
 *  aggregator?: Aggregator;
 *  groupable: boolean;
 *  name: string;
 *  onChange?: (record: ModelRecord) => void;
 *  readonly: boolean;
 *  related?: string;
 *  required: boolean;
 *  searchable: boolean;
 *  sortable: boolean;
 *  store: boolean;
 *  string: string;
 * }} CommonFieldDefinition
 *
 * @typedef {ModelRecord} ModelRecord
 *
 * @typedef {MonetaryFieldDefinition
 *  | RelationalFieldDefinition
 *  | SelectionFieldDefinition
 *  | StandardFieldDefinition} FieldDefinition
 *
 * @typedef {FieldDefinition["type"]} FieldType
 *
 * @typedef {"array_agg"
 *  | "avg"
 *  | "bool_and"
 *  | "bool_or"
 *  | "count"
 *  | "count_distinct"
 *  | "max"
 *  | "min"
 *  | "sum"
 * } Aggregator
 *
 * @typedef {{
 *  __domain: string;
 *  __count: number;
 *  __range: Record<string, any>;
 *  [key: string]: any;
 * }} ModelRecordGroup
 *
 * @typedef {CommonFieldDefinition & {
 *  currency_field: string;
 *  type: keyof typeof DEFAULT_MONEY_FIELD_VALUES;
 * }} MonetaryFieldDefinition
 *
 * @typedef {number | string | boolean | number[]} RecordFieldValue
 *
 * @typedef {CommonFieldDefinition & {
 *  relation: string;
 *  relation_field?: string;
 *  type: keyof typeof DEFAULT_RELATIONAL_FIELD_VALUES;
 *  inverse_fname_by_model_name?: Record<string, string>;
 *  model_name_ref_fname: string;
 * }} RelationalFieldDefinition
 *
 * @typedef {CommonFieldDefinition & {
 *  selection: [string, string][];
 *  type: keyof typeof DEFAULT_SELECTION_FIELD_VALUES;
 * }} SelectionFieldDefinition
 *
 * @typedef {CommonFieldDefinition & {
 *  type: keyof typeof DEFAULT_STANDARD_FIELD_VALUES;
 * }} StandardFieldDefinition
 */

/**
 * @template [T={}]
 * @typedef {{
 *  args?: any[];
 *  context?: Record<string, any>;
 *  [key: string]: any;
 * } & Partial<T>} KwArgs
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
 * @typedef {import("fields").INumerical["aggregator"]} Aggregator
 * @typedef {import("fields").FieldDefinition} FieldDefinition
 * @typedef {import("fields").FieldDefinitionsByType} FieldDefinitionsByType
 * @typedef {import("fields").FieldType} FieldType
 * @typedef {import("./mock_model").ModelRecord} ModelRecord
 *
 * @typedef {{
 *  compute?: (() => void) | string;
 *  default?: RecordFieldValue | ((record: ModelRecord) => RecordFieldValue);
 *  onChange?: (record: ModelRecord) => void;
 * }} MockFieldProperties
 *
 * @typedef {number | string | boolean | number[]} RecordFieldValue
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
 */

/**
 * @param {string} name
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
const camelToPascal = (name) =>
    name[0].toUpperCase() + name.slice(1).replace(/_([a-z])/g, (_, char) => char.toUpperCase());
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
function camelToPascal(name) {
    return (
        name[0].toUpperCase() + name.slice(1).replace(R_CAMEL_CASE, (_, char) => char.toUpperCase())
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
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
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
 * This function spawns a 2-level process to create field definitions: it's a function
 * returning a function returning a field descriptor.
 *
 * - this function ("generator") is called at the end of this file with pre-defined
 * parameters to configure the "constructor" functions, i.e. the ones that will
 * be called in the tests model definitions;
 *
 * - those "constructor" functions will then be called in model definitions and will
 * return the actual field descriptors.
 *
 * @template {FieldType} T
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @template [RK=never]
 * @param {T} type
 * @param {{
 *  groupOperator?: GroupOperator;
 *  requiredKeys?: RK[];
 * }} params
 */
const makeFieldGenerator = (type, { groupOperator, requiredKeys = [] } = {}) => {
    const constructorFnName = camelToPascal(type);
    const defaultDef = {
        readonly: false,
        required: false,
        searchable: true,
        sortable: true,
        store: true,
        groupable: true,
    };
    if (groupOperator) {
        defaultDef.aggregator = groupOperator;
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
 * @template [R=never]
 * @param {T} type
 * @param {{
 *  aggregator?: Aggregator;
 *  requiredKeys?: R[];
 * }} params
 */
function makeFieldGenerator(type, { aggregator, requiredKeys = [] } = {}) {
    const constructorFnName = camelToPascal(type);
    const defaultDef = { ...DEFAULT_FIELD_PROPERTIES };
    if (aggregator) {
        defaultDef.aggregator = aggregator;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    if (type !== "generic") {
        defaultDef.type = type;
    }

    // 2nd level: returns the "constructor" function
    return {
        /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
         * @param {Partial<Omit<T extends MonetaryFieldDefinition["type"]
         *  ? MonetaryFieldDefinition : T extends RelationalFieldDefinition["type"]
         *  ? RelationalFieldDefinition : T extends SelectionFieldDefinition["type"]
         *  ? SelectionFieldDefinition : StandardFieldDefinition, "name">>
         * } [attributes]
         */
        [constructorFnName](attributes) {
            // Creates a pre-version of the field definition
            const field = {
                ...defaultDef,
                ...attributes,
                [FIELD_SYMBOL]: true,
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
         * @param {Partial<FieldDefinitionsByType[T] & MockFieldProperties>} [properties]
         */
        [constructorFnName](properties) {
            // Creates a pre-version of the field definition
            const field = {
                ...defaultDef,
                ...properties,
                [S_FIELD]: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

            for (const key of requiredKeys) {
                if (!(key in field)) {
                    throw new MockServerError(
                        `missing key "${key}" in ${type || "generic"} field definition`
                    );
                }
            }

            // Fill default values in definition based on given properties
            if (isComputed(field)) {
                // By default: computed fields are readonly and not stored
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                field.readonly = attributes.readonly ?? true;
                field.store = attributes.store ?? false;
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
=======
                field.readonly = properties.readonly ?? true;
                field.store = properties.store ?? false;
>>>>>>> upstream/18.0
            }

            return field;
        },
    }[constructorFnName];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

/**
 * @param {FieldDefinition} field
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
}

const R_CAMEL_CASE = /_([a-z])/g;
const R_ENDS_WITH_ID = /_id(s)?$/i;
const R_LOWER_FOLLOWED_BY_UPPER = /([a-z])([A-Z])/g;
const R_SPACE_OR_UNDERSCORE = /[\s_]+/g;

/**
 * @param {FieldDefinition & MockFieldProperties} field
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
 */
export function isComputed(field) {
    return globalThis.Boolean(field.compute || field.related);
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
export const Binary = makeFieldGenerator("binary");

export const Boolean = makeFieldGenerator("boolean");

export const Char = makeFieldGenerator("char");

export const Date = makeFieldGenerator("date");

export const Datetime = makeFieldGenerator("datetime");

export const Float = makeFieldGenerator("float", {
    groupOperator: "sum",
});

export const Generic = makeFieldGenerator("generic");

export const Html = makeFieldGenerator("html");

export const Image = makeFieldGenerator("image");

export const Integer = makeFieldGenerator("integer", {
    groupOperator: "sum",
});

export const Json = makeFieldGenerator("json");

export const Many2many = makeFieldGenerator("many2many", {
    requiredKeys: ["relation"],
});

export const Many2one = makeFieldGenerator("many2one", {
    requiredKeys: ["relation"],
});

export const Many2oneReference = makeFieldGenerator("many2one_reference", {
    requiredKeys: ["model_field", "relation"],
});

export const Monetary = makeFieldGenerator("monetary", {
    groupOperator: "sum",
    requiredKeys: ["currency_field"],
});

export const One2many = makeFieldGenerator("one2many", {
    requiredKeys: ["relation"],
});

export const Properties = makeFieldGenerator("properties", {
    requiredKeys: ["definition_record", "definition_record_field"],
});

export const PropertiesDefinition = makeFieldGenerator("properties_definition");

export const Reference = makeFieldGenerator("reference", {
    requiredKeys: ["selection"],
});

export const Selection = makeFieldGenerator("selection", {
    requiredKeys: ["selection"],
});

export const Text = makeFieldGenerator("text");
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
/**
 * @param {unknown} value
 */
export function getFieldDisplayName(value) {
    const str = String(value)
        .replace(R_ENDS_WITH_ID, "$1")
        .replace(R_LOWER_FOLLOWED_BY_UPPER, (_, a, b) => `${a} ${b.toLowerCase()}`)
        .replace(R_SPACE_OR_UNDERSCORE, " ")
        .trim();
    return str[0].toUpperCase() + str.slice(1);
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

// Default field values
export const DEFAULT_MONEY_FIELD_VALUES = {
    monetary: () => 0,
};
export const DEFAULT_RELATIONAL_FIELD_VALUES = {
    many2many: () => [],
    many2one: () => false,
    many2one_reference: () => false,
    one2many: () => [],
};
export const DEFAULT_SELECTION_FIELD_VALUES = {
    reference: () => false,
    selection: () => false,
};
export const DEFAULT_STANDARD_FIELD_VALUES = {
    binary: () => false,
    boolean: () => false,
    char: () => false,
    date: () => false,
    datetime: () => false,
    float: () => 0,
    html: () => false,
    number: () => 0,
    image: () => false,
    integer: () => 0,
    json: () => false,
    properties: () => false,
    properties_definition: () => false,
    text: () => false,
};
export const DEFAULT_FIELD_VALUES = {
    ...DEFAULT_MONEY_FIELD_VALUES,
    ...DEFAULT_RELATIONAL_FIELD_VALUES,
    ...DEFAULT_SELECTION_FIELD_VALUES,
    ...DEFAULT_STANDARD_FIELD_VALUES,
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
export const FIELD_SYMBOL = Symbol("field");
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

export const DEFAULT_FIELD_PROPERTIES = {
    readonly: false,
    required: false,
    searchable: true,
    sortable: true,
    store: true,
    groupable: true,
};

export const S_FIELD = Symbol("field");
export const S_SERVER_FIELD = Symbol("field");

export const Binary = makeFieldGenerator("binary");

export const Boolean = makeFieldGenerator("boolean");

export const Char = makeFieldGenerator("char");

export const Date = makeFieldGenerator("date");

export const Datetime = makeFieldGenerator("datetime");

export const Float = makeFieldGenerator("float", {
    aggregator: "sum",
});

export const Generic = makeFieldGenerator("generic");

export const Html = makeFieldGenerator("html");

export const Image = makeFieldGenerator("image");

export const Integer = makeFieldGenerator("integer", {
    aggregator: "sum",
});

export const Json = makeFieldGenerator("json");

export const Many2many = makeFieldGenerator("many2many", {
    requiredKeys: ["relation"],
});

export const Many2one = makeFieldGenerator("many2one", {
    requiredKeys: ["relation"],
});

export const Many2oneReference = makeFieldGenerator("many2one_reference", {
    requiredKeys: ["model_field", "relation"],
});

export const Monetary = makeFieldGenerator("monetary", {
    aggregator: "sum",
    requiredKeys: ["currency_field"],
});

export const One2many = makeFieldGenerator("one2many", {
    requiredKeys: ["relation"],
});

export const Properties = makeFieldGenerator("properties", {
    requiredKeys: ["definition_record", "definition_record_field"],
});

export const PropertiesDefinition = makeFieldGenerator("properties_definition");

export const Reference = makeFieldGenerator("reference", {
    requiredKeys: ["selection"],
});

export const Selection = makeFieldGenerator("selection", {
    requiredKeys: ["selection"],
});

export const Text = makeFieldGenerator("text");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
