const hasTooltip = document.querySelectorAll('.has-tooltip')

hasTooltip.forEach(element => {
    tooltipElem = document.createElement('div')
    tooltipElem.innerHTML = element.title
    tooltipElem.classList.add('tooltip')
    element.insertAdjacentElement('afterend', tooltipElem)
})

hasTooltip.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault()
        const tooltip = element.nextSibling;
        domRect = element.getBoundingClientRect();
        tooltip.style.left = `${domRect.x}px`

        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.toggle('tooltip_active')
        } else {
            document.querySelectorAll('.tooltip_active').forEach(el => {
                el.classList.remove('tooltip_active')
            })
            tooltip.classList.toggle('tooltip_active')
        }
    })
})