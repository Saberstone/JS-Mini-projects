let box1 = document.querySelector(".box1");
let boxImage1 = document.querySelector(".box1 img");
let box2 = document.querySelector(".box2");
let boxImage2 = document.querySelector(".box2 img");
let box3 = document.querySelector(".box3");
let boxImage3 = document.querySelector(".box3 img");



box1.addEventListener("mousemove",function(dets){
    boxImage1.style.opacity = 1;
     boxImage1.style.left = dets.x + "px";
    boxImage1.style.top = dets.y + "px";
})
box1.addEventListener("mouseleave",function(dets){
    boxImage1.style.opacity = 0;
})


box2.addEventListener("mousemove",function(){
    boxImage2.style.opacity = 1;
})
box2.addEventListener("mouseleave",function(){
    boxImage2.style.opacity = 0;
})

box3.addEventListener("mousemove",function(dets){
    boxImage3.style.opacity = 1;
})
box3.addEventListener("mouseleave",function(dets){
    boxImage3.style.opacity = 0;
})