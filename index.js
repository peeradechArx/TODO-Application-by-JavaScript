function addTask() {
  var input = document.getElementById("input");
  var inputValue = input.value;

  if (inputValue !== "") {
    var taskList = document.getElementById("tasklist");
    var newTask = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    newTask.appendChild(textNode);
    
    var deleteButton = createDeleteButton();
    deleteButton.addEventListener("click", function(){
      this.parentNode.remove();
    });
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);
    input.value = "";
  }
}

function createDeleteButton() {
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.className = "delete-button";
  return deleteButton;
}
