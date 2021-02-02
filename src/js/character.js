export default class Character {
  constructor(attack, stoned) {
    this.attack = attack;
    this.stoned = stoned;
  }

  getAttack(cells) {
    let { attack } = this;
    if (cells) {
      attack -= ((cells - 1) * attack) / 10;
    }
    if (this.stoned === true) {
      attack -= Math.log(cells) * 5;
    }
    return Math.floor(attack);
  }
}
