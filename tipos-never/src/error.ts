function error(message:string): never {
	throw new Error(message);	
}

function fail() {
	return error("Algo fallo");
}

function infiteLoop(): never {
	// eslint-disable-next-line
	while (true) {}
}

fail();