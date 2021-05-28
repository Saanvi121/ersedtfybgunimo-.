function preload()
{
    img = loadImage("glass.png")
}

function setup()
{
    canvas = createCanvas(300,230)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,230)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log("MoDeL LoAdEd PeEpS")
}

function gotPoses(results)
{
    if (results.length > 0)
    { console.log(results)
  console.log("lefteye_x = " + results[0].pose.leftEye.x)
        console.log("righteye_x = " + results[0].pose.rightEye.x)
        console.log("lefteye_y = " + results[0].pose.leftEye.y)
        console.log("righteye_y = " + results[0].pose.rightEye.y)
    }
}

function draw()
{
    image(video, 0,0,300,230)
}


function take_snapshot()
{
    save("My sunglass Image.jpg")
}