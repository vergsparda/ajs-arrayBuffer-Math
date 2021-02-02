import Character from './character';

export default class Magician extends Character {
  constructor(attack = 30, stoned = false) {
    super(attack, stoned);
  }
}
