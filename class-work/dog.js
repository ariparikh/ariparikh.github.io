/*

Work with a partner to create a Dog constructor, which creates instances containing the following properties:

* name (string)
* species (string)
* foodsEaten (array)

And the following methods:

* eatSomething(food): takes the 'food' argument (passed as a string) and pushes it into the 'foodsEaten' array
* introduce: console.logs a string introducing itself, including its name, species, and what it has eaten.

Create 3 dogs total. Make sure all 3 dogs have all properties set and methods defined.

Exercise your dogs by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

//Notes from missing Class 06:

// read/write properties
//var dog = {
//	name: 'Lucky'
//};

// dot-notation
//dog.species = ' golden retriever';
//dog.species
// prints ' golden retreiever'

// bracket notation
//dog['foodsEaten'] = ['meat' , 'bones' , 'peanut butter' ];
//dog['foodsEaten'];
// prints [ 'meat', 'bones', 'peanut butter' ]


// object=-oriented programming (OOP)
//var dog = {
//  name: 'Lucky',
//  species: 'golden retriever',
//  foodsEaten: ['meat' , 'bones' , 'peanut butter' ],
//};


// object constructors ???
//var dog = eatSomething(food) {
//	this.foodsEaten = 'Lucky';
//	this.sayFoodsEaten = function () {
//		console.log(this.foodsEaten);
////	}	


// ATTEMPTING FROM CLASS: object constructors using this --- looks inefficient
//var Dog = function (name, species, food) {
  //this.name = name;
  //this.species = species;
  //this.food = food;
  //this.sayName = function() {
    //console.log('Hello, my name is ' + this.name);
  //}
  //this.saySpecies = function() {
    //console.log('I am a' +" " + this.species);
  //}
  //this.sayFoodEaten = function () {
    //console.log('I have eaten' + " " + this.food);
  //}
//}

//var lucky = new Dog('Lucky' , 'Golden Retriever', 'meat, pizza, cheese');
//lucky.sayName();
//lucky.saySpecies();
//lucky.sayFoodEaten();

//var daisy = new Dog('Daisy' , 'German Shephard', 'dog food');
//daisy.sayName();
//daisy.saySpecies();
//daisy.sayFoodEaten();

//var teddy = new Dog('Teddy' , 'Mini Yorkie', 'fish and rice');
//teddy.sayName();
//teddy.saySpecies();
//teddy.sayFoodEaten();

var Dog = function (name, species) {
  this.name = name;
  this.species = species;
  this.foodsEaten = []
  this.eatSomething = function (food) {
    this.foodsEaten.push(food);
  }
  this.introduction = function() {
    console.log('Hello, my name is ' + this.name + "." + ' I am a ' + this.species + "." + ' I have eaten ' + this.foodsEaten + ".");
  }
}

lucky = new Dog('Lucky' , 'Golden Retriever');
lucky.eatSomething('meat');
lucky.introduction();

daisy = new Dog('Daisy' , 'German Shephard');
daisy.eatSomething('fish');
daisy.introduction();

teddy = new Dog('Teddy' , 'Mini Yorkie');
teddy.eatSomething('bones and treats!');
teddy.introduction();


