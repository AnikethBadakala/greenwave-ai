/*
Vehicle Class
-------------

Represents a normal vehicle in the city.

Examples:
cars
bikes
buses

Vehicles follow traffic rules:
- stop at RED signal
- move at GREEN signal
*/

class Vehicle {

    constructor(id,start){

        // unique identifier for vehicle
        this.id = id

        // current intersection
        this.currentLocation = start

        // vehicle route
        this.route = []

        // next intersection index
        this.routeIndex = 0
    }

    /*
    Define path for vehicle
    */

    setRoute(route){

        this.route = route
        this.routeIndex = 0
    }

    /*
    Move vehicle along route
    */

    move(){

        if(this.routeIndex >= this.route.length){
            return null
        }

        const nextIntersection = this.route[this.routeIndex]

        /*
        Vehicle checks signal state
        */

        if(!nextIntersection.canPass()){

            console.log("Vehicle",this.id,"waiting at RED signal",nextIntersection.id)

            return this.currentLocation
        }

        /*
        Signal is green → move forward
        */

        this.currentLocation = nextIntersection

        this.routeIndex++

        console.log("Vehicle",this.id,"moved to",this.currentLocation.id)

        return this.currentLocation
    }

}

module.exports = Vehicle