// Imports
const fs = require('fs');
const maleNames = require('./data/male-first-names.json');
const maleMiddleNames = require('./data/male-first-names.json');
const femaleNames = require('./data/female-first-names.json');
const femaleMiddleNames = require('./data/female-first-names.json');
const lastNames = require('./data/last-names.json');

// Variables:
const people = [];
const males = [];
const females = [];
const personSchema = {
  fName: '',
  mName: '',
  lName: '',
  age: '',
  dob: '',
  pob: '',
  likes: [],
  dislikes: [],
  hobbies: [],
  occupation: '',

}

// Functions
const createMale = (maleFNames, maleMNames, lNames, numberOfMales) => {
  for(let i = 0; i <= numberOfMales; i++) {
    const fName = maleFNames[~~(Math.random() * maleFNames.length)];
    const mName = maleMNames[~~(Math.random() * maleMNames.length)];
    const lName = lNames[~~(Math.random() * lNames.length)];
    const age = ~~(Math.random() * (60 -25) + 25);
    const gender = 'Male'

    const malePerson = {
      fName: fName,
      mName: mName,
      lName: lName,
      age: age,
      gender: gender,
    };
    males.push(malePerson);
  };

  fs.writeFileSync('./data/males.json', JSON.stringify(males, null, 4));
  console.log(`Males Created ${males.length}`);
};

const createFemale = (femaleFNames, femaleMNames, lNames, numberOfFemales) => {
  for(let i = 0; i <= numberOfFemales; i++){
    const fName = femaleFNames[~~(Math.random() * femaleFNames.length)];
    const mName = femaleMNames[~~(Math.random() * femaleMNames.length)];
    const lName = lNames[~~(Math.random() * lNames.length)];
    const age = ~~(Math.random() * (60 -25) + 25);
    const gender = 'Female'

    const femalePerson = {
      fName: fName,
      mName: mName,
      lName: lName,
      age: age,
      gender: gender,
    };
    females.push(femalePerson);
  };

  fs.writeFileSync('./data/females.json', JSON.stringify(females, null, 4));
  console.log(`Females Created ${females.length}`);
};

function combine(males, females) {
  males.forEach(m => {
    people.push(m);
  });
  females.forEach(f => {
    people.push(f);
  });
  fs.writeFileSync('./data/people.json', JSON.stringify(people, null, 4));
  console.log(`People Combined: ${people.length}`);
}

// Function Invocations
createMale(maleNames, maleMiddleNames, lastNames, 10);
createFemale(femaleNames, femaleMiddleNames, lastNames, 10);
combine(males, females);
