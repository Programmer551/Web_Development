const taskDiv = document.querySelector("#tasks")!;
const btn = document.getElementById("#btn")!;
const input = document.querySelector("#input") as HTMLInputElement;
const form = document.querySelector("#form") as HTMLFormElement;
type Task = {
  value: string;
  completed: boolean;
};

let tasks: Task[] = [];
const fire2 = (task: Task) => {
  let jsonTasks: string = localStorage.getItem("tasks")!;
  const Tasks: Task[] = JSON.parse(jsonTasks);
  const arr = Tasks.filter((item) => item.value !== task.value);
  jsonTasks = JSON.stringify(arr);
  localStorage.setItem("tasks", jsonTasks);
  render();
};
const render = () => {
  const jsonTasks: string = localStorage.getItem("tasks")!;
  tasks = JSON.parse(jsonTasks);
  taskDiv.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    editButton.innerHTML = "Edit";

    deleteButton.addEventListener("click", () => {
      fire2(task);
    });
    li.innerHTML = task.value;
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    taskDiv.appendChild(li);
  });
};
const fire = (event: Event) => {
  event.preventDefault();
  tasks.push({ value: input.value, completed: false });
  input.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
};
form.addEventListener("submit", fire);
render();
