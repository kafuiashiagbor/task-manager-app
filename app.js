const addTaskBtn = document.getElementById("addTaskBtn")
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")
const taskCount = document.getElementById("taskCount")
const pendingCount = document.getElementById("pendingCount")
const doneCount = document.getElementById("doneCount")
const totalCount = document.getElementById("totalCount")
const clearBtn = document.getElementById("clearBtn")

addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim()

  if (taskText === "") {
    document.getElementById("errorMsg").style.display = "block"
  } else {
    document.getElementById("errorMsg").style.display = "none"

    const li = document.createElement("li")
    const circle = document.createElement("div")
    const span = document.createElement("span")

    circle.className = "circle"
    span.textContent = taskText

    circle.addEventListener("click", function() {
      if (li.classList.contains("done")) {
        li.classList.remove("done")
        doneCount.textContent = Number(doneCount.textContent) - 1
        pendingCount.textContent = Number(pendingCount.textContent) + 1
      } else {
        li.classList.add("done")
        doneCount.textContent = Number(doneCount.textContent) + 1
        pendingCount.textContent = Number(pendingCount.textContent) - 1
      }
    })

    li.appendChild(circle)
    li.appendChild(span)
    taskList.appendChild(li)

    totalCount.textContent = Number(totalCount.textContent) + 1
    pendingCount.textContent = Number(pendingCount.textContent) + 1

    taskInput.value = ""
  }
})

clearBtn.addEventListener("click", function() {
  taskList.innerHTML = ""
  totalCount.textContent = 0
  pendingCount.textContent = 0
  doneCount.textContent = 0
})