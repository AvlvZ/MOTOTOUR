"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const galleryColumn = document.querySelectorAll(".gallery__column"),
        popup = document.querySelector(".popup");

    galleryColumn.forEach((item, i) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            popup.classList.add("show");
            createPopup(item.firstElementChild);
        });
    });

    popup.addEventListener("click", (event) => {
        popup.innerHTML = "";
        popup.classList.remove("show");
    })

    function createPopup(image) {
        const elem = document.createElement("div");

        elem.classList.add("popup__body");
        elem.innerHTML = `
        <div class="popup__header">
            <h3 class="popup-header__item">${image.alt}</h3>
        </div>
        <div class="popup__content">
            <img src="${image.src}">
        </div>
        `;

        console.log(image);
        popup.appendChild(elem);
    }
});