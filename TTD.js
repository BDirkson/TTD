// Start
// test test test
// Gebruik git add -A - Gebruik git commit -m "boodschapje" - Voeg de remote toe aan je git repository - Gebruik git push origin master

// functie 1 for test 1 - parameter is plant
const getYieldForPlant = (plant) => {
    return plant.yield
}
 
// functie 2 for test 2 
const getYieldForCrop = (input) => {
    getYieldForPlant(input.crop) * input.num_crops;
}



module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    //getTotalYield
};