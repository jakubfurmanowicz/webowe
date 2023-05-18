console.log("Hello World!");

const nick = "Eryk";
const age = 19;

// Interpolacja `${}`
console.log(`Imię: ${nick}`);
console.log(`Wiek: ${age}`);

// Funkcja
function sayHello()
{
    console.log("Hello from a function");
}

// Funkcja strzałkowa
const sayHelloFatArrow = () => {
    console.log("Hello from a fat arrow function!");
}

// Wywołanie funkcji
sayHello();
sayHelloFatArrow();