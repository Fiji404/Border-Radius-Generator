const changeSizeOfElement = document.querySelector('.rounded-item_change-size');
const changeSizePanel = document.querySelector('.round-item-size-inputs');
const elementPreview = document.querySelector('.rounded-item');
const elementSizeValues = document.querySelectorAll('.input-value.size');
const leftTopRadiusValue = document.querySelector('.input-value.top-left-radius')
const rightTopRadiusValue = document.querySelector('.input-value.top-right-radius')
const bottomLeftRadiusValue = document.querySelector('.input-value.bottom-left-radius')
const bottomRightRadiusValue = document.querySelector('.input-value.bottom-right-radius')

changeSizeOfElement.addEventListener('click', () => {
    changeSizePanel.classList.toggle('active');
})

elementSizeValues.forEach(sizeInput => {
    sizeInput.addEventListener('input', () => {
        const dimensionName = sizeInput.getAttribute('data-dimension');
        elementPreview.style[dimensionName] = `${sizeInput.value}px`
    })
})
