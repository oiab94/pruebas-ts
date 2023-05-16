function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;

function add(a: any, b: any): any {
	return a + b;
}

console.log(add(1, 2));
console.log(add("hola", "mundo"));
console.log(add("hola ", 13));
