var allButtons = document.getElementById("all-buttons");
allButtons.addEventListener("click",  (event)=>{
    
    const isbutton = event.target.nodeName  === "BUTTON";
    if(!isbutton){
        alert("this is not a button");
        return;
    }
    // if its a button then
    // value of button
    alert(event.target.value);
});