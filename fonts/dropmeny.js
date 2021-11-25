console.log("Dette er ikke kompatibelt")

document.getElementById("menu").addEventListener("click", openMenu);

function openMenu() {

    document.getElementById("dropdown").classList.toggle("active");
}
