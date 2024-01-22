// Shapes program by John S
// I'm still learning JavaScript, so this might not be perfect.

// Shape class
class Shape {
    constructor(color) {
        this.color = color;
        // Checking if Shape class is being instantiated directly
        if (this.constructor === Shape) {
            console.log("Shape is an abstract class and cannot be instantiated.");
        }
    }

    // I'm not sure how to make these abstract in JavaScript
    getArea() {
        console.log("Need to implement this in subclass");
    }

    getPerimeter() {
        console.log("Need to implement this in subclass");
    }

    contain() {
        console.log("Need to implement this in subclass");
    }
}

// Rectangle class
class Rectangle extends Shape {
    constructor(length, width, color) {
        super(color);
        this.length = length;
        this.width = width;
    }

    getArea() {
        // Calculating area of rectangle
        return this.length * this.width;
    }

    getPerimeter() {
        // Calculating perimeter of rectangle
        return 2 * (this.length + this.width);
    }

    contain() {
        // Finding the smallest square that can contain this rectangle
        const side = Math.max(this.length, this.width);
        return new Rectangle(side, side, this.color);
    }
}

// ... [Similar implementations for Triangle and Circle]

// User Interface
function createUserInterface() {
    let shapeList = [];

    let addShape = true;
    while (addShape) {
        let shapeType = prompt("Enter shape type (rectangle, triangle, circle):");
        let color = prompt("Enter color of the shape:");
        let shape;

        // I might have made a mistake here, need to check
        switch (shapeType) {
            case 'rectangle':
                let length = parseInt(prompt("Enter length:"));
                let width = parseInt(prompt("Enter width:"));
                shape = new Rectangle(length, width, color);
                break;
            // ... Cases for triangle and circle
            default:
                alert("I don't know that shape yet.");
        }

        shapeList.push(shape);
        addShape = confirm("Want to add another shape?");
    }

    // Displaying the details of each shape
    for (let i = 0; i < shapeList.length; i++) {
        let shape = shapeList[i];
        console.log(`Shape ${i+1}: Type: ${shape.constructor.name}, Area: ${shape.getArea()}, Perimeter: ${shape.getPerimeter()}`);
    }
}

createUserInterface();
