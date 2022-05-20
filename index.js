let textOne = document.querySelector('.disp-box')
let strOne = document.querySelector('#tex')

textOne.addEventListener("mouseover", func, false);
textOne.addEventListener("mouseout", func1, false);
textOne.addEventListener("mousedown", func2, false);
textOne.addEventListener("mouseup", func3, false);

function func() {
    strOne.innerHTML = '“Хочеш знати який”'
    textOne.setAttribute("style", "background-image:url(./img/2.jpg)")
}
function func1() {
    strOne.innerHTML = '“У мене є секрет!”'
    textOne.setAttribute("style", "background-image:url(./img/1.jpg)")
}
function func2() {
    strOne.innerHTML = '“А я тобі не скажу”'
    textOne.setAttribute("style", "background-image:url(./img/3.jpg)")
}
function func3() {
    strOne.innerHTML = '“Хочеш знати який”'
    textOne.setAttribute("style", "background-image:url(./img/2.jpg)")
}

// let openW = document.querySelector('.box')
// let btn = document.querySelector('#click')
// let closeBtn = document.querySelector('#clo')

// btn.addEventListener('click', () => {
//     open();
// })
// closeBtn.addEventListener('click', () => {
//     close();
// })
// function open() {
//     openW.setAttribute("style", "opacity: 1")
//     openW.setAttribute("style", "visibility: visible")
// }
// function close() {
//     openW.setAttribute("style", "opacity: 0")
//     openW.setAttribute("style", "visibility: hidden")
// }