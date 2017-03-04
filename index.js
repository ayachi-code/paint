function setup() {
createCanvas(750,500);    
background(65,150,250);

}


function draw() {
stroke(200,53,63);    
line(pmouseX,pmouseY,mouseX,mouseY);

}

function keyPressed() {

if (keyCode === BACKSPACE ) {
    console.log('Word verwijdert ');
    background(65,150,250); 

}


}



