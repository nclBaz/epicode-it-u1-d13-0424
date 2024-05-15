// Prendiamo un riferimento all'elemento form
const form = document.getElementById("newuser-form")

form.addEventListener("submit", function (event) {
  // Una delle primissime cose da fare quando si vuole gestire il submit di un form è quella di prevenire un comportamento di default non desiderato. Questo comportamento è il refresh della pagina al submit, purtroppo è retaggio di comportamenti vecchi almeno 25 anni.
  event.preventDefault() // evito che la pagina si aggiorni all'invio. Questa dovrebbe essere la PRIMA COSA CHE SCRIVETE IN QUESTO EVENT LISTENER

  // Una volta fermato questo comportamento indesiderato possiamo procedere col fare quello che vogliamo
  // In particolare andremo a prendere tutti i dati che sono stati inseriti nel form, uno ad uno, e creeremo nuove card nella pagina corrente, contenenti i dati scritti dall'utente.

  // Per recuperare i valori dagli input del form, come prima cosa andrò a selezionare gli elementi
  const nameInputField = document.getElementById("name")
  const surnameInputField = document.getElementById("surname")
  const emailInputField = document.getElementById("email")
  const ageInputField = document.getElementById("age")
  const bioInputField = document.getElementById("bio")

  // Una volta che ho i riferimenti, posso andare a leggere i loro contenuti
  // console.log(nameInputField.value) // 'Aldo'
  // console.log(surnameInputField.value) // 'Baglio'
  // console.log(emailInputField.value) // 'aldo@gmail.com'
  // console.log(ageInputField.value) // 19
  // console.log(bioInputField.value) // 'Bla bla bla'

  const newUser = {
    name: nameInputField.value,
    surname: surnameInputField.value,
    email: emailInputField.value,
    age: ageInputField.value,
    bio: bioInputField.value,
  } // Tipicamente questo oggetto verrà inviato ad un server (lo vedremo nelle prossime unità). Per oggi creeremo delle nuove card da aggiungere alla pagina

  const card = document.createElement("div")
  card.classList.add("card")

  const cardTitle = document.createElement("h3")
  // cardTitle.innerText = newUser.name + " " + newUser.surname
  cardTitle.innerText = `${newUser.name} ${newUser.surname}`

  const cardEmail = document.createElement("p")
  cardEmail.innerText = newUser.email

  const cardAge = document.createElement("p")
  cardAge.innerText = newUser.age

  const cardBio = document.createElement("p")
  cardBio.innerText = newUser.bio

  card.append(cardTitle, cardEmail, cardAge, cardBio)
  /* Inseriamo gli elementi della card all'interno della card per creare la seguente struttura
  <div class="card">
    <h3>Aldo Baglio</h3>
    <p>aldo@gmail.com</p>
    <p>19</p>
    <p>bla bla bla</p>
  </div>
  */

  // Ora dobbiamo inserire la nuova card nella pagina
  const rubrica = document.getElementById("rubrica")
  console.log(rubrica)
  rubrica.appendChild(card)
  const cards = rubrica.children

  console.log("Cards: ", cards)
  console.log("TOTALE: ", cards.length)

  // Ripuliamo il form
  nameInputField.value = ""
  surnameInputField.value = ""
  emailInputField.value = ""
  ageInputField.value = ""
  bioInputField.value = ""
})
