const container = document.querySelector("#container")
let size = 16;
for (let i = 0; i < size; i++)
{
    for (let j = 0; j < size; j++)
    {
        let pixel = document.createElement('div');
        pixel.classList.add("unfilled");
        container.appendChild(pixel);
    }
}

container.addEventListener("mouseover", function(event)
{
    if (event.target.id !== "container")
    {
        event.target.classList.add("filled");
    }
});

function clearScreen()
{   
    let pixels = container.childNodes;
    for (let i = 0; i < pixels.length; i++)
    {
        pixels[i].classList.remove("filled");
    }
}

const button = document.querySelector("#clear");
button.onclick = clearScreen;