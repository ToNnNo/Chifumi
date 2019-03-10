class ShapeFactory {

    static createShape(name) {
        let instance = null;
        switch (name) {
            case 'rock':
                instance = new Rock(ShapeEnum.ROCK);
                break;
            case 'paper':
                instance = new Paper(ShapeEnum.PAPER);
                break;
            case 'scissors':
                instance = new Scissors(ShapeEnum.SCISSORS);
                break;
            default:
                throw new Error(`ID not found`);
        }

        return instance;
    }

}