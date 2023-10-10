var allButtons = document.getElementById("all-buttons");
var calculatObj = {clickedButton:"",result:""};
allButtons.addEventListener("click",  (event)=>{
    
    const isbutton = event.target.nodeName  === "BUTTON";
    if(!isbutton){
        alert("this is not a button");
        return;
    }
    // if its a button then
    // value of button
    var buttonValue = event.target.value;
    whichButtonClicked(buttonValue);
    
});

function whichButtonClicked(buttonValue){

    switch(buttonValue){
        case 'AC':
          calculatObj.clickedButton = "";
          calculatObj.result = ""; 
          alert(calculatObj.result)   
          break;
 
        default: 
            calculatObj.clickedButton = calculatObj.clickedButton + buttonValue;
            alert(calculatObj.clickedButton);
            break;

                 
    }
}