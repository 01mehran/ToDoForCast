const taskInput = document.querySelector("#taskInput");
const addbtn = document.querySelector("#addbtn");
const taskList = document.querySelector("#taskList");

// افزودن وظیفه به لیست
function addTaskToList(taskText) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
                          ${taskText} 
                          <button class="delete-btn">Delete</button>
                          `;
  taskList.appendChild(listItem);

  // EventListener برای دکمه حذف
  const deleteBtn = listItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(listItem);
  });
}

// EventListener برای اضافه کردن وظیفه
addbtn.addEventListener("click", () => {
  if (taskInput.value !== "") {
    const taskText = taskInput.value;

    addTaskToList(taskText);
    taskInput.value = "";
  }
});
// axios
document.getElementById("loading").innerHTML = "Loading...";

axios
  .get("https://wttr.in/Tehran?format=j1")
  .then((res) => {
    console.log(res.data.current_condition[0]);
    const data = res.data.current_condition[0];

    document.getElementById("temperature").innerHTML = data.temp_C + "℃";
    document.getElementById("temperature1").innerHTML = data.temp_F + "%";

    // حذف متن "بارگیری"
    document.getElementById("loading").innerHTML = "";
  })
  .catch((error) => {
    console.log(error);
    document.getElementById("loading").innerHTML = "Loading...";
  });
