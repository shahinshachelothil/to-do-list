const inputBox = document.getElementById("inp-box");
const list = document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("You Must Write Something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value="";
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("check");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// Save Data On Locally

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
}

showData();