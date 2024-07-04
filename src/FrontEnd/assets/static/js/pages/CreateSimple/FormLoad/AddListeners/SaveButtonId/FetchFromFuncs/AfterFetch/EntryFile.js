import UrlJson from './url.json' with {type: 'json'};

let StartFunc = () => {
    LocalFuncForSingleTable();
    LocalFuncForAllTables();
};

const LocalFuncForSingleTable = () => {
    if (window.location.pathname.endsWith(`//${UrlJson.PresentUrl}`)) {
        window.location.href = `${UrlJson.RedirectToUrl}`;
    };
};

const LocalFuncForAllTables = () => {
    window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}`;
};

export { StartFunc };