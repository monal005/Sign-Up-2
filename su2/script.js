const stage = Array.from(document.querySelectorAll("form .stage"));
const nextBtn = Array.from(document.querySelectorAll("form .next-btn"));
const prevBtn = Array.from(document.querySelectorAll("form .prev-btn"));
const submitBtn = document.querySelector("form #btn2");
// const submitBtn = document.querySelector("form .submit-btn");
const form = document.querySelector("form");

let index = 0;


const email = document.getElementById("email");
const password = document.getElementById("password");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

// const lastPart = document.querySelector("lastPart");


const emailError = document.getElementById("emailErrorDisplay");
const passwordError = document.getElementById("passwordErrorDisplay");
const firstNameError = document.getElementById("firstNameErrorDisplay");
const lastNameError = document.getElementById("lastNameErrorDisplay");


const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

email.addEventListener("keypress", () => {
  if (isValidEmail(email.value)) {
    emailError.innerText = "";
  }
});


password.addEventListener("keypress", () => {
  if (password.value.length >= 5) {
    passwordError.innerText = "";
  }
});

firstName.addEventListener("keypress", () => {
  if (firstName.value.length >= 3) {
    firstNameError.innerText = "";
  }
});

lastName.addEventListener("keypress", () => {
  if (lastName.value.length >= 4) {
    lastNameError.innerText = "";
  }
});



nextBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (email.value === "") {
      emailError.innerText = "Email Cannot be Empty";
    } 
    
    else if (!isValidEmail(email.value)) {
      emailError.innerText = "Provide an valid email";
    } 
    
    else if(email.value ===" "){
      emailError.innerText="Spaces not allowed";
    }
    
    else if (password.value === "") {
      passwordError.innerText = "Password Required With email";
    } 

    else if(password.value===" "){
      passwordError.innerText="Spaces not allowed"
    }
    
    else if (firstName.value === "" && index === 1) {
      firstNameError.innerText = "First Name is required";
    }
    
    else if (lastName.value === "" && index === 1) {
      lastNameError.innerText = "Last Name is required";
    } 
    
    else {
      changeStep("next");
    }
  });
});


prevBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeStep("prev");
  });
});

// submitBtn.addEventListener("click",(e)=>{
//   if (firstName.value === "" && index === 1) {
//       firstNameError.innerText = "First Name is required";
//     } else if (lastName.value === "" && index === 1) {
//       lastNameError.innerText = "Last Name is required";
//     } 
    
   
// });

lastName.addEventListener('keypress',(e)=>{
  if(lastName.value!=='' && firstName.value!=='')
  {
    

    document.getElementById('btn2').setAttribute('type','submit');
    // console.log("Hello");
  }
})

function changeStep(btn) {

  const active = document.querySelector("form .stage.active");
  index = stage.indexOf(active);
  stage[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  stage[index].classList.add("active");
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    return false;
  }
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  for (let arrVal of inputs) {
    let text = "";
    for (let objKey in arrVal) {
      text += arrVal[objKey] + "   ";
    }
    console.log(text);
  }
  form.reset();
  // alert('form Submitted successfully');
  stage[index].classList.remove("active");
  stage[0].classList.add("active")
});
