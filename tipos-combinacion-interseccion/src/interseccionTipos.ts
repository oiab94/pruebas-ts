/**
 * Una interseccion de tipo crea un nuevo tipo combinando multiples tipos
 */
interface Identity {
	id: number,
	name: string
}

interface Contact {
	email: string,
	phone: string
}

// Combinamos los dos tipos de datos
type Employee = Identity & Contact;

// Variables
let e: Employee = {
	id: 100,
	name: "John Doe",
	email: "john-doe@example.com",
	phone: "xxx-xxxx-xxxx"
}

console.log(e);
