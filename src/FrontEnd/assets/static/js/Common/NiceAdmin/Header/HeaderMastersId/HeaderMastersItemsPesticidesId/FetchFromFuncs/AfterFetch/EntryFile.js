let StartFunc = ({ inData }) => {
    localStorage.setItem("ItemsPesticidesDLId", JSON.stringify(inData));

    jFLocalStartFunc({ inDataAsArray: inData, inHtmlSelectId: "ItemsPesticidesDLId" })
};

let jFLocalStartFunc = ({ inDataAsArray, inHtmlSelectId }) => {
    let LocalinHtmlSelectId = inHtmlSelectId;
    let LocalDataAsArray = inDataAsArray;

    var selectElement = document.getElementById(LocalinHtmlSelectId);

    for (var i = 0; i < LocalDataAsArray.length; i++) {
        var option = document.createElement('option');
        option.value = LocalDataAsArray[i].CustomerName;
        option.textContent = LocalDataAsArray[i].CustomerName;
        selectElement.appendChild(option);
    };
};

export { StartFunc }