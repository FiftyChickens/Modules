export function multiplyFive(num) {
    const arr = []
    for (let i = 0; i < 5; i++) {
        let multiply = num * i;
        arr.push(multiply)
    }
    console.log(arr);
}