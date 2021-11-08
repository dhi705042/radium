function printDate(date){
console.log("todays date is " + date);
}

function printMonth(month){
    console.log("todays month is " + month);
}

function getBatchInfo(batchinfo){
    console.log(batchinfo);
}

module.exports.date = printDate;
module.exports.month = printMonth;
module.exports.batchInfo = getBatchInfo;