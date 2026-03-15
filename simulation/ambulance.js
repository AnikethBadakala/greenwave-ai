/*
AMBULANCE CLASS
---------------

Represents the emergency vehicle.

Responsibilities:
- know current location
- follow route
- move intersection to intersection
*/

class Ambulance {

    /*
    start → starting intersection
    */

    constructor(start){

        // where ambulance currently is
        this.currentLocation = start

        // route ambulance will follow
        this.route = []

        // index of next intersection in route
        this.routeIndex = 0
    }

    /*
    setRoute()

    Defines the path ambulance should take.

    Example route:
    [B, C]
    */

    setRoute(route){

        this.route = route

        // start from first intersection in route
        this.routeIndex = 0
    }

    /*
    move()

    Moves ambulance to next intersection.
    */

    move(){

        // if route finished return null
        if(this.routeIndex >= this.route.length){
            return null
        }

        // get next intersection
        const nextIntersection = this.route[this.routeIndex]

        /*
        Check signal state

        Ambulance can only move if signal is GREEN
        */

        if(!nextIntersection.canPass()){

            console.log("Ambulance waiting at RED signal",nextIntersection.id)

            return this.currentLocation
        }

        // move ambulance
        this.currentLocation = nextIntersection

        // update route index
        this.routeIndex++

        return this.currentLocation
    }
}

module.exports = Ambulance