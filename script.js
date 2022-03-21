const kasa1 = document.querySelector("#kasa1");
const kasa2 = document.querySelector("#kasa2");

const oyuncu1 = document.querySelector("#oyuncu1");
const oyuncu2 = document.querySelector("#oyuncu2");

const start = document.querySelector("#start");
const end = document.querySelector("#end");
const add = document.querySelector("#add");



const kartlar = [2, 3, 4, 5, 6, 7, 8, 9, "A", "K", "Q", "J"];

start.addEventListener("click", play);

function play(){

    let randOyuncuKart1;
    let randOyuncuKart2;

    let randKasaKart1;
    let randKasaKart2;

    randOyuncuKart1 = Math.floor(Math.random() * kartlar.length);
    randOyuncuKart2 = Math.floor(Math.random() * kartlar.length);

    randKasaKart1 = Math.floor(Math.random() * kartlar.length);
    randKasaKart2 = Math.floor(Math.random() * kartlar.length);

    for (let i = 0; i < kartlar.length; i++) {
        oyuncu1.textContent = kartlar[randOyuncuKart1];
        oyuncu2.textContent = kartlar[randOyuncuKart2];

        kasa1.textContent = kartlar[randKasaKart1];
    }

}

add.addEventListener("click", addCard);

function addCard(){

}

