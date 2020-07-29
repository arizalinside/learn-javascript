let janjian = new Promise((resolve, reject) => {
  // Proses get api
  // let getApi = getApi()
  let success = false;
  let data = ["Futsal", "Badminton"];
  if (success === true) {
    // resolve("Berhasil");
    resolve(data);
  } else {
    reject(new Error("Janjian dibatalkan"));
  }
});

// let janjian = new Promise((resolve, reject) => {
//   let data = ["Futsal", "Badminton"];
//   setTimeout(() => {
//     resolve(data);
//   }, 2000);
//   setTimeout(() => {
//     reject("Data Error");
//   }, 1000);
// });

janjian
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
