import MathCharacter from './math_character';

export default class Magician extends MathCharacter {
  constructor(name, attack = 30, stoned = false, range) {
    super(name, attack, stoned, range);
  }
}
