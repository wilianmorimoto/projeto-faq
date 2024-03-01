let q1 = document.getElementById('q1')
let q2 = document.getElementById('q2')
let q3 = document.getElementById('q3')
let q4 = document.getElementById('q4')
let btnImg1 = document.querySelector('#btn1')
let btnImg2 = document.querySelector('#btn2')
let btnImg3 = document.querySelector('#btn3')
let btnImg4 = document.querySelector('#btn4')

function readMore1() {
    q1.classList.toggle('show')

    if (q1.classList.contains("show")) {
        btnImg1.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
        btnImg1.setAttribute("src", "./assets/images/icon-plus.svg")
    }
}

function readMore2() {
    q2.classList.toggle('show')

    if (q2.classList.contains("show")) {
        btnImg2.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
        btnImg2.setAttribute("src", "./assets/images/icon-plus.svg")
    }
}

function readMore3() {
    q3.classList.toggle('show')

    if (q3.classList.contains("show")) {
        btnImg3.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
        btnImg3.setAttribute("src", "./assets/images/icon-plus.svg")
    }
}

function readMore4() {
    q4.classList.toggle('show')

    if (q4.classList.contains("show")) {
        btnImg4.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
        btnImg4.setAttribute("src", "./assets/images/icon-plus.svg")
    }
}