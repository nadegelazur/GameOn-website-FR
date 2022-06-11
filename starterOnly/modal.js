// BURGER Menu
// Menu Burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const heroContent = document.querySelector('.hero-content');
// проверяем существует ли бьект с таким классом
//vérifier si l'objet avec cette classe existe
if(iconMenu) {   
    // создаем событие клик по иконке
    //créer un événement de clic d'icône
    iconMenu.addEventListener("click", function(e) {
        // чтоб не скролилось сайт сзади выдвигающегося меню
        //pour empêcher le site web de défiler vers l'arrière du menu déroulant
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        heroContent.classList.toggle('_active');
    })
}

function onMenuLinkClick(e) {
    if(iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        heroContent.classList.remove('_active');
    }    
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const heroSection = document.querySelector(".hero-section");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// open modal form
function launchModal() {
  clearModal();
  modalbg.style.display = "block";
  heroSection.style.display = "none";
  document.body.classList.toggle('_lock'); 
}

// close modal event
const closeModal = document.querySelector(".close");
closeModal.addEventListener('click', function(e) {
  clearModal();
  modalbg.style.display = "none";
  heroSection.style.display = "block";
  document.querySelectorAll(".formData.error").forEach(e => e.classList.remove('error'));
  document.querySelectorAll(".formData.success").forEach(e => e.classList.remove('success'));

  document.querySelector("#city div").style.visibility = "hidden";
  document.querySelector(".checkbox.error").classList.remove('error');
  // const DataFirst = document.querySelector(".formData");
  // if(DataFirst.classList.contains('error')) {
  //   DataFirst.classList.remove('error');  
  // }else if(DataFirst.classList.contains('success')){
  //   DataFirst.classList.remove('success');
  // }
})

// Modal de comfirmation
const modalContainer = document.querySelector('.bground_2');
const closeBtn = document.querySelector('.close_btn');
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

function toggleModal() {
  modalContainer.classList.toggle("active")
  modalbg.style.display = "none";
  clearModal();
}

// La recuperation des elements
const form = document.getElementById('form');

//Evenments
 form.addEventListener('submit', e => {
   e.preventDefault();

   form_verify();   
 })

function form_verify() {
  const prenomCheck = prenom_verify(prenom);
  const nomCheck = nom_verify(nom);
  const emailCheck = email_verify(email);
  const ddnCheck = ddn_verify(ddn);
  const quantityCheck = quantity_verify(quantity);
  const cityCheck = city_verify(cityArray);
  const checkCheck = checkbox_verify(checkbox);

  if(prenomCheck && nomCheck && cityCheck && emailCheck && ddnCheck && quantityCheck && checkCheck) {
    console.log('ok');
    toggleModal();
    } 
}

function clearModal(){
  prenom.value = "";
  nom.value = "";
  email.value = "";
  ddn.value = "";
  quantity.value = "";
  cityArray.values = "";
  checkbox.value = "";

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
email.addEventListener('change', e => {
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
// Verification location
let cityArray = document.querySelectorAll('input[type="radio"]');

for (const radio of cityArray) {
  radio.onclick = (e) => {
    cityError.style.visibility = "hidden";
  }
}
const cityError = document.querySelector("#city div");
const radios = document.querySelectorAll('input[type="radio"]:checked')

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
const checkbox = document.getElementById('formAgreement');
checkbox.addEventListener('input', e => {
  checkbox_verify(checkbox);
})
function checkbox_verify(checkbox) {
  //const checkbox = document.getElementById('formAgreement');
  if(checkbox.checked === false) { 
    let message = "La case de conditions générales doit être cochée";
    Error(checkbox, message);
    return false;

  } else {
      Success(checkbox);
      //console.log('true');
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
  //console.log('error');
}
function Success(input) {
  const checkBox = input.parentElement;
  //checkBox.classList.remove("checkbox error");
  checkBox.className = "checkbox success"
  //console.log('success');
}

