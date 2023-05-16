interface Person {
	firstName: string,
	lastName: string,
	age?: number,

	getFullName(): string,
}

const user_1: Person = {
	firstName: "Julio",
	lastName: "Cesar",

	getFullName() {
			return this.firstName + " " + this.lastName;
	},
}

const user_2: Person = {
	firstName: "Juan",
	lastName: "Carlos",
	age: 12,

	getFullName(){
		return "Retorna el nombre completo";
	}
}

console.log(user_1);
console.log(user_1.getFullName());

