function rand(min = 1000, max = 3000) {
    const tempo = Math.random() * (max - min) + min
    return Math.floor(tempo)
}

console.log(rand());

function f1() {
    setTimeout(function () {
        console.log(`F1`);
    }, rand())
}

function f2() {
    setTimeout(function () {
        console.log(`F2`);
    }, rand())
}

function f3() {
    setTimeout(function () {
        console.log(`F3`);
    }, rand())
}

f1();
f2();
f3();