import { StartFunc as StartFuncGetFetch } from "./GetFetch/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalData = await StartFuncGetFetch();
    let jVarLocalColumns = Object.keys(jVarLocalData);

    let jVarLocalCollection = jVarLocalColumns.map(element => {
        return {
            field: element,
            title: element,
            HtmlTags: jVarLocalData[element].HtmlTags

        }
    });

    return jVarLocalCollection;
};

export { StartFunc };
