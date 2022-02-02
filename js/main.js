"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const catalogsTour = document.querySelectorAll(".catalog__item"),
        blockForCatalog = document.querySelectorAll(".catalog__block")

    catalogsTour.forEach((item, i) => {
        if(i % 2 === 1) {
            blockForCatalog[i].classList.add("right");
        }
    })

})