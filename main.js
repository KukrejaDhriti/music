songone= "";
songtwo= "";

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function draw()
{
   image(video, 0, 0, 600, 500);
}

function preload()
{
    songone= loadSound("Taylor Swift - Change (Taylor's Version) (Lyric Video).mp3");
    songtwo= loadSound("Taylor Swift - Mean.mp3");
}