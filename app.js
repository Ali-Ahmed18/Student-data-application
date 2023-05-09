function foo(upt){
    var name = document.getElementById("name")
    var clas = document.getElementById("class")
    var table = document.getElementById("table")
    var trElement = document.createElement("tr")
    var i = (table.children.length)
    if(upt == "upt"){

    }else{
            trElement.innerHTML = "<td>"+ i +"</td><td>"+ name.value.toUpperCase() +"</td> <td>"+ clas.value +"</td><td><button type='button' onclick='update(this)'>Update</button></td><td><button onclick='del(this)'>Delete</button></td>"
   table.appendChild(trElement)
    name.value = ""
    clas.value = ""
    }   
}
function del(element){
    element.parentNode.parentNode.remove()
}

var upDate = document.getElementById("update")
var main = document.getElementsByClassName("main")
var row ;
function update(element){
    row = element
    upDate.children[0].children[0].value = element.parentNode.parentNode.children[1].innerText
    upDate.children[3].children[0].value =element.parentNode.parentNode.children[2].innerText
    main[0].style.opacity = "0.5"
    upDate.style.display = "block"
}
function ok(){
    main[0].style.opacity = "1"
    upDate.style.display = "none"
  row.parentNode.parentNode.children[1].innerHTML = upDate.children[0].children[0].value.toUpperCase()
  row.parentNode.parentNode.children[2].innerHTML = upDate.children[3].children[0].value
}