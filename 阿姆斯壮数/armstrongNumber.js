var a, b, c;
for (let index = 100; index < 1000; index++) {
  let d = 0
  a = Math.floor(index/100)
  b = Math.floor((index%100)/10)
  c = Math.floor((index%100)%10)
  d = Math.pow(a,3) + Math.pow(b,3) +Math.pow(c,3)
  if (d === index) {
    console.log(index)
  }
}