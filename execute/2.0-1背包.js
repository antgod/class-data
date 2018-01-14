/*
 * ��n����Ʒ��1������Ϊw�ı�����
 * ÿ����Ʒ��ֻ��һ������i����Ʒ������Ϊweight[i]����ֵΪvalue[i]����⽫��Щ��Ʒװ�뱳����ʹ��ֵ�ܺ����
 * */

const keys = Object.keys
const merge =  Object.assign
const sortBy = (datas, fn) => datas.slice(0).sort((d1, d2) => fn(d1) - fn(d2))

const compute = (w, goods)=> {
  const valueableList = sortBy(goods.map(good => merge(good, { unit: good.value / good.weight })), g => g.unit).reverse()
  return valueableList.reduce((result, valueable) => {
    if (result.totalWeight + valueable.weight <= w) {
      result.totalGoods.push(valueable)
      result.totalWeight += valueable.weight
    }
    return result
  }, { totalWeight: 0, totalGoods: []}).totalGoods
}

console.log(compute(150, [
  { name: '1', weight: 35, value: 10 },
  { name: '2', weight: 30, value: 40 },
  { name: '3', weight: 60, value: 30 },
  { name: '4', weight: 50, value: 50 },
  { name: '5', weight: 40, value: 35 },
  { name: '6', weight: 10, value: 40 },
  { name: '7', weight: 25, value: 30 },
]).reduce((last, b) => {
  last += b.value
  return last
}, 0))