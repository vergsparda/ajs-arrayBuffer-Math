import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, attack, stoned, range) {
    super(name, attack, stoned, range)
  }

  set attack (value){
    return this._attack = value;
  }
  get attack() {
    let attack = this._attack;

    attack -= attack * ((this.range - 1) / 10);

    if (this.stoned) {
      attack -= Math.log(this.range) * 5;
    }
    return (attack > 0 ) ? Math.floor(attack) : 0;
  }
}

