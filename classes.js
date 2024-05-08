class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  };

  get name() {
    return this._name;
  };

  get level() {
    return this._level;
  };

  get numberOfStudents() {
    return this._numberOfStudents;
  };

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'Number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    };
  };

  quickFacts() {
  console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  };

  static pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  };
};

class PrimarySchool extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  };

  get pickupPolicy() {
    return this._pickupPolicy;
  };
};

class MiddleSchool extends School {
  constructor(name, level, numberOfStudents) {
    super(name);
  };
};

class HighSchool extends School {
  constructor(name, level, numberOfStudents, sportsTeams) {
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  };

  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  };
};


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian or a family member over the age of 13.');

lorraineHansbury.quickFacts(); // Lorraine Hansbury educates 514 students at the primary school level

const monroeHigh = new HighSchool('Monroe High School', 'secondary', 675, 'Red Hawks');

monroeHigh.quickFacts();
