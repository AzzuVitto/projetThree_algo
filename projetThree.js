const prompt = require('prompt-sync')()

// let playerOne = {
//     name: "Guerrier de Feu",
//     pv: 100,
// }

// let cpu = {
//     name: "Sombre Lutin",
//     pv: 100,
// }

// let attacks = [
//     {
//         name: "Frappe rapide",
//         points_life: -10,
//         power: 2,
//     },
//     {
//         name: "Soin Léger",
//         points_life: 15,
//         power: 3,
//     },
//     {
//         name: "Coup puissant",
//         points_life: -20,
//         power: 3,
//     },
//     {
//         name: "Force dévastatrice",
//         points_life: -30,
//         power: 4,
//     }
// ]

// function playerChoice() {
//     for (let i = 0; i < attacks.length; i++) {
//         console.log((i + 1) + ". " + attacks[i].name);
//     }

//     let choice = prompt("Choisis une attaque entre 1, 2, 3, 4");

//     while (choice < 1 || choice > 4) {
//         console.log("Choix invalide. Choisis une attaque valide.");
//         choice = prompt("Choisis une attaque entre 1, 2, 3, 4");
//     }

//     console.log("Tu as choisi l'attaque " + attacks[choice - 1].name);
//     return attacks[choice - 1];
// }

// function cpuChoice() {
//     let resultat = Math.floor(Math.random() * ((attacks.length - 3) - 0 + 1)) + 0;
//     console.log("Sombre Lutin a choisi l'attaque " + attacks[resultat].name);
//     return attacks[resultat];
// }

// function attack(atk) {
//     let touch = Math.floor(Math.random() * atk.power) + 1;

//     if (touch == atk.power) {
//         cpu.pv += atk.points_life;
//         return true;
//     } else {
//         console.log("Ton attaque a échoué !");
//         return false;
//     }
// }

// function hitPlayer(atk) {
//     let touch = Math.floor(Math.random() * atk.power) + 1;

//     if (touch == atk.power) {
//         playerOne.pv += atk.points_life;
//         return true;
//     } else {
//         console.log("L'attaque à Sombre Lutin a échoué !");
//         return false;
//     }
// }
// function tourCpu() {
//     console.log("Tour de Sombre Lutin");

//     let cpuAttack = cpuChoice();
//     let hit = hitPlayer(cpuAttack);

//     if (hit == true) {
//         console.log("Guerrier de Feu a maintenant " + playerOne.pv + " points de vie.");
//     }
// }
// function start() {
//     console.log("Bienvenue dans le jeu de combat !");

//     while (playerOne.pv > 0 && cpu.pv > 0) {
//         console.log("Tour du Guerrier de Feu");
//         let playerAttack = playerChoice();
//         let hit = attack(playerAttack);

//         if (hit == true) {
//             console.log("Sombre Lutin a maintenant " + cpu.pv + " points de vie.");
//         }
//         tourCpu();
//     }
//     if (playerOne.pv <= 0) {
//         console.log("Tu as perdu ! Game over.");
//     } else if (cpu.pv <= 0) {
//         console.log("Félicitations ! Tu as vaincu Sombre Lutin!");
//     }
// }
// start();