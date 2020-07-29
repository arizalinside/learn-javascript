const name = () => {
  console.log("Bagus Tri Harjanto");
};

const lastName = "Bagus";

// [1]
// module.exports = name; //export
// module.exports = lastName;

// [2]
module.exports = { name, lastName };
