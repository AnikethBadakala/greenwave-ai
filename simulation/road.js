/*
ROAD CLASS
----------

Represents a road connecting two intersections.

Example:

A ---- Road ---- B

Each road stores:
- start intersection
- end intersection
- length of the road
*/

class Road {

    /*
    start → starting signal
    end   → ending signal
    length → road distance
    */

    constructor(start,end,length){

        // where road begins
        this.start = start

        // where road ends
        this.end = end

        // length of the road
        this.length = length
    }
}

module.exports = Road