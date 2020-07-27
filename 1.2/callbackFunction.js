// Function 1 
function sayHello(name, callback1){
  let greeting = `Hello ${name}`
  callback1(greeting)
  // showGreeting(greeting)
}

// Function 2
function showGreeting(greeting){
  console.log(greeting)
}

sayHello('Arkademy', showGreetings )