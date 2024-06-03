/*let mobile = document.querySelector(".mobile");
let signin = document.querySelector("#signinn");
let btn = document.querySelector(".btn");

btn.addEventListener('click', function() {
  if (mobile.value.trim() === "") {
    signin.innerHTML = "<h5>Please enter mobile number/E-mail</h5>";
  } else {
    
    window.location.href = "../amazon.html";  
  }
});*/


let btn = document.querySelector(".btn");

btn.addEventListener('click', function() {
  let mobile = document.querySelector(".mobile");
let signin = document.querySelector("#signinn");
  if (mobile.value.trim() === "") {
    signin.innerHTML = "<h5>Please enter mobile number/E-mail</h5>";
  }else{
    
  }
});



