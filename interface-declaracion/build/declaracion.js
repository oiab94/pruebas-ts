"use strict";
const user_1 = {
    firstName: "Julio",
    lastName: "Cesar",
    getFullName() {
        return this.firstName + " " + this.lastName;
    },
};
const user_2 = {
    firstName: "Juan",
    lastName: "Carlos",
    age: 12,
    getFullName() {
        return "Retorna el nombre completo";
    }
};
console.log(user_1);
console.log(user_1.getFullName());
