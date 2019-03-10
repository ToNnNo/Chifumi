class Player {

    constructor(name){
        this._name = name;
        this._shape = null;
        this._point = 0;
    }

    get name() {
        return this._name;
    }

    get shape() {
        return this._shape;
    }

    set shape(value) {
        this._shape = value;
    }

    get point() {
        return this._point;
    }

    addPoint() {
        this._point += 1;
    }
}