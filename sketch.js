var backgroundImage;
var player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,
player15,player16,player17,player18,player19,player20,player21,player22;
var goal1,goal2;
var num=0;
var score1=0,score2=0;
function preload(){
  backgroundImage=loadImage("football_pitch.webp");
}

function setup() {
  createCanvas(1200,600);
  goal1=createSprite(60,300,10,80);
  goal2=createSprite(1145,300,10,80);
  goal3=createSprite(45,300,20,80);
  //goal3.visible=false;
  goal4=createSprite(1155,300,30,80);
  //goal4.visible=false;
  player1=createSprite(75,300,10,10);
  player1.shapeColor="yellow";
  player2=createSprite(300,250,10,10);
  player2.shapeColor="yellow";
  player3=createSprite(300,375,10,10);
  player3.shapeColor="yellow";
  player4=createSprite(300,500,10,10);
  player4.shapeColor="yellow";
  player5=createSprite(300,125,10,10);
  player5.shapeColor="yellow";
  player6=createSprite(400,75,10,10);
  player6.shapeColor="yellow";
  player7=createSprite(400,200,10,10);
  player7.shapeColor="yellow";
  player8=createSprite(400,325,10,10);
  player8.shapeColor="yellow";
  player9=createSprite(400,450,10,10);
  player9.shapeColor="yellow";
  player10=createSprite(400,565,10,10);
  player10.shapeColor="yellow";
  player11=createSprite(550,300,10,10);
  player11.shapeColor="yellow";
  player12=createSprite(1125,300,10,10);
  player12.shapeColor="red";
  player13=createSprite(850,250,10,10);
  player13.shapeColor="red";
  player14=createSprite(850,375,10,10);
  player14.shapeColor="red";
  player15=createSprite(850,500,10,10);
  player15.shapeColor="red";
  player16=createSprite(850,125,10,10);
  player16.shapeColor="red";
  player17=createSprite(750,75,10,10);
  player17.shapeColor="red";
  player18=createSprite(750,200,10,10);
  player18.shapeColor="red";
  player19=createSprite(750,325,10,10);
  player19.shapeColor="red";
  player20=createSprite(750,450,10,10);
  player20.shapeColor="red";
  player21=createSprite(750,565,10,10);
  player21.shapeColor="red";
  player22=createSprite(650,300,10,10);
  player22.shapeColor="red";
  ball=createSprite(600,300,10,10);
  ball.shapeColor="blue";
  
}

function draw() {
  background(backgroundImage);
  
  if(keyDown("space")){
    ball.velocityX=Math.round(random(-3,3));
    ball.velocityY=Math.round(random(-3,3));
    player12.velocityX=Math.round(random(-3,3));
    player12.velocityY=Math.round(random(-3,3));
    player13.velocityX=Math.round(random(-3,3));
    player13.velocityY=Math.round(random(-3,3));
    player14.velocityX=Math.round(random(-3,3));
    player14.velocityY=Math.round(random(-3,3));
    player15.velocityX=Math.round(random(-3,3));
    player15.velocityY=Math.round(random(-3,3));
    player16.velocityX=Math.round(random(-3,3));
    player16.velocityY=Math.round(random(-3,3));
    player17.velocityX=Math.round(random(-3,3));
    player17.velocityY=Math.round(random(-3,3));
    player18.velocityX=Math.round(random(-3,3));
    player18.velocityY=Math.round(random(-3,3));
    player19.velocityX=Math.round(random(-3,3));
    player19.velocityY=Math.round(random(-3,3));
    player20.velocityX=Math.round(random(-3,3));
    player20.velocityY=Math.round(random(-3,3));
    player21.velocityX=Math.round(random(-3,3));
    player21.velocityY=Math.round(random(-3,3));
    player22.velocityX=Math.round(random(-3,3));
    player22.velocityY=Math.round(random(-3,3));

  }
  if(keyDown("UP_ARROW")){
    player1.velocityX=Math.round(random(-3,3));
    player1.velocityY=Math.round(random(-1,-3));
    player2.velocityX=Math.round(random(-3,3));
    player2.velocityY=Math.round(random(-1,-3));
    player3.velocityX=Math.round(random(-3,3));
    player3.velocityY=Math.round(random(-1,-3));
    player4.velocityX=Math.round(random(-3,3));
    player4.velocityY=Math.round(random(-1,-3));
    player5.velocityX=Math.round(random(-3,3));
    player5.velocityY=Math.round(random(-1,-3));
    player6.velocityX=Math.round(random(-3,3));
    player6.velocityY=Math.round(random(-1,-3));
    player7.velocityX=Math.round(random(-3,3));
    player7.velocityY=Math.round(random(-1,-3));
    player8.velocityX=Math.round(random(-3,3));
    player8.velocityY=Math.round(random(-1,-3));
    player9.velocityX=Math.round(random(-3,3));
    player9.velocityY=Math.round(random(-1,-3));
    player10.velocityX=Math.round(random(-3,3));
    player10.velocityY=Math.round(random(-1,-3));
    player11.velocityX=Math.round(random(-3,3));
    player11.velocityY=Math.round(random(-1,-3));
   

  }
  if(keyDown("DOWN_ARROW")){
    player1.velocityX=Math.round(random(-3,3));
    player1.velocityY=Math.round(random(1,3));
    player2.velocityX=Math.round(random(-3,3));
    player2.velocityY=Math.round(random(1,3));
    player3.velocityX=Math.round(random(-3,3));
    player3.velocityY=Math.round(random(1,3));
    player4.velocityX=Math.round(random(-3,3));
    player4.velocityY=Math.round(random(1,3));
    player5.velocityX=Math.round(random(-3,3));
    player5.velocityY=Math.round(random(1,3));
    player6.velocityX=Math.round(random(-3,3));
    player6.velocityY=Math.round(random(1,3));
    player7.velocityX=Math.round(random(-3,3));
    player7.velocityY=Math.round(random(1,3));
    player8.velocityX=Math.round(random(-3,3));
    player8.velocityY=Math.round(random(1,3));
    player9.velocityX=Math.round(random(-3,3));
    player9.velocityY=Math.round(random(1,3));
    player10.velocityX=Math.round(random(-3,3));
    player10.velocityY=Math.round(random(1,3));
    player11.velocityX=Math.round(random(-3,3));
    player11.velocityY=Math.round(random(1,3));
   

  }
  if(keyDown("RIGHT_ARROW")){
    player1.velocityX=Math.round(random(1,3));
    player1.velocityY=Math.round(random(-1,-3));
    player2.velocityX=Math.round(random(1,3));
    player2.velocityY=Math.round(random(-1,-3));
    player3.velocityX=Math.round(random(1,3));
    player3.velocityY=Math.round(random(-1,-3));
    player4.velocityX=Math.round(random(1,3));
    player4.velocityY=Math.round(random(-1,-3));
    player5.velocityX=Math.round(random(1,3));
    player5.velocityY=Math.round(random(-1,-3));
    player6.velocityX=Math.round(random(1,3));
    player6.velocityY=Math.round(random(-1,-3));
    player7.velocityX=Math.round(random(1,3));
    player7.velocityY=Math.round(random(-1,-3));
    player8.velocityX=Math.round(random(1,3));
    player8.velocityY=Math.round(random(-1,-3));
    player9.velocityX=Math.round(random(1,3));
    player9.velocityY=Math.round(random(-1,-3));
    player10.velocityX=Math.round(random(1,3));
    player10.velocityY=Math.round(random(-1,-3));
    player11.velocityX=Math.round(random(1,3));
    player11.velocityY=Math.round(random(-1,-3));
   

  }
  if(keyDown("LEFT_ARROW")){
    player1.velocityX=Math.round(random(-1,-3));
    player1.velocityY=Math.round(random(-1,-3));
    player2.velocityX=Math.round(random(-1,-3));
    player2.velocityY=Math.round(random(-1,-3));
    player3.velocityX=Math.round(random(-1,-3));
    player3.velocityY=Math.round(random(-1,-3));
    player4.velocityX=Math.round(random(-1,-3));
    player4.velocityY=Math.round(random(-1,-3));
    player5.velocityX=Math.round(random(-1,-3));
    player5.velocityY=Math.round(random(-1,-3));
    player6.velocityX=Math.round(random(-1,-3));
    player6.velocityY=Math.round(random(-1,-3));
    player7.velocityX=Math.round(random(-1,-3));
    player7.velocityY=Math.round(random(-1,-3));
    player8.velocityX=Math.round(random(-1,-3));
    player8.velocityY=Math.round(random(-1,-3));
    player9.velocityX=Math.round(random(-1,-3));
    player9.velocityY=Math.round(random(-1,-3));
    player10.velocityX=Math.round(random(-1,-3));
    player10.velocityY=Math.round(random(-1,-3));
    player11.velocityX=Math.round(random(-1,-3));
    player11.velocityY=Math.round(random(-1,-3));
   

  }

  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  player1.bounceOff(edges[0]);
  player1.bounceOff(edges[1]);
  player1.bounceOff(edges[2]);
  player1.bounceOff(edges[3]);

  player2.bounceOff(edges[0]);
  player2.bounceOff(edges[1]);
  player2.bounceOff(edges[2]);
  player2.bounceOff(edges[3]);

  player3.bounceOff(edges[0]);
  player3.bounceOff(edges[1]);
  player3.bounceOff(edges[2]);
  player3.bounceOff(edges[3]);

  player4.bounceOff(edges[0]);
  player4.bounceOff(edges[1]);
  player4.bounceOff(edges[2]);
  player4.bounceOff(edges[3]);

  player5.bounceOff(edges[0]);
  player5.bounceOff(edges[1]);
  player5.bounceOff(edges[2]);
  player5.bounceOff(edges[3]);

  player6.bounceOff(edges[0]);
  player6.bounceOff(edges[1]);
  player6.bounceOff(edges[2]);
  player6.bounceOff(edges[3]);

  player7.bounceOff(edges[0]);
  player7.bounceOff(edges[1]);
  player7.bounceOff(edges[2]);
  player7.bounceOff(edges[3]);

  player8.bounceOff(edges[0]);
  player8.bounceOff(edges[1]);
  player8.bounceOff(edges[2]);
  player8.bounceOff(edges[3]);

  player9.bounceOff(edges[0]);
  player9.bounceOff(edges[1]);
  player9.bounceOff(edges[2]);
  player9.bounceOff(edges[3]);

  player10.bounceOff(edges[0]);
  player10.bounceOff(edges[1]);
  player10.bounceOff(edges[2]);
  player10.bounceOff(edges[3]);

  player11.bounceOff(edges[0]);
  player11.bounceOff(edges[1]);
  player11.bounceOff(edges[2]);
  player11.bounceOff(edges[3]);

  player12.bounceOff(edges[0]);
  player12.bounceOff(edges[1]);
  player12.bounceOff(edges[2]);
  player12.bounceOff(edges[3]);

  player13.bounceOff(edges[0]);
  player13.bounceOff(edges[1]);
  player13.bounceOff(edges[2]);
  player13.bounceOff(edges[3]);

  player14.bounceOff(edges[0]);
  player14.bounceOff(edges[1]);
  player14.bounceOff(edges[2]);
  player14.bounceOff(edges[3]);

  player15.bounceOff(edges[0]);
  player15.bounceOff(edges[1]);
  player15.bounceOff(edges[2]);
  player15.bounceOff(edges[3]);

  player16.bounceOff(edges[0]);
  player16.bounceOff(edges[1]);
  player16.bounceOff(edges[2]);
  player16.bounceOff(edges[3]);

  player17.bounceOff(edges[0]);
  player17.bounceOff(edges[1]);
  player17.bounceOff(edges[2]);
  player17.bounceOff(edges[3]);

  player18.bounceOff(edges[0]);
  player18.bounceOff(edges[1]);
  player18.bounceOff(edges[2]);
  player18.bounceOff(edges[3]);

  player19.bounceOff(edges[0]);
  player19.bounceOff(edges[1]);
  player19.bounceOff(edges[2]);
  player19.bounceOff(edges[3]);

  player20.bounceOff(edges[0]);
  player20.bounceOff(edges[1]);
  player20.bounceOff(edges[2]);
  player20.bounceOff(edges[3]);

  player21.bounceOff(edges[0]);
  player21.bounceOff(edges[1]);
  player21.bounceOff(edges[2]);
  player21.bounceOff(edges[3]);

  player22.bounceOff(edges[0]);
  player22.bounceOff(edges[1]);
  player22.bounceOff(edges[2]);
  player22.bounceOff(edges[3]);

  ball.bounce(player1);
  ball.bounce(player2);
  ball.bounce(player3);
  ball.bounce(player4);
  ball.bounce(player5);
  ball.bounce(player6);
  ball.bounce(player7);
  ball.bounce(player8);
  ball.bounce(player9);
  ball.bounce(player10);
  ball.bounce(player11);
  ball.bounce(player12);
  ball.bounce(player13);
  ball.bounce(player14);
  ball.bounce(player15);
  ball.bounce(player16);
  ball.bounce(player17);
  ball.bounce(player18);
  ball.bounce(player19);
  ball.bounce(player20);
  ball.bounce(player21);
  ball.bounce(player22);

  if(ball.isTouching(goal1)){
    score2=score2+1;
    ball.velocityX=0;
    ball.velocityY=0;
    num=1;
  }
  if(ball.isTouching(goal2)){
    score1=score1+1;
    ball.velocityX=0;
    ball.velocityY=0;
    num=1;
  }
  ball.collide(goal3);
  ball.collide(goal4);

  if(num===1){
    player1.x=75;
    player1.y=300;
    player1.velocityX=0;
    player1.velocityY=0;

    player2.x=300;
    player2.y=250;
    player2.velocityX=0;
    player2.velocityY=0;

    player3.x=300;
    player3.y=375;
    player3.velocityX=0;
    player3.velocityY=0;

    player4.x=300;
    player4.y=500;
    player4.velocityX=0;
    player4.velocityY=0;

    player5.x=300;
    player5.y=125;
    player5.velocityX=0;
    player5.velocityY=0;

    player6.x=400;
    player6.y=75;
    player6.velocityX=0;
    player6.velocityY=0;

    player7.x=400;
    player7.y=200;
    player7.velocityX=0;
    player7.velocityY=0;

    player8.x=400;
    player8.y=325;
    player8.velocityX=0;
    player8.velocityY=0;

    player9.x=400;
    player9.y=450;
    player9.velocityX=0;
    player9.velocityY=0;

    player10.x=400;
    player10.y=565;
    player10.velocityX=0;
    player10.velocityY=0;

    player11.x=550;
    player11.y=300;
    player11.velocityX=0;
    player11.velocityY=0;

    player12.x=1125;
    player12.y=300;
    player12.velocityX=0;
    player12.velocityY=0;

    player13.x=850;
    player13.y=200;
    player13.velocityX=0;
    player13.velocityY=0;

    player14.x=850;
    player14.y=275;
    player14.velocityX=0;
    player14.velocityY=0;

    player15.x=850;
    player15.y=500;
    player15.velocityX=0;
    player15.velocityY=0;

    player16.x=850;
    player16.y=125;
    player16.velocityX=0;
    player16.velocityY=0;

    player17.x=750;
    player17.y=75;
    player17.velocityX=0;
    player17.velocityY=0;

    player18.x=750;
    player18.y=200;
    player18.velocityX=0;
    player18.velocityY=0;

    player19.x=750;
    player19.y=325;
    player19.velocityX=0;
    player19.velocityY=0;

    player20.x=750;
    player20.y=450;
    player20.velocityX=0;
    player20.velocityY=0;

    player21.x=750;
    player21.y=565;
    player21.velocityX=0;
    player21.velocityY=0;

    player22.x=650;
    player22.y=300;
    player22.velocityX=0;
    player22.velocityY=0;

    ball.x=600;
    ball.y=300;
    ball.velocityX=0;
    ball.velocityY=0;




    
  }

  

  



  

  
  



  drawSprites();
  textSize (20);
  fill(255);
  text("yellow team: "+score1,100,50);
  text("red team: "+score2,1000,50);
}