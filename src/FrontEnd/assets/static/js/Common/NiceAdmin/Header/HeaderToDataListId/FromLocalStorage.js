let StartFunc = () => {
    let jVarLocalFromLocalStorage = localStorage.getItem("AllMastersData");
    let jVarLocalParsedData = JSON.parse(jVarLocalFromLocalStorage);

    for (const [key, value] of Object.entries(jVarLocalParsedData)) {
        let jVarLocalHtmlId = `${key}DLId`;
        let jVarLocalHtmlControl = document.getElementById(jVarLocalHtmlId);

        console.log("jVarLocalHtmlControl : ", jVarLocalHtmlControl, jVarLocalParsedData);
    };
};

export { StartFunc };