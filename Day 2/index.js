let btn = document.getElementById("button-last");

btn.addEventListener("click", ()=> {
    if (btn.innerText == "Click me!") {
        btn.innerText = "Thanks!";
    }
    else {
        btn.innerText = "Click me!";
    }
})