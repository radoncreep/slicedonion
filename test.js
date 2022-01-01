let obj = {
    num: () => function addSum() { return 1 + 1 }
}

console.log(obj.num()());