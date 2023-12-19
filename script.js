 //Create a delete button and append it each task 
var list=document.getElementsByTagName("li");
var i;
for(i=0;i<list.length;i++){
    var span=document.createElement("SPAN");
    var delbtn=document.createTextNode("\u00D7");
    span.className="delete";
    span.appendChild(delbtn);
    list[i].appendChild(span);
}
//Click on delete button to delete the current task
 
var deleteButton=document.getElementsByClassName("delete");
var i;
for(i=0; i<deleteButton.length;i++){
    deleteButton[i].onclick=function(){
        var div=this.parentElement;
        div.style.display = "none";
    }
}
//Add checked symbol on clicking
var checkList = document.getElementById('taskList');

//var checkList=document.querySelector('taskList');
checkList.addEventListener('click', function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    }
},false);


//Create a new task list item 
function newTaskElement(){
    var li=document.createElement("li");
    var newTask=document.getElementById("newTask").value;
    var t=document.createTextNode(newTask);
    li.appendChild(t);
    if(newTask===''){
        alert("You must Add Task Description");
    }else{
        document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("newTask").value="";

    var span=document.createElement("SPAN");
    var delbtn=document.createTextNode("\u00D7");
    span.className="delete";
    span.appendChild(delbtn);
    li.appendChild(span);

    for(i=0; i<deleteButton.length; i++){
        deleteButton[i].onclick= function() {
            var div=this.parentElement;
            div.style.display="none";
        }
    }
}
