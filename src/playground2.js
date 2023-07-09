/* JavaScript Objects, properties and methods */
const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ['Vue', 'Html', 'Css'],
  lookingForWork: true,
  doubleSalary() {
    this.salary *= 2;
    this.lookingForWork = false;
  },
};

console.log(developer.salary);
console.log(developer.lookingForWork);
developer.doubleSalary();
console.log(developer.salary);
console.log(developer.lookingForWork);
