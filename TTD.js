// Start
// test test test
// Gebruik git add -A - Gebruik git commit -m "boodschapje" - Voeg de remote toe aan je git repository - Gebruik git push origin master

// functie 1 for test 1 - parameter is plant. Object 'corn' goes in functie, returning the yield of object.
const getYieldForPlant = (plant) => {
    return plant.yield
}
 
// functie 2 for test 2 - parameter is input. Function getYieldForPlant must return the yield of the corn * num. of crops.

const getYieldForCrop = (input) => {
    return getYieldForPlant (input.crop) * input.numCrops;
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop
    //getTotalYield
};