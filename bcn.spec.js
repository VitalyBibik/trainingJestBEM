const bnc = require('./bcn');

describe('obj', () => {
  it('Должен быть блок', () => {
    expect(bnc({b: 'blockName'})).toBe('blockName');
  });
  it('Должен быть элемент блока', () => {
    expect(bnc({b: 'blockName', e: 'element'})).toBe('blockName__element');
  });
  it('Должен быть блок и модификатор', () => {
    expect(bnc({b: 'blockName', mod: 'modName'})).toBe('blockName blockName_modName');
  });
  it('Должен быть блок и модификатор', () => {
    expect(bnc({b: 'blockName', mod: 'modName'})).toBe('blockName blockName_modName');
  });
  it('Должен быть элемент блока и модификатор', () => {
    expect(bnc({b: 'blockName', e: 'element', mod: 'modName'})).toBe('blockName__element blockName__element_modName');
  });
  it('Должен быт блок + микс', () => {
    expect(bnc({b: 'blockName', mix: 'mix'})).toBe('blockName mix');
  });
  it('Должен быть и модификатор и микс', () => {
    expect(bnc({b: 'blockName', e: 'element', mod: 'modName', mix: 'mix'})).toBe('blockName__element blockName__element_modName mix');
  });
})
it('Должен быть и модификатор в массиве и микс', () => {
  expect(bnc({b: 'blockName', mod: ['modName1', 'modName2'], mix: 'mix'})).toBe('blockName blockName_modName1 blockName_modName2 mix');
});
  it('Должен быт блок и микс в массиве', () => {
    expect(bnc({b: 'blockName', mix: ['mix1', 'mix2']})).toBe('blockName mix1 mix2');
  });
  it('Должен быт элемент блока и модификатор  в массиве', () => {
    expect(bnc({b: 'blockName', e: 'element', mod: ['modName1', 'modName2']})).toBe('blockName__element blockName__element_modName1 blockName__element_modName2');
  });
  it('Должен быть блок и модификатор в массиве', () => {
    expect(bnc({b: 'blockName', mod: ['modName1', 'modName2']})).toBe('blockName blockName_modName1 blockName_modName2');
  });
