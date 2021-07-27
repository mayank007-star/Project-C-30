class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.vis = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed<3){
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.vis = this.vis-5;
        tint(255,this.vis);
        image(this.image,pos.x,pos.y,this.width, this.height);
        pop();

      }
    }
    }
