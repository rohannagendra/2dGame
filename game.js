//Game Engine

function Game(canvas){
	var self = this

	this.context = canvas.getContext("2d") //webgl for 3d context
	this.width = canvas.width
	this.height = canvas.height

	//Keep track of the key states
	//Example:
	// game.keyPressed.up === true
	// game.keyPressed.up === false
	this.keyPressed = {}

	$(canvas).on('keydown keyup', function(e){
		//Convert key code to key name 
		var keyName = Game.keys[e.which]

		if (keyName){
			//will be set to 'false' on keyup
			self.keyPressed[keyName] = e.type === 'keydown'
			e.preventDefault()
		}
	})
}

//Key codes to key name mapping
Game.keys = {
	32: 'space',
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down'
}


//Game loop
Game.prototype.start = function(){
	var self = this,
		fps  = 60,
		interval = 1000/fps //ms per frame
	
	//timer
	setInterval(function(){
			self.update()
			self.draw()
	}, interval)
}

Game.prototype.update = function(){
	var self = this
	self.entities.forEach(function(entity){
		if(entity.update)  //check if update function is available
			entity.update()
	})
}

Game.prototype.draw = function(){
	var self = this
	self.entities.forEach(function(entity){
		if(entity.draw)  //check if update function is available
			entity.draw(self.context)
	})
}