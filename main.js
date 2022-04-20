leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(150,200);

    canvas = createCanvas(800,400);
    canvas.position(600,200);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}



function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results){
   
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}
function draw(){
    background("purple");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("pink");
    text('Ryan',50,200);
}