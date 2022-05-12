"use strict";
const elementLivePreview = document.querySelector(".live-preview-component");
const changeSizeOfElementBtn = document.querySelector(".live-preview-component_change-size");
const elementChangeSizePanel = document.querySelector(".live-preview-component_input-sizes");
const inputSizeElements = document.querySelectorAll(".input-element");
const buttonCopyToClipboard = document.querySelector(".button-copy-code");
const copyNotification = document.querySelector(".copy-pop-up");
const closeCopyNotification = document.querySelector(".copy-pop-up_close");
const resetValuesOfInputs = document.querySelector(".clear-inputs");
const checkElementStyle = (styleName) =>  styleName || 0;

changeSizeOfElementBtn.addEventListener("click", () => {
    elementChangeSizePanel.classList.toggle("active");
});

inputSizeElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
        const propertyName = inputElement.dataset.place;
        const onlyNumberRegExp = new RegExp("[0-9]");
        if (onlyNumberRegExp.test(inputElement.value)) {
            inputElement.value = inputElement.value.slice(0, 3);
            elementLivePreview.style[propertyName] = `${inputElement.value}px`;
        } else {
            inputElement.value = '';
        }
    });
});

buttonCopyToClipboard.addEventListener("click", () => {
    const stringStylesOfElement = `width: ${elementLivePreview.offsetWidth}px;
    height: ${elementLivePreview.offsetHeight}px;
    border-radius: ${checkElementStyle(elementLivePreview.style.borderTopLeftRadius)} ${checkElementStyle(
        elementLivePreview.style.borderTopRightRadius
    )} ${checkElementStyle(elementLivePreview.style.borderBottomLeftRadius)} ${checkElementStyle(
        elementLivePreview.style.borderBottomRightRadius
    )};
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
