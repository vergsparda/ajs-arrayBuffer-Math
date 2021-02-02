import Character from './character';

export default class Daemon extends Character {
  constructor(attack = 25, stoned = false) {
    super(attack, stoned);
  }
}
