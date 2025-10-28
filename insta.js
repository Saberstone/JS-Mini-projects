let a = document.querySelector("#add");
let b = document.querySelector("h5");

let check = 0;

a.addEventListener("click", function () {
    if (check === 0) {
        b.innerHTML = "Friends";
        b.style.color = "green";
        a.innerHTML = "Remove Friend";
        check = 1;
        

    }else{
        b.innerHTML = "Stranger";
        b.style.color = "red";
        a.innerHTML = "Add Friend";
        check = 0;
    }
})
