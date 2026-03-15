/*
Intersection Class
------------------

This class represents a TRAFFIC SIGNAL in our simulated city.

In the real world:
An intersection is where roads meet and traffic lights control vehicle movement.

Example:

        B
        |
A ---- Signal ---- C
        |
        D

Each intersection has:
- an ID (name of the signal)
- coordinates (x,y) in the city
- signal state (RED or GREEN)

Coordinates allow us to calculate DISTANCE between:
ambulance ↔ signal

This helps simulate:
"Ambulance approaching signal → turn it GREEN"
*/

class Intersection {

    /*
    Constructor runs when we create a new intersection.

    Example:
    const A = new Intersection("A",0,0)

    Parameters
    ----------
    id → name of the intersection
    x  → x position in city grid
    y  → y position in city grid
    */
    constructor(id,x,y){

        // unique name for the signal
        this.id = id

        // position in the virtual city
        this.x = x
        this.y = y

        // default signal state
        // most signals start RED
        this.signalState = "RED"
    }

    /*
    turnGreen()

    Changes signal to GREEN.

    Real world meaning:
    Vehicles are allowed to pass through the intersection.
    */
    turnGreen(){
        this.signalState = "GREEN"
    }

    /*
    turnRed()

    Changes signal to RED.

    Real world meaning:
    Vehicles must STOP.
    */
    turnRed(){
        this.signalState = "RED"
    }

    /*
    canPass()

    Used by vehicles (ambulance) to check
    if they are allowed to cross the intersection.
    */
    canPass(){
        return this.signalState === "GREEN"
    }

    /*
    distanceTo(point)

    Calculates distance between this signal and another point.

    In our simulation the "point" will be the ambulance location.

    Formula used:
    Euclidean Distance

    distance = √((x2-x1)^2 + (y2-y1)^2)

    Example:
    Signal B (1,0)
    Ambulance A (0,0)

    distance = √((1-0)^2 + (0-0)^2)
             = 1
    */
    distanceTo(point){

        // difference in X coordinates
        const dx = this.x - point.x

        // difference in Y coordinates
        const dy = this.y - point.y

        // Euclidean distance calculation
        return Math.sqrt(dx*dx + dy*dy)
    }
}

module.exports = Intersection