// 1
const containerID = document.getElementById("container");
// 2
const containerQuery = document.querySelector("#container");
// 3
const listItems = document.querySelectorAll(".second");
// 4
const thirdOL = document.querySelector("ol.third");
// 5
containerID.innerText = "Hello!";
// 6
const footer = document.querySelector(".footer");

footer.classList.add("main");
// 7
footer.classList.remove("main");
// 8
const newLi = document.createElement("li");
// 9
newLi.innerText = "four";
// 10
const ul = document.querySelector("ul");

ul.append(newLi);
// 11
const ol = document.querySelector("ol");

const children = ol.children();

for(let li of children) {
    li.style.backgroundColor = "green"
}
// 12
footer.remove();
