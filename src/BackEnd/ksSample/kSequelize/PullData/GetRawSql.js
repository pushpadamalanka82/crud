import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async ({ inId }) => {
    try {
        const LocalReturnData = {};
        const LocalTableData = await StartFuncInitializeSequelizeWithTableName();
        const users = await LocalTableData.findAll();

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = users;

        return await LocalReturnData;
    } catch (error) {
        return await {
            KTF: false,
            KReason: { ErrorFrom: process.cwd(), sequelizeError: error },
        };
    };
};

export { StartFunc };