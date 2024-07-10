import { StartFunc as SubTableFooterSaveButtonId } from "./SubTableFooterSaveButtonId/EntryFile.js";

const StartFunc = () => {
    SubTableFooterSaveButtonId();
    jFLocalSetFocusToFirstInput();
};

const jFLocalSetFocusToFirstInput = () => {
    let jVarLocalTableName = jVarGlobalSubTableTagId;
    let jVarLocalHtml = document.getElementById(jVarLocalTableName);
    let jVarLocalTableFooter = jVarLocalHtml.querySelector("tfoot input");
    jVarLocalTableFooter.focus();

};

export { StartFunc };