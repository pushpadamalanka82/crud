import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');
  
    $table.bootstrapTable({
        data: [],
        onClickRow
    });
};

export { StartFunc };
