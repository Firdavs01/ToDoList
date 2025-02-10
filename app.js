"use strict"

const inputElement = document.getElementById('middle__input');
const listElement = document.getElementById('middle__list');
const createBtn = document.getElementById('create__btn');

const notes = [
    {
        title: 'Hello World',
        completed: false
    },
    {
        title: 'yuyuyuhuv',
        completed: false
    }
]

function render() {
    listElement.innerHTML = ''

    if (listElement.length === 0) {
        let message = `<p>Нет заметок</p>`
        listElement.innerHTML = message
    }

    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', createList(notes[i], i))
    }
}

render()

createBtn.onclick = () => {

    const newNote = {
        title: inputElement.value,
        completed: false
    }

    if (inputElement.value === '') {
        return;
    } else if (inputElement.value.length <= '1') {
        alert('Хей Бро ты должен написать cлово в который должен в себе содержать больше 1 буквы');
        clearInput()
        return;
    } else if (inputElement.value.length >= '50') {
        alert('вы достигли лимита');
        clearInput()
        return;
    }

    notes.push(newNote);
    render()

    clearInput()
}

listElement.onclick = (event) => {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toogle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }

        render()
    }
}

// inputElement.addEventListener('keydown', (event) => {

//     if (event.key === 'Enter') {
//         listElement.insertAdjacentHTML('beforeend', createList(notes[i], i))
//     }

// })

function createList(note, index) {
    return `
        <li class="middle__item">
            <div class="together">
                <span>${note.title}</span>

                <span class="middle__item-btns">
                    <span class="middle__item-btn" data-index="${index}" data-type="toggle">-</span>
                    <span class="middle__item-btn" data-index="${index}" data-type="remove">X</span>
                </span>
            </div>

            <div class="bottom__line"></div>
        </li>    
    `
}

function clearInput() {
    inputElement.value = ''
}
