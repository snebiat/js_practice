const insert_form = document.querySelector('#new_task');
const search_form = document.querySelector('#form_search');
const list_form = document.querySelector('#todo_list');
const all_list = document.querySelector('#all_list');
const today_list = document.querySelector('#today_list');
const add_list = document.querySelector('#add_new');
const work_list = document.querySelector('#work_list');
const home_list = document.querySelector('#home_list');
const other_list = document.querySelector('#other_list');
const data_status = document.querySelector('#status');



let taskDatabase = [];
const newtaskdata = document.querySelector('#new_task_data');
if (JSON.parse(localStorage.getItem('taskDB'))!= null)
{
    taskDatabase = JSON.parse(localStorage.getItem('taskDB'));
}

let taskDB = [];

let table_header = `<thead>
    <tr>
        <th>DATE</th>
        <th>TASK</th>
        <th>CATEGORY</th>
        <th>STATUS</th>
    </tr>
<thead>`;

class Task {
    constructor (taskName,taskCategory,taskStatus,taskDate) {
        this.task = taskName;
        this.category = taskCategory;
        this.status = taskStatus;
        this.date = taskDate;
    }
}

const showInsertForm = () => {
    newtaskdata.style.display = "inline-block";
    list_form.style.display = "none"; 
}

const insertTask = (event) => {
    //event.preventDefault();
    const task_name = document.querySelector('#task_name').value;
    const task_category = document.querySelector('#category').value;
    const task_status = document.querySelector('#status').value;
    const task_date = document.querySelector('#date').value;
    newtask = new Task(task_name,task_category,task_status,task_date);
    taskDatabase.push(newtask);
    console.log("The task information is successfully saved.");
    data_status.textContent = `The task information is successfully saved.`;
    localStorage.setItem('taskDB', JSON.stringify(taskDatabase));
}



const populateTable = (tasks) => {
    document.getElementById("task_database").innerHTML = table_header;

    for (let i=0; i<=tasks.length-1;i++)
    {
        document.getElementById("task_database").innerHTML += `<tr>
        <td>${tasks[i].date}</td>
        <td>${tasks[i].task}</td>
        <td>${tasks[i].category}</td>
        <td>${tasks[i].status}</td>
        </tr>`;
    }
    newtaskdata.style.display = "none";
    list_form.style.display = "inline-block"; 
}

const searchTasks = (event) => {
    event.preventDefault();
    let task_result;
    taskDB = JSON.parse(localStorage.getItem('taskDB'));
    let search_key = document.querySelector('#search_task');
    if (taskDB.length!=0) {
       task_result = taskDB.filter(search => search.task.toLowerCase() === search_key.value.toLowerCase());      
    } 
    populateTable(task_result);
}

const FilterTodayTasks = () => {
    const today = new Date().toJSON().slice(0, 10);  
    let task_result;
    taskDB = JSON.parse(localStorage.getItem('taskDB'));
    if (taskDB.length!=0) {
       task_result = taskDB.filter(search => search.date === today);      
    } 
    populateTable(task_result);
}

const FilterWorkTasks = () => {
     
    const today = new Date().toJSON().slice(0, 10);;    
    let task_result;
    taskDB = JSON.parse(localStorage.getItem('taskDB'));
    if (taskDB.length!=0) {
        task_result = taskDB.filter(search => search.category.toLowerCase() === 'work');      
    } 
    populateTable(task_result);
}

const FilterHomeTasks = () => {
    const today = new Date().toJSON().slice(0, 10);;    
    let task_result;
    taskDB = JSON.parse(localStorage.getItem('taskDB'));
    if (taskDB.length!=0) {
        task_result = taskDB.filter(search => search.category.toLowerCase() === 'home');        
    } 
    populateTable(task_result);
}

const FilterOtherTasks = () => {
    const today = new Date().toJSON().slice(0, 10);;    
    let task_result;
    taskDB = JSON.parse(localStorage.getItem('taskDB'));
    if (taskDB.length!=0) {
        task_result = taskDB.filter(search => search.category.toLowerCase() === 'other');        
    } 
    populateTable(task_result);
}

const AllTasks = () => { 
    const today = new Date().toJSON().slice(0, 10);;    
    taskDB = JSON.parse(localStorage.getItem('taskDB'));
    document.getElementById("task_database").innerHTML = table_header;
    for (let i=0; i<=taskDB.length-1;i++)
    {
        document.getElementById("task_database").innerHTML += `<tr>
        <td>${taskDB[i].date}</td>
        <td>${taskDB[i].task}</td>
        <td>${taskDB[i].category}</td>
        <td>${taskDB[i].status}</td>
        </tr>`;
    }
    newtaskdata.style.display = "none";
    list_form.style.display = "inline-block"; 
}

add_list.addEventListener('click', showInsertForm);
all_list.addEventListener('click', AllTasks);
today_list.addEventListener('click', FilterTodayTasks);
work_list.addEventListener('click', FilterWorkTasks);
home_list.addEventListener('click', FilterHomeTasks);
other_list.addEventListener('click', FilterOtherTasks);
insert_form.addEventListener('submit', insertTask);
search_form.addEventListener('submit', searchTasks);