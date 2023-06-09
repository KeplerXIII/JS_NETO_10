const btnAdd = document.getElementById('tasks__add')
const tskList = document.getElementById('tasks__list')

btnAdd.addEventListener('click', (event) => {
    event.preventDefault()
    const RawtaskInput = document.getElementById('task__input').value
    const taskInput = RawtaskInput.trim()
    if (taskInput) {
        const elementShell = document.createElement('div')
        elementShell.classList.add('task')
        elementShell.innerHTML = `<div class="task__title">${taskInput}</div><a href="#" class="task__remove">&times;</a>`
        tskList.append(elementShell)
        document.getElementById('task__input').value = ''
        const btnRem = elementShell.querySelector('.task__remove')
        btnRem.addEventListener('click', function(event) {
            event.preventDefault()
            btnRem.parentElement.remove()
        })
    } else {document.getElementById('task__input').value = ''}
})