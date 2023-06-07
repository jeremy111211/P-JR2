var rock, player, coin, plant, cliff, background, bg

var rockImg, playerImg, coinImg, plantImg, cliffImg, backgroundImg




function preload(){
    
rockImg = loadImage("Rocks Image.png");
playerImg = loadImage("Character Image.png");
coinImg = loadImage("Coin Image.png");
plantImg = loadImage("image-removebg-preview.png");
cliffImg = loadImage("Cliff Image.png");
backgroundImg = loadImage("jungle-environment-background-in-cartoon-style-free-vector.jpg");





}

function setup(){
    createCanvas(windowWidth,windowHeight);

    bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    bg.addImage("background",backgroundImg)

    rock = createSprite(200, 150, 20,20);
    rock.addImage("rock", rockImg);
    rock.scale = 0.3;

    player = createSprite(150,500,30,30);
    player.addImage("player", playerImg);
    player.scale = 0.2;
    

    




}

function draw(){
    background("white");

    if(keyDown("space")&& player.y >= 100) {
        player.velocityY = -12;
    }

    player.velocityY = player.velocityY+0.9;

    

    spawnRocks();

    drawSprites();
}

function spawnRocks(){
    if (frameCount % 60 === 0) {
        rock = createSprite(random(windowWidth - 700, windowWidth+100), windowHeight-100, 100, 100);
        rock.velocityX = -3
        var rand = Math.round(random(1,5));
        rock.addImage("rock1", rockImg);
        rock.scale = 0.3
}
}