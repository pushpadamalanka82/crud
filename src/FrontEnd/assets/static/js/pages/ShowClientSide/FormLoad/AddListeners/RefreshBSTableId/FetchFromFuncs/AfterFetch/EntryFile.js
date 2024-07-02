import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";

let StartFunc = (inData) => {
    // let jVarLocalWithAggValues = inData;
    BuildBsTable({ inData });
    // var $table = $('#table')

    // $table.bootstrapTable("load", jVarLocalWithAggValues);
};

export { StartFunc };