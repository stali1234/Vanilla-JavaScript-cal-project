var allButtons = document.getElementById("all-buttons");
var screent = document.getElementById("screen");
screent.value = "0";
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
        case '=':
            var equation = calculatObj.result+ calculatObj.clickedButton;
            calculatObj.result = eval(equation);
            calculatObj.clickedButton = "";
            screent.value = calculatObj.result.toFixed(2);
            calculatObj.result = String(calculatObj.result);

            break;
        case 'AC':
          calculatObj.clickedButton = "";
          calculatObj.result = ""; 
          screent.value = "0";
          break;
 
        default: 
            calculatObj.clickedButton = calculatObj.clickedButton + buttonValue;
            screent.value = calculatObj.clickedButton
            break;

                 
    }
}