let btn = document.querySelector("button");
let para = document.querySelector("#msg");
// let dob = document.querySelector("#dob");

btn.addEventListener("mousemove",function(){
    btn.style.fontWeight= "bold";
})
btn.addEventListener("mouseleave",function(){
    btn.style.fontWeight = "normal";
})

btn.addEventListener("click",function(){
    let dob = document.querySelector("#dob").value ;
    if(!dob){
        para.innerText = "Please Enter Your Date of Birth";
        return;
    }
    let dobDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if(days < 0){
        months--;
        let prevMonths = new Date(today.getFullYear(),today.getMonth(),0);
        days += prevMonths.getDate();

    }
    if(months < 0){
        years--;
        months = months+ 12;
    }
    para.innerText = `You are :${years} years, ${months} months,${days} days old`;
    

})

