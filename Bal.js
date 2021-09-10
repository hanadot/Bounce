class Bal {
    x;
    y;
    speedX;
    speedY;
    kleur;


    constructor(_x, _y){
        this.x = _x;
        this.y = _y;
        this.speedX = 2;
        this.speedY = -3;
        this.kleur = color(255,0,0);
    }


    show(){
        fill(this.kleur);
        ellipse(this.x, this.y, 80, 80);
     }




    update(){
        if (this.x <= 0){
            this.speedX = this.speedX * -1;
        }


    }



  




}