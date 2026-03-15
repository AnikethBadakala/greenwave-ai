/*
Road Class
-----------
Represents a road connecting two intersections.

In real life:
A road connects two traffic signals.

Example:
Signal A  -------- Road --------  Signal B

This allows vehicles to move between intersections.
*/

class Road {

    /*
    start -> starting intersection
    end -> destination intersection
    length -> distance of the road
    */
    constructor(start, end, length) {

        // intersection where road begins
        this.start = start

        // intersection where road ends
        this.end = end

        // road distance
        this.length = length

        /*
        Later we will add:
        - traffic density
        - number of vehicles
        - speed limit
        - congestion
        */
    }
}

module.exports = Road