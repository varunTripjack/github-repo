 const todoForm = document.querySelector(".form-todo");
    const todoFormInput = document.querySelector(".form-todo input[type='text']");
    const TodoList = document.querySelector(".todo-list");

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault(); // used to prevent the page from reloading
        const newTodoText = todoFormInput.value;
        const newLi = document.createElement("li");
        const newLihtml = `
                <span class="text">${newTodoText}</span>
                <div class="buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>`;
        
        newLi.innerHTML = newLihtml;
        TodoList.append(newLi);
        todoFormInput.value = "";
        
        
        // console.log(newLi);
        // console.log(newTodoText);
        // console.log(`form submitted`);
    });

    TodoList.addEventListener("click", (e) => {
        // console.log(e.target.parentNode);
        console.log(e.target);
        if(e.target.classList.contains("remove")){

            
            const targetLi = e.target.parentNode.parentNode;
            // console.log(targetLi);
            targetLi.remove();
        }

        if(e.target.classList.contains("done")){
            const liSpan = e.target.parentNode.previousElementSibling;
            liSpan.style.textDecoration = "line-through";
         }
    });