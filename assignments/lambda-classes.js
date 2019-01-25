// CODE here for your Lambda Classes

/* 

Roster of Lambda personnel:
Lambda personnel can be broken down into three different types of people:
Instructors - extensions of Person, Students - extensions of Person, Project Managers - extensions of Instructors

*/

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(attributes2) {
    super(attributes2);
    this.specialty = attributes2.specialty;
    this.favLanguage = attributes2.favLanguage;
    this.catchPhrase = attributes2.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(attributes3) {
    super(attributes3);
    this.previousBackground = attributes3.previousBackground;
    this.className = attributes3.className;
    this.favSubjects = attributes3.favSubjects;
    this.grade = attributes3.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(element => {
      console.log(element);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(attributes4) {
    super(attributes4);
    this.gradClassName = attributes4.gradClassName;
    this.favInstructor = attributes4.favInstructor;
  }
  standUp(slackChannel) {
    console.log(
      `${this.name} announces to #${slackChannel}, @channel standy times!`
    );
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

//Objects
// Person objects
const bob = new Person({
  name: "Bob",
  age: 22,
  location: "Maine",
  gender: "male"
});
const jim = new Person({
  name: "Jim",
  age: 33,
  location: "California",
  gender: "male"
});
const jane = new Person({
  name: "Jane",
  age: 34,
  location: "Florida",
  gender: "female"
});

// Instructor objects
const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  specialty: "Front-end",
  favLanguage: "JavaScript",
  catchPhrase: `Don't forget the homies`
});
const michelle = new Instructor({
  name: "Michelle",
  location: "Nevada",
  age: 35,
  gender: "female",
  specialty: "Back-end",
  favLanguage: "Java",
  catchPhrase: `Forget the homies`
});

// Student objects
const taylor = new Student({
  name: "Taylor",
  location: "Oregon",
  age: 26,
  gender: "female",
  previousBackground: "Chemical Engineering",
  className: "CS132",
  favSubjects: ["Html", "CSS", "JavaScript"],
  grade: 100
});
const john = new Student({
  name: "John",
  location: "New York",
  age: 44,
  gender: "male",
  previousBackground: "Mechanical Engineering",
  className: "CS13822",
  favSubjects: ["C#", "C++", "JavaScript"],
  grade: 83
});

// Project Manager objects
const megan = new ProjectManager({
  name: "Megan",
  location: "Maryland",
  age: 23,
  gender: "female",
  specialty: "Back-end",
  favLanguage: "C",
  catchPhrase: `Catch me coding`,
  gradClassName: "CS2",
  favInstructor: "Sean"
});
const jeff = new ProjectManager({
  name: "Jeff",
  location: "Georgia",
  age: 44,
  gender: "male",
  specialty: "Back-end",
  favLanguage: "C++",
  catchPhrase: `Keep it rollin'`,
  gradClassName: "CS5000",
  favInstructor: "Janet"
});

//TESTS
// Person tests
console.log(bob);
bob.speak();
console.log("*************************************");
console.log(jane.age);
console.log("-------------------------------------");

// Instructor tests
console.log(fred);
console.log(fred.age);
fred.demo("Python");
fred.grade(bob, "Python 1");
fred.speak();
console.log("*************************************");
console.log(michelle);
console.log(michelle.age);
michelle.demo("Java");
michelle.grade(bob, "Java 3");
console.log("-------------------------------------");

// Student tests
console.log(taylor);
console.log(taylor.age);
taylor.listsSubjects();
taylor.PRAssignment("C++ 4");
taylor.sprintChallenge("C 5");
console.log("**************************************");
console.log(john);
console.log(john.age);
john.listsSubjects();
john.PRAssignment("C++ 12");
john.sprintChallenge("C 1");
console.log(john.grade);
console.log(taylor.grade);
console.log("-------------------------------------");

// Project Manager tests
console.log(megan);
console.log(megan.age);
megan.demo("Python");
megan.grade(bob, "Python 1");
console.log("*************************************");
console.log(jeff);
console.log(jeff.age);
console.log("*************************************");
jeff.demo("C");
jeff.grade(bob, "Java 3");
megan.standUp("web200");
jeff.debugsCode(taylor, "Python");
