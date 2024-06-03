let bg = document.querySelector("#bg");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");

btn1.addEventListener('click', function () {
    bg.style.background = "rgb(200,50,60,0.9)";
});
btn2.addEventListener('click', function () {
    bg.style.background = "green";
});
btn3.addEventListener('click', function () {
    bg.style.background = "blue";
});
btn4.addEventListener('click', function () {
    bg.style.background = "orange";
});
btn5.addEventListener('click', function () {
    bg.style.background = "yellow";
});
btn6.addEventListener('click', function () {
    bg.style.background = "white";
});


let input=document.querySelector('#input');
let submit=document.querySelector('#submit');
let list=document.querySelector('#list');
let inp = input.value;
submit.addEventListener('click', function() {
    if(inp.trim() == ""){
        alert("Please enter input");
    }
    else{
  let new_elem = document.createElement('li');
  new_elem.innerHTML=input.value;
  list.appendChild(new_elem);
    }
});

let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let add = document.querySelector("#add");
let tbody = document.querySelector("#tbody");
add.addEventListener('click' ,function() {
    if(firstname.value.trim() == "" || lastname.value.trim() == ""){
        alert("Fill the form completely");
    }
  else{
    let first = document.createElement("td");
    let last = document.createElement("td");
    let new_row = document.createElement("tr")
    first.innerHTML = firstname.value;
    last.innerHTML = lastname.value;
    new_row.appendChild(first);
    new_row.appendChild(last);
    tbody.appendChild(new_row);

    firstname.value = "";
    lastname.value = ""; 
  }
});


let numberbox = document.querySelector("#numberbox");
let plus  =document.querySelector("#plus");
let minus =document.querySelector("#minus");
let reset = document.querySelector("#reset");

let num = 0;
plus.addEventListener('click', function() {
    let numb = numberbox.value;
    num = numb;
    num++;
    numberbox.value = num;
})
minus.addEventListener('click', function() {
    let numb = numberbox.value;
    num = numb;
    num--;
    numberbox.value = num;
})

reset.addEventListener('click', function() {
    num = 0;
    numberbox.value = num;
})

function multiplynumbers(...args) {
    let multiply = 1;
    for(let num of args){
        multiply = multiply * num;
    }
    return multiply;
}
console.log(multiplynumbers(1,2,3,4,5))

function add(num1,num2){
    let c=num1+num2;
console.log(c);    
}

