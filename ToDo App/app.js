const OL = document.querySelector(".checkboxes")

const btn = document.querySelector('#btn')


btn.addEventListener('click', function (){
    const todo = document.querySelector('#item')
    const check = document.createElement('input')
    const remover = document.createElement('input')
    remover.setAttribute('type', 'button')
    remover.setAttribute('value', 'Remove')
    check.setAttribute('type', 'checkbox')
    const newli = document.createElement("li")
    newli.innerText = ' ' + todo.value + ' '
    newli.prepend(check)
    newli.append(remover)
    console.log(newli)
    OL.append(newli)
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos.push(newli.innerHTML)
    localStorage.setItem("todos", JSON.stringify(todos))
    todo.value = ''
})

OL.addEventListener('click', function(e) {
    if (e.target.type === 'checkbox') {
        let todos = JSON.parse(localStorage.getItem("todos"))
        const parent = e.target.parentElement
        parent.style.textDecoration = "line-through";
        for (thing of todos) {
            if (e.target.parentElement.innerHTML == thing) {
                
            }
        }
        e.target.parentElement.style.textDecoration = "line-through";
    }
    else if (e.target.type === 'button') {
        e.target.parentElement.remove()
    }
})
