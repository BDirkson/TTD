// Start
//  'git add -A' 
// git commit -m "details wijziging"

// function 1 for test 1 
const getYieldForPlant = (plant) => {
    return plant.yield
}

// function 2 for test 2 
const getYieldForCrop = (input) => {
    return getYieldForPlant(input.crop) * (input.numCrops);
}

// function 3 for test 3 

const getTotalYield = ({ crops }) => { 
const getYieldOfEachCrop = crops.map(crop => getYieldForCrop(crop));
return getYieldOfEachCrop.reduce((accumulator, currentValue) => accumulator + currentValue);
}

/*
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

// OPDRACHT10 - function = profit for crops = revenue - costs
// costs stay the same. Revenu depending on environment factors
const getCostsForCropFactors = (crop, input) => {
    return getCostsForPlant(crop) * (input.numCrops);
}
const getProfitForCropFactors = (crop, environmentFactors, input) => {
    return getYieldForCropsFactors (crop, environmentFactors, input) * crop.sale_price - getCostsForCropFactors (crop, input);
}
*/
module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    //getCostsForCrop,
   // getRevenueForCrop,
   // getProfitForCrop,
   // getTotalProfit,
   // getEffectFactor,
   // getYieldForPlantFactors,
   // getYieldForCropsFactors,
   // getProfitForCropFactors,
};


