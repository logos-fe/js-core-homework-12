const openBtn = document.querySelector('.open-me-btn'),
    modal = document.querySelector('.modal-overlay'),
    modalWindow = modal.querySelector('.modal-window'),
    modalTite = modalWindow.querySelector('div');

openBtn.addEventListener('click', () => {
    modal.classList.remove('unavailable');
});

modal.addEventListener('click', (event) => {
    if (event.target.closest('.close-window')) {
        modal.classList.add('unavailable');
    }
    if (!event.target.closest('.modal-window')) {
        modal.classList.add('unavailable');
    }
});

modalWindow.addEventListener('mouseover', () => {
    modalTite.innerHTML = 'Хочеш знати який?';
    modalWindow.style.backgroundColor = '#FAC898';
});

modalWindow.addEventListener('mouseleave', () => {
    modalTite.innerHTML = 'У мене є секрет!';
    modalWindow.style.backgroundColor = '#C3B1E1';
});

modalWindow.addEventListener('mousedown', () => {
    modalTite.innerHTML = 'А я тобі не скажу!';
    modalWindow.style.backgroundColor = '#F86E84';
});

modalWindow.addEventListener('mouseup', () => {
    modalTite.innerHTML = 'Хочеш знати який?';
    modalWindow.style.backgroundColor = '#FAC898';
});
