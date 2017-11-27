const Hero = function(name, nature, maxHealth) {
  this.name = name;
  this.nature = nature;
  this.health = {
    current: maxHealth,
    maxHealth: maxHealth
  }
}

Hero.prototype.takeDamage = function(pv) {
  this.health.current -= pv;
}

Hero.prototype.isAlive = function() {
  return this.health.current > 0;
}

Hero.prototype.attack = function(enemy) {
  let strength = Math.floor((Math.random() * 10) + 1); // generate random number between 1 and 10
  enemy.takeDamage(strength);
  return strength;
}

module.exports = {
  Hero
}