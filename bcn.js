// Принимает на вход блок и элемент, возвращая блок__родитель
const elem = (blockName, element) => {
  return `${blockName}__${element}`
}
// Принимает на вход элемент и модификатор, возвращая элемент_модификатор
// Если модификатор в массиве, то делаем новый массив из элемента+модификатора
const modifikator = (elem, mod) => {
  if(Array.isArray(mod)) {
    return mod.map(el => `${elem}_${el}`).join(' ')
  }
  return `${elem}_${mod}`;
}

// Принимаем какой-либо обьект
const bnc = (obj) => {
  const res = [];

  // Если есть блок, но нет элемента, то добавляем блок.
  if(obj.b && !obj.e) {
    res.push(obj.b)
  }
  // Добавляем элемент
  if(obj.e) {
    res.push(elem(obj.b,obj.e))
  }
  // Добавляем модификатор если есть блок или элемент, дергаем функцию от модификатора и клеим это все
  if(obj.e && obj.mod || obj.b && obj.mod ) {
    res.push(modifikator(res[0], obj.mod))
  }
  // Добавляет микс, если у нас обьект в миксе имеет массив, то добавим каждый элемент, если нет, то добавим 1 элемент
  if(obj.mix) {
    Array.isArray(obj.mix) ? obj.mix.forEach(e=> res.push(e)) : res.push(obj.mix)
  }
  return res.join(' ')
}
module.exports = bnc;