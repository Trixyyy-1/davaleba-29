// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.

// class Person {

//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     introduce() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
//   }

// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     static isAdult(age) {
//       return age >= 18;
//     }
//   }

//   let person1 = new Person("vakho", 19);

//   console.log(Person.isAdult(person1.age));

// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!

// class Animal {
//     constructor(name) {
//       this.name = name;
//     }

//     speak() {
//       console.log(this.name + " makes a sound.");
//     }
//   }

//   class Dog extends Animal {

//     speak() {
//       console.log(this.name + " says: Woof!");
//     }
//   }

// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში. დაამატე მეთოდი render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.

// class Button {
//     constructor(label, color) {
//       this.label = label;
//       this.color = color;
//     }

//     render(containerId) {
//       const container = document.getElementById(containerId);
//       const button = document.createElement('button');
//       button.textContent = this.label;
//       button.style.backgroundColor = this.color;
//       container.appendChild(button);
//     }
//   }

//   const button1 = new Button('Click Me', 'blue');
//   const button2 = new Button('Submit', 'green');

//   button1.render('button-container');
//   button2.render('button-container');

// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.

// class Vehicle {
//     constructor(brand, speed) {
//       this.brand = brand;
//       this.speed = speed;
//     }

//     describe() {
//       return `This is a ${this.brand} vehicle that moves at ${this.speed} km/h.`;
//     }
//   }

//   class Car extends Vehicle {
//     constructor(brand, speed, model) {
//       super(brand, speed);
//       this.model = model;
//     }

//     describe() {
//       return `${super.describe()} It is a ${this.model} model.`;
//     }
//   }

//   const car1 = new Car('Toyota', 180, 'Corolla');
//   const car2 = new Car('Honda', 200, 'Civic');
//   const car3 = new Car('BMW', 250, 'M3');

//   console.log(car1.describe());
//   console.log(car2.describe());
//   console.log(car3.describe());

// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.

// class Product {
//     constructor(name, price, category) {
//       this.name = name;
//       this.price = price;
//       this.category = category;
//     }

//     static filterByCategory(products, category) {
//       return products.filter(product => product.category === category);
//     }
//   }

//   const product1 = new Product('Laptop', 1000, 'electronics');
//   const product2 = new Product('Shirt', 30, 'clothing');
//   const product3 = new Product('Smartphone', 700, 'electronics');
//   const product4 = new Product('Pants', 40, 'clothing');
//   const product5 = new Product('Headphones', 150, 'electronics');

//   const products = [product1, product2, product3, product4, product5];

//   const electronicsProducts = Product.filterByCategory(products, 'electronics');

//   console.log(electronicsProducts);

// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.

// class Event {
//     constructor(name, date) {
//       this.name = name;
//       this.date = new Date(date);
//     }

//     isUpcoming() {
//       const today = new Date();
//       return this.date > today;
//     }
//   }

//   const event1 = new Event('Concert', '2024-12-30');
//   const event2 = new Event('Conference', '2023-12-29');
//   const event3 = new Event('Workshop', '2025-01-15');
//   const event4 = new Event('Festival', '2022-06-10');

//   console.log(`${event1.name} is upcoming: ${event1.isUpcoming()}`);
//   console.log(`${event2.name} is upcoming: ${event2.isUpcoming()}`);
//   console.log(`${event3.name} is upcoming: ${event3.isUpcoming()}`);
//   console.log(`${event4.name} is upcoming: ${event4.isUpcoming()}`);

// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.

// class Character {
//     constructor(name, health) {
//       this.name = name;
//       this.health = health;
//     }
//   }

//   class Warrior extends Character {
//     constructor(name, health) {
//       super(name, health);
//     }

//     attack() {
//       this.health -= 10;
//       console.log(`${this.name} attacked! Health is now ${this.health}`);
//     }
//   }

//   const warrior1 = new Warrior('Thor', 100);
//   const warrior2 = new Warrior('Loki', 80);

//   warrior1.attack();
//   warrior2.attack();

// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს, რომლებსაც შესაბამისი პრიორიტეტი აქვთ.

// class Task {
//     constructor(title, priority) {
//       this.title = title;
//       this.completed = false;
//       this.priority = priority;
//     }

//     toggleCompleted() {
//       this.completed = !this.completed;
//       console.log(`${this.title} is now ${this.completed ? 'completed' : 'not completed'}.`);
//     }

//     static filterByPriority(tasks, priority) {
//       return tasks.filter(task => task.priority === priority);
//     }
//   }

//   const task1 = new Task('Finish homework', 'high');
//   const task2 = new Task('Clean the house', 'medium');
//   const task3 = new Task('Buy groceries', 'low');
//   const task4 = new Task('Prepare presentation', 'high');

//   task1.toggleCompleted();
//   task2.toggleCompleted();

//   const tasks = [task1, task2, task3, task4];

//   const highPriorityTasks = Task.filterByPriority(tasks, 'high');

//   console.log('High priority tasks:', highPriorityTasks.map(task => task.title));

// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.

// class Appointment {
//     constructor(title, date) {
//       this.title = title;
//       this.date = new Date(date);
//     }

//     isToday() {
//       const today = new Date();

//       return today.getDate() === this.date.getDate() &&
//              today.getMonth() === this.date.getMonth() &&
//              today.getFullYear() === this.date.getFullYear();
//     }
//   }

//   const appointment1 = new Appointment('Doctor appointment', '2024-12-29');
//   const appointment2 = new Appointment('Team meeting', '2024-12-29');
//   const appointment3 = new Appointment('Birthday party', '2024-12-30');

//   console.log(`${appointment1.title} is today: ${appointment1.isToday()}`);
//   console.log(`${appointment2.title} is today: ${appointment2.isToday()}`);
//   console.log(`${appointment3.title} is today: ${appointment3.isToday()}`);
