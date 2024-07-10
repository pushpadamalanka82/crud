import { StartFunc as showInTable } from "./showInTable.js";
import { StartFunc as fromTxtFile } from "./ShowInTable/fromTxtFile.js";

let StartFunc = (event) => {
    const file = event.target.files[0];
    // console.log("file : ", file);
    const reader = new FileReader();

    reader.onload = () => {
        if (file.type === "text/plain") {
            fromTxtFile({ inData: reader.result });
        };

        if (file.type === "application/json") {
            const json = JSON.parse(reader.result);
            showInTable({ inData: json });
        };
    };

    reader.readAsText(file);
};

export { StartFunc };