
/**
 * 汉诺塔
 * @param {*} n 盘子总数
 * @param {*} x 柱子A
 * @param {*} y 柱子B
 * @param {*} z 柱子C
 */
let idx = 0
function hanoi(n , x, y, z) {
  if(n === 1) {
    console.log('移动盘' + n + '从' + x + '到' + z)
    idx += 1
  } else {
    hanoi(n-1, x, z, y)
    console.log('移动盘' + n + '从' + x + '到' + z)
    idx += 1
    hanoi(n-1, y, x, z)
  }
}
hanoi(3 , 'A', 'B', 'C')
// 64就不跑了，电脑受不了