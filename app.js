var btnSamaDengan = document.getElementById("samaDengan");
var result = document.getElementsByClassName("result")[0];
var wrapperCalculator = document.getElementsByClassName("wrapper-calculator")[0];

btnSamaDengan.addEventListener("click", () => {
    result.innerHTML = "by Aden Rahmandi"
})

function animationShadow() {
    if (result.innerHTML === "Halo") {
        result.innerHTML = "Selamat Datang!";
    } else if (result.innerHTML === "Selamat Datang!") {
        result.innerHTML = "Implement by Aden Rahmandi";
    } else if (result.innerHTML === "Implement by Aden Rahmandi") {
        result.innerHTML = "Design by Dennis Snellenberg";
    } else {
        result.innerHTML = "Halo";
    }
}

setInterval(animationShadow, 2000);