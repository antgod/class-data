// 模拟投硬币的过程，投n次硬币，计算正反面的差异

class Coin {
  constructor () {
    this.head = 0
    this.tail = 0
  }

  increment () {
    if (Math.random() > 0.5) {
      this.head++
    } else {
      this.tail++
    }
  }
}

const coin = new Coin()
for (let i = 0; i < 1000000;i++) {
  coin.increment()
}

console.log(coin.head - coin.tail)