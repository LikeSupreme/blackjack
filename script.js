const kasa1 = document.querySelector("#kasa1");
const kasa2 = document.querySelector("#kasa2");

const oyuncu1 = document.querySelector("#oyuncu1");
const oyuncu2 = document.querySelector("#oyuncu2");
const oyuncu3 = document.querySelector("#oyuncu3");

const start = document.querySelector("#start");
const end = document.querySelector("#end");
const add = document.querySelector("#add");


const kart = {

    kartlar: ["2", "3", "4", "5", "6", "7", "8", "9", "A", "K", "Q", "J"],

    kartlarMap: {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "A":10, "K":11, "Q":12, "J":13}

};

function randomCard(){

    let randomIndex = Math.floor(Math.random() * kart.kartlar.length);

    return randomIndex;
}

start.addEventListener("click", play);

function play(){

    let randOyuncuKart1;
    let randOyuncuKart2;

    let randKasaKart1;

    randOyuncuKart1 = randomCard();
    randOyuncuKart2 = randomCard();

    randKasaKart1 = randomCard();

    for (let i = 0; i < kart.kartlar.length; i++) {
        
        oyuncu1.textContent = kart.kartlar[randOyuncuKart1];
        oyuncu2.textContent = kart.kartlar[randOyuncuKart2];

        kasa1.textContent = kart.kartlar[randKasaKart1];
    }
}

add.addEventListener("click", addCard);

function addCard(){

    let randOyuncuKart3;

    randOyuncuKart3 = randomCard();

    for (let i = 0; i < kart.kartlar.length; i++) {

        oyuncu3.textContent = kart.kartlar[randOyuncuKart3];

    }
}

end.addEventListener("click", endGame);

function endGame(){

    let randKasaKart2;

    randKasaKart2 = randomCard();

    for (let i = 0; i < kart.kartlar.length; i++) {

        kasa2.textContent = kart.kartlar[randKasaKart2];
    }
}

// for(i in kart.kartlarMap){
//     console.log(i);
// }
