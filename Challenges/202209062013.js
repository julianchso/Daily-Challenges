// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  let numberOfCakes = 99;
  let firstTime = true;
  for (ingredient in recipe) {
    if (!(ingredient in available)) {
      console.log(0);
      return 0;
    }

    if (ingredient in available) {
      console.log(ingredient);
      number = Math.floor(available[ingredient] / recipe[ingredient]);
      if (firstTime) {
        numberOfCakes = number;
        firstTime = false;
      }
      if (number < numberOfCakes) {
        numberOfCakes = number;
      }
    }
  }
  console.log(numberOfCakes);
  return numberOfCakes;
}

cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);

cakes(
  { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 }
);
