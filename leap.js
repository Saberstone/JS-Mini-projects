let check = document.querySelector("#btn");
let input = document.querySelector("#date");
let msg = document.querySelector("#msg");

check.addEventListener("click",function(){
    if (Number (input.value) % 4 === 0){
        msg.innerText = "Leap Year";
        msg.style .color = "green";
    } else {
        msg.innerText = "Not Leap Year";
        msg.style .color = "red";;
    }
})