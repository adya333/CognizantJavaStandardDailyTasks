const tasks = [];

function countDown(timerStr, displayElement) {
  function update() {
    const now = new Date();
    const [hr, min] = timerStr.split(":").map(Number);
    const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hr, min, 0, 0);

    let diff = Math.floor((target.getTime() - now.getTime()) / 1000); 

    if (diff <= 0) {
      
      displayElement.innerText = "Time's up!";
      clearInterval(interval);
      return;
    }

    let h = Math.floor(diff / 3600);
    let m = Math.floor((diff % 3600) / 60);
    let s = diff % 60;

    displayElement.innerText = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  update(); 
  const interval = setInterval(update, 1000);
}

function addTask(event)
{
  
  event.preventDefault();
  let task = document.getElementById("task").value;
  let timer = document.getElementById("timer").value;
  tasks.push({task,timer});

  let child = document.createElement("div");
  let list = document.getElementsByClassName("list")[0];
  let newTask = document.createElement("span");
  newTask.innerText = task;
  let tim = document.createElement("span");
  tim.innerText = timer;
  child.appendChild(newTask);
  child.appendChild(tim);
  list.appendChild(child);
  console.log("at add task"+timer);
  countDown(timer, tim);
  
}
