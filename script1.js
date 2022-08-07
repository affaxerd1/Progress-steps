const progress=document.getElementById("progress");
const circles=document.querySelectorAll(".circle");
const prev=document.getElementById("previous");
const next=document.getElementById("next");


let currentvalue=1;

next.addEventListener("click", function(){
    currentvalue++;

    if(currentvalue>circles.length){
        currentvalue=circles.length;
        console.log(currentvalue);
    };
    update();
    
});

prev.addEventListener("click", function(){
    currentvalue--;
    if(currentvalue<1){
    currentvalue=1;
    console.log(currentvalue);
   
    
    };
    update();
    
});

function update(){
    circles.forEach(function (circle, idx){
        if (idx<currentvalue){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        };
    });

    const active=document.querySelectorAll(".active");
    progress.style.width=(active.length-1)/(circles.length-1) * 100+"%";

    if (currentvalue===1){
        prev.disabled=true;
    }

    else if (currentvalue===circles.length)
    {
        next.disabled=true;
    } else  {
        prev.disabled=false;
        next.disabled=false;
    };


};

