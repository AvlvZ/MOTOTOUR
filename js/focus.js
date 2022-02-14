const selectBtn = document.querySelector(".select-outline__btn"),
        selectOutline = document.querySelector(".select__outline"),
        selectBody = document.querySelector(".select__body");


selectOutline.addEventListener("focusin", (event) => {
    event.preventDefault();

    selectBtn.classList.toggle("togglesSelectBtn");
    selectBody.classList.toggle("togglesSelectBody");
});

selectOutline.addEventListener("focusout", (event) => {
    event.preventDefault();

    selectBtn.classList.toggle("togglesSelectBtn");
    selectBody.classList.toggle("togglesSelectBody");
    
});

// selectOutline.addEventListener("click", (event) => {
//     event.preventDefault();

//     if (event.target.classList.contains("select__outline")) {
//                 selectBtn.classList.toggle("togglesSelectBtn");
//                 selectBody.classList.toggle("togglesSelectBody");
//     }
// })