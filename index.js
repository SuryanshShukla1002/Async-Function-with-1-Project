const randomcolor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const startchangingcolor = function () {
    setInterval(changebgColor, 1000);
};



function changebgColor() {
    document.body.style.backgroundColor = randomcolor();
}

const stopchangingcolor = function () {

};

document.querySelector("#start").addEventListener('click', startchangingcolor);

document.querySelector("#Stop").addEventListener('click', stopchangingcolor);


