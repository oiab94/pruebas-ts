"use strict";
/**
 * Forma de recibir varios tipos de datos en una función
 * @param id number | string
 */
function printID(id) {
	if (typeof id === "string") {
		// En este bloque, id es del tipo "string"
		console.log(id.toUpperCase());
		return;
	}
	// Si el ID es de tipo "number"
	console.log(id);
}
printID(102);
printID("202ASD");
