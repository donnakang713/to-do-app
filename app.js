function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDo = document.getElementById('deleteToDo');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
     newToDoText.value = '';

    // create a new input
    let deleteButton=document.createElement('button');
    deleteButton.innerHTML = "<span>Delete</span>";

    // set the input's type to a delete button
    deleteButton.type = "button";

    // set the input's value
    deleteButton.value = "delete";

    // attach the delete button to the li
    newLi.appendChild(deleteButton);
  });

  deleteButton.addEventListener('click', function() {
    newLi.parentNode.removeChild(newLi);
  });

}

  

window.onload = function() {
   onReady();
};
