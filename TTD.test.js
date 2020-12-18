const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantFactors,
    getYieldForCropsFactors,
    getProfitForCropFactors,
} = require("./TTD");

// test1
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});
// test2

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

// test 3
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });
})

// OPDRACHT 1 - test
describe("getCostsForCrop", () => {
    const corn = {
      name: "corn",
      yield: 30,
      costs: 3,
    };
    const input = {
        crop: corn,
        num_crops: 10,
      };
    test("Get costs for one crop", () => {
      expect(getCostsForCrop(input)).toBe(30);
    });
  });
 
  // OPDRACHT 2 - test
  describe("getRevenueForCrop", () => {
      const corn = {
        name: "corn",
        yield: 30,
        costs: 3,
        sale_price: 2,
      };
      const input = {
        crop: corn,
        num_crops: 10,
      };
    test("Get revenue for one crop", () => {
        expect(getRevenueForCrop(input)).toBe(600);
    });
  });

  // OPDRACHT3 - test
  describe("getProfitForCrop", () => {
    const corn = {
      name: "corn",
      yield: 30,
      costs: 3,
      sale_price: 2,
    };
    const input = {
        crop: corn,
        num_crops: 10,
      };
    test("Get profit for one crop", () => {
        expect(getProfitForCrop(input)).toBe(570);
    });
});

//  OPDRACHT 4 - test
describe("Get total profit", () => {
    const corn = {
      name: "corn",
      yield: 30,
      costs: 3,
      sale_price: 2,
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

    test("Get profit for multiple crops", () => {
        expect(getTotalProfit({ crops })).toBe(1140);
    });
});

//  OPDRACHT 6 - test
describe("getYieldForPlantFactors", () => {
        const corn = {
            name: "corn",
            yield: 30,
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
            },
          }
        const environmentFactors = {
            sun: "high",
          };
        const input = {
            crop: corn,
            numCrops: 10,
        }; 
    test("Get yield for plant with factor sun is high", () => {
            expect(getYieldForPlantFactors(corn, environmentFactors)).toBe(45);
    });
});
// Opdracht 6 - test2 
describe("getYieldForPlantFactors", () => {
    const corn = {
        name: "corn",
        yield: 30,
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
        },
      }
    const environmentFactors = {
        sun: "high",
        wind: "high",
      };
    const input = {
        crop: corn,
        numCrops: 10,
    }; 
test("Get yield for plant with factor sun is high, wind high", () => {
        expect(getYieldForPlantFactors(corn, environmentFactors)).toBe(22.5);
});
});

// Opdracht 9 - test 
describe("getYieldForCropsFactors", () => {
    const corn = {
        name: "corn",
        yield: 30,
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
        },
      }
    const environmentFactors = {
        sun: "low",
        wind: "medium",
      };
    const input = {
        crop: corn,
        numCrops: 10,
    }; 
test("Get yield for crops with factor sun is low, wind medium", () => {
        expect(getYieldForCropsFactors(corn, environmentFactors, input)).toBe(150);
});
});

// Opdracht 9 - test 
describe("getYieldForCropsFactors", () => {
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
          },
        },
      }
    const environmentFactors = {
        sun: "high",
        wind: "medium",
      };
    const input = {
        crop: corn,
        numCrops: 10,
    }; 
test("Get yield for crops with factor sun is high, wind medium", () => {
        expect(getYieldForCropsFactors(corn, environmentFactors, input)).toBe(450);
});
});

// Opdracht 10 - test 
describe("getProfitForCropFactors", () => {
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
          },
        },
      }
    const environmentFactors = {
        sun: "high",
        wind: "medium",
      };
    const input = {
        crop: corn,
        numCrops: 10,
    }; 
test("Get yield for crops with factor sun is high, wind medium", () => {
        expect(getProfitForCropFactors(corn, environmentFactors, input)).toBe(870);
});
});
