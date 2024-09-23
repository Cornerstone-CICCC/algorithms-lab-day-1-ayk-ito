// Exercise 5: Write a function named 'groupByCategory' that takes an array of product objects and returns an object where the keys are categories and the values are arrays of products in those categories.

function groupByCategory(products) {
  // your code here
  let group = {};
  let category = "";

  for (let i = 0; i < products.length; i++) {
    category = products[i].category;

    if (!group[category]) {
      group[category] = [];
    }

    group[category].push(products[i]);
  }

  return group;
}

console.log(
  groupByCategory([
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
  ])
); // { Fruit: [{ name: 'Apple', category: 'Fruit' }, { name: 'Banana', category: 'Fruit' }], Vegetable: [{ name: 'Carrot', category: 'Vegetable' }] }
