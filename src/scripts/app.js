"use strict";
const elementLivePreview = document.querySelector(".live-preview-component");
const changeSizeOfElementBtn = document.querySelector(".live-preview-component_change-size");
const elementChangeSizePanel = document.querySelector(".live-preview-component_input-sizes");
const inputSizeElements = document.querySelectorAll(".input-element");
const buttonCopyToClipboard = document.querySelector(".button-copy-code");
const copyNotification = document.querySelector(".copy-pop-up");
const closeCopyNotification = document.querySelector(".copy-pop-up_close");
const resetValuesOfInputs = document.querySelector(".generic-button-style.clear-inputs");

changeSizeOfElementBtn.addEventListener("click", () => {
    elementChangeSizePanel.classList.toggle("active");
});

inputSizeElements.forEach((sizeInput) => {
    sizeInput.addEventListener("input", () => {
        const onlyNumberRegExp = new RegExp("[0-9]");
        if (onlyNumberRegExp.test(sizeInput.value)) {
            const placeName = sizeInput.dataset.place;
            elementLivePreview.style[placeName] = `${sizeInput.value}px`;
            sizeInput.value = sizeInput.value.slice(0, 3);
        } else {
            sizeInput.value = sizeInput.value.slice(0, 0);
        }
    });
});

const isStyleExist = (styleName) => {
    return styleName ? styleName : 0;
};

buttonCopyToClipboard.addEventListener("click", () => {
    const stringStylesOfElement = `
width: ${elementLivePreview.offsetWidth}px;
height: ${elementLivePreview.offsetHeight}px;
border-radius: ${isStyleExist(elementLivePreview.style.borderTopLeftRadius)} ${isStyleExist(
        elementLivePreview.style.borderTopRightRadius
    )} ${isStyleExist(elementLivePreview.style.borderBottomLeftRadius)} ${isStyleExist(
        elementLivePreview.style.borderBottomRightRadius
    )}
    `;
    navigator.clipboard.writeText(stringStylesOfElement).then(() => {
        copyNotification.classList.add("active");
    });
});

closeCopyNotification.addEventListener("click", () => {
    copyNotification.classList.remove("active");
});

resetValuesOfInputs.addEventListener("click", () => {
    inputSizeElements.forEach((input) => {
        input.value = "";
        elementLivePreview.removeAttribute("style", "");
    });
});
