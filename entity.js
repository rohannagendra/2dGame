//Game consists of entities

function Entity() {
// A game entity has....

	// Position
	this.x = 0
	this.y = 0

	//Dimension
	this.width = 0
	this.height = 0

	// Velocity
	this.xVelocity = 0
	this.yVelocity = 0
}

// On each update, we apply the velociy to the current Position
// This makes the entity move
// Entities are expected to override this method

Entity.prototype.update = function(){
	this.x += this.xVelocity
	this.y += this.yVelocity
}

//The Entity knows how to draw itself
//All entities of our game will be white rectangles
Entity.prototype.draw = function(context){
	context.fillStyle = '#fff'
	context.fillRect(this.x, this.y, this.width, this.height)
}

//Basic bounding box collision technique
//Returns true if the entity intersect with another one
Entity.prototype.intersect = function(other){
	return 	this.y + this.height 	> other.y &&
			this.y 					< other.y + other.height &&
			this.x + this.width 	> other.x &&
			this.x 					< other.x + other.width
}
