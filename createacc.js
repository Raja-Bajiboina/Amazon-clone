
let create = document.getElementById("create")
create.addEventListener('click',function() {
    let pass = document.getElementById("pass")
let repass = document.getElementById("repass")
if (pass!==repass){
    alert("Please enter correct password");
}
});