function onReady() {
  let id = 0;
  const toDos =[];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo () {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push ({
      title: newToDoText.value,
      complete: false
      id: id.value;
    });

    id=id+1;
    newToDoText.value='';
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      const deleteButton= document.createElement('button');
      deleteButton.innerHTML = "<span>Delete</span>";
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });

      deleteButton.addEventListener ('click', function() {
        newLi.parentNode.removeChild(newLi);
        deleteToDoList(toDo);
        renderTheUI();

        function deleteToDoList (toDo){
          let deleteToDo = toDos.filter (toDo => toDo.id);
        };
      });
    }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

window.onload = function() {
   onReady();
 };
