// Start
// test test test
// Gebruik git add -A - Gebruik git commit -m "boodschapje" - Voeg de remote toe aan je git repository - Gebruik git push origin master

// function 1 for test 1 - parameter is plant. Object 'corn' goes in functie, returning the yield of object.
const getYieldForPlant = (plant) => {
    return plant.yield
}

// function 2 for test 2 - parameter is input. Function getYieldForPlant must returns the yield of the corn.
const getYieldForCrop = (input) => {
    return getYieldForPlant(input.crop) * (input.numCrops);
}

// function 3 for test 3 - Calculate total yield with multiple crops
const getTotalYield = () => {
    
}




module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
};