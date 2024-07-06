import fs from "fs";
import dirTree from "directory-tree";
import ConfigJson from '../../../../../bin/Config.json' assert {type: 'json'};
import path from "path";

let StartFunc = () => {
    let LocalForeignTables = LocalFuncReturnForeignTables();

    console.log("LocalForeignTables:", LocalForeignTables);
    let LocalReturnData = { KTF: false }
    LocalReturnData.JsonData = {};

    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;

    let filenames = fs.readdirSync(LocalDataPath);

    filenames.forEach((file) => {
        if (fs.lstatSync(`${LocalDataPath}/${file}`).isFile()) {
            if (LocalForeignTables.includes(path.parse(file).name)) {
                const data = fs.readFileSync(`${LocalDataPath}/${file}`, { encoding: 'utf8' });
                let JsonParseData = JSON.parse(data);

                LocalReturnData.JsonData[path.parse(file).name] = JsonParseData;
                console.log("File:", JsonParseData);
            };
        };
    });

    LocalReturnData.KTF = true;

    return LocalReturnData;
};

const LocalFuncReadFileData = ({ inFilesAsArrayData }) => {
    let LocalFilesAsArrayData = inFilesAsArrayData;
    let LocalReturnData = { KTF: false }
    let LocalArray = LocalFilesAsArrayData.map(LoopFile => {
        const data = fs.readFileSync(LoopFile.path, { encoding: 'utf8', flag: 'r' });
        let JsonParseData = JSON.parse(data);

        let LoopInsideObject = {};
        LoopInsideObject.FileName = LoopFile.name;
        LoopInsideObject.FileData = JsonParseData;
        return LoopInsideObject;

    });
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalArray
    return LocalReturnData;
};

let LocalFuncReturnForeignTables = () => {
    let LoopInsideArray = [];

    ConfigJson.jsonConfig.tableAndColumns.children.forEach(element => {
        for (const [key, value] of Object.entries(element.fileData)) {
            if ("references" in value) {
                LoopInsideArray.push(value.references.model);
            };
        };
    });

    return LoopInsideArray;
};

export { StartFunc };
