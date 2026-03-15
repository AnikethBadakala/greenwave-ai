/*
Intersection represents a traffic signal junction
*/

class Intersection {

    constructor(id,x,y){

        this.id = id
        this.x = x
        this.y = y

        // traffic signal state
        this.signalState = "RED"
    }

    /*
    Turn signal GREEN
    */
    turnGreen(){
        this.signalState = "GREEN"
    }

    /*
    Turn signal RED
    */
    turnRed(){
        this.signalState = "RED"
    }

    /*
    Check if vehicle can pass
    */
    canPass(){
        return this.signalState === "GREEN"
    }
}

module.exports = Intersection