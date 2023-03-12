let taskValue = document.getElementById("tasklist-item");
let ul = document.getElementById("tasklist-ul");

const createTask = () => {
  if (taskValue.value === "") {
    alert("Write something");
  } else {
    var task = document.createElement("p");
    task.innerText = taskValue.value;
    var listItem = document.createElement("li");
    listItem.appendChild(task);
    ul.appendChild(listItem);
    task.innerhtml = taskValue.value;
    listItem.classList.add("tasklist-li", "color");
    listItem.style.color = color
    taskValue.value = "";
  }

  listItem.addEventListener("click", function () {
    task.style.textDecoration = "line-through";
  });
  listItem.addEventListener("dblclick", function () {
    ul.removeChild(listItem);
  });
};
