import sampJson from './samp.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalHeadWise = sampJson;

    jVarLocalHeadWise.forEach(element => {
        let LoopInsideBatches = element.BatchDetails.toString().split(",");
        // console.log("LoopInsideBatches : ", LoopInsideBatches);
        LoopInsideBatches.forEach(LoopBatch => {
            let LoopInsideBatchDetails = LoopBatch.split("^");
            console.log("LoopInsideBatchDetails : ", LoopBatch, LoopInsideBatchDetails);
        });
    });

    return jVarLocalHeadWise;
};

StartFunc();