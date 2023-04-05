//Importe la classe Fighter à partir du module ./src/Fighter
const Fighter = require("./src/Fighter");

//Crée un nouvel objet Fighter avec le nom "Heracles", une vie de 20 et une force de 6
const heracles = new Fighter("👨 Heracles", 20, 6);

//Crée un nouvel objet Fighter avec le nom "Nemean Lion", une vie de 11 et une force de 13
const lion = new Fighter("🦁 Nemean Lion", 11, 13);

//Affiche le nom et la vie de Heracles
console.log(`${heracles.name} 💙 ${heracles.life}`);

//Affiche le nom et la vie de Lion
console.log(`${lion.name} 💙 ${lion.life}`);

//Initialise la variable round à 1
let round = 1;

//Tant que Heracles et Lion sont en vie, continue de jouer des rounds
while (heracles.isAlive() && lion.isAlive()) {
  // Affiche le numéro du round
  console.log(`Round ${round} 🕛`);

  //Heracles attaque Lion
  heracles.attack(lion);
  console.log(
    `${heracles.name} attacks ${lion.name} and deals ${heracles.strength} damage!`
  );
  //Affiche la vie restante de Lion
  console.log(`${lion.name} 💙 ${lion.life}`);

  //Si Lion est mort, affiche que Heracles a gagné et arrête la boucle
  if (!lion.isAlive()) {
    console.log(`${heracles.name} wins 🏆! ${lion.name} 💀`);
    break;
  }

  //Lion attaque Heracles
  lion.attack(heracles);
  console.log(
    `${lion.name} attacks ${heracles.name} and deals ${lion.strength} damage!`
  );
  //Affiche la vie restante de Heracles
  console.log(`${heracles.name} 💙 ${heracles.life}`);

  //Si Heracles est mort, affiche que Lion a gagné et arrête la boucle
  if (!heracles.isAlive()) {
    console.log(`${lion.name} wins 🏆! ${heracles.name} 💀`);
    break;
  }

  //Passe au round suivant
  round++;
}
