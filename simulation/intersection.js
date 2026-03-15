/*
Intersection Class
------------------
Represents a traffic signal junction in the city.

In the real world:
An intersection is where multiple roads meet and a traffic light controls
vehicle movement.

In our simulation:
Each intersection will have:
- a unique id
- coordinates (x,y) representing position in the city grid
- a signal state (RED or GREEN)

Later this will also:
- detect ambulance proximity
- change signal state automatically
*/

class Intersection {

    /*
    Constructor runs whenever we create a new intersection.

    Parameters:
    id -> unique name of the intersection
    x -> x coordinate (position in city)
    y -> y coordinate (position in city)

    Example:
    new Intersection("A",0,0)
    */
    constructor(id, x, y) {
        this.id = id

        // coordinates help us locate the signal in the city
        this.x = x
        this.y = y

        // traffic light default state
        this.signalState = "RED"
    }

    /*
    turnGreen()
    Changes traffic light to green.

    In real life:
    Vehicles are allowed to move through the intersection.
    */
    turnGreen() {
        this.signalState = "GREEN"
    }

    /*
    turnRed()
    Changes traffic light back to red.
    */
    turnRed() {
        this.signalState = "RED"
    }
}

module.exports = Intersection