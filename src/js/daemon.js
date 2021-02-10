import MathCharacter from './math_character';

export default class Daemon extends MathCharacter {
  constructor(name, attack = 25, stoned = false, range) {
    super(name, attack, stoned, range);
  }
}
