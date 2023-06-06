const hasTooltip = document.querySelectorAll('.has-tooltip')

hasTooltip.forEach(element => {
    tooltipElem = document.createElement('div')
    tooltipElem.innerHTML = element.title
    tooltipElem.classList.add('tooltip')
    tooltipElem.setAttribute('data-position', 'top')
});

hasTooltip.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault()
        if (element.querySelector('.tooltip_active')) {
            element.querySelector('.tooltip').classList.toggle('tooltip_active')
        } else {
            document.querySelectorAll('.tooltip_active').forEach(el => {
                el.classList.remove('tooltip_active')
            })
            element.querySelector('.tooltip').classList.toggle('tooltip_active')
        }
    })
})