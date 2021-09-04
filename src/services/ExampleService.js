// Add bussiness logic here

const example = require('../models/Example')
function getInformation() {
    let data = example.getInformation();
    if(data.id == 1) return data;
}

module.exports = {
    getInformation: getInformation
}