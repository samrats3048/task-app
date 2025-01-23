// Global varible and will create an empty array with name tasks

let tasks=[]

//Add task function
function addTask(){

}


//AddTask Function
function addTask(){
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    console.log(task);

    if(task !== ''){
        tasks.push(task);
        console.log(tasks);
        input.value='';
        displayTask();

    }
}

//remove task -- delete button
function removeTask(index){
tasks.splice(index,1);
    displayTask();
}



//Display Tasks 
function displayTask(){
    const taskList= document.getElementById('taskList');
    let html='';
    for(let x=0; x<tasks.length; x++){
        html+= `
        <div class="task-item">
            <span class="task-text"> ${x+1}. ${tasks[x]}</span>
        
        <div calss="button-group">
        
        <button class="delete-btn" onclick="removeTask(${x })">Delete</button>
        </div>
        
         </div>  
        
        `;
    }


    taskList.innerHTML = html;

}