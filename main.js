noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,450);
    canvas=createCanvas(500,400);
    canvas.position(700,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Model loaded");
}
function gotPoses(results) {
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.y;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background("aliceblue");
    fill('#0096FF');
    stroke('#0096FF');
    square(noseX,noseY,difference);
    document.getElementById("squre_side").innerHTML="Width and height of square will be "+difference+"px";
}