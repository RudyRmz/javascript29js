let todos = [
  {
    title: "Completar tarea 1",
    dueDate: "2023-11-10",
    completed: false,
  },
  {
    title: "Ir de compras",
    dueDate: "2023-11-15",
    completed: true,
  },
  {
    title: "Estudiar para el examen",
    dueDate: "2023-11-20",
    completed: false,
  },
  {
    title: "Hacer ejercicio",
    dueDate: "2023-11-25",
    completed: true,
  },
  {
    title: "Llamar a mamá",
    dueDate: "2023-11-30",
    completed: false,
  },
  {
    title: "Terminar proyecto",
    dueDate: "2023-12-05",
    completed: false,
  },
  {
    title: "Limpiar la casa",
    dueDate: "2023-12-10",
    completed: true,
  },
  {
    title: "Preparar la cena",
    dueDate: "2023-12-15",
    completed: false,
  },
  {
    title: "Leer un libro",
    dueDate: "2023-12-20",
    completed: false,
  },
  {
    title: "Hacer una caminata",
    dueDate: "2023-12-25",
    completed: true,
  },
];

const createToDoList = (todos, index)=>{
  let listGroup = document.createElement("li")
listGroup.classList.add("list-group-item","border","border-3", "m-1")

let divCheck = document.createElement("div")
divCheck.classList.add("form-check", "form-check-reverse")

let inputCheck = document.createElement("input")
inputCheck.classList.add("form-check-input")
inputCheck.setAttribute("type","checkbox")
inputCheck.checked = todos.completed
inputCheck.setAttribute("id","reverseCheck1")

let labelCheck = document.createElement("label")
labelCheck.classList.add("form-check-label")
labelCheck.setAttribute("for","reverseCheck1")
labelCheck.innerText = `Tarea: ${todos.title} Vencimiento: ${todos.dueDate}`

divCheck.append(inputCheck,labelCheck)
listGroup.append(divCheck)

if (todos.completed == true){
  listGroup.classList.add("list-group-item","border","border-3", "m-1", "border-success", "bg-success", "bg-gradient", "text-white")
}else if(todos.completed == false){
  listGroup.classList.add("list-group-item","border","border-3", "m-1", "border-danger", "bg-danger", "bg-gradient", "text-white")
}

inputCheck.addEventListener("click",()=>{
  console.log("clickeado")
  console.log(index)
  todos[index].completed = !todos[index].completed
  console.log(todos)
  // if (event.target.checked) {
  //   listGroup.classList.add("list-group-item","border","border-3", "m-1", "border-success", "bg-success", "bg-gradient", "text-white");
  // } else{
  //   listGroup.classList.add("list-group-item","border","border-3", "m-1", "border-danger", "bg-danger", "bg-gradient", "text-white");
  // }
  printAllToDo(todos)
})

return listGroup
}

const printToDo = (todosData) => {
  let ulContainer = document.getElementById("ul-container");
  let toDoevent = createToDoList(todosData);
  ulContainer.append(toDoevent);
};

const printAllToDo = (toDoArray)=>{
  let ulContainer = document.getElementById("ul-container");
  ulContainer.innerHTML= "";
  toDoArray.forEach(toDo => {
    printToDo(toDo)
  });
}

printAllToDo(todos)

















