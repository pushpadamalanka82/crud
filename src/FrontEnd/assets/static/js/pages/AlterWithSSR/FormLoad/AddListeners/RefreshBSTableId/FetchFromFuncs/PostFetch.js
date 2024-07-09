// import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTableName = jVarGlobalTableName;

    let jVarLocalFetchUrl = `/bin/${jVarLocalTableName}/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    console.log("response",response);
    return await response;
};

export { StartFunc };

