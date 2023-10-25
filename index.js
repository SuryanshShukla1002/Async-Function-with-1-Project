const randomcolor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const startchangingcolor = function () { 
    
};

document.querySelector("#start").addEventListener('click', startchangingcolor);

document.querySelector("#Stop").addEventListener('click', stopchangingcolor);

const stopchangingcolor = function () {

};
