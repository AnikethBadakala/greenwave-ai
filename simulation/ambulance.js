/*
Ambulance Class
---------------
Represents the emergency vehicle moving through the city.

Responsibilities:
- know where it currently is
- know the destination hospital
- follow a route
- move between intersections
*/

class Ambulance {

    /*
    start -> starting intersection
    */
    constructor(start) {

        // current location of ambulance
        this.currentLocation = start

        // route will contain intersections to visit
        this.route = []

        // movement speed (simulation value)
        this.speed = 1
    }

    /*
    move(nextIntersection)

    Moves ambulance to next intersection.

    In real system:
    Movement would be based on:
    - time
    - distance
    - traffic conditions
    */
    move(nextIntersection) {

        // update current location
        this.currentLocation = nextIntersection
    }
}

module.exports = Ambulance