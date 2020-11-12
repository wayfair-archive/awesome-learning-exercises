import {
  sandwiches,
  BunVariationPart3,
  SandwichMeatPart3,
  hotDogs
} from "../exercise2";

export enum BunVariation {
  SideLoading = "SideLoading",
  HoagieBun = "HoagieBun",
  SandwichBread = "SandwichBread"
}

export enum SandwichMeat {
  Frankfurter = "Frankfurter",
  Beefsteak = "Beefsteak",
  Bacon = "Bacon"
}

enum SandwichTypes {
  Cheesesteak,
  BLT,
  HotDog
}

const getSandwichTypeByBun = (sandwichBun: BunVariation): SandwichTypes => {
  switch (sandwichBun) {
    case BunVariation.HoagieBun:
      return SandwichTypes.Cheesesteak;
    case BunVariation.SandwichBread:
      return SandwichTypes.BLT;
    case BunVariation.SideLoading:
      return SandwichTypes.HotDog;
  }
};

const getSandwichTypeByFilling = (
  sandwichFilling: SandwichMeat
): SandwichTypes => {
  switch (sandwichFilling) {
    case SandwichMeat.Beefsteak:
      return SandwichTypes.Cheesesteak;
    case SandwichMeat.Bacon:
      return SandwichTypes.BLT;
    case SandwichMeat.Frankfurter:
      return SandwichTypes.HotDog;
  }
};

test("Part 1 & 2: Each item in the array is of sandwich type", () => {
  // there should be three items in the array
  expect(sandwiches.length).toBe(3);

  // check the type of each of the sandwiches
  sandwiches.map((sandwich) => {
    const bunType = getSandwichTypeByBun(sandwich.bun);
    const fillingType = getSandwichTypeByFilling(sandwich.filling);
    expect(bunType).toBe(fillingType);
  });
});

test("Part 3: We can filter by hot dogs", () => {
  const hotDogArray = [
    {
      bun: BunVariationPart3.SideLoading,
      filling: SandwichMeatPart3.Frankfurter
    }
  ];

  expect(hotDogs()).toEqual(hotDogArray);
});
