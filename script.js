//your JS code here. If required.
let para = document.querySelector("#status");
let btn = document.querySelector("#enterBtn");

btn.addEventListener("click", () => {
    let head = document.createElement("h1");
    head.textContent = "Entered Metaverse";

    if (para) {
        para.replaceWith(head); // Replaces <p> with <h1>
    }
});