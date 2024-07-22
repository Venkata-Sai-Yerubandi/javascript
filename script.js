//get Element by classname
const newHeader = document.getElementsByClassName("header");
console.log(newHeader);
newHeader[0].style.backgroundColor="red";

//get elementby id

const newTasks = document.getElementById("tasks")
console.log(newTasks)
newTasks.innerHTML="changed tasks"

//get elements by query selector all
const newForms= document.querySelectorAll('#forms');
console.log(newForms);
newForms[0].style.color="green";
