var table = document.getElementById("table")
var getUser =JSON.parse(localStorage.getItem("arr"))
if(getUser !== null){
  
    for (index of getUser) {
        var i = (table.children.length)
        var trElement = document.createElement("tr")
        trElement.innerHTML = "<td>"+ i +"</td><td>"+ index.name.toUpperCase() +"</td> <td>"+ index.class +"</td><td><button type='button' onclick='update(this)'>Update</button></td><td><button onclick='del(this)'>Delete</button></td>"
        table.appendChild(trElement)
    }
    
}
function foo(){
    var getUser =JSON.parse(localStorage.getItem("arr"))
    var name = document.getElementById("name")
    var clas = document.getElementById("class")
    var trElement = document.createElement("tr")
    var i = (table.children.length)
    var obj ={
        name : name.value,
        class : clas.value
    }
    if(getUser == null){
        var arr = []
        arr.push(obj)
        localStorage.setItem("arr",JSON.stringify(arr))
        trElement.innerHTML = "<td>"+ i +"</td><td>"+ name.value.toUpperCase() +"</td> <td>"+ clas.value +"</td><td><button type='button' onclick='update(this)'>Update</button></td><td><button onclick='del(this)'>Delete</button></td>"
        table.appendChild(trElement)
         name.value = ""
         clas.value = ""
    }else{
        getUser.push(obj)
        localStorage.setItem("arr",JSON.stringify(getUser))
        trElement.innerHTML = "<td>"+ i +"</td><td>"+ name.value.toUpperCase() +"</td> <td>"+ clas.value +"</td><td><button type='button' onclick='update(this)'>Update</button></td><td><button onclick='del(this)'>Delete</button></td>"
        table.appendChild(trElement)
         name.value = ""
         clas.value = ""
         
    }
   

    
}
function del(element){
    var getUser = JSON.parse(localStorage.getItem("arr"))
        for (i= 0; i < getUser.length; i++) {
            
                if(getUser[i].name.toUpperCase() == element.parentNode.parentNode.children[1].innerHTML && getUser[i].class == element.parentNode.parentNode.children[2].innerHTML){
                    getUser.splice(i,1)
                    localStorage.setItem("arr",JSON.stringify(getUser))
                }
        }
        element.parentNode.parentNode.remove()
        for(i = 1;i< table.children.length; i++){
        table.children[i].children[0].innerHTML = i
        }
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