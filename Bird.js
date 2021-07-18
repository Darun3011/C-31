class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trej = [];
    this.smokeImg = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    if(this.body.position.x > 200 && this.body.velocity.x > 10){
    var position = [this.body.position.x,this.body.position.y];
    
    this.trej.push(position);
  }
  
    
    for(var i = 0; i < this.trej.length; i = i+1){

      image(this.smokeImg,this.trej[i][0],this.trej[i][1]);

      //console.log(this.trej[i]);
    }
    
    super.display();
  }
}
