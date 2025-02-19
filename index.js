const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {

  let lista = document.querySelector(".lista")
  let items = document.querySelectorAll("li")
  

  items.forEach(element => {
    element.remove();
  });

  for(i= 0; i< cosasQueAprendimos.length; i++ ){
    
    let NewList = document.createElement("li");
    NewList.innerHTML = cosasQueAprendimos[i].tema;
    NewList.className = cosasQueAprendimos[i].class

    lista.appendChild(NewList)
  
  }
  
}

main();
