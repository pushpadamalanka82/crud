const StartFunc = () => {
  var $table = $('#table');
  const jVarLocalDataFromBootStrapTable = $table.bootstrapTable('getData');

  return jVarLocalDataFromBootStrapTable;
};

const StartFunc1 = () => {
  return new Promise((resolve) => {
    let jVarLocalformFile = document.getElementById('formFile');

    const file = jVarLocalformFile.files[0];

    const reader = new FileReader()
    reader.onloadend = () => resolve(JSON.parse(reader.result))
    reader.readAsText(file);
  });
};

export { StartFunc };