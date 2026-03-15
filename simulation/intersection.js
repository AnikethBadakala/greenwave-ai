/*
INTERSECTION CLASS
------------------

Represents a TRAFFIC SIGNAL in the city.

In a real-world system a signal:
- cycles between RED and GREEN
- manages vehicle queues
- controls traffic flow

This class now supports:
1. Signal timers
2. Vehicle queues
3. Automatic signal switching
*/

class Intersection {

    /*
    Constructor initializes a traffic signal.

    id → signal name
    x,y → location in virtual city
    */

    constructor(id,x,y){

        // Unique identifier for signal
        this.id = id

        // Position in city grid
        this.x = x
        this.y = y

        // Current signal state
        this.signalState = "RED"

        // Queue of vehicles waiting at signal
        this.vehicleQueue = []

        // Signal timer counter
        this.timer = 0

        // Signal cycle duration (seconds)
        this.cycleDuration = 6
    }

    /*
    turnGreen()

    Changes signal state to GREEN
    allowing vehicles to pass
    */

    turnGreen(){
        this.signalState = "GREEN"
    }

    /*
    turnRed()

    Changes signal state to RED
    stopping vehicles
    */

    turnRed(){
        this.signalState = "RED"
    }

    /*
    canPass()

    Used by vehicles to check
    if signal allows movement
    */

    canPass(){
        return this.signalState === "GREEN"
    }

    /*
    addVehicleToQueue(vehicle)

    Adds vehicle to waiting queue
    */

    addVehicleToQueue(vehicle){
        this.vehicleQueue.push(vehicle)
    }

    /*
    processQueue()

    When signal turns GREEN
    vehicles are released from queue
    */

    processQueue(){

        if(this.signalState !== "GREEN"){
            return
        }

        if(this.vehicleQueue.length === 0){
            return
        }

        const vehicle = this.vehicleQueue.shift()

        console.log("Vehicle",vehicle.id,"leaving queue at",this.id)
    }

    /*
    updateSignal()

    Simulates automatic traffic signal cycles
    */

    updateSignal(){

        // increase timer every simulation tick
        this.timer++

        // when timer exceeds cycle duration
        if(this.timer >= this.cycleDuration){

            if(this.signalState === "RED"){
                this.turnGreen()
                console.log("Signal",this.id,"turned GREEN")
            }
            else{
                this.turnRed()
                console.log("Signal",this.id,"turned RED")
            }

            // reset timer
            this.timer = 0
        }
    }

    /*
    distanceTo()

    Calculates distance between this signal
    and another point (ambulance)
    */

    distanceTo(point){

        const dx = this.x - point.x
        const dy = this.y - point.y

        return Math.sqrt(dx*dx + dy*dy)
    }
}

module.exports = Intersection