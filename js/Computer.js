class Computer extends Player{

    constructor(){
        super("Computer");
    }

    randomShape() {
        let value = Math.floor(Math.random() * 100);
        let name = null;

        if (value >= 0 && value < 33) {
            name = "rock";
        } else if (value >= 33 && value < 66) {
            name = "paper";
        } else {
            name = "scissors";
        }

        this.shape = ShapeFactory.createShape(name);
    }

}