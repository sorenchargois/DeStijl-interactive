// starting at top left and going down
var button;
var button2;
var button3;
var button4;
// column 2
var button5;
var button6;
var button7;
var button8;
// column 3
var button9;
var button10;
var button11;
// column 4
var button12;
var button13;
var button14;
var button15;
// blue left
var button16;
// yellow top
var button17;
// red main
var button18;
// right blue
var button19;

var buttons = [];

function setup(){
    
    createCanvas(900,900);
   
    button = new Button(54, 54, 92, 142, 255);
    button2 = new Button(54, 204, 92, 112, 255); 
    button3 = new Button(54, 324, 92, 172, 255);
    button4 = new Button(54, 654, 92, 142, 255);
    button5 = new Button(154, 204, 342, 112, 255);  
    button6 = new Button(154, 324, 142, 172, 255);
    button7 = new Button(154, 503, 142, 143, 255);          
    button8 = new Button(154, 654, 142, 142, 255);
    button9 = new Button(504, 54, 142, 142, 255);  
    button10 = new Button(504, 204, 142, 112, 255);    
    button11 = new Button(304, 654, 342, 142, 255);
    button12 = new Button(654, 54, 142, 142, 255);                                            
    button13 = new Button(654, 204, 142, 112, 255);    
    button14 = new Button(654, 324, 142, 322, 255);  
    button15 = new Button(654, 654, 142, 142, 255);
    // blue left
    button16 = new Button(54, 503, 92, 143, "blue");   
    // yellow top  
    button17 = new Button(154, 54, 342, 142, "yellow");  
    // red main
    button18 = new Button(304, 324, 342, 322, "red");
    // blue right
    button19 = new Button(504, 204, 142, 112, "blue");
}

function draw() {
    background(255, 255, 255);
    // black lines are 8px wide
    strokeWeight(8);
    stroke(0, 0, 0)
    // these are the outer lines going clockwise starting at left vertical
    line(50, 50, 50, 800);
    line(50, 50, 800, 50);
    line(800, 800, 800, 50);
    line (50, 800, 800, 800);

    // art lines
    // 3 vertical
    line(150, 50,150, 800);
    line(300, 320,300, 800);
    line(650, 50,650, 800);
    // 3 horizontal
    line(50, 200, 800, 200);
    line(50, 650, 800, 650);
    line(50, 320, 800, 320);
    // a few shorties
    line(500, 50, 500, 320); 
    line(50, 500, 300, 500);

    // yellow one
    strokeWeight(0);
    fill(255, 204, 0);
    rect(154, 54, 342, 142);

    // // top yellow
    // if(mouseX>154 && mouseX<496 && mouseY>54 && mouseY<196){
    //     fill("blue");
    //     rect(154, 54, 342, 142);
    // }

    // // red main
    // fill('red');
    // rect(304, 324, 342, 322);

    // if(mouseX>304 && mouseX<646 && mouseY>324 && mouseY<646){
    //     fill(255, 204, 0);
    //     rect(304, 324, 342, 322);
    // }

    // blue one left
    // fill("blue");
    // rect(54, 503, 92, 143);

    // if(mouseX>54 && mouseX<146 && mouseY>503 && mouseY<646){
    //     fill("red");
    //     rect(54, 503, 92, 143);
    // }


    button.display();
    button2.display();
    button3.display();
    button4.display();
    button5.display();
    button6.display();
    button7.display();
    button8.display();
    button9.display();    
    button10.display();    
    button11.display();  
    button12.display();  
    button13.display(); 
    button14.display();         
    button15.display();                                                                                                               
    button16.display();     
    button17.display();
    button18.display();    
    button19.display();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}

function mousePressed(){
    button.pressed(mouseX, mouseY);
    button2.pressed(mouseX, mouseY);
    button3.pressed(mouseX, mouseY);
    button4.pressed(mouseX, mouseY);
    button5.pressed(mouseX, mouseY);
    button6.pressed(mouseX, mouseY);
    button7.pressed(mouseX, mouseY);
    button8.pressed(mouseX, mouseY);
    button9.pressed(mouseX, mouseY);
    button10.pressed(mouseX, mouseY); 
    button11.pressed(mouseX, mouseY);  
    button12.pressed(mouseX, mouseY);        
    button13.pressed(mouseX, mouseY);    
    button14.pressed(mouseX, mouseY);  
    button15.pressed(mouseX, mouseY);  
    // blue square  
    button16.pressedColor(mouseX, mouseY);    
    // yellow top
    button17.pressedColor(mouseX, mouseY);  
    // red main  
    button18.pressedColor(mouseX, mouseY);  
    // blue right
    button19.pressedColor(mouseX, mouseY);                                                                                                                                                                                                                                                      
}

// I WAS THINKING THIS COULD WORK, IT DOESN'T

// function mouseOver(){
//     button16.hovering(mouseX, mouseY);
// }


class Button{
    constructor(tempX, tempY, tempWidth, tempHeight, tempColor) {
        this.x = tempX;
        this.y = tempY;
        this.h = tempHeight;
        this.w = tempWidth;
        this.rect_color = tempColor;
    }

pressed(mx, my){
    if(mx >= this.x && mx <= this.x + this.w && my>= this.y && my <= this.y+ this.h && this.rect_color === 255) {
        this.rect_color = 0;
    } 
    else if(mx >= this.x && mx <= this.x + this.w && my>= this.y && my <= this.y+ this.h && this.rect_color === 0){
        this.rect_color = 255;
    }   
  }

//   THIS IS THE CHUNK I NEED HELP WITH

pressedColor(mx, my){
    if(mx >= this.x && mx <= this.x + this.w && my>= this.y && my <= this.y+ this.h && this.rect_color === "blue") {
        this.rect_color = "red";
    } 
    else if(mx >= this.x && mx <= this.x + this.w && my>= this.y && my <= this.y+ this.h && this.rect_color === "red"){
        this.rect_color = "yellow";
    }
    else if (mx >= this.x && mx <= this.x + this.w && my>= this.y && my <= this.y+ this.h && this.rect_color === "yellow"){
        this.rect_color = "blue";
    }   
}

// I WAS THINKING THIS COULD WORK TO HAVE THE HOVER AFFECT
// hovering(mx, my){
//     if(mx >= this.x && mx <= this.x + this.w && my>= this.y && my <= this.y+ this.h && this.rect_color === "blue") {
//         fill("red");
//     }
// }

   display(){
    fill(this.rect_color);
    rect(this.x, this.y, this.w, this.h);
  }
}

// top yellow changed to blue
// main red changed to yellow