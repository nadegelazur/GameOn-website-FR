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
// La recuperation des elements
const form = document.getElementById('form');

const prenom = document.getElementById('first');
const nom = document.getElementById('last');
const email = document.getElementById('email');

// Evenments
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('ok');
  
  prenom_verify(prenom);
  nom_verify(nom);
  email_verify(email);
  
  
  
})

// verification Prenom
function prenom_verify(prenom) {
  const prenomValue = prenom.value.trim();
  if(prenomValue === "") {
      // on passe dans la fonction le nom du champ et ne pas la valeur
      let message = "Le champ Prénom ne doit pas être vide";
      setError(prenom, message);
  } else if(!prenomValue.match(/^[a-zA-Z]/)) {
      let message = "Le champ Prénom doit commencer par une lettre";
      setError(prenom, message);
  } else {
      let letterNum = prenomValue.length;
      if(letterNum < 2) {
          let message = "Le champ Prénom doit avoir au moins 2 caractères";
          setError(prenom, message);
      } else {
          setSuccess(prenom);
      }
  }
}
// Verification Nom
function nom_verify(nom) {
  const nomValue = nom.value.trim();
  if(nomValue === "") {
      // on passe dans la fonction le nom du champ et ne pas la valeur
      let message = "Le champ Nom ne doit pas être vide";
      setError(nom, message);
  } else if(!nomValue.match(/^[a-zA-Z]/)) {
      let message = "Le champ Nom doit commencer par une lettre";
      setError(nom, message);
  } else {
      let letterNum = nomValue.length;
      if(letterNum < 2) {
          let message = "Le champ Nom doit avoir au moins 2 caractères";
          setError(nom, message);
      } else {
          setSuccess(nom);
      }
  }
}
// Test Regex Email
function emailVerify(email) {
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
// Verification email
function email_verify(email) {
  const emailValue = email.value.trim();
  if(emailValue === "") {
    let message = "Email ne peut pas être vide";
    setError(email, message);
  } else if(!emailVerify(emailValue)) {
      let message = "Email non valide";
      setError(email, message);
  } else {
      setSuccess(email);
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