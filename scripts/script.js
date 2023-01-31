const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);
    targetSection !== "#about" ?
        card.classList.add("is-active") :
        card.classList.remove("is-active");
    card.setAttribute("data-state", targetSection);
    sections.forEach(s => s.classList.remove("is-active"));
    buttons.forEach(b => b.classList.remove("is-active"));
    e.target.classList.add("is-active");
    section.classList.add("is-active");
};

buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

document.getElementById("contact-me").onclick = function() {
    window.location.href = "https://www.facebook.com/";
};

var play = false;
var myAudio = document.getElementById("lesson");

myAudio.volume = 0.5;

function onKeyDown(event) {
    switch (event.keyCode) {
        case 32:
            if (play) {
                myAudio.pause();
                play = false;
            } else {
                myAudio.play();
                play = true;
            }
            break;
    }
    return false;
}

window.addEventListener("keydown", onKeyDown, false);

// To disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

// To disable F12 options
document.onkeypress = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        alert('Xin lỗi bạn hí hí, mình tắt phím này rồi!!');
        return false;
    }
}
document.onmousedown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        alert('Xin lỗi bạn hí hí, mình tắt phím này rồi!!');
        return false;
    }
}
document.onkeydown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        alert('Xin lỗi bạn hí hí, mình tắt phím này rồi!!');
        return false;
    }
}

// To To Disable ctrl+c, ctrl+u

jQuery(document).ready(function($) {
    $(document).keydown(function(event) {
        var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();

        if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
            alert('Xin lỗi bạn hí hí, mình tắt tổ hợp phím này rồi!!');
            //disable key press porcessing
            return false;
        }
        if (event.ctrlKey && event.shiftKey && (pressedKey == "i")) {
            alert('Xin lỗi bạn hí hí, mình tắt tổ hợp phím này rồi!!');
            //disable key press porcessing
            return false;
        }
    });
});
// Clock
const deg = 6;
const hr =document.querySelector('#hr');
const mn =document.querySelector('#mn');
const sc =document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
})
document.getElementById('clock').innerHTML =
hours+ "  :  " + minutes + "  :  " + seconds + " " +amPm;
var t = setTimeout(realtimeClock,500);