const changeSizeOfElement = document.querySelector('.rounded-item_change-size');
const changeSizePanel = document.querySelector('.round-item-size-inputs');
const elementPreview = document.querySelector('.rounded-item');
const inputSizeValues = document.querySelectorAll('.input-value');
const buttonCopyToClipboard = document.querySelector('.button-copy-code');
const copyNotification = document.querySelector('.copy-notification');

changeSizeOfElement.addEventListener('click', () => {
    changeSizePanel.classList.toggle('active');
});

const elementPreviewDetails = {};
inputSizeValues.forEach(sizeInput => {
    sizeInput.addEventListener('input', () => {
        if (sizeInput.value.length > sizeInput.dataset.maxvalue) {
            sizeInput.value.slice(0, sizeInput.dataset.maxvalue)
        }
        sizeInput.addEventListener("input", () => {
            const maxChars = sizeInput.max.length
            if (sizeInput.value.length > maxChars) {
              sizeInput.value = sizeInput.value.slice(0, maxChars);
            }
          });
        const placeName = sizeInput.dataset.place;
        const addedInfo = elementPreview.style[placeName] = `${sizeInput.value}px`;
        elementPreviewDetails[placeName] = addedInfo;
        consoleg.log(elementPreviewDetails)
        for (const key in elementPreviewDetails) {
            const objectKey = key.toLocaleLowerCase().split().join('-');
        }
    });
});


buttonCopyToClipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(JSON.stringify(elementPreviewDetails)).then(() => {
        copyNotification.classList.add('active');
        copyNotification.addEventListener('click', () => {
            copyNotification.classList.remove('active')
        })
    })
});