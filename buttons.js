// all classes start with Constructor function

if(mouseX>154 && mouseX<496 && mouseY>54 && mouseY<196){
    fill("blue");
    rect(154, 54, 342, 142);
}

// red main
fill('red');
rect(304, 324, 342, 322);

if(mouseX>304 && mouseX<646 && mouseY>324 && mouseY<646){
    fill(255, 204, 0);
    rect(304, 324, 342, 322);
}

// blue one left
fill("blue");
rect(54, 503, 92, 143);

if(mouseX>54 && mouseX<146 && mouseY>503 && mouseY<646){
    fill("red");
    rect(54, 503, 92, 143);
}

// blue one right
fill(rect_color);
rect(504, 204, 142, 112);
}

// each rectange is a button 1-4
// function whwt it does when scrolled over
// what is done when mousePressed

Nature of Code: classes, Dan Shiffman, classes
// buttons.js is a CLASS, that says what is going to happen after you assign it numbers
// console.log("Helllloooooooo") is a debugger.. if you're not sure 
// it doesn't work, just use this little functionality 

// You have to declare the making of a thing... if writing oyur own class, you have to write your own thing

// 3 functions