class Animal {
	makeSound(): void {
		console.log("Making animal sound");
	}
}

class Dog extends Animal {
	makeSound(): void {
			console.log("Bark");
	}
}

class Cat extends Animal {
	makeSound(): void {
			console.log("Meow");
	}
}

let animal: Animal;

animal = new Animal();
animal.makeSound();

animal = new Dog();
animal.makeSound();

animal = new Cat();
animal.makeSound();