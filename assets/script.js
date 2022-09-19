function geraRGB() {
    x = Math.floor(Math.random() *255) +1;
    y = Math.floor(Math.random() *255) +1;
    z = Math.floor(Math.random() *255) +1;
    return `rgb(${x}, ${y}, ${z})`
};

function geraHEX() {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return HEX = '#' + n.slice(0, 6);
};

function geraHSL() {
    a = Math.floor(Math.random() * 360) +1;
    b = Math.floor(Math.random() * 100) +1;
    c = Math.floor(Math.random() * 100) +1;
    return `hsl(${a}, ${b}%, ${c}%)`;
}

function trocaFonteRGB() {
    if (x < 60 && y, z < 200 || y < 60 && x, z < 200 || z < 60 && x, y < 200){
        return "white";
    } else {
        return "black";
    }
}
function trocaFonteHSL() {
    if (c < 50){
        return "white";
    } else {
        return "black";
    }
}

document.getElementById('colorButton').onclick = function () {
    xLabel.style.backgroundColor = geraRGB();
    xLabel.innerHTML = `RGB<br> ${x}<br> ${y}<br> ${z}`
    xLabel.style.transition = "ease-in-out 0.5s";
    xLabel.style.color = trocaFonteRGB() ;

    yLabel.style.backgroundColor = geraRGB();
    yLabel.innerHTML = `RGB<br> ${x}<br> ${y}<br> ${z}`
    yLabel.style.transition = "ease-in-out 0.5s";
    yLabel.style.color = trocaFonteRGB() ;

    zLabel.style.backgroundColor = geraRGB();
    zLabel.innerHTML = `RGB<br> ${x}<br> ${y}<br> ${z}`
    zLabel.style.transition = "ease-in-out 0.5s";
    zLabel.style.color = trocaFonteRGB() ;


    h1Label.style.backgroundColor = geraHEX();
    h1Label.innerHTML = HEX;
    h1Label.style.transition = "ease-in-out 0.5s";

    h2Label.style.backgroundColor = geraHEX();
    h2Label.innerHTML = HEX;
    h2Label.style.transition = "ease-in-out 0.5s";

    h3Label.style.backgroundColor = geraHEX();
    h3Label.innerHTML = HEX;
    h3Label.style.transition = "ease-in-out 0.5s";

    
    s1Label.style.backgroundColor = geraHSL();
    s1Label.innerHTML = `HSL<br> ${a}<br> ${b}<br> ${c}`;
    s1Label.style.transition = "ease-in-out 0.5s";
    s1Label.style.color = trocaFonteHSL();

    s2Label.style.backgroundColor = geraHSL();
    s2Label.innerHTML = `HSL<br> ${a}<br> ${b}<br> ${c}`;
    s2Label.style.transition = "ease-in-out 0.5s";
    s2Label.style.color = trocaFonteHSL();

    s3Label.style.backgroundColor = geraHSL();
    s3Label.innerHTML = `HSL<br> ${a}<br> ${b}<br> ${c}`;
    s3Label.style.transition = "ease-in-out 0.5s";
    s3Label.style.color = trocaFonteHSL();
};