import { StartFunc as AfterFetch } from "./AfterFetch.js";

const StartFunc = async (row, $element, field) => {
    if (field === "KS-AlterButton") {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You want to edit this row?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ffcc00",
            cancelButtonColor: "grey",
            returnInputValueOnDismiss: true,
            confirmButtonText: "Yes, Alter it!",
            // returnFocus:false,
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            if ("id" in row) {
                AfterFetch({ inRowPk: row.id });
            };
            if ("pk" in row) {
                AfterFetch({ inRowPk: row.pk });
            };
        };
    };
};

export { StartFunc };
