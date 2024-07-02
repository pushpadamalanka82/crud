// import { StartFunc as StartFuncGetFetch } from "./GetFetch/EntryFile.js";

const StartFunc = ({ inFirstRow }) => {
    // let jVarLocalData = await StartFuncGetFetch();
    let jVarLocalColumns = Object.keys(inFirstRow);

    let jVarLocalCollection = jVarLocalColumns.map(element => {
        return {
            field: element,
            title: element
        }
    });

    return jVarLocalCollection;
};

export { StartFunc };
