let listCont=document.getElementById("list-container")
let input=document.getElementById("input")
function addTask(){
    if(input.value==""){
        alert('You must write something');
    }else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        listCont.append(li)
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    input.value=""
    saveData();
}
listCont.addEventListener("click",(e)=>{
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove()
        saveData();
    }
},false)
function saveData(){
    localStorage.setItem("data",listCont.innerHTML)
}
function showData(){
    listCont.innerHTML=localStorage.getItem("data");
}
showData()