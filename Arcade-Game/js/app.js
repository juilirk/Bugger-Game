// Enemies our player must avoid
var Enemy = function(obj) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x =obj.x;
    this.y=obj.y;
    this.speed =obj.speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.x<=510){
        this.x =this.x+this.speed*dt;
    }else{
         this.x = 0;
    }
    
    checkCollision(this);
};
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    this.score = 0;
    this.gameOver = false;
    this.life = 3;
}
Player.prototype.update = function(){
    
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //displayScore
};
   //handle keyboard input,every time a key is pressed
   // an event is registered,this sets the game
   //controllers

Player.prototype.handleInput = function(allowedKeys){

    if(allowedKeys=='left'){
        if(this.x>0){
            this.x = this.x-100;
        }else{
            this.x = this.x
        };
    }else if(allowedKeys=='right'){
        if(this.x<400){
            this.x = this.x+100;
        }else{
            this.x = this.x;
        }
    }else if(allowedKeys=='up'){
        if(this.y>0){
            this.y = this.y-82;
        }else{
            this.y = this.y;
        }
    }else{
        if(this.y<400){
            this.y = this.y+82;
        }else{
            this.y = this.y;
        }
        
    }
};
//check collision actually checks if our player gets
//in touch with the bugs
//every time the player touches the bug he loses
//a life until it is game over
var checkCollision = function(enemy){
    if((enemy.x>=player.x-50&&enemy.x<=player.x+70)&&(
    enemy.y==player.y-10)){
        player.x =200;
        player.y =400;
        if(player.life!=0){
            player.life--;
        }else{
            player.gameOver=true;
        }
    }
    if(player.y<0){
        player.x =200;
        player.y =400;
        player.score++;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var scoreDiv = document.createElement('div');
var player = new Player();
var enemy1 = new Enemy({x:-220, y:62, speed:100});
var enemy2 = new Enemy({x:-100, y:144, speed:60});
var enemy3 = new Enemy({x:-100, y:226, speed:40});
var allEnemies = [
enemy1, enemy2, enemy3
];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
