
function chooseKing(n,m) {
  let monkeys = new Array(n+1).join('0').split("").map(function(value, key) {
    return key+1;
  })
  console.log(monkeys)
  if (n === 1) {
    return monkeys[0]
  }
  let i = 0
  while(monkeys.length-2 in monkeys) {
    if ((i+1)%m === 0) {
      // 数到第M只时踢出圈
      delete monkeys[i]
    } else {
      monkeys.push(monkeys[i])
      delete monkeys[i]
    }
    i++
  }
  // 只有数组的最后位置存在编号
  return monkeys[monkeys.length-1]
}

var monkeyKing = chooseKing(100, 2)
console.log('猴王编号是:' + monkeyKing)