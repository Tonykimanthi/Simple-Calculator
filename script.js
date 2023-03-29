const screen = document.getElementById("screen");
const numbers = document.querySelectorAll(".numbers");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const squareRoot = document.querySelector(".square-root");
const percent = document.querySelector(".percent");

squareRoot.addEventListener("click", function(){
    let sqroot = Math.sqrt(screen.value);
    screen.value = sqroot;
});

percent.addEventListener("click", function(){
    let percentEval = screen.value / 100;
    return screen.value = percentEval;
});

numbers.forEach(allNumbers => {
    allNumbers.addEventListener("click", function(event){
        let values = event.target.value;
        return screen.value += values;
    });
});
equal.addEventListener("click", function(){
    if(screen.value == ""){
        return false;
    }else{
        return screen.value = eval(screen.value);
    }
});
clear.addEventListener("click", function(){
    return screen.value = "";
})
del.addEventListener("click", function(){
    screen.value = screen.value.toString().slice(0, -1)
});