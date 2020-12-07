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
const getCostsForPlant = (crop) => {
    return crop.costs
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
const getProfitForPlant = (crop) => {
    return getRevenueForPlant(crop) - getCostsForPlant(crop);
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
function getEffectFactor(crop, environmentFactors) {
    let externalFactor = 1;
    switch (environmentFactors.sun) {
        case "low":
            externalFactor = externalFactor * (100 + crop.factors.sun.low) / 100;
            break;
        case "medium":
            externalFactor = externalFactor * (100 + crop.factors.sum.medium) / 100;
            break;
        case "high":
            externalFactor = externalFactor * (100 + crop.factors.sun.high) / 100;
    }
    switch (environmentFactors.wind) {
        case "low":
            externalFactor = externalFactor * (100 + crop.factors.wind.low) / 100;
            break;
        case "medium":
            externalFactor = externalFactor * (100 + crop.factors.wind.medium) / 100;
            break;
        case "high":
            externalFactor = externalFactor * (100 + crop.factors.wind.high) / 100;
    }
    return externalFactor;
}

// OPDRACHT6 - function - yield for one plant
const getYieldForPlantFactors = (crop, environmentFactors) => {
    return crop.yield * getEffectFactor(crop, environmentFactors)
}

// OPDRACHT9 - function - yield for crops

const getYieldForCropsFactors = (crop, environmentFactors, input) => {
    return getEffectFactor(crop, environmentFactors) * crop.yield * input.numCrops;
}

// OPDRACHT10 - function = profit for crops - profit = revenue - costs
// costs stay the same. Revenu depending on environment factors
const getProfitForCropFactors = (crop, environmentFactors, input) => {
    return getYieldForCropsFactors (crop, environmentFactors, input) * crop.sale_price - getCostsForPlant(crop)*input.numCrops;
}


const corn = {
    name: "corn",
    yield: 30,
    costs: 3,
    sale_price: 2,
    factors: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
      wind: {
        low: 50,
        medium: 0,
        high: -50 
      }
    },
}
const environmentFactors = {
    sun: "high", 
    wind: "medium"
}
const input = {
    crop: corn,
    numCrops: 10,
}; 

console.log (getCostsForPlant(corn));
console.log (getEffectFactor(corn, environmentFactors))
console.log (getYieldForPlantFactors(corn,environmentFactors));
console.log (getYieldForCropsFactors(corn, environmentFactors,input))
console.log (getProfitForCropFactors(corn, environmentFactors,input));

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
    getYieldForCropsFactors,
    getProfitForCropFactors
};


