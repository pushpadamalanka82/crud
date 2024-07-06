import { StartFunc as StartFuncFuncToRun } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("AllMastersHeaderId");
    console.log("jVarLocalRefreshBSTableId : ", jVarLocalRefreshBSTableId);
    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncFuncToRun);
    };
};

StartFunc();