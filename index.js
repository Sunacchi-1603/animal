
import Dog from './Dog.js';
import Cat from './cat.js';
import Mouse from './mouse.js'
var dog = new Dog('Tom',);
var mouse = new Mouse('mickey');
var tom = new Cat('Tom','yellow');
try {
	tom.eat(dog);
}catch (error) {
	console.log ('Error eating a dog')
}

// dog.sayHi();
mouse.die();
 console.log(tom);