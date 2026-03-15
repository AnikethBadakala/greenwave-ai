class Ambulance {

    constructor(start){
        this.currentLocation = start
        this.route = []
        this.routeIndex = 0
    }

    setRoute(route){
        this.route = route
        this.routeIndex = 0
    }

    move(){

        if(this.routeIndex >= this.route.length){
            return null
        }

        const nextIntersection = this.route[this.routeIndex]

        /*
        Check signal state
        */

        if(!nextIntersection.canPass()){
            console.log("Signal RED at", nextIntersection.id,"Ambulance waiting...")
            return this.currentLocation
        }

        this.currentLocation = nextIntersection

        this.routeIndex++

        return this.currentLocation
    }
}

module.exports = Ambulance