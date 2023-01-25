//Iteración #1: Interacción con el DOM
//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const mybutton = document.querySelector(".showme");
console.log(mybutton);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const myH1 = document.querySelector("#pillado");
console.log(myH1);

//1.3 Usa querySelector para mostrar por consola todos los p
const myPs = document.querySelectorAll("p");
myPs.forEach((power) =>{
    console.log(power.innerHTML);
});

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const myH4 = document.querySelectorAll(".pokemon");
myH4.forEach((pokemon) =>{
    console.log(pokemon.innerHTML);
});

/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".*/
const elements = document.querySelectorAll('[data-function="testMe"');
elements.forEach((characters) =>{
    console.log(characters.innerHTML);
});

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/
const characters = document.querySelectorAll('[data-function="testMe"]');
for (let test = 0; test < characters.length; test++) {
    const character = characters[test];
    if (test == 2) {
      console.log(character.innerHTML);
}};
