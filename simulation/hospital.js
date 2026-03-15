/*
Hospital Class
--------------
Represents the hospital where the ambulance must reach.

In our simulation:
Hospitals are attached to an intersection.

Example:
If hospital is at intersection C
Ambulance route must end at C.
*/

class Hospital {

    /*
    id -> hospital identifier
    intersection -> location where hospital exists
    */
    constructor(id, intersection) {

        // unique hospital identifier
        this.id = id

        // hospital location
        this.location = intersection
    }
}

module.exports = Hospital