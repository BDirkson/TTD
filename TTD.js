// Start


// function 1 for test 1 
const getYieldForPlant = (plant) => {
    return plant.yield
}

// function 2 for test 2 
const getYieldForCrop = (crop, input) => {
    return getYieldForPlant(crop) * (input.numCrops);
}

// function 3 for test 3 

const getTotalYield = ({ crops }) => {
    yieldOfAllCrops = crops.map((crop) => {
        return getYieldForCrop (crop)})
        return yieldOfAllCrops.reduce((cropA, cropB) => cropA + cropB)
}

// OPDRACHT 1 - function - costs for one plant (of a crop)
const getCostsForPlant = (crop) => {
    return crop.costs
}


const getCostsForCrop = (crop, input) => {
    return getCostsForPlant(crop) * (input.numCrops);
}
/*
// add functionality to get costs for a crop
const getCostsForCrop  = (input) => {
    const costsForPlant = getCostsForPlant(input.crop);
    const costsForOneCrop = costsForPlant * input.num_crops;
    return costsForOneCrop;
} */

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
    return getYieldForCropsFactors (crop, environmentFactors, input) * crop.sale_price - getCostsForCrop(crop, input);
}
// OPDRACHT11 - function = total profit for multiple crops




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
console.log (getCostsForCrop(corn, input));
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


