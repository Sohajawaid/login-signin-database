
  

var a = document.getElementById('main')

var inpu = document.getElementById("inp")



function create (){
    var p = document.createElement('p')
    p.setAttribute('class','practice')
    p.setAttribute('id','p1')
    console.log(p)
    a.appendChild(p)
    console.log(inpu.value)
    p.innerHTML = inpu.value
     var x = document.createElement("BUTTON")
    var txt = document.createTextNode('hello')
    x.setAttribute('onclick','delfunction(this)')
    // x.appendChild("button")
    x.innerHTML = "Delete Button"
    p.appendChild(x)
    yu.innerHTML = "Edit button"
    z.appendChild(yu)    
}

function deletAll(){
   a.innerHTML = ""
   console.log(deletAll)
}

function delfunction (ele){
   var a = ele.parentElement
   a.remove()

}

// var editBtn = document.createElement("button");
//  editBtn.textContent = "Edit";
//   editBtn.style.backgroundColor = "#007bff";
//    editBtn.onclick = function () { editTask(li); };

//    function editTask(li) { var currentText = li.firstChild.textContent;
//        var newValue = prompt("Edit task:", currentText)}; 
//        if (newValue !== null && newValue !== "") {
//           li.firstChild.textContent = newValue; }
