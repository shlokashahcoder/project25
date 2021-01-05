class Dustbin {
    constructor(x,y,width,height){
        var change = {
            'isStatic': true
        }
    
    this.right = Bodies.rectangle(x+80,y+30,width,height,change);
    this.rightWidth = width;         
    this.rightHeight = height;       
    World.add(world, this.right);
    this.image = loadImage("dustbingreen.png")
   
    this.left=Bodies.rectangle(x-20,y+30,width,height,change)
    this.leftWidth = width;         
    this.leftHeight = height;       
    World.add(world, this.left);

    this.bottom=Bodies.rectangle(x+35,y+10,width+130,height-80,change)
    this.bottomWidth = width+130;         
    this.bottomHeight = height+20;       
    World.add(world, this.bottom);
    this.image = loadImage("dustbingreen.png")
    
   

    this.image = loadImage("dustbingreen.png")
    
  }
    display(){
   
     // rectMode(CENTER)
      //rect(this.right.position.x,this.right.position.y,this.rightWidth,this.rightHeight)
      //rect(this.bottom.position.x,this.bottom.position.y,this.bottomWidth,this.bottomHeight)
      //rect(this.left.position.x,this.left.position.y,this.leftWidth,this.leftHeight)
      imageMode(CENTER)
      image(this.image,this.right.position.x,this.right.position.y,this.rightWidth,this.rightHeight)
      image(this.image,this.left.position.x,this.left.position.y,this.leftWidth,this.leftHeight)
      image(this.image,this.bottom.position.x,this.bottom.position.y,this.bottomWidth,this.bottomHeight)                             
    }
  }