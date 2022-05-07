const elementLivePreview = document.querySelector(".rounded-item");
const changeSizeOfElement = document.querySelector(".rounded-item_change-size");
const elementChangeSizePanel = document.querySelector(".round-item-size-inputs");
const inputSizeElements = document.querySelectorAll(".input-value");
const buttonCopyToClipboard = document.querySelector(".button-copy-code");
const copyNotification = document.querySelectorAll(".copy-notification");
const closeCopyNotificationBtn = document.querySelectorAll(".close-notification");
const resetValuesOfInputs = document.querySelector('.generic-button-style.reset-values');
changeSizeOfElement.addEventListener("click", ()=>{
    elementChangeSizePanel.classList.toggle("active");
});
inputSizeElements.forEach((sizeInput)=>{
    sizeInput.addEventListener("input", ()=>{
        if (sizeInput.value.length > 3) sizeInput.value = sizeInput.value.slice(0, 3);
        const placeName = sizeInput.dataset.place;
        elementLivePreview.style[placeName] = `${sizeInput.value}px`;
    });
});
buttonCopyToClipboard.addEventListener("click", ()=>{
    if (copyNotification[0].classList.contains('active')) copyNotification[0].classList.remove('active');
    const stringPropertiesWithValuesOfElement = `
width: ${elementLivePreview.style.width};
height: ${elementLivePreview.style.height};
border-top-left-radius: ${elementLivePreview.style.borderTopLeftRadius};
border-top-right-radius: ${elementLivePreview.style.borderTopRightRadius};
border-bottom-left-radius: ${elementLivePreview.style.borderBottomLeftRadius};
border-bottom-right-radius: ${elementLivePreview.style.borderBottomRightRadius};
    `;
    navigator.clipboard.writeText(stringPropertiesWithValuesOfElement).then(()=>{
        if (copyNotification[1].classList.contains('active')) copyNotification[1].classList.remove('active');
        copyNotification[0].classList.add("active");
    });
});
closeCopyNotificationBtn.forEach((closeButton)=>{
    closeButton.addEventListener('click', ()=>{
        const currentParent = closeButton.closest(".copy-notification");
        currentParent.classList.remove('active');
    });
});
resetValuesOfInputs.addEventListener('click', ()=>{
    inputSizeElements.forEach((input)=>{
        input.value = '';
    });
});

//# sourceMappingURL=index.c719088e.js.map
