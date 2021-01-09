class d{

    constructor(x,y,width,height){

        var Options={
            isStatic:true
        }

    this.body=Bodies.rectangle(x,y,width,height,Options);
    //this.width=width;
    //this.height=height;
   

    World.add(world,this.body);
    
    }
    display(){
        var place=this.body.position;
        imageMode(CENTER);
        strokeWeight(2)
        fill("white");
        rect(this.width,this.height);
    }
}