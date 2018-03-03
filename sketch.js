var lpkidsred;
var lpkidsgreen;
var lpkidsblue;
var lpkidsgray;
var television;

// var multipleKeys = [];

function preload(){
    lpkidsred = loadImage("images/lpkids-red.png");
    lpkidsgreen = loadImage("images/lpkids-green.png");
    lpkidsblue = loadImage("images/lpkids-blue.png");
    lpkidsgray = loadImage("images/lpkids-gray.png");
    
    television = loadImage("images/oldTV.png");
}

function setup(){
    createCanvas(749,524)
}

 
// function keyPressed(){
//     append(multipleKeys, keys);
//     console.log(multipleKeys);
// }

// function keyReleased(){
//     multipleKeys.forEach(function (item, index, arrray){
//         if(item == key){
//             multipleKeys.splice(index, index + 1);
//         }
//     });
// }

function draw(){
    
    
    if(keyIsPressed){
         if(key == "r"){
            image(lpkidsred, 50,50);
            image(television, 0, 0);
         }; 
         
         if(key == "g"){
            image(lpkidsgreen, 50,50);
            image(television, 0, 0);
         };
         
         if(key == "b"){
            image(lpkidsblue, 50,50);
            image(television, 0, 0);
         };
         
         if(keyCode == 32){
             fill(0);
             rect(50,50, 500, 374);
             blendMode(LIGHTEST);
             image(lpkidsred, 50,50);
             image(lpkidsgreen, 50,50);
             image(lpkidsblue, 50,50); 
             
             image(television, 0, 0);
         };
    }    
    
    else{
        
        image(lpkidsgray, 50, 50);
        image(television, 0, 0);
    }
     blendMode(NORMAL);
     image(television, 0, 0);
}