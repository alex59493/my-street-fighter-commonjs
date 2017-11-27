const { Hero } = require("./HeroModule");

let h1 = new Hero("Joueur 1", "Gentil", 100);
let h2 = new Hero("Joueur 2", "Mechant", 100);

let game = setInterval(round, 100);

function round() {
  let strength;
  strength = h1.attack(h2);
  console.log(`${h1.name} a envoyé un missile de ${strength} tonnes sur ${h2.name}`);
  strength = h2.attack(h1);
  console.log(`${h2.name} a envoyé un missile de ${strength} tonnes sur ${h1.name}`);

  if (!(h1.isAlive() && h2.isAlive())) {
    clearInterval(game);
    let looser = !h1.isAlive() ? h1.name : h2.name;
    console.log(`${looser} est mort.`);
  };
}