const gridButtons = document.querySelectorAll(".grid-object");
gridButtons.forEach(button => {
    button.addEventListener("click", () => {(button as HTMLElement).className = "grid-object-clicked"});
});