"use strict";
function error(message) {
	throw new Error(message);
}
function fail() {
	return error("Algo fallo");
}
function infiteLoop() {
	// eslint-disable-next-line
	while (true) {}
}
fail();
