(function(){

  function createAppTitle(title){
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createTodoItemForm(){
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    button.setAttribute('disabled',  true)

    input.addEventListener('input', function(){
      if(input.value.length > 0){
        button.removeAttribute('disabled')
      } else {
        button.setAttribute('disabled', true)
      }
    })

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);





    return {
      form,
      input,
      button,
    };
  }

  function createTodoList(){
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem(name, done){

    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    

    item.textContent = name;

    if(done){
      item.classList.toggle('list-group-item-success');
    } 

    doneButton.addEventListener('click', function(){
      item.classList.toggle('list-group-item-success')
    })

    deleteButton.addEventListener('click', function(){
        if(confirm('Вы уверены?')) {
          item.remove();
        }
    })


    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'Удалить';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup)

    return {
      item, 
      doneButton,
      deleteButton,
    };

  }


  function createTodoApp(container, title = 'Список дел',tasks){
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    console.log(tasks)

    if(tasks){
      for (let task in tasks){
        let name = tasks[task].name
        let done = tasks[task].done;
        let todoItem = createTodoItem(name, done)
        todoList.append(todoItem.item)
      }
    }


    container.append(todoAppTitle)
    container.append(todoItemForm.form)
    container.append(todoList)



    todoItemForm.form.addEventListener('submit', function(e) {
      e.preventDefault();

      console.log('e', e)
      
      if(!todoItemForm.input.value) {
        return;
      }
      
      let todoItem = createTodoItem(todoItemForm.input.value, false);

      todoItem.doneButton.addEventListener('click', function() {
        todoItem.item.classList.toggle('list-group-item-success');
      });
      todoItem.deleteButton.addEventListener('click', function() {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();
        }
      });

      todoItemForm.button.setAttribute('disabled', true)

      todoList.append(todoItem.item);

      todoItemForm.input.value = '';
    });
  }

  window.createTodoApp = createTodoApp;


})();