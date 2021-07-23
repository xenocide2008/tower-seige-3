class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=255
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      
      if(this.body.speed>3)
      {
        push()
         World.remove(world,this.body)
         this.Visibility=this.Visibility-5
         tint(255,this.Visibility)
         rect(pos.x,pos.y,this.width, this.height);
         pop()
      }
      else
      rect(pos.x,pos.y,this.width, this.height);
    }
}