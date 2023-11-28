$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // TODO
    /* The first line creates a circle object, and it does so with three arguments: 
    the x and y coordinates of the center of the circle, and 
    the radius of the circle */
    // Circle(x, y, r);

    // To draw repeated circle using for loop
    /*var c;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green';
        }
    }*/

    var tool = new Tool();
    var x = Shape.Circle(200, 200, 80);
    x.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontsize = 20;
    text.content ='hello world';

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'blue'
    }
    
    
    paper.view.draw();
});