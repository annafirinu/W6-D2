//Pulsante 1: Salverà il valore in local storage
//Pulsante 2: Rimuoverà il valore precedentemente salvato

//Passaggio 1: Recupero un riferimento dell'input field in modo da poter collegare ad esso le funzioni dei bottoni
const textInput = document.getElementById("nome");

//Recupero il riferimento al pulsante 1
const button1 = document.getElementById("button1");

//Applico al pulsante un determinato comportamento(quando viene cliccato deve recuperare il contenuto della text area e salvarlo nel localStorage)
button1.addEventListener("click", function () {
  //Recupero il contenuto dell'input field
  const text = textInput.value;
  //Salvo il contenuto recuperato nel localStorage (setItem)
  localStorage.setItem("nome", text);
  alert("contenuto salvato");
});

//Recupero il riferimento al pulsante
const button2 = getElementById("button2");

//Applico al pulsante un determinato comportamento
button2.addEventListener("click", function () {
  //Svuoto l'input field
  textInput.value = " ";
  //Svuoto il localStorage(removeItem)
  localStorage.removeItem("nome");
  alert("Valore rimosso");
});
