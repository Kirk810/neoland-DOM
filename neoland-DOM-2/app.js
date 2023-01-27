//Iteración #2: Modificando el DOM
//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");
console.log(div);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const p = document.createElement("p");
console.log(p);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
for (let p6 = 0; p6 < 6; p6++) {
    const p6 = document.createElement("p");
    console.log(p6);
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pcontent = document.createElement("p");
const txt = document.createTextNode("Soy dinamico");
document.body.appendChild(pcontent);
pcontent.appendChild(txt);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let rick = document.querySelector(".fn-insert-here");
rick.innerHTML = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const redes = document.createElement("ul");
document.body.appendChild(redes);
apps.forEach((str) =>{
    const li = document.createElement("li");
    li.innerHTML = str;
    redes.appendChild(li);
});

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeItem = document.querySelectorAll(".fn-remove-me");
 removeItem.forEach((item) => {
   item.remove();
 });

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/
const newP = document.createElement("p");
newP.innerHTML = "Voy en medio";
const divs = document.querySelectorAll("div");
const body = document.querySelector("body");
body.insertBefore(newP, divs[3]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const all = document.querySelectorAll("div.fn-insert-here");
all.forEach((element)=>{
    const newText = document.createTextNode("Voy dentro");
    element.appendChild(newText);
})