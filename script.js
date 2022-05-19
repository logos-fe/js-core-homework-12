const button = document.querySelector('.open-btn');
const pop = document.querySelector('.popdown');
const cross = document.querySelector('.cross');
const text = document.querySelector('.text');
const back = document.querySelector('.back')

button.onclick = () => {
   pop.classList.add('popup');
   back.classList.add('back-on')
}

cross.onclick = () => {
   pop.classList.remove('popup');
   back.classList.remove('back-on')
}

back.addEventListener('click', (event) => {
   if (event.target.id === 'block'){
      return false
   } else {
      pop.classList.remove('popup');
      back.classList.remove('back-on')
   }
})

pop.onmouseover = () => {
   pop.classList.add('yellow');
   text.textContent = 'Хочеш знати який?'
}
pop.onmouseout = () => {
   pop.classList.remove('yellow');
   text.textContent = 'У мене є секрет!'
}
pop.onmousedown = () => {
   pop.classList.add('coral');
   text.textContent = 'А я тобі не скажу)'
}
pop.onmouseup = () => {
   pop.classList.remove('coral');
   text.textContent = 'Хочеш знати який?'
}