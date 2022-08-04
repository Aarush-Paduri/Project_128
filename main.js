harry_potter = "";
peter_pan = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload() {
    harry_potter = loadSound("Harry.mp3");
    peter_pan = loadSound("Peter.mp3");
}

function setup() {
    canvas = createCanvas(600, 400);

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("POSENET IS WORKING:)");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y; 
    }
}

function draw() {
    image(video, 0, 0, 600, 400);
}

function play() {
    song.play()
    song.setVolume(1);
    song.rate(1);
}