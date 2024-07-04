import ConfigJson from '../../../../bin/Config.json' with {type: 'json'};
//import sideBarItemsAllTables from '../../../../KCode/ForFrontEndSingleTable/sideBarItemsAllTables.json' with {type: 'json'};
import sideBarItems from '../../../../KCode/ForAllTables/sideBarItems.json' with {type: 'json'};

import { StartFunc as mainTableSchema } from "../mainTableSchema.js";
import { StartFunc as mainTableColumnsConfig } from "../mainTableColumnsConfig.js";
import { StartFunc as foreignTableColumnsConfig } from "../foreignTableColumnsConfig.js";

import { StartFunc as getTableNames } from "../getTableNames.js";

import path from "path";
import _ from "lodash";

const StartFunc = ({ mode, inFilesArray }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let LocalSideBarItems = LocalFuncGenerateSideBarJson();
    console.log("LocalSideBarItems : ", LocalSideBarItems);
    let LocalFilteredSideBarItems = LocalFuncFilterSideBarItems({ inSidebarItems: sidebarItems });

    Object.keys(LocalFiles).forEach((filename) => {
        if (filename.includes('layouts/FrontEnd')) filename = `layouts/FrontEnd/${filename}`

        let LoopInsideFindSideBar = LocalFilteredSideBarItems.find(element => {
            return filename.startsWith(element.name);
        });

        if (LoopInsideFindSideBar === undefined === false) {
            let LoopInsidecolumnData = mainTableColumnsConfig({ inTableName: filename });
            let LoopInsideTableConfig = mainTableSchema({ inTableName: filename });

            let LocalInsideForeignTable = foreignTableColumnsConfig({ inTableName: LoopInsideFindSideBar.name });
            let LocalInsideSubTableName = "";

            if (LocalInsideForeignTable === undefined === false) {
                LocalInsideSubTableName = path.parse(LocalInsideForeignTable?.name)?.name;
            };

            // console.log("- ", filename, LocalInsideForeignTable);
            variables[filename + '.html'] = {
                web_title: "Mazer Admin Dashboard",
                filename: filename + '.html',
                sidebarItems,
                isDev: mode === 'development',
                DataPk: ConfigJson.jsonConfig.DataPk,
                tableName: LoopInsideFindSideBar.name,
                subTableName: LocalInsideSubTableName,
                columnData: LoopInsidecolumnData,
                tableConfig: LoopInsideTableConfig,
                foreignTablecolumnData: LocalInsideForeignTable?.fileData
            };
        };
    });

    return variables;
};

const LocalFuncGetTableNames = () => {

};

const LocalFuncGenerateSideBarJson = () => {
    let LocalTableNames = getTableNames();

    let LocalReturnArray = LocalTableNames.map(element => {
        return {
            "name": path.parse(element).name,
            "key": path.parse(element).name,
            "icon": "bi bi-database-add",
        };
    });

    return LocalReturnArray;
};

export { StartFunc };