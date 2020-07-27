let dataArray = [{nama: "Bagus", age: 20},  { nama: "Ardhika", age: 20}] 
for(let i = 0; i < dataArray.length; i++){
  console.log(dataArray[i].nama)
  console.log(dataArray[i].age)
}

// let indexing = 0;
// while (indexing < 10) { // jika tidak ada kondisi maka akan infinite loop
//   console.log(indexing);
//   indexing++;
// }

// let indexing = 10;
// while (indexing > 0) { // jika tidak ada kondisi maka akan infinite loop
//   console.log(indexing);
//   indexing--;
// }

// let indexing = 0;
// do {
//   console.log(indexing);
//   indexing++;
// } while (indexing < 10);

// let indexing = 10;
// do {
//   console.log(indexing);
//   indexing--;
// } while (indexing > 0);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if(i % 2 === 0) {
//     console.log('Angka ' + i + ' Adalah Bilangan Genap')
//   } else {
//     console.log('Angka ' + i + ' Adalah Bilangan Ganjil')
//   }
// }

// for (let i = 0; i < 10; i++) {
//   let modulus = i % 2
//   switch(modulus) {
//     case 0: {
//       console.log('Angka ' + i + ' Adalah Bilangan Genap')
//       break;
//     } 
//     case 1: {
//       console.log('Angka ' + i + ' Adalah Bilangan Ganjil')
//       break;
//     } 
//     default : {
//       console.log('Angka ' + i + ' Tidak Diketahui')
//     }
//   }
// }