/** @type {NodeListOf<HTMLElement>} */
const gridButtons = document.querySelectorAll(".grid-object");

gridButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.className = "grid-object-clicked";
    });
});