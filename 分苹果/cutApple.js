console.time("耗时");
for (let i = 5; i < 999999; i++) {
    if (i%5 === 1) {
        let first = i-Math.floor(i/5)-1
        if (first%5 === 1) {
            let second = first - Math.floor(first/5) -1
            if (second%5 === 1) {
                let third = second - Math.floor(second/5) -1
                if (third%5 === 1) {
                    let fourth = third - Math.floor(third/5) - 1
                    if (fourth%5 === 1) {
                        let fifth = fourth - Math.floor(fourth/5) -1
                        if (fifth%5 === 1) {
                            console.log("最少有" + i + "个苹果")
                            console.timeEnd("耗时");
                            return i
                        }
                    }
                }
            }
        }
    }
}

