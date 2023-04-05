//Déclare une variable maxLife égale à 100, qui représente la quantité de vie maximale pour chaque personnage
const maxLife = 100;

//Déclare une classe Fighter avec un constructeur qui prend un nom, une force et une dextérité comme arguments et initialise également la vie à maxLife
class Fighter {
  constructor(name, strength, dexterity) {
    //Initialise les propriétés de l'objet avec les valeurs passées en argument
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = maxLife;
  }

  //Définit une méthode attack qui prend en argument l'objet qui subit l'attaque (defender)
  attack(defender) {
    //Calcule les dégâts en soustrayant la dextérité du défenseur au résultat d'un jet de dé basé sur la force de l'attaquant
    const damage =
      Math.floor(Math.random() * this.strength) + 1 - defender.dexterity;

    //Retire les dégâts infligés à la vie du défenseur
    defender.life -= damage < 0 ? 0 : damage;
  }

  //Définit une méthode isAlive qui renvoie true si le personnage est en vie (a de la vie restante)
  isAlive() {
    return this.life > 0;
  }
}

//Exporte la classe Fighter pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Fighter;
