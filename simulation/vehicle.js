/*
VEHICLE CLASS
-------------

Represents normal traffic vehicles.

Vehicles obey signals and wait in queues.
*/

class Vehicle {

    constructor(id,start){

        this.id = id

        // vehicle starting position
        this.currentLocation = start

        // route to follow
        this.route = []

        this.routeIndex = 0
    }

    /*
    setRoute()

    Defines vehicle path
    */

    setRoute(route){

        this.route = route

        this.routeIndex = 0
    }

    /*
    move()

    Vehicle attempts to move forward
    depending on signal state
    */

    move(){

        if(this.routeIndex >= this.route.length){
            return null
        }

        const nextIntersection = this.route[this.routeIndex]

        /*
        If signal RED → join queue
        */

        if(!nextIntersection.canPass()){

            console.log("Vehicle",this.id,"waiting at RED signal",nextIntersection.id)

            nextIntersection.addVehicleToQueue(this)

            return this.currentLocation
        }

        /*
        If GREEN → vehicle moves
        */

        this.currentLocation = nextIntersection

        this.routeIndex++

        console.log("Vehicle",this.id,"moved to",this.currentLocation.id)

        return this.currentLocation
    }
}

module.exports = Vehicle