function geraCor() {
    x = Math.floor(Math.random() *255) +1;
    y = Math.floor(Math.random() *255) +1;
    z = Math.floor(Math.random() *255) +1;
    return `rgb(${x}, ${y}, ${z})`
};

document.getElementById('colorButton').onclick = function () {
    xLabel.style.backgroundColor = geraCor()
    xLabel.innerHTML = `RGB<br> ${x}<br> ${y}<br> ${z}`
    xLabel.style.transition = "ease-in-out 0.5s";
    if (x < 60 && y, z < 200 || y < 60 && x, z < 200 || z < 60 && x, y < 200){
        xLabel.style.color = "white";
    } else {
        xLabel.style.color = "black";
    }

    yLabel.style.backgroundColor = geraCor()
    yLabel.innerHTML = `RGB<br> ${x}<br> ${y}<br> ${z}`
    yLabel.style.transition = "ease-in-out 0.5s";
    if (x < 60 && y, z < 200 || y < 60 && x, z < 200 || z < 60 && x, y < 200){
        yLabel.style.color = "white";
    } else {
        yLabel.style.color = "black";
    }

    zLabel.style.backgroundColor = geraCor()
    zLabel.innerHTML = `RGB<br> ${x}<br> ${y}<br> ${z}`
    zLabel.style.transition = "ease-in-out 0.5s";
    if (x < 60 && y, z < 200 || y < 60 && x, z < 200 || z < 60 && x, y < 200){
        zLabel.style.color = "white";
    } else {
        zLabel.style.color = "black";
    }
};