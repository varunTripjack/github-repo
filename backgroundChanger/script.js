const body = document.body;
const btn = document.querySelector("button");


const id = setInterval(() => {
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const rgb = `rgb(${red}, ${blue}, ${green})`;
    // console.log(rgb);
    body.style.background = rgb;
}, 1000);


btn.addEventListener("click", () => {
    clearInterval(id);
    btn.textContent = body.style.background;
});

