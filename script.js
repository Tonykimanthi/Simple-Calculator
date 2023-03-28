const screen = document.getElementById("screen");
const numbers = document.querySelectorAll(".numbers");
// const operators = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");

numbers.forEach(allNumbers => {
    allNumbers.addEventListener("click", function(event){
        let values = event.target.value;
        screen.value += values;
    });
});
equal.addEventListener("click", function(){
    if(screen.value == ""){
        screen.value = "";
    }else{
        screen.value = eval(screen.value);
    }
});




