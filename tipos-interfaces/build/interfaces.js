"use strict";
/**
 * Controlamos los datos que recibimos con el if
 * @param person puede ser de tipo person, null o undefined
 * @returns no retorna ningun dato por ende void
 */
function hello(person) {
	if (!person) {
		console.log("Ingrese un nombre");
		return;
	}
	console.log(`${(person.name, person.age)}`);
}
/**
 * No controlamos la función
 * @param person Recibe un dato del tipo person
 * @returns retornamos el saludo completo
 */
function greet(person) {
	return `Hello ${person.name}`;
}
const person_1 = { name: "oscar", age: 28 };
let nombre = undefined;
hello(nombre);
console.log(greet(person_1));
nombre = "asdf";
