screen_width = 0
screen_height = 0
apple = ""
speak_data = ""
to_number = ""

function setup(){
    c = createCanvas(340,250);
    c.center()
    vid = createCapture(VIDEO)
    vid.size(200,100)
    vid.position(10,170)
    posenet = ml5.poseNet(vid,modelloaded)
    posenet.on("pose",gotPoses)
}
function modelloaded(){
    console.log("model has been loaded.")
}
 function gotPoses(results){
  if (results.length>0){
    console.log(results)
  }
 }