const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input')
const taskListElement = document.querySelector<HTMLUListElement>('.list')

type Task = {
    description: string;
    isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);



function loadTasks():Task[]{
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks? JSON.parse(storedTasks):[]
}

taskForm?.addEventListener('submit', (event)=>{
    event.preventDefault()
    const taskDescription =formInput?.value
    if(taskDescription){
        const task: Task = {
          description: taskDescription,
          isCompleted: false,
        }
        // console.log(taskDescription);
        //add task to list
        addTask(task)
        // render tasks
        renderTask(task)
        //update local storage
        updateStorage();
        formInput.value = '';
        return
    }
    alert('please enter a task description')
})

function addTask(task:Task):void{
    tasks.push(task)
    console.log(tasks);
    
}

function renderTask(task:Task):void{
  const taskElement = document.createElement('li')
  taskElement.textContent = task.description

  // Apply strikethrough if the task is completed
  if (task.isCompleted) {
    taskElement.style.textDecoration = 'line-through'
  }

  //checkbox
  const taskCheckbox = document.createElement('input')
  taskCheckbox.type = 'checkbox'
  taskCheckbox.checked = task.isCompleted

  //toggle checkbox

  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted
    updateStorage()
    refreshTaskList() // Refresh the task list
  })

  taskElement.append(taskCheckbox)
  taskListElement?.appendChild(taskElement)
}

function refreshTaskList(): void {
  // Clear the current task list
  taskListElement!.innerHTML = ''

  // Re-render all tasks
  tasks.forEach(renderTask)
}

function updateStorage(): void{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}