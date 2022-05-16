let things = JSON.parse(localStorage.getItem("todos"))

function makeItem(todo){
    const thing = document.createElement("li")
    const list = document.querySelector(".checkboxes")
    thing.innerHTML = todo
    list.append(thing)
}

if (things){ 
    for (item of things) {
    makeItem(item)
}} else {
    localStorage.setItem("todos", "[]")
}