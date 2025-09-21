interface Teacher {
    readonly firstName: String;
    readonly lastName: String;
    fullTimeEmployee: Boolean;
    yearsOfExperience?: Number;
    location: String;
    contract?: Boolean;
    [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);