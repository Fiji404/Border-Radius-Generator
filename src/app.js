const changeSizeOfElement = document.querySelector('.rounded-item_change-size');
const changeSizePanel = document.querySelector('.round-item-size-inputs');
const elementPreview = document.querySelector('.rounded-item');
const inputSizeValues = document.querySelectorAll('.input-value');

changeSizeOfElement.addEventListener('click', () => {
    changeSizePanel.classList.toggle('active');
});

inputSizeValues.forEach(sizeInput => {
    sizeInput.addEventListener('input', () => {
        const placeName = sizeInput.dataset.place;
        elementPreview.style[placeName] = `${sizeInput.value}px`;
    });
});


