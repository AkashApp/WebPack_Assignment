import "./index.css";

let logo= document.createElement('img');
logo.src="https://cdn3.vectorstock.com/i/thumb-large/19/77/isolated-abstract-blue-color-thumb-up-contour-logo-vector-10861977.jpg";
document.getElementById("logo").appendChild(logo);

let input1= document.createElement("input");
input1.placeholder="Title";
input1.type="text";

let input2= document.createElement("input");
input2.placeholder="Content";
input2.type="text";

let but= document.createElement("button");
but.innerText="Done";

document.getElementById("inputContainers").append(input1,input2,but);


but.addEventListener("click", ()=>{
    let div = document.createElement("div");

    let h1= document.createElement("h1");
    let h3= document.createElement("h3");

    h1.innerText= input1.value;
    h3.innerText= input2.value;

    let button= document.createElement("button");
    button.innerText= "Delete";

    button.addEventListener("click", ()=>{
        div.innerHTML=null;
    })

    div.append(h1,h3,button);
    document.getElementById("outputShow").append(div);

    input1.value="";
    input2.value="";
});

let d= document.getElementById("view");
d.setAttribute("id", "view");

