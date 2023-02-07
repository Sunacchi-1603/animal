function Cat(name,color) {
	this.name  = name;
	this.stomach = [];
	this.color = color;
}
Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
}
export default Cat;