// initialize/start from
var count = 0;
// select value and button
// querySelector picks the first element if you had two or more classes with same class name
var value = document.querySelector("#value");
var btn = document.querySelectorAll(".btn");
console.log(btn);

// lets use a forEach loop
btn.forEach(function(btn){
    btn.addEventListener("click", function(e){
       var style = (e.currentTarget.classList);
        if(style.contains("decrease")){
            count--;
        }else if(style.contains("increase")){
            count++
        }
            else{
                count=0;
            }
        value.textContent=count;
    })
})
 

