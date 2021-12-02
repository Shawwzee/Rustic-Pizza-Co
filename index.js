const alert = document.getElementById('alert');
const btn = document.getElementById('submit');
const form = document.getElementById('form');

btn.addEventListener("click", function () {

    alert.classList.remove("d-none");
    alert.classList.add("show");

    form.reset();

    console.log("heyyy");

});