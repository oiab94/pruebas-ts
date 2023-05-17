abstract class AnimalSound {
	abstract makeSound(): void;

	move(): void{
		console.log("moving...");
	}
}

class DogSound extends AnimalSound {
	makeSound(): void {
			console.log("bark");
	}
}

let dog: AnimalSound = new DogSound();
dog.makeSound();
