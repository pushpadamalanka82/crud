import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";

const StartFunc = ({ inData }) => {
    StartFuncTableTag();
    jFLocalInitialize({ inData }).then();
};

const jFLocalInitialize = ({ inData }) => {
    var $table = $('#table');
    let jVarLocalData = StartFuncForColumns({ inFirstRow: inData[0] });

    $table.bootstrapTable({
        data: inData,
        columns: jVarLocalData
    });
};

export { StartFunc };
