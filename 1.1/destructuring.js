// OBJECT ===================================================================================
const student = {
  firstName: "Grad",
  lastName: "Chinda",
  country: "Nigeria"
};

// before using destructing
// const firstName = student.firstName;
// const lastName = student.lastName;
// const country = student.country;

// destructing assignment
const { firstName, lastName, country } = student;

// ARRAY ===================================================================================
const rgb = [255, 140, 0];

// before using destructing
// const red = rgb[0]
// const green = rgb[1]
// const blue = rgb[2]

// destructing assignment
const [red, green, blue] = rgb;

console.log(red);
