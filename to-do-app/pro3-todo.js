/*

    let _new_item = {"id":3,"name":"itemc","complete":false}
    todolist2.push(_new_item)

*/
let task_list = [];
let display_Div_String ='';


function addTaskToList()
{
    let newInput = document.getElementById('userInput');
    


    if((newInput == null) || (newInput == undefined))
    {
        msgText = 'newInput Failed';
        console.log(msgText);
        return false;
    }

    if(newInput.value.trim().length == 0)
    {
        return false;
    }
    let newTask =  {'id': task_list.length, 'name': newInput.value.toLowerCase(), 'completed': false};
    task_list.push(newTask);
    console.log(task_list);
    newInput.value = '';
    viewAllTasks(task_list);
}   


function viewAllTasks(task_list)
{
    let displayDiv = document.getElementById('displayListDiv');
    let task_list_html = '';
    let i = 0;
    task_list.forEach(function(item)
    {
        task_list_html += `<button id='btn${item.id}' class='tasks${item.completed ? " completed" : ""}' onclick='updateTask(task_list,${i})'>${item.name}</button><br>`
        i++;
    })
        
    displayDiv.innerHTML = task_list_html;
     
}


function updateTask(task_list,i)
{
    console.log('<----->');
    console.log(i);
    console.log(task_list);
    console.log(task_list[i]);

    const taskId = 'btn' + i;
    console.log(taskId);
    const taskButton = document.getElementById(taskId);
    console.log(taskButton)

    if (!task_list[i].completed)
    {
        task_list[i].completed = true;
        taskButton.classList.add('completed');
    }
    else
    {
        task_list[i].completed = false;
        taskButton.classList.remove('completed');
    }
}


function clearAllTasks()
{
    task_list.length = 0;
    let displayDiv = document.getElementById('displayListDiv');
    displayDiv.innerHTML = '';
}


function onlyCompletedTasks(task_list)
{
    let displayDiv = document.getElementById('displayListDiv');
    let task_list_html = '';
    let i=0;
    displayDiv.innerHTML = '';
    
console.log("<><><>");
console.log(task_list);
    task_list.forEach(function(item)
    {
        if(item.completed)
        {
            task_list_html += `<button id='btn${item.id}' class='tasks${item.completed ? " completed" : ""}' onclick='updateTask(task_list,${i})'>${item.name}</button><br>`
                i++;
        }
    })
    displayDiv.innerHTML = task_list_html;
}


function onlyNotCompletedTasks(task_list)
{
    let displayDiv = document.getElementById('displayListDiv');
    let task_list_html = '';
    let i=0;
    displayDiv.innerHTML = '';
    
console.log("<><><>");
console.log(task_list);
    task_list.forEach(function(item)
    {
        if(!item.completed)
        {
            task_list_html += `<button id='btn${item.id}' class='tasks${item.completed ? " completed" : ""}' onclick='updateTask(task_list,${i})'>${item.name}</button><br>`
                i++;
        }
    })
    displayDiv.innerHTML = task_list_html;
}