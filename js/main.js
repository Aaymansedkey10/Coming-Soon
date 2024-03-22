let day = document.querySelector(".number-days");
let hour = document.querySelector(".number-hours");
let minute = document.querySelector(".number-minutes");
let second = document.querySelector(".number-seconds");
let submit = document.querySelector(".submit-form");
let input = document.querySelector(".input-value").Value;
let btnsubmit = document.querySelector(".btn-submit");
// values 
let dayValue = 1;
let hoursValue = 24;
let minValue = 60;
let secValue = 60;
let  timeFunction =
 setInterval(()=>{
    secValue -- ;
    if (secValue === 0) {
        minValue --;
        secValue =60
    }
    if (minValue === 0) {
        hoursValue -- ;
        minValue = 60 ;
    }
    if (hoursValue === 0) {
        dayValue -- ;
        hoursValue = 24 ;
    }
    if (dayValue === 0) {
        clearInterval(timeFunction)
    }   
    second.textContent = secValue; // > 65 ? `0${secValue}` : secValue ;
    minute.textContent = minValue; //> 65 ? `0${minValue}` : minValue ;
    hour.textContent=hoursValue; // > 30 ? `0${hoursValue}` : hoursValue;
    day.textContent = dayValue; //> 0 ? `0${dayValue}` : dayValue;
}, 1000);


