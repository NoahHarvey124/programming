function setup() {
  createCanvas(600,600)
    background('#ffcdc8')
}



function draw() {
//    background('#ffcdc8');
//    rectMode(CENTER);

    push();
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(millis() / 1000, 200));
    
    noStroke();
    fill('#ffcdc8')
    rect(20, 20, 20, 20);
    
    fill('#000')
    rect(0, 20, 20, 20)
    

    fill('#fff')
    rect(0, -50, 20, 20)
    pop();
    
//    rect(100, 100, 200, 250)

    textSize(50)
    text('acne', 450, 550)
    

}


function mousePressed() {
    
    var randomX = random(220, 350)
    var randomY = random(220, 350)
    
    var r = 255;
    var g = random(130,170);
    var b = random(130,180);
    
    fill(r,g,b)
    ellipse(randomX, randomY, 75, 70)
}


