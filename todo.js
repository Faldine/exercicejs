const form = document.querySelector('form');
const todoInput = document.querySelector('input[name="todo-input"]');
const list = document.querySelector('input[name="list"]');

formTag.addEventListener('submit', function(e){
    e.preventDefault()
    addTodo(); 
})
let allTodo = []
function addTodo(){
    const todoText = todoInput.value.trim();
    if(todoText.lenth> 0){
        allTodo.push(todoText);
        updateTodoList();
        todoInput.value = ""
    }   
}
function updateTodoList(){
    todoListUL.innerHTML = "";
    allTodo.forEach((todo,todoIndex)=>{
        todoItem = createTodoItem(todo, todoIndex)
        todoListUL.append(todoItem);
})
}

function createTodoItem(todo, todoIndex){
    const todoId = "todo-"+todoIndex;
    const todoLI = document.createElement("li");
    todoLI.className = todo;
    todoLI.innerHTML = `
        <input type="checkbox" id="${todoId}" name="todo-1">
                <label class="custom-checkbox" for="${todoId} ">
                    <img src="/check_circle_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="icon">
                </label>
                <label for="${todoId}" class="todo-text">
                    ${todo}
                </label>
                <button class="delete-button">
                    <img src="/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                </button>|`
    return todoLI;            
}


    
    
    
   
