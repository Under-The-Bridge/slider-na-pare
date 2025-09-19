let panels = document.getElementsByClassName("panels");
let points  = document.getElementById("points")
let point  = document.getElementsByClassName("point");
let slider = document.getElementById("slider");

let currnetPanel = 1;

let leftButton = document.getElementById("buttonLeft");
let rightButton = document.getElementById("buttonRight");

function CreateButtons(){
    for(i = 0; i < slider.children.length; i++){
        let button = document.createElement("button");
        button.innerText = i + 1;
        button.setAttribute('onclick', `clickButton(${i+1})`)
        points.append(button);
    }
}
CreateButtons();


let buttons = document.querySelectorAll("#points>button");




leftButton.addEventListener("click", ()=>{
    currnetPanel--;
    changePanel()
})
rightButton.addEventListener("click", ()=>{
    currnetPanel++;
    changePanel()
})

function colorizeButtons(){
    for(i = 0; i < slider.children.length; i++) buttons[i].style.background = "white";
    for(i = 0; i < slider.children.length; i++) buttons[i].style.color = "black";
    buttons[currnetPanel - 1].style.background = "black";
    buttons[currnetPanel - 1].style.color = "white";
}

function changePanel(){
    if(currnetPanel == 0){
        currnetPanel = slider.children.length;
    }
    if(currnetPanel == slider.children.length  + 1){
        currnetPanel = 1;
    }
    for(i = 0; i < slider.children.length; i++) panels[i].style = `transform: translateX(-${currnetPanel-1}000px);`
    colorizeButtons();
}

function clickButton(num){
    currnetPanel = num;
    changePanel()
}

setInterval(()=>{
        currnetPanel++;
    if(currnetPanel == slider.children.length){
        currnetPanel = 1;
    }
    changePanel()
}, 10000);


changePanel()