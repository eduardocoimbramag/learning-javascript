const _speed = Symbol(`speed`)

class car {
    constructor(name) {
        this.name = name
        this[_speed] = 0
    }

    acelerate() {
        if (this[_speed] >= 100) {
            return;
        }
        this[_speed]++
    }
    [_speed] = 1000
}

const c1 = new car('Beatle')
c1.acelerate()
c1.acelerate()
console.log(c1)