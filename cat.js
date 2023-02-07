import Mouse from './mouse.js';

function Cat(name,color) {
	this.name  = name;
	this.stomach = [];
	this.color = color;
}
var mouse = new Mouse()
Cat.prototype.eat = function(animal) {
	if(animal instanceof Mouse) {
		mouse.die();
		this.stomach.push(animal);

	}else {
		throw new Error('Cat can only eat mouse !');
	}
	
}
export default Cat;