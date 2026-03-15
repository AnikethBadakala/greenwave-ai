/*
Ambulance Class
---------------
Represents the emergency vehicle moving through the city.

Responsibilities
- track location
- follow route
- move intersection to intersection
*/

class Ambulance {

    constructor(start) {

        // Current intersection
        this.currentLocation = start

        // Route = list of intersections to travel
        this.route = []

        // index of next location
        this.routeIndex = 0

        // speed of ambulance (simulation only)
        this.speed = 1
    }

    /*
    setRoute(route)

    Route example:
    [A,B,C]
    */
    setRoute(route){
        this.route = route
        this.routeIndex = 0
    }

    /*
    move()

    Moves ambulance to next intersection in route.
    */
    move(){

        if(this.routeIndex >= this.route.length){
            return null
        }

        const nextLocation = this.route[this.routeIndex]

        this.currentLocation = nextLocation

        this.routeIndex++

        return this.currentLocation
    }
}

module.exports = Ambulance