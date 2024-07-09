import UrlJson from './url.json' with {type: 'json'};

let StartFunc = ({ inRowPk }) => {
    let LocalRowPk = inRowPk;
    console.log("LocalRowPk : ", LocalRowPk);
    if (LocalFuncForSingleTable({ inRowPk }) === false) {
        LocalFuncForAllTables({ inRowPk });
    };

    // window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}?inRowPk=${LocalRowPk}`;
};

const LocalFuncForSingleTable = ({ inRowPk }) => {
    let LocalRowPk = inRowPk;

    if (window.location.pathname.endsWith(`/${UrlJson.PresentUrl}`)) {
        window.location.href = `${UrlJson.RedirectToUrl}?inRowPk=${LocalRowPk}`;
        return true;
    };
};

const LocalFuncForAllTables = ({ inRowPk }) => {
    let LocalRowPk = inRowPk;

    window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}?inRowPk=${LocalRowPk}`;
};


export { StartFunc }