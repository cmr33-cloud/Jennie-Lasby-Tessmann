head.addEventListener("click", () => {body.style.backgroundColor = "red"});
head.addEventListener("mouseout", () => {body.style.backgroundColor = "white"});
body.addEventListener("keydown", (e) =>  {
    para = document.createElement('p');
    para.textContent = e.key;
    body.appendChild(para);
});
let wiki = document.querySelector('h2');
wiki.addEventListener('mouseover', () => {wiki.textContent = "Welcome to my world!"});
function highlight(object){if(object.style.fontWeight != "bold"){object.style.fontWeight = "bold"}
else{object.style.fontWeight = "normal"};
if(object.style.fontSize=="20px"){object.style.fontSize="30px"}
else {object.style.fontSize="20px"}
};
// document.querySelector('p').style.fontSize = "40px";
earlypara.style.fontSize = "20px", careerpara.style.fontSize = "20px", personalpara.style.fontSize = "20px", 
// document.querySelectorAll('li').addEventListener('click', (e) => {
//     console.log(e)
//     // highlight(e)
// });

early.addEventListener('click', () => {highlight(earlypara)});
 career.addEventListener('click', () => {highlight(careerpara)});
personal.addEventListener('click', () => {highlight(personalpara)});
