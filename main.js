
function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 10;
        console.log('ok: ' + this.left);
    }
    this.moveDow = function(){
        this.top += 10;
        console.log('ok: ' + this.left);
    }

    this.moveUp = function(){
        this.top -= 10;
        console.log('ok: ' + this.left);
    }

    this.moveLeft = function(){
        this.left -= 10;
        console.log('ok: ' + this.left);
    }

}

let hero = new Hero('run.gif', 0, 0, 200);


function start(){
    if((hero.left < window.innerWidth - hero.size) && (hero.top == 0)){
        hero.moveRight();
    } else if ((hero.left >= window.innerWidth - hero.size)  && (hero.top < window.innerHeight - hero.size   )) {
        hero.moveDow();
    } else if ((hero.left > 0 ) && (hero.top >= ((window.innerHeight  )- hero.size ) )) {
        hero.moveLeft();
    } else if ((hero.left == 0) && (hero.top > 0 )){
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}

start();

