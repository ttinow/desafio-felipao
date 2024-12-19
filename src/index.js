let nomes = ["SKYZADA", "NEVES", "CAPZIN", "TTINOW", "NOTIJOTIS", "VANILLASKY", "APOLLO", "CELIN"];


function getNomeAleatorio() {
    return nomes[Math.floor(Math.random() * nomes.length)];
}


function getXpAleatorio() {
    return Math.floor(Math.random() * 15001);
}


let nomeHeroi = getNomeAleatorio();
let xpHeroi = getXpAleatorio();


let nivel;
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}


console.log(`O herói ${nomeHeroi} está com ${xpHeroi} pontos e está no nível ${nivel}.`);