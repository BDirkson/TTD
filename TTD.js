// Start
//  'git add -A' 
// git commit -m "details wijziging"

// function 1 for test 1 
const getYieldForPlant = (plant) => {
    return plant.yield
}

// function 2 for test 2 
const getYieldForCrop = (input) => {
    return input.crop.yield * input.numCrops;
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

const getTotalProfit = ({ crops }) => {
        const getProfitOfEachCrop = crops.map(crop => getProfitForCrop(crop));
        return getProfitOfEachCrop.reduce((accumulator, currentValue) => accumulator + currentValue);
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

// OPDRACHT6 - function - yield for plant
const getYieldForPlantNew = (crop, environmentFactors) => {
    return crop.yield * getEffectFactor(crop, environmentFactors)
}

// OPDRACHT9 - function - yield for crops
const getYieldForCropNew= (input, crop, environmentFactors) => {
    return input.crop.yield * input.numCrops * getEffectFactor(crop, environmentFactors);
}

// OPDRACHT10 - function = profit for crops = revenue - costs
// costs stay the same. Revenu depending on environment factors
const corn = {
    name: "corn",
    yield: 30,
    costs: 3,
    sale_price: 4,
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
          },
    } 
  };
  const environmentFactors = {
    sun: "high",
    wind: "medium"
  };
  const input = {
      crop: corn,
      num_crops: 10,
    };
const getProfitForCropNew = (input,crop, environmentFactors) => {
        const getProfCrop = (getRevenueForCrop(input) - getCostsForCrop(input)) * getEffectFactor(crop, environmentFactors);
        return getProfCrop;
}
console.log(getRevenueForCrop(input,corn, environmentFactors));
console.log(getCostsForCrop(input,corn, environmentFactors));
console.log(getProfitForCropNew(input, corn, environmentFactors));


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantNew,
    getYieldForCropNew,
    getProfitForCropNew,
};


