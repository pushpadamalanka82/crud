import { StartFunc as FromLocalStorage } from "./FromLocalStorage.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("HeaderToDataListId");
    console.log("jVarLocalRefreshBSTableId : ", jVarLocalRefreshBSTableId);
    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", FromLocalStorage);
    };
};

StartFunc();