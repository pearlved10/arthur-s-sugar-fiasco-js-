/**Date: June 18, 2022
 * Author: Pearl Ved
 * Description: < a game where you move Arthur horizontally to catch the foods falling from  * the sky. In order to win, you must catch 20 of the foods. If you miss one, you lose.>
 */
 
 
 //ALL VARIABLES

//startup
var startUp = function() {
    
    //START-UP PAGE
    
    background(231, 242, 159);
    
    textSize(40);
    var f = createFont("cursive");
    textFont(f);
    fill(117, 176, 217);
    text("SUGAR", 52, 54);
    text("BOWL", 212, 54);
    text("FIASCO", 117, 104); //sugar bowl fiasco title
    
    //instructions button
    fill(117, 176, 217);
    noStroke();
    rect(39,156,123,57,9);
    
    fill(231, 242, 159);
    textSize(20);
    text("HOW TO", 55, 181);
    text("PLAY", 77, 204); //how to play text
    
    //start button
    fill(117, 176, 217);
    noStroke();
    rect(39,252,123,57,9);
    
    fill(231, 242, 159);
    textSize(20);
    text("START", 68, 275);
    text("GAME", 72, 297); //start game text
    
    
    // arthur's face
    
    var x = 323;
    var y = 312;
    
    noStroke();
    fill(232, 199, 123);
    ellipse(x,y,131,166);
        
    //glasses
    fill(105, 78, 48);
    ellipse(x-58,y-9,55,65);
    ellipse(x+6,y-21,57,65); 
    rect(x-36,y-17,42,10,2);
    rect(x+32,y-24,38,10,5);
       
    //eyes
    fill(255, 255, 255);
    ellipse(x-58,y-9,39,54);
    ellipse(x+6,y-21,42,55);
    fill(33, 28, 33);
    ellipse(x-51,y-9,12,15);
    ellipse(x+12,y-20,12,15);
     
    //left ear
    fill(232, 199, 123);
    rect(x-56,y-68,20,20,20);
    ellipse(x-47,y-77,38,47);
    fill(245, 137, 188);
    ellipse(x-47,y-77,22,28);
    
    //right ear
    fill(232, 199, 123);
    ellipse(x+29,y-82,38,47);
    fill(245, 137, 188);
    ellipse(x+29,y-82,22,28);
    
    
    //eyebrows
    stroke(38, 33, 38);
    strokeWeight(4);
    line(x-35,y-53,x-45,y-45);
    line(x-9,y-60,x+8,y-57);
    
    
    //lower mouth
    strokeWeight(2);
    fill(186, 97, 128);
    ellipse(x+11,y+50,37,28);
    
        
    //smile
    noStroke();
    fill(0, 0, 0);
    ellipse(x-4,y+42,46,37);
    fill(232, 199, 123);
    ellipse(x-7,y+38,47,38);
    stroke(0, 0, 0);
    strokeWeight(2);
    line(x+22,y+34,x+12,y+33);
        
    //tongue
    noStroke();
    fill(230, 129, 178);
    ellipse(x+23,y+51,12,16);
        
    //nose
    strokeWeight(3);
    stroke(0, 0, 0);
    line(x+-7,y+23,x+-9,y+29);
    line(x-21,y+32,x-28,y+28);
        
        
};

//ARTHUR'S FUNCTION
var arthur = function(x,y) {
    
    
    //Arthur's head
    noStroke();
    fill(232, 199, 123);
    ellipse(x,y,131,166);
    
    //glasses
    fill(105, 78, 48);
    ellipse(x-58,y-9,55,65);
    ellipse(x+6,y-21,57,65);
    rect(x-36,y-17,42,10,2);
    rect(x+32,y-24,38,10,5);
   
    //eyes
    fill(255, 255, 255);
    ellipse(x-58,y-9,39,54);
    ellipse(x+6,y-21,42,55);
    fill(33, 28, 33);
    ellipse(x-51,y-9,12,15);
    ellipse(x+12,y-20,12,15);
     
    //left ear
    fill(232, 199, 123);
    rect(x-56,y-68,20,20,20);
    ellipse(x-47,y-77,38,47);
    fill(245, 137, 188);
    ellipse(x-47,y-77,22,28);
    
    //right ear
    fill(232, 199, 123);
    ellipse(x+29,y-82,38,47);
    fill(245, 137, 188);
    ellipse(x+29,y-82,22,28);
    
    
    //eyebrows
    stroke(38, 33, 38);
    strokeWeight(4);
    line(x-35,y-53,x-45,y-45);
    line(x-9,y-60,x+8,y-57);
    
    
    //lower mouth
    strokeWeight(2);
    fill(186, 97, 128);
    ellipse(x+11,y+50,37,28);
    
    
    //smile
    noStroke();
    fill(0, 0, 0);
    ellipse(x-4,y+42,46,37);
    fill(232, 199, 123);
    ellipse(x-7,y+38,47,38);
    stroke(0, 0, 0);
    strokeWeight(2);
    line(x+22,y+34,x+12,y+33);
    
    //tongue
    noStroke();
    fill(230, 129, 178);
    ellipse(x+23,y+51,12,16);
    
    //nose
    strokeWeight(3);
    stroke(0, 0, 0);
    line(x+-7,y+23,x+-9,y+29);
    line(x-21,y+32,x-28,y+28);
    
     
};

//MILKSHAKE FUNCTION
var milkshake = function (x1,y1){
   
    //milkshake cup 
    fill(230, 129, 178);
    stroke(201, 123, 181);
    quad(x1-42, y1-70, x1+10, y1-70, x1+4, y1-11, x1-30, y1-11);    
    
    //strawberry seeds
    stroke(209, 32, 12);
    ellipse(x1-28,y1-61,2,6);
    ellipse(x1-5,y1-58,2,6);
    ellipse(x1-16,y1-38,2,6);
    ellipse(x1+1,y1-27,2,6);
    ellipse(x1-24,y1-19,2,6);
    
        
    //straw
    stroke(115, 67, 67);
    strokeWeight(7);
    line(x1-58,y1-112,x1-35,y1-80);
    
    //whipped cream
    stroke(255, 255, 255);
    fill(255, 255, 255);
    ellipse(x1-37,y1-75,25,24);
    ellipse(x1+8,y1+-75,25,24);  
    ellipse(x1-14,y1-87,35,35);

    
 };
 
//ICECREAM FUNCTION
var cream = function(x2,y2){
    
   
   //waffle cone
   fill(156, 145, 84);
   stroke(84, 45, 45);
   triangle(x2+50, y2-50, x2+90, y2-50, x2+70, y2+24);
   
   //waffle cone lines
   line(x2+82,y2-18,x2+53,y2-36);
   line(x2+59,y2-16,x2+77,y2-3);
   line(x2+74,y2+13,x2+64,y2+4);
   line(x2+58,y2-17,x2+85,y2-35);
   line(x2+63,y2+2,x2+79,y2-11);


   //ice cream scoops
   noStroke();
   fill(98, 201, 224);
   ellipse(x2+55,y2-50,29,29);
   ellipse(x2+69,y2-61,37,37);
   ellipse(x2+84,y2-50,29,29);
   
   //sprinkles
   stroke(255, 0, 200);
   line(x2+51,y2-46,x2+56,y2-50);
   line(x2+79,y2-49,x2+72,y2-50);
   line(x2+72,y2-64,x2+66,y2-68); //pink sprinkles
   
   stroke(219, 222, 36);
   line(x2+58,y2-60,x2+65,y2-59);
   line(x2+83,y2-57,x2+89,y2-52); //yellow sprinkles
   
   stroke(70, 163, 83);
   line(x2+49,y2-58,x2+46,y2-52);
   line(x2+82,y2-71,x2+76,y2-68);// green sprinkles
};
    
//DONUT FUNCTION

var donut = function (x3, y3) {
    

    //donut bread
    fill(173, 164, 85);
    stroke(115, 67, 67);
    ellipse(x3+100,y3+100,82,82);

    //icing
    noStroke();
    fill(242, 162, 218);
    ellipse(x3+100,y3+100,65,65);
    
    ellipse(x3+75,y3+91,20,20);
    ellipse(x3+75,y3+103,20,20);
    ellipse(x3+79,y3+114,20,20);
    ellipse(x3+83,y3+79,20,20);
    ellipse(x3+99,y3+74,20,20);
    ellipse(x3+112,y3+79,20,20);
    ellipse(x3+122,y3+88,20,20);
    ellipse(x3+114,y3+77,20,20);
    ellipse(x3+127,y3+101,20,20);
    ellipse(x3+123,y3+113,20,20);
    ellipse(x3+118,y3+120,20,20);
    ellipse(x3+108,y3+125,20,20);
    ellipse(x3+85,y3+122,20,20);
    ellipse(x3+95,y3+126,20,20);//icing outer bumps
    
    //sprinkles
    stroke(255, 0, 0);
    line(x3+95,y3+126,x3+83,y3+119); //red
    
    stroke(230, 0, 255);
    line(x3+114,y3+122,x3+122,y3+116); //purple
    
    stroke(138, 136, 235);
    line(x3+121,y3+88,x3+117,y3+77); //blue
    
    stroke(66, 201, 32);
    line(x3+88,y3+80,x3+84,y3+91); //mid green
    
    stroke(247, 255, 0);
    line(x3+107,y3+120,x3+97,y3+117); //yellow
    
    stroke(245, 0, 159);
    line(x3+74,y3+113,x3+76,y3+104); //pink
    
    stroke(232, 106, 44);
    line(x3+123,y3+107,x3+115,y3+101); //orange
    
    stroke(45, 189, 158);
    line(x3+104,y3+79,x3+91,y3+75); //teal
    
    stroke(0, 255, 60);
    line(x3+79,y3+101,x3+75,y3+91); //lime green
    
    
    //donut hole
    noStroke();
    fill(143, 105, 166);
    ellipse(x3+100,y3+100,20,20);

};

//LOSE FUNCTION

var lose = function () {
    
    draw = function() {
        background(250, 15, 15);

        //Arthur's head
        var x = 213;
        var y = 223;
        
        noStroke();
        fill(232, 199, 123);
        ellipse(x,y,131,166);
    
        //glasses
        fill(105, 78, 48);
        ellipse(x-58,y-9,55,65);
        ellipse(x+6,y-21,57,65);
        rect(x-36,y-17,42,10,2);
        rect(x+32,y-24,38,10,5);
       
        //eyes
        fill(255, 255, 255);
        ellipse(x-58,y-9,39,54);
        ellipse(x+6,y-21,42,55);
        fill(33, 28, 33);
        ellipse(x-51,y-9,12,15);
        ellipse(x+12,y-20,12,15);
         
        //left ear
        fill(232, 199, 123);
        rect(x-56,y-68,20,20,20);
        ellipse(x-47,y-77,38,47);
        fill(245, 137, 188);
        ellipse(x-47,y-77,22,28);
        
        //right ear
        fill(232, 199, 123);
        ellipse(x+29,y-82,38,47);
        fill(245, 137, 188);
        ellipse(x+29,y-82,22,28);
        
        
        //eyebrows
        stroke(38, 33, 38);
        strokeWeight(4);
        line(x-35,y-53,x-45,y-45);
        line(x-9,y-60,x+8,y-57);
        
        //smile
        noStroke();
        fill(0, 0, 0);
        ellipse(x-3,y+59,46,37);
        fill(232, 199, 123);
        ellipse(x-1,y+63,47,38);
        stroke(0, 0, 0);
        strokeWeight(2);
        noStroke();
        rect(179,282,10,10);
        rect(215,273,10,10);
      
        //nose
        strokeWeight(3);
        stroke(0, 0, 0);
        line(x+-7,y+23,x+-9,y+29);
        line(x-21,y+32,x-28,y+28);
        
        //teardrop
        fill(105, 245, 250);
        noStroke();
    
        //text
        textSize(40);
        var f = createFont("cursive");
        textFont(f);
        ellipse(161,256,3,12);
        fill(255, 255, 255);
        textSize(33);
        text("Oh no,", 156, 45);
        textSize(21);
        text("Arthur could not catch all the desserts.", 9, 72);
        textSize(26);
        text("You lose!", 154, 97);
        
        //try again text on button
        textSize(24);
        fill(255, 255, 255);
        text("Press Restart To", 112, 346);
        text("Try Again", 156, 372);
};
        
    };
   
//WIN FUNCTION

var win = function () {
    
    //you win start-up page
    
    //background colour
    background(58, 166, 63);
    
    
    //winning text
    textSize(40);
    var f = createFont("cursive");
    textFont(f);
    text("Congratulations!", 48, 53);
    textSize(22);
    text("You helped Arthur catch", 69, 81);
    text("all his desserts!", 115, 107);
    
    //play again? text
    textSize(24);
    fill(21, 115, 33);
    text("Press Restart To", 112, 349);
    text("Play Again. ", 149, 374);
    
    
    //happy arthur
    var x = 205;
    var y = 223;

    noStroke();
    fill(232, 199, 123);
    ellipse(x,y,131,166);
    
    //glasses
    fill(105, 78, 48);
    ellipse(x-58,y-9,55,65);
    ellipse(x+6,y-21,57,65);
    rect(x-36,y-17,42,10,2);
    rect(x+32,y-24,38,10,5);
   
    //eyes
    fill(255, 255, 255);
    ellipse(x-58,y-9,39,54);
    ellipse(x+6,y-21,42,55);
    fill(33, 28, 33);
    ellipse(x-51,y-9,12,15);
    ellipse(x+12,y-20,12,15);
     
    //left ear
    fill(232, 199, 123);
    rect(x-56,y-68,20,20,20);
    ellipse(x-47,y-77,38,47);
    fill(245, 137, 188);
    ellipse(x-47,y-77,22,28);
    
    //right ear
    fill(232, 199, 123);
    ellipse(x+29,y-82,38,47);
    fill(245, 137, 188);
    ellipse(x+29,y-82,22,28);
    
    
    //eyebrows
    stroke(38, 33, 38);
    strokeWeight(4);
    line(x-35,y-53,x-45,y-45);
    line(x-9,y-60,x+8,y-57);
    
    
    //lower mouth
    strokeWeight(2);
    fill(186, 97, 128);
    ellipse(x+11,y+50,37,28);
    
    
    //smile
    noStroke();
    fill(0, 0, 0);
    ellipse(x-4,y+42,46,37);
    fill(232, 199, 123);
    ellipse(x-7,y+38,47,38);
    stroke(0, 0, 0);
    strokeWeight(2);
    line(x+22,y+34,x+12,y+33);
    
    //tongue
    noStroke();
    fill(230, 129, 178);
    ellipse(x+23,y+51,12,16);
    
    //nose
    strokeWeight(3);
    stroke(0, 0, 0);
    line(x+-7,y+23,x+-9,y+29);
    line(x-21,y+32,x-28,y+28);
    
};


//moving variables + more 
var xMove = 100;
var yMove = 100;

var xMove1 = 100;
var yMove1 = 100;

var xMove2 = 100;
var yMove2 = 100;

var score = 0;
var icecreamCaught = false;
var milkshakeCaught = false;
var donutCaught = false;

//GAMESCREEN FUNCTION
var gameScreen = function() {
    
    //if start game is touched   
    draw = function() {
            
        
        //colour
        background(143, 105, 166);
        
        //main arthur 
        arthur(mouseX,315);
     
        //milkshake falling down
        strokeWeight(2);
        milkshake(xMove,yMove);
        yMove += 5;


        if (yMove > 500) {
            yMove = -91;
            xMove = random(29,363);
            if (milkshakeCaught === true){
                score = score + 1;
                milkshakeCaught = false;
            } else{
               lose();
              }
        }
         
        //donut falling down
        strokeWeight(2);
        donut(xMove1+161, yMove1-497);
        yMove1-=-6;
         
         
        if (yMove1 > 900){
            yMove1 = -100;
            xMove1 = random(29,217);
            if (donutCaught === true) {
                score = score + 1;
                donutCaught = false;
            } else {
                lose();
        }
             
      }
    
        //ice cream falling down
        strokeWeight(1);
        cream(xMove2+40,yMove2-300);
        yMove2+=5;
        
         
        if (yMove2 > 900){
            yMove2 = -99;
            xMove2 = random(45,308);  
             if (icecreamCaught === true) {
                 score = score + 1;
                 icecreamCaught = false;
          } else {
                lose();
            }
             
      }
         
        //score board 
        fill(212, 19, 212);
        textSize(25);
        fill(255, 255, 0);
        rect(2,2,192,24,4);
        fill(0, 0, 0);
        textSize(18);
        text("Dessert Collected:",7,21);
        text (score, 170, 21);
       
        
        //if statement to touch milkshake 
    if (yMove > 234 && (xMove - 30 > mouseX - 65.5 && xMove - 30 < mouseX + 65.5 || xMove+     4 > mouseX + 65.5 && xMove + 4 < mouseX - 65.5)) {
       milkshakeCaught = true;
      
       }
        
        
        
        
        //if statement to touch icecream
        if (yMove2-278> 234 && (xMove2 + 110 > mouseX - 65 && xMove2 + 110 < mouseX + 65 ||         xMove2 + 110 > mouseX + 65 && xMove2 + 110 < mouseX - 65)) {
       icecreamCaught = true;
     }
     
     
     //if statement to touch donut
     
    if (yMove1-364 >234 && ( xMove1 + 236 > mouseX - 65 && xMove1 + 236 < mouseX + 65 ||       xMove1 + 236  > mouseX + 65 && xMove + 236 < mouseX - 65)) {
        donutCaught = true;
        }
      
    // if you socre is 20, you win...
    if(score>=20){
        win();
        donutCaught = true;
        icecreamCaught = true;
        milkshakeCaught = true;
        
    }
    
    };
    
    };

//if how to play is clicked
startUp();
mouseClicked = function(){
    
    //if mouse clicks these parameters, instructions pop up
    if (mouseX > 39 && mouseX < 162 && mouseY > 156 && mouseY < 213) {
   
        //background colour
        background(231, 242, 159);
        
        //arthurs face
        noStroke();
        fill(232, 199, 123);
            
        arthur(90,311);   
        
        //textbox
        fill(255, 255, 255);
        noStroke();
        rect(143,52,251,173,5);
        triangle(190, 277, 176, 193, 277, 100);
       
        //instructions text
        textSize(17);
        var f = createFont("cursive");
        textFont(f);
        fill(117, 176, 217);
        text("INSTRUCTIONS:", 191, 74);
        text("Using your mouse, move me", 157, 97);
        text("horizontally to help me catch", 154, 120);
        text("all the Sugar Bowl desserts", 156, 142);
        text("falling from the sky! 1 food", 157, 162);
        text("gives you 1 point. If you miss,", 155, 180);
        text("You lose! Get 20 points to win.", 154, 201);
        
        //button
        fill(109, 151, 209);
        rect(250,327,123,57,9); 
        fill(242, 242, 116);
        
        //"back" text
        textSize(35);
        text("Back", 273, 368);
        
        }
        
        
     
     // if statement for restarting the program and working the back button
      if (mouseX>250 && mouseX < 373 && mouseY>327 && mouseY < 384) {
          Program.restart();
    }
};


//if start game is touched  
  draw = function() {
     
     
    if (mouseX > 39 && mouseX < 162 && mouseY > 252 && mouseY < 309 && mouseIsPressed) {
        gameScreen();
    }
        
};



     
 
     
     
