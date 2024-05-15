const handleButtonClick = function (event) {
  console.log("Hai cliccato un pulsante")
  console.log("evento: ", event.target)
}

const handleButtonClick2 = function (event) {
  console.log("Hai cliccato il secondo pulsante")
  console.log("evento: ", event)
}

const handleButtonClick3 = function (event) {
  console.log("Hai cliccato il terzo pulsante")
  console.log("evento: ", event)
}

const secondBtn = document.getElementById("second-btn")
secondBtn.onclick = handleButtonClick
// secondBtn.onclick = handleButtonClick2() <-- METODO SBAGLIATO, perché qua sto eseguendo la funzione, ma io non voglio eseguirla voglio ASSEGNARLA all'evento onclick in maniera che quando verrà cliccato la funzione verrà eseguita

const thirdBtn = document.getElementById("third-btn")
thirdBtn.addEventListener("click", handleButtonClick)
// L'addEventListener a differenza degli altri metodi, consente di assegnare anche più funzioni ad uno stesso evento
// thirdBtn.addEventListener("click", handleButtonClick2)
// thirdBtn.addEventListener("click", handleButtonClick3)
// thirdBtn.addEventListener("click", () => console.log("Hai cliccato il terzo"))
// addEventListener ha 2 parametri: "nome dell'evento" e funzione da associarvi
// thirdBtn.addEventListener("click", handleButtonClick3()) // <-- anche in questo caso è un ERRORE eseguire la funzione
// thirdBtn.addEventListener("mousemove", function (event) {
//   console.log("mouse move event")
//   console.log(event)
// })

// EVENT: L'oggetto evento viene creato direttamente da JS, ed è sempre il primo parametro della funzione che associamo ad un evento. Al suo interno saranno presenti un sacco di info riguardanti il tipo di evento scatenato, tra le varie info possiamo anche capire quale elemento è stato cliccato

// const card = document.querySelector(".card")
// card.addEventListener("click", function (event) {
//   console.log("Click fatto")
//   console.log("Target:", event.target) // Quando ci sono più elementi figli cliccabili all'interno di un contenitore al quale abbiamo applicato l'eventlistener, tramite TARGET andiamo a capire esattamente l'elemento cliccato
//   console.log("Current Target:", event.currentTarget) // tramite CURRENT TARGET invece andiamo a capire quale è l'elemento al quale è stata associata la funzione
// })
const cards = document.querySelectorAll(".card")
cards.forEach(card => {
  card.addEventListener("click", function (event) {
    console.log("Target:", event.target)
    console.log("Current Target:", event.currentTarget)
  })

  card.addEventListener("mouseenter", function (event) {
    const h1 = document.querySelector("h1")
    h1.style.color = "orange"
  })

  card.addEventListener("mouseleave", function (event) {
    const h1 = document.querySelector("h1")
    h1.style.color = "green"
  })
})

// const cards2 = document.getElementsByClassName("card")

window.addEventListener("scroll", function () {
  console.log("hai scrollato")
  console.log(window.scrollY)
})
