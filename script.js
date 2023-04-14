const input = document.querySelector("#input")
const addBtn = document.querySelector("#addBtn")
const list = document.querySelector("#list")
addBtn.addEventListener("click" , function (e) {
    e.preventDefault();
    const li = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = input.value;
    let button = document.createElement("button");
    button.innerHTML = `<i class="fa-solid fa-trash-can"></i></i>`;
    li.append(span ,button);
    list.append(li);
    input.value = "";
})
addBtn.addEventListener("keyup" ,function (e) {
    if (e.target.value.trim() == "") 
    {
        addBtn.setAttribute("disabled", "");  
    }
    addBtn.removeAttribute("disabled");
})