//Variaveis
const inputCookie = document.querySelector("#inputCookie");
const btnAgain = document.querySelector("#btnAgain");
const contentCookie = document.querySelector(".cookie");
const contentBreakedCookie = document.querySelector(".cookie-breaked");

//Eventos
inputCookie.addEventListener("click", handleStartClick);
btnAgain.addEventListener("click", toggleScreen);


//Funções
function handleStartClick() {
    const luckyPhrase = choosePhrase();
    contentBreakedCookie.querySelector("p").innerText = `${luckyPhrase}`;

    toggleScreen();

}

function toggleScreen() {
    contentCookie.classList.toggle("hide");
    contentBreakedCookie.classList.toggle("hide");
}

function choosePhrase() {
    const phrases = ["Acredite nas suas asas, você pode voar alto.",
    "A sorte favorece os corajosos, vá em frente.",
    "Seja a mudança que você deseja ver no mundo.",
    "Sua criatividade é a chave do seu sucesso.",
    "Cada dia é uma nova chance para ser feliz.",
    "Grandes conquistas começam com pequenos passos.",
    "Aprenda com ontem, viva para hoje, sonhe com amanhã.",
    "Sua jornada é única, aproveite cada momento.",
    "A paciência é a chave para desbloquear grandes conquistas.",
    "O sorriso é o idioma universal da bondade."]

    let choose = Math.round(Math.random() * 10);
    return phrases[choose];
}