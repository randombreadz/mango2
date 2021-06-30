class mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/mango.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
 
}
function basket(){
	if(mango1.isTouching(basket1)|| mango1.isTouching(basket2)|| mango1.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
	else if(mango2.isTouching(basket1)|| mango2.isTouching(basket2)|| mango2.isTouching(basket3)){
		textSize(25);
		text("You Win!", 50, 150)
	}
	else if(mango3.isTouching(basket1)|| mango3.isTouching(basket2)|| mango3.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
	else if(mango4.isTouching(basket1)|| mango4.isTouching(basket2)|| mango4.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
	else if(mango5.isTouching(basket1)|| mango5.isTouching(basket2)|| mango5.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
	else if(mango6.isTouching(basket1)|| mango6.isTouching(basket2)|| mango6.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
	else if(mango7.isTouching(basket1)|| mango7.isTouching(basket2)|| mango7.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
	else if(mango8.isTouching(basket1)|| mango8.isTouching(basket2)|| mango8.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
	else if(mango9.isTouching(basket1)|| mango9.isTouching(basket2)|| mango9.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
	else if(mango10.isTouching(basket1)|| mango10.isTouching(basket2)|| mango10.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
	else if(mango11.isTouching(basket1)|| mango11.isTouching(basket2)|| mango11.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
	else if(mango12.isTouching(basket1)|| mango12.isTouching(basket2)|| mango12.isTouching(basket3)){
	  textSize(25);
	  text("You Win!", 50, 150)
	}
  }