/*
INTERSECTION CLASS
------------------

Represents a TRAFFIC SIGNAL in the city.

In real life:
An intersection is where multiple roads meet and a traffic light controls movement.

Example layout:

        B
        |
A ---- Signal ---- C
        |
        D

Each intersection stores:
- ID (name of the signal)
- Coordinates (x,y)
- Current signal state (RED or GREEN)

Coordinates help calculate distance between:
ambulance ↔ signal
*/

class Intersection {

    /*
    Constructor runs when we create a new intersection object.

    Example:
    const A = new Intersection("A",0,0)

    Parameters:
    id → name of the signal
    x  → x coordinate in city grid
    y  → y coordinate in city grid
    */

    constructor(id,x,y){

        // store intersection name
        this.id = id

        // position of signal in city
        this.x = x
        this.y = y

        // default signal state
        this.signalState = "RED"
    }

    /*
    turnGreen()

    Changes signal to GREEN.

    Real meaning:
    Vehicles are allowed to pass.
    */

    turnGreen(){
        this.signalState = "GREEN"
    }

    /*
    turnRed()

    Changes signal to RED.

    Real meaning:
    Vehicles must STOP.
    */

    turnRed(){
        this.signalState = "RED"
    }

    /*
    canPass()

    Used by vehicles to check if they
    can cross the intersection.
    */

    canPass(){
        return this.signalState === "GREEN"
    }

    /*
    distanceTo(point)

    Calculates distance between this intersection
    and another object (ambulance or vehicle).

    Formula used:

    distance = √((x2-x1)^2 + (y2-y1)^2)
    */

    distanceTo(point){

        // difference in x coordinates
        const dx = this.x - point.x

        // difference in y coordinates
        const dy = this.y - point.y

        // Euclidean distance calculation
        return Math.sqrt(dx*dx + dy*dy)
    }
}

// export class so other files can use it
module.exports = Intersection