

//Signup.js
const database = firebase.database();
const rootRef1 = database.ref("Callback");
const rootRef2 = database.ref("Query");
const rootRef3 = database.ref("Contact_Us");


const r_name=document.getElementById("r_name");
const r_mobile=document.getElementById("r_mobile");
const r_button=document.getElementById("r_button");

r_button.addEventListener("click",(e)=>{
    e.preventDefault();
 rootRef1.child(r_mobile.value).set({
    Name: r_name.value,
    PhoneNumber: r_mobile.value,
  });
})

const q_name=document.getElementById("q_name");
const q_email=document.getElementById("q_email");
const q_mobile=document.getElementById("q_mobile");
const q_message=document.getElementById("q_message");
const q_button=document.getElementById("q_button");
 
q_button.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("button clicked");
 rootRef2.child(q_mobile.value).set({
    Name: q_name.value,
    Email: q_email.value,
    PhoneNumber: q_mobile.value,
    Message: q_message.value,
  });
})


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

const rootRef4 = database.ref("study");
const country_name=document.getElementById("country_name");
const country_age=document.getElementById("country_age");
const country_exp=document.getElementById("country_exp");
const country_phone=document.getElementById("country_phone");
const country_city=document.getElementById("country_city");
const country_email=document.getElementById("country_email");
const country_button=document.getElementById("country_button");

country_button.addEventListener("click",(e)=>{
    e.preventDefault();
 rootRef4.child(country_name.value).set({
     Name: country_name.value,
    Email: country_email.value,
    PhoneNumber: country_phone.value,
    Age: country_age.value,
    Experience: country_exp.value,
    City: country_city.value,

  });
});

