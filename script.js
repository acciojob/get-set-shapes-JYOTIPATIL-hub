//complete this code
class Rectangle {}

class Square extends Animal {}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }

    getPerimeter(): number {
        return 4 * this.getWidth();
    }
}

// Example usage:
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getWidth()); // Output: 5
console.log(rectangle.getHeight()); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.getWidth()); // Output: 7
console.log(square.getHeight()); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
