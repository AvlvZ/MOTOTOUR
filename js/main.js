"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const catalogsTour = document.querySelectorAll(".catalog__item"),
        catalogImgItem = document.querySelectorAll(".childParallax"),
        blockForCatalog = document.querySelectorAll(".catalog__block"),
        cartCatalog = document.querySelectorAll(".cart-catalog"),
        counterCartCatalog = document.querySelectorAll(".cart-catalog-catalog__item"),
        selectBodyItem = document.querySelectorAll(".select-body__item"),
        selectOutlineText = document.querySelector(".select-outline__text"),
        catalogBlogTexts = document.querySelectorAll(".catalog-blog__text");
        

    catalogsTour.forEach((item, i) => {
        if(i % 2 === 1) {
            blockForCatalog[i].classList.add("right");
        }
    });

    cartCatalog.forEach((item, i) => {
        if(i % 2 === 1) {
            catalogBlogTexts[i].classList.add("left");
        }
    })

    cartCatalog.forEach((item, i) => {
        if(i % 2 === 1) {
            cartCatalog[i].classList.add("reverse");
        }

        if (i <= 10) {
            counterCartCatalog[i].innerText = `0${i + 1}`;
        } else {
            counterCartCatalog[i].innerText = i + 1;
        }
    });

    selectBodyItem.forEach((item, i) => {
        item.addEventListener("click", () => {
            selectOutlineText.innerText = item.textContent;
        })
    });

    catalogImgItem.forEach(item => {
        item.addEventListener("mousemove", (event) => {
            item.style.transform = `translateX(${event.clientX / 100}px)`;
        });
    })

    function maskPhone(selector, masked = '+7 (___) ___-__-__') {
        const elems = document.querySelectorAll(selector);
    
        function mask(event) {
            const keyCode = event.keyCode;
            const template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            // console.log(template);
            let i = 0,
                newValue = template.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i !== -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }
    
        }
    
        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }   
    }
    maskPhone(".form-phone__item");
});
