let bugs = [] //array of Jitter bugs 
bug_num = 80;
let img;

function preload(){
    img = loadImage('images/Bug.png')
    img2 = loadImage('images/wand.png')

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    //Create bugs
    for (let i = 0; i < 50; i++){
        bugs.push(new Jitter());
    }
}

function draw(){
    background(249, 249, 152);
    for(let i=0; i<bugs.length; i++){
        bugs[i].move();
        bugs[i].display();
    }
    if(mouseIsPressed){
        image(img2, mouseX, mouseY, img.width/3, img.height/3);
    }
}



//Jitter Class
/* 
I created the Jitter class and placed my variables within the 
constructor. To make the image smaller, I set this.w and this.h 
equal to img width and img height, respectively, divided by 4.
*/

class Jitter{ 
    constructor(){ 
        this.x = random(width);
        this.y = random(height);
        this.w = img.width/4
        this.h = img.height/4
        this.speed = 1.5;
    }

    move(){
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        }
    
    display() {
        image(img, this.x, this.y, this.w, this.h);
    }
}



