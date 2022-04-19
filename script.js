const myBtn = document.getElementById("myBtn");
const myBtn2 = document.getElementById("myBtn2");
const price = document.getElementById("price");

function increasePrice() {
    price.innerText = "$100";
}

function decreasePrice() {
    price.innerText = "$0";
}

myBtn.addEventListener('click', increasePrice);
myBtn2.addEventListener('click', decreasePrice);
