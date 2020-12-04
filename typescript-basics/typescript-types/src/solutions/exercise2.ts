// SOLUTION

enum BunVariation {
  SideLoading = "SideLoading",
  HoagieBun = "HoagieBun",
  SandwichBread = "SandwichBread"
}

enum SandwichMeat {
  Frankfurter = "Frankfurter",
  Beefsteak = "Beefsteak",
  Bacon = "Bacon"
}

interface HotDog {
  bun: BunVariation.SideLoading;
  filling: SandwichMeat.Frankfurter;
}

interface Cheesesteak {
  bun: BunVariation.HoagieBun;
  filling: SandwichMeat.Beefsteak;
}

interface BLT {
  bun: BunVariation.SandwichBread;
  filling: SandwichMeat.Bacon;
}

type Sandwich = HotDog | Cheesesteak | BLT;

export const sandwiches: Sandwich[] = [
  {
    bun: BunVariation.SideLoading,
    filling: SandwichMeat.Frankfurter
  },
  {
    bun: BunVariation.HoagieBun,
    filling: SandwichMeat.Beefsteak
  },
  {
    bun: BunVariation.SandwichBread,
    filling: SandwichMeat.Bacon
  }
];

// Part 3

export enum BunVariationPart3 {
  SideLoading,
  HoagieBun
}

export enum SandwichMeatPart3 {
  Frankfurter,
  Beefsteak
}

interface HotDogPart3 {
  bun: BunVariationPart3.SideLoading;
  filling: SandwichMeatPart3.Frankfurter;
}

interface CheesesteakPart3 {
  bun: BunVariationPart3.HoagieBun;
  filling: SandwichMeatPart3.Beefsteak;
}

type SandwichPart3 = HotDogPart3 | CheesesteakPart3;

const sandwichArray: SandwichPart3[] = [
  {
    bun: BunVariationPart3.SideLoading,
    filling: SandwichMeatPart3.Frankfurter
  },
  {
    bun: BunVariationPart3.HoagieBun,
    filling: SandwichMeatPart3.Beefsteak
  }
];

interface FindBySandwichType {
  sandwichBunType: BunVariationPart3;
  sandwichFillingType: SandwichMeatPart3;
}
const findBySandwichType = ({
  sandwichBunType,
  sandwichFillingType
}: FindBySandwichType): SandwichPart3[] => {
  return sandwichArray.filter(
    (sandwich) =>
      sandwich.bun === sandwichBunType &&
      sandwich.filling === sandwichFillingType
  );
};

export const hotDogs = () => {
  // get hot dogs
  return findBySandwichType({
    sandwichBunType: BunVariationPart3.SideLoading,
    sandwichFillingType: SandwichMeatPart3.Frankfurter
  });
};
