let StartFunc1 = () => {
  var $table = $("#table");
  var JVarLocalArray = $.map(
    $table.bootstrapTable("getSelections"),
    function (row) {

      console.log(row);
      return row
    }
  );
  return JVarLocalArray;
};

const StartFunc = () => {
  return new Promise((resolve) => {
    let jVarLocalformFile = document.getElementById('formFile');

    const file = jVarLocalformFile.files[0];

    const reader = new FileReader()
    reader.onloadend = () => resolve(JSON.parse(reader.result))
    reader.readAsText(file);
  });
};

const StartFunc2 = () => {
  let jVarLocalformFile = document.getElementById('formFile');

  const file = jVarLocalformFile.files[0];

  const reader = new FileReader();

  reader.onload = () => {
    const json = JSON.parse(reader.result);
    return json;
    // showInTable({ inData: json });
  };

  reader.readAsText(file);
};




export { StartFunc };