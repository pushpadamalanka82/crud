import AttributesJson from './Attributes.json' with { type: "json" };

const StartFunc = () => {
    console.log("AttributesJson",AttributesJson);
    var $table = $('#table');
    $table.attr(AttributesJson.tableAttributes);
};

export { StartFunc };