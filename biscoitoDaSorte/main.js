//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const biscuit = document.querySelector("#abrirBiscoito")
const btnAgain = document.querySelector("#btnAgain")
const luckyPhraseRandom = document.querySelector(".screen2 p")
let randomNumber = Math.round(Math.random() * 10)
let luckyPhrase = ["A vida trará coisas boas se tiver paciência.",
"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
"Não compense na ira o que lhe falta na razão.",
"Defeitos e virtudes são apenas dois lados da mesma moeda.",
"A maior de todas as torres começa no solo.",
"Não há que ser forte. Há que ser flexível.",
"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
"A juventude não é uma época da vida, é um estado de espírito.",
"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",]

//funções
function openBiscuit(){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    randomSentence()
}
function openBiscuitAgain(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    randomNumber = Math.round(Math.random() * 10)
}
function randomSentence(){
    luckyPhraseRandom.innerText = luckyPhrase[randomNumber]
}

//eventos
biscuit.addEventListener('click', openBiscuit)
btnAgain.addEventListener('click', openBiscuitAgain)
