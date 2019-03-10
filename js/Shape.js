class Shape {

        constructor(shapeEnum) {
        if (this.constructor === Shape) {
            throw new TypeError('Class "Shape" cannot be instantiated directly (Abstract)');
        }
        this.name = shapeEnum.name;
    }

    isEqualTo(shape){
        if(shape instanceof Shape)
            return this.name === shape.name;
        else
            throw new Error(`First parameter should be a instance of "Shape", "${typeof shape}" instead`);
    }

    isWinnerOf(shape){
        throw new Error("This method must be implemented");
    }
}

class Rock extends Shape {

    constructor(shapeEnum){
        super(shapeEnum);
    }

    isWinnerOf(shape){
        return shape.name === ShapeEnum.SCISSORS.name;
    }

}

class Paper extends Shape {

    constructor(shapeEnum){
        super(shapeEnum);
    }

    isWinnerOf(shape){
        return shape.name === ShapeEnum.ROCK.name;
    }

}

class Scissors extends Shape {

    constructor(shapeEnum){
        super(shapeEnum);
    }

    isWinnerOf(shape){
        return shape.name === ShapeEnum.PAPER.name;
    }

}