const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let i = 0; i < recipes.length; i ++) {
    if (ingredientCheck(bakeryA, recipes[i]) && ingredientCheck(bakeryB, recipes[i])) {
      return recipes[i]["name"];
    }
  }
}

/*
const panIngredientCheck = function(bakery, book) {
  let weHave = [];
  for (let i = 0; i < bakery.length; i++) {
    // i will be the index of a single bakery's ingredient
    for (let j = 0; j < book.length; j++) {
      // j will be the index of an object from the recipe book
      for (let x = 0; x < book[j].ingredients.length; x++) {
        // x will be the index of a single ingredient in the recipe
        if (book[j].ingredients[x] === bakery[i]) {
          weHave.push(bakery[i]);
        }
      }
    }
  }
  return weHave;
} // this function checks ALL recipes
*/

const ingredientCheck = function(bakery, recipe) {
  let weHave = [];
  let thereIs = false;
  for (let i = 0; i < bakery.length; i++) {
    // i will be the index of a single bakery's ingredient
    for (let j = 0; j < recipe.ingredients.length; j++) {
      // j will be the index of an object from the recipe book
      if (recipe.ingredients[j] === bakery[i]) {
        weHave.push(bakery[i]);
        thereIs = true;
      }
    }
  }
  return thereIs;
} //trying to get this one to just check ONE recipe

/*
bakeries are simple arrays, whereas recipes are arrays of objects
if ingredientCheck returns a value, do some stuff
*/

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes) + " =? Persian Cheesecake");

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes) + " =? Nima's Famous Dijon Raisins");