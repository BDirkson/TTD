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


// OPDRACHT 1 - function - costs for a crop
const getCostsForCrop  = (input) => {
    const costsForOneCrop = input.crop.costs * input.num_crops;
    return costsForOneCrop;
} 

// OPDRACHT 2 - function - revenue for crop = sales price crop * number of plans of one crop * yield of one crop
const getRevenueForCrop = (input) => {
    const revForCrop = input.crop.sale_price * input.num_crops * input.crop.yield
    return revForCrop;
}
// OPDRACHT 3 - function - profit for a for crop = revenue crop - costs crop
const getProfitForCrop = (input) => {
    const getProfCrop = getRevenueForCrop(input) - getCostsForCrop(input);
    return getProfCrop;
}

//  OPDRACHT 4 - function - profit for multiple crops
const corn = {
    name: "corn",
    yield: 30,
    costs: 3,
    sale_price: 4,
  };
  const pumpkin = {
      name: "pumpkin",
      yield: 30,
      costs: 3,
      sale_price: 2,
    };
    const crops = [
        { crop: corn, num_crops: 10 },
        { crop: pumpkin, num_crops: 10 },
    ];
// corn: costs 10*3 = 30 rev. 30*4*10 = 1200 profit = 1170
// pumpkin: costs 10*3 = 30 rev. 30*2*10 = 600 profit = 570 
const getTotalProfit = ({ crops }) => {
        const getProfitOfEachCrop = crops.map(crop => getProfitForCrop(crop));
        return getProfitOfEachCrop.reduce((accumulator, currentValue) => accumulator + currentValue);
    }

console.log(getTotalProfit({crops})) 
 /*
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
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
   // getEffectFactor,
   // getYieldForPlantFactors,
   // getYieldForCropsFactors,
   // getProfitForCropFactors,
};


