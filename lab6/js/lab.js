/**
 * Author:    Leonardo Sanchez
 * Created:   2.09.2022
 *
 * (c) Copyright by Blub Corp.
 **/

 // Define Variables
 myTransport = ["Monterey-Salinas Transit", "train-hopping", "Spirit Airlines", "bicycle"
    ];

myMainRide = {
        make: "Ford",
        model: "Taurus",
        color: "Red",
        year: "1995",
        age: function() {
            return 2022 - this.year;
        }
    }

// output
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
