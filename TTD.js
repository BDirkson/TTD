// Start
// test test test
// Gebruik git add -A - Gebruik git commit -m "boodschapje" - Voeg de remote toe aan je git repository - Gebruik git push origin master

// function 1 for test 1 - parameter is plant. Object 'corn' goes in functie, returning the yield of object.
const getYieldForPlant = (plant) => {
    return plant.yield
}

// function 2 for test 2 - Parameter is input. Parameter for getYieldForPlan is input.crop (=corn).
//  Function getYieldForPlant must returns the yield of the corn * the nummer of crops
const getYieldForCrop = (input) => {
    return getYieldForPlant(input.crop) * (input.numCrops);
}

// function 3 for test 3 - Calculate total yield multiple crops. Parameter is object. Map to loop through objects. 
// Get the crop type out of the loop so to speak.
// Use getYieldForCrop to get total yield of one crop type. Reduce to accumalate yields of all the crops.
const getTotalYield = ({ crops }) => {
    yieldOfAllCrops = crops.map((crop) => {
        return getYieldForCrop (crop)})
        return yieldOfAllCrops.reduce((cropA, cropB) => cropA + cropB)
}

// OPDRACHT 1 - function - costs for one plant (of a crop)
const getCostsForPlant = (plant) => {
    return plant.costs
}
// add functionality to get costs for a crop

const getCostsForCrop  = (input) => {
    const costsForPlant = getCostsForPlant(input.crop);
    const costsForOneCrop = costsForPlant * input.num_crops;
    return costsForOneCrop;
}

// OPDRACHT 2 - function - revenue for a for plant = sales price * yield of one plant

const getRevenueForPlant  = (plant) => {
    return plant.sale_price * plant.yield;
}

// add functionality to get rev for a crop
const getRevenueForCrop = (input) => {
    const revForPlant = getRevenueForPlant(input.crop);
    const revForOneCrop = revForPlant * input.num_crops;
    return revForOneCrop;
}

// OPDRACHT 3 - function - profit for a for a plant = revenue - costs
const getProfitForPlant = (plant) => {
    return getRevenueForPlant(plant) - getCostsForPlant(plant);
}
// add functionality to get profit for crop

const getProfitForCrop = (input) => {
    const profForPlant = getProfitForPlant(input.crop);
    const profForOneCrop = profForPlant * input.num_crops;
    return profForOneCrop;
}
//  OPDRACHT 4 - function - profit for multiple crops
// add functionality to get profit for multiple crops
const getTotalProfit= ({ crops }) => {
    profitOfAllCrops = crops.map((crop) => {
        return getProfitForCrop (crop)})
        return profitOfAllCrops.reduce((cropA, cropB) => cropA + cropB)
    }

// OPDRACHT6 - function - yield with external factors - start with plant - 
// add new functionaliyt to switch between effect of external factors
const getEffectFactor = (crop, environmentFactors) =>{
    let externalFactor;
    switch (environmentFactors.sun){
        case "low":
            externalFactor = (crop.yield/100) * (100 + crop.factors.sun.low);
            break;
        case "medium":
            externalFactor = (crop.yield/100) * (100 + crop.factors.sun.medium);
            break;
        case "high":
            externalFactor = (crop.yield/100) * (100 + crop.factors.sun.high);
    };
    return externalFactor;
}
const getYieldForPlantFactors = (plant, environmentFactors) => {
    return getEffectFactor(plant, environmentFactors);
}


const corn = {
    name: "corn",
    yield: 30,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  }
const environmentFactors = {
    sun: "high"
};
console.log (getYieldForPlantFactors(corn,environmentFactors));
console.log (getEffectFactor(corn,environmentFactors));



// put effect in yield for plan function

//const getYieldForCropFactors = (input) => {
//    return getYieldForPlant(input.crop) * (input.numCrops);
//}



module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForPlant,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForPlant,
    getProfitForCrop,
    getTotalProfit,
    getEffectFactor,
    getYieldForPlantFactors,
    //getYieldForCropFactors
};


