 //Model 
        // if local Storage has a aTodos Array then use it 
        // Otherwise use the default array
        let todos;

        // Retrieve LocalStorage
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        // Check if its an array
        //comment

        if (Array.isArray(saveTodos)){
            todos = savedTodos;

        } else {
                todos = [{
                title : 'Get groceries',
                dueDate : '2023-08-05',
                id: 'id1'
            },{
                title : 'Wash Car',
                dueDate : '2023-08-05',
                id: 'id2'
            },{
                title : 'Do hair',
                dueDate : '2023-08-05',
                id: 'id3'
            }

       ];

        }

       render();

       //Creates a ToDo
       function createTodo (title,dueDate){
        const id = '' + new Date().getTime();

        todos.push({
            title : title,
            dueDate : dueDate,
            id: id
        });

        saveTodos()
       }

       //Deletes a ToDo
       function removeTodo(idToDelete){
        todos = todos.filter(function (todo){
                if (todo.id === idToDelete){
                    return false;
                } else {
                    return true;
                }
            });

        saveTodos()

       }

       function saveTodos () {
           localStorage.setItem('todos',JSON.stringify(todos));

       }
       //Controller
      
       function addTodo() {
           const textbox = document.getElementById('todo-tittle');
           const title = textbox.value;

           const datePecker = document.getElementById('date-picker');
           const dueDate = datePecker.value;

           createTodo(title,dueDate);
           render();

        }

        function deleteTodo(event){
            const deleteButton = event.target;
            const idToDelete = deleteButton.id;

            removeTodo(idToDelete);
            render();

        }
        //View

        function render() {

            document.getElementById('todo-list').innerHTML = '';

            todos.forEach(function(todo){
                const element = document.createElement('div');
                element.innerText = todo.title + '' + todo.dueDate;
                
                const deleteButton = document.createElement('button');
                deleteButton.innerText = 'Delete';
                deleteButton.style = 'margin-left:12px;margin:5px';
                deleteButton.onclick = deleteTodo;
                deleteButton.id = todo.id;
                element.appendChild(deleteButton);


                const todoList = document.getElementById('todo-list')
                todoList.appendChild(element);

            });

        }
        