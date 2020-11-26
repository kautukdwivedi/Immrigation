const database = firebase.database();
const rootRef3 = database.ref("Contact_Us");

const c_name=document.getElementById("c_name");
const c_email=document.getElementById("c_email");
const c_mobile=document.getElementById("c_mobile");
const c_message=document.getElementById("c_message");
const c_button=document.getElementById("c_button");

c_button.addEventListener("click",(e)=>{
    e.preventDefault();
 rootRef3.child(c_mobile.value).set({
     Name: c_name.value,
    Email: c_email.value,
    PhoneNumber: c_mobile.value,
    Message: c_message.value,
  });
})