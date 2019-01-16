class Triangle {

    constructor(arr) {
        this.a = arr[0];
        this.b = arr[1];
        this.c = arr[2];
    }

    isEquilateral() {
        return ((this.a === this.b) && (this.b === this.c))
    }

    isIsosceles() {
        return ((this.a === this.b) || (this.b === this.c))
    }
};

module.exports = Triangle;