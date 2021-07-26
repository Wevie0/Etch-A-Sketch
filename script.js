let size = 16;

function drawPixels() {
    const container = document.querySelector("#container")
    container.textContent = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let pixel = document.createElement('div');
            pixel.classList.add("unfilled");
            container.appendChild(pixel);
        }
    }
}

container.addEventListener("mouseover", function (event) {
    if (event.target.id !== "container") {
        event.target.classList.add("filled");
    }
});

function clearScreen() {
    /*
    // Redundant with line 5
    let pixels = container.childNodes;
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].classList.remove("filled");
    }
    */

    size = parseFloat(prompt("Enter the new side length of the grid."));
    while (size > 64 || size < 1) {
        size = parseInt(prompt("Please enter a size between 1 and 64, inclusive"));
    }
    // Total size of grid is 320 pixels
    // 320 / num pixels per side = size of pixel
    let variables = document.documentElement;
    variables.style.setProperty('--num-pixels', size);
    variables.style.setProperty('--pixel-size', parseFloat(320 / size) + 'px');
    console.log(size, 320 / size);
    drawPixels();
}

const button = document.querySelector("#clear");
button.onclick = clearScreen;

drawPixels();