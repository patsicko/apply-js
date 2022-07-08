

let container=document.querySelector(".container");
let button=container.firstElementChild.nextElementSibling;


let form=document.querySelector(".form");
let input=document.querySelectorAll("input");
let fname=input[0];
let lname=input[1];
let email=input[2];
let password=input[3];
let education=document.getElementById("education");
// let value=education.options[education.selectedIndex].value;
let photo=document.getElementById("photo");
let submit=document.getElementById("submit");
let congs=document.querySelector(".congs");



button.addEventListener("click",e=>{

form.classList.toggle("apply");
console.log(form);

})
console.log(submit);

submit.addEventListener("click",e=>{
    form.classList.toggle("submitted");
    console.log(fname.value+" "+lname.value);
    
})