class dustBin{

    constructor(x,y,width,height){

        var Options={
            isStatic:true
        }

    this.body=Bodies.rectangle(x,y,width,height,Options);
    this.width=285;
    this.height=200;
    this.image=loadImage("dustbingreen.png");

    World.add(world,this.body);
    
    }
    display(){
        var place=this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image,place.x,place.y,this.width,this.height);
       
    }
}