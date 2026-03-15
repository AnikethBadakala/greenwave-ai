/*
HOSPITAL CLASS
--------------

Represents the destination hospital.

In our simulation:
Hospitals exist at intersections.

Example:
Hospital located at intersection C
*/

class Hospital {

    /*
    id → hospital identifier
    intersection → location of hospital
    */

    constructor(id,intersection){

        // hospital name
        this.id = id

        // intersection where hospital exists
        this.location = intersection
    }
}

module.exports = Hospital