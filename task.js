const products = document.querySelectorAll('.product')
const addBtns = document.querySelectorAll('.product__add')
const basket = document.querySelector('.cart__products')


products.forEach(el => {
    el.querySelector('.product__quantity-control_dec').addEventListener ('click', () => {
        const productValue = el.querySelector('.product__quantity-value')
        if (parseInt(productValue.textContent) > 1) {
            productValue.textContent = parseInt(productValue.textContent) - 1
        }
    })
    el.querySelector('.product__quantity-control_inc').addEventListener ('click', () => {
        const productValue = el.querySelector('.product__quantity-value')
        productValue.textContent = parseInt(productValue.textContent) + 1
    })
})

addBtns.forEach(el => {
    el.addEventListener('click', function(event) {
        event.preventDefault()
        let productID = el.closest('.product').getAttribute('data-id')
        let productQty = el.parentElement.querySelector('.product__quantity-value').textContent
        let exstProduct = Array.from(document.querySelectorAll('.cart__product')).find(el => el.dataset.id === productID)
        
        if (parseInt(productQty)>0 && exstProduct){
            let qurQty = exstProduct.querySelector('.cart__product-count').textContent
            exstProduct.querySelector('.cart__product-count').textContent 
            = parseInt(qurQty) + parseInt(productQty)

        } else {
            let imgPath = el.closest('.product').querySelector('.product__image').getAttribute('src')
            let productBasket = document.createElement('div')
            basket.appendChild(productBasket)
            productBasket.classList.add('cart__product')
            productBasket.setAttribute('data-id', productID)
            productBasket.innerHTML = `<img class="cart__product-image" src=${imgPath}><div class="cart__product-count">${productQty}</div><div class="product__del">Удалить</div>`
            productBasket.querySelector('.product__del').addEventListener('click', () => {
                productBasket.remove()
            })}})})
