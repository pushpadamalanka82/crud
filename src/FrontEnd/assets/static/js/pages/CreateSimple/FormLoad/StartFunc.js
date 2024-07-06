import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    jFLocalFillDataLists();
};

const jFLocalFillDataLists = () => {
    let jVarLocalHeaderToDataListId = document.getElementById('HeaderToDataListId');
    jVarLocalHeaderToDataListId.click();
};

export { StartFunc };
