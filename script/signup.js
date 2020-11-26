window.onload = function () {
  render();
};
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();
}
function phoneAuth() {
  //get the number
  var number = document.getElementById("phone").value;
  //phone number authentication function of firebase
  //it takes two parameter first one is number,,,second one is recaptcha
  firebase
    .auth()
    .signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      //s is in lowercase
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      console.log(coderesult);
      alert("Message sent");
    })
    .catch(function (error) {
      alert(error.message);
    });
}
function codeverify() {
  var code = document.getElementById("verificationCode").value;
  coderesult
    .confirm(code)
    .then(function (result) {
      formFill();
      alert("Successfully registered");
      var user = result.user;
      console.log(user);
    })
    .catch(function (error) {
      alert(error.message);
      console.log(error.message);
    });
}

//Signup.js
const database = firebase.database();
const rootRef = database.ref("users");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phone");
const addBtn = document.getElementById("sendMessageButton");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // const autoId = rootRef.push().key;
  rootRef.child(phoneNumber.value).set({
    Name: name.value,
    Email: email.value,
    Password: password.value,
    PhoneNumber: phoneNumber.value,
  });
});

function formFill() {
  $("#contactForm input:required").each(function () {
    if (this.value === "") {
      alert("Please fill all field");
    } else {
      addBtn.disabled = false;
    }
  });
}
