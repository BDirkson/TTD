const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostsForPlant,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForPlant,
    //getProfitForCrop  
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
describe("getCostsForPlant", () => {
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
  describe("getRevnueForPlant", () => {
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
  describe("getprofitForPlant", () => {
    const corn = {
      name: "corn",
      yield: 30,
      costs: 3,
      sale_price: 2,
    };test("Get profit for plant", () => {
        expect(getProfitForPlant(corn)).toBe(600);
    });
});