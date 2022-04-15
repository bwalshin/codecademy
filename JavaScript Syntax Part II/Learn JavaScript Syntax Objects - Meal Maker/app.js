const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get courses() {
    //return Object.entries(this._courses);
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    this._courses.appetizers.push(appetizer);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(main) {
    this._courses.mains.push(main);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert) {
    this._courses.desserts.push(dessert);
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    //this._courses[courseName].push(dish);
    return this._courses[courseName].push(dish); // Using setters
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const rnd = Math.floor(Math.random() * dishes.length);
    return dishes[rnd];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const total = appetizer["price"] + dessert["price"] + main["price"];
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal will consist of ${appetizer.name} for an apptizer, ${main.name} as the entree, and ${dessert.name} for dessert. The total price for this meal will be ${totalPrice}`;
  },
};

menu.addDishToCourse('appetizers', 'Stick', 10);
menu.addDishToCourse('appetizers', 'Chicken', 5);
menu.addDishToCourse('appetizers', 'Fries', 1.25);

menu.addDishToCourse('mains', 'Salad', 4.5);
menu.addDishToCourse('mains', 'Soupe', 6);
menu.addDishToCourse('mains', 'Salmon', 25);

menu.addDishToCourse('desserts', 'Cake', 3);
menu.addDishToCourse('desserts', 'Ice-Cream', 5);
menu.addDishToCourse('desserts', 'Hot Chocolate', 10);

let meal = menu.generateRandomMeal();

console.log(meal);