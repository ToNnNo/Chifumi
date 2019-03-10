class Game{

    static EQUAL = "Match nul";
    static WIN = "Vous avez Gagné";
    static LOOSE = "Vous avez Perdu";

    constructor(){
        this._player1 = null;
        this._player2 = null;
    }

    get player1() {
        return this._player1;
    }

    set player1(value) {
        this._player1 = value;
    }

    get player2() {
        return this._player2;
    }

    set player2(value) {
        this._player2 = value;
    }

    comparator() {

        if( this.player1.shape.isEqualTo(this.player2.shape) ) {
            return Game.EQUAL;
        }

        if( this.player1.shape.isWinnerOf(this.player2.shape) ) {
            this.player1.addPoint();
            return Game.WIN;
        }

        this.player2.addPoint();
        return Game.LOOSE;
    }
}