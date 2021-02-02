import Character from './character';

test('return usual decrease attack', () => {
  const usual = new Character(100, false);
  expect(notStoned.getAttack(1)).toBe(100);
  expect(notStoned.getAttack(2)).toBe(90);
  expect(notStoned.getAttack(5)).toBe(60);
});

test('return stoned decrease attack', () => {
  const stoned = new Character(100, true);
  expect(stoned.getAttack(1)).toBe(100);
  expect(stoned.getAttack(2)).toBe(86);
  expect(stoned.getAttack(5)).toBe(51);
});
