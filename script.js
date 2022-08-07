const progress=document.getElementById("progress");
const circles=document.querySelectorAll(".circle");
const prev=document.getElementById("previous");
const next = document.getElementById("next");

let current=1;

next.addEventListener("click", function(){
    current++;
    if (current>circles.length){
        current=circles.length;
    }
    update();
});

prev.addEventListener("click",function(){

current--;

if(current<1){
    currentActive=1;
}
update();
});

function update(){
    circles.forEach(function (circle, idx) {
            if (idx < current) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }

        });
};







