import UrlJson from './url.json' with {type: 'json'};

let StartFunc = () => {
    //  window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}`;
    if (LocalFuncForSingleTable() === false) {
        LocalFuncForAllTables();
    };

};
const LocalFuncForSingleTable = () => {
    if (window.location.pathname.endsWith(`/${UrlJson.PresentUrl}`)) {
        let jVarLocalHref = `${UrlJson.RedirectToUrl}`;

        window.location.href = jVarLocalHref;

        return true;
    };
};

const LocalFuncForAllTables = () => {
    let LocalRowPk = inRowPk;

    window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}`;
};

export { StartFunc }