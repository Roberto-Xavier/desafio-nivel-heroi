let nome = "Roberto"
let nivel
let XP = 8000
switch (XP) {
    case XP < 1000:
            nivel = "Ferro"
        break;
        case XP > 1000 && XP <= 2000:
            nivel = "Bronze"
        break;
        case XP > 2000 && XP <= 5000:
            nivel = "Prata"
        break;
        case XP > 5000 && XP <= 7000:
            nivel = "Ouro"
        break;
        case XP > 7000 && XP <= 8000:
            nivel = "Platina"
        break;
        case XP > 8000 && XP <= 9000:
            nivel = "Ascendente"
        break;
        case XP > 9000 && XP <= 10000:
            nivel = "Imortal"
        break;
    default:
            nivel = "Radiante"
        break;
}
console.log(`O Herói de nome **${nome}** está no nível **${nivel}**`);
