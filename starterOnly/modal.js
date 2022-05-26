function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
const closeModal = document.querySelector(".close");
closeModal.addEventListener('click', function(e) {
modalbg.style.display = "none";
//console.log('ok');
})

// Modal de comfirmation
const modalContainer = document.querySelector('.bground_2');
const closeBtn = document.querySelector('.close_btn');
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

function toggleModal() {
  modalContainer.classList.toggle("active")
  modalbg.style.display = "none";
}

// La recuperation des elements
const form = document.getElementById('form');



const checkbox = document.getElementById('formAgreement');

//Evenments
 form.addEventListener('submit', e => {
   e.preventDefault();

   form_verify();
   
 })

function form_verify() {
  prenom_verify(prenom);
  nom_verify(nom);
  email_verify(email);
  ddn_verify(ddn);
  quantity_verify(quantity);
  const cityCheck = city_verify(cityArray);
  const checkCheck = checkbox_verify(checkbox);

  if(document.querySelectorAll('.success').length = 5 && cityCheck && checkCheck) {
    console.log('ok');
    toggleModal();
    // function initialise
  }
}
// verification Prenom
const prenom = document.getElementById('first');
prenom.addEventListener('keyup', e => {
  prenom_verify(prenom);

})

function prenom_verify(prenom) {
  if(prenom.value.trim() === "") {
      // on passe dans la fonction le nom du champ et ne pas la valeur
      let message = "Le champ Prénom ne doit pas être vide";
      setError(prenom, message);
      return false;
  } else if(!prenom.value.match(/^[a-zA-Z]/)) {
      let message = "Le champ Prénom doit commencer par une lettre";
      setError(prenom, message);
      return false;
  } else {
      let letterNum = prenom.value.length;
      if(letterNum < 2) {
          let message = "Le champ Prénom doit avoir au moins 2 caractères";
          setError(prenom, message);
          return false;
      } else {
          setSuccess(prenom);
          return true;
      }
  }
}
// Verification Nom
const nom = document.getElementById('last');
nom.addEventListener('keyup', e => {
  nom_verify(nom);
})

function nom_verify(nom) {
  if(nom.value.trim() === "") {
      // on passe dans la fonction le nom du champ et ne pas la valeur
      let message = "Le champ Nom ne doit pas être vide";
      setError(nom, message);
      return false;
  } else if(!nom.value.match(/^[a-zA-Z]/)) {
      let message = "Le champ Nom doit commencer par une lettre";
      setError(nom, message);
      return false;
  } else {
      let letterNum = nom.value.length;
      if(letterNum < 2) {
          let message = "Le champ Nom doit avoir au moins 2 caractères";
          setError(nom, message);
          return false;
      } else {
          setSuccess(nom);
          return true;
      }
  }
}

// Verification email
const email = document.getElementById('email');
email.addEventListener('keyup', e => {
  email_verify(email);
})

function email_verify(email) {
  if(email.value.trim() === "") {
    let message = "Email ne peut pas être vide";
    setError(email, message);
    return false;
  } else if(!emailVerify(email.value.trim())) {
      let message = "Email non valide";
      setError(email, message);
      return false;
  } else {
      setSuccess(email);
      return true;
  }
}
// Test Regex Email
function emailVerify(email) {
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
// Verification Date de naissance
const ddn = document.getElementById('birthdate');
ddn.addEventListener('input', e => {
  ddn_verify(ddn);
})

function ddn_verify(ddn) {
  if(ddn.value === "") {
      let message = "Vous devez entrer votre date de naissance";
      setError(ddn, message);
      return false;
  } else {
      setSuccess(ddn);
      return true;
  }
}
// Verification combien de tournois
const quantity = document.getElementById('quantity');
quantity.addEventListener('input', e => {
  quantity_verify(quantity);
})
function quantity_verify(quantity) {
  if(quantity.value === "") {
      let message = "Une valeur numérique doit être saisie";
      setError(quantity, message);
      return false;
  } else {
      setSuccess(quantity);
      return true;
  }
}

// const radios = document.querySelectorAll('input[type="radio"]:checked')

// if (radios.length == 0) {
   // si l'un des boutons n'est pas cochés donc message d'erreur
//   cityError.style.visibility = "visible";
//   return false;
// } else {
//   cityError.style.visibility = "hidden";
//   return true;
// }
// Verification location
const city = document.querySelector('input[name="location"]');
const cityError = document.querySelector("#city div");

//tableau des boutons radios
let cityArray = [
//création d'un variable qui récupère tout les boutons radios du DOM
    document.querySelector("#location1"),
    document.querySelector("#location2"),
    document.querySelector("#location3"),
    document.querySelector("#location4"),
    document.querySelector("#location5"),
    document.querySelector("#location6"),
];
function city_verify() {
    if (!cityArray[0].checked &&
        !cityArray[1].checked &&
        !cityArray[2].checked &&
        !cityArray[3].checked &&
        !cityArray[4].checked &&
        !cityArray[5].checked) {
        // si l'un des boutons n'est pas cochés donc message d'erreur
            cityError.style.visibility = "visible";
            return false;
        } else {
            cityError.style.visibility = "hidden";
            return true;
        }
}
// Verification d'acceptation de condition générale
function checkbox_verify(checkbox) {
  //const checkbox = document.getElementById('formAgreement');
  if(checkbox.checked === false) {
    
    let message = "La case de conditions générales doit être cochée";
    Error(checkbox, message);
    return false;

  } else {
      Success(checkbox);
      return true;
  }
}

// FormData input
function setError(input, message) {
  // je recupere le div dans laquelle se trouve input
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  //Ajout du message d'erreur
  small.innerText = message;
  //Ajout de la classe erreur
  formData.className = "formData error";
}
function setSuccess(input) {
  const formData = input.parentElement;
  formData.className = "formData success";
}
// Checkbox input
function Error(input, message) {
  const checkBox = input.parentElement;
  const small = checkBox.querySelector('small');
  small.innerText = message;
  checkBox.className = "checkbox error";
}
function Success(input) {
  const checkBox = input.parentElement;
  checkBox.classList.remove("error")
}

// //initialisation de tous les champs du formulaire
// function initializeFields() {
//   prenom.value = null;
//   nom.value = null;
//   email.value = null;
//   ddn.value = null;
//   quantity.value = null;
//   city.checked = false;
//   checkbox.checked = false;
//   setSuccess(input)
//   Success(input);
// }