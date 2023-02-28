var todovalue = document.getElementById("newTodoInput");
var btn = document.getElementById("newTodoBtn");
var ol = document.getElementById("todoList");

function addtodo(){
	if(todovalue.value){
		// we need to create a li
		var li = document.createElement('li');
		li.textContent = todovalue.value;
		ol.appendChild(li);
		todovalue.value = "";
	}
}

btn.addEventListener('click',addtodo);