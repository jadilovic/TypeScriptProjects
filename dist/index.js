"use strict";
console.log("typescript is here");
let boy = { name: "Aki" };
console.log(boy.name);
let girl = { age: 66 };
console.log(girl);
// class Boy {
//     private name: string
//     public grade: number
//     readonly city: string = "Bosanski Novi"
//     constructor(name: string, grade: number) {
//         this.name = name,
//         this.grade = grade
//     }
// }
// class Boy {
//     readonly city: string = "Bosanski Novi"
//     constructor(
//         public name: string,
//         private grade: number
//     ) {}
// }
class Boy {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this._courseCount = 1;
        this.id = "000";
    }
    get getAppleEmail() {
        return `apple@${this.name}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set setCourseCount(count) {
        if (count <= 1) {
            throw Error("Please add number greater than 1");
        }
        else {
            this._courseCount = count;
        }
    }
}
let jasmin = new Boy("Jasmin", "boss");
// jasmin.city = "Bihac";
console.log(jasmin.courseCount, jasmin.getAppleEmail);
