// * Tipo Unión
type stringOrNumber = string | number;
let value: stringOrNumber = "hello";

console.log("stringOrNumber: ", value);
value = 42;
console.log("stringOrNumber: ", value);

// * Tipo intersección
interface A {
	a: string,
}

interface B {
	b: number;
}

type AB = A & B;
let inter: AB = {a: "hello", b: 42};

console.log(inter);
