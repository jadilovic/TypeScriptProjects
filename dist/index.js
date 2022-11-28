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
class Son extends Boy {
    constructor() {
        super(...arguments);
        this.isActive = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
let jasmin = new Boy("Jasmin", "boss");
let adian = new Son("adi", "judge");
adian.changeCourseCount();
class Instagram {
    constructor(cameraMode, color, pixel) {
        this.cameraMode = cameraMode;
        this.color = color;
        this.pixel = pixel;
    }
}
class YouTube {
    constructor(cameraMode, color, pixel, size) {
        this.cameraMode = cameraMode;
        this.color = color;
        this.pixel = pixel;
        this.size = size;
    }
    photoSlide() {
        return "hi there";
    }
}
class TakePicture {
    constructor(photoMode, filter) {
        this.photoMode = photoMode;
        this.filter = filter;
    }
    calcNum() {
        return 8 + 4;
    }
}
class Facebook extends TakePicture {
    constructor(photoMode, filter, view) {
        super(photoMode, filter);
        this.photoMode = photoMode;
        this.filter = filter;
        this.view = view;
    }
    getSepia() {
        return "got sepia";
    }
    calcNum() {
        return 9;
    }
}
let ja = new Facebook("test", "testing", 7);
ja.calcNum();
const scores = [];
const names = [];
function idetityOne(val) {
    return "hello";
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(5);
function identityFive(val) {
    return val;
}
class Drink {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
let cola = new Drink("kola", 9);
identityFive(cola);
function getSearchProducts(products) {
    let productIndex = 3;
    return products[productIndex];
}
let products = ["ehll0", "bell1", "dell2", "cell3", "vell4"];
let products2 = ["ehll", "bell", "dell", "cell", "vell"];
let products3 = ["ehll", "bell", "dell", "cell", "vell", 3, 4];
let products4 = ["ehll", "bell", "dell", "cell", "vell", 3, 4];
const getMoreSearchProducts = (products) => {
    const indexNum = 2;
    return products[indexNum];
};
console.log(getSearchProducts(products));
console.log(getMoreSearchProducts(products2));
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Book {
    constructor(name, questions) {
        this.name = name;
        this.questions = questions;
    }
}
class Tape {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addProducts(product) {
        this.cart.push(product);
    }
}
let book1 = new Book("bob", "tom");
let book2 = new Book("hwo", "jerry");
let tape1 = new Tape("sss", 4);
let tape2 = new Tape("klm", 5);
let booksCart = new Sellable();
booksCart.addProducts(book1);
booksCart.addProducts(book2);
booksCart.addProducts(tape1);
booksCart.addProducts(tape2);
anotherFunction(2, { name: "aki", password: "password" });
console.log(jasmin, ja, ja.calcNum());
function getSearchBooks(products) {
    return products[2];
}
let book = (products) => {
    return products[1];
};
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val.toFixed();
}
class Dogy {
    constructor(name, smell) {
        this.name = name;
        this.smell = smell;
    }
}
class Caty {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
}
let bibi = new Dogy("bibi", "sinky");
let cici = new Caty("cici", "miau");
function isDog(val) {
    return "smell" in val;
}
function isCat(val) {
    return val instanceof Caty;
}
console.log(booksCart.cart, book(products), getSearchBooks(products));
console.log(isDog(bibi), isDog(cici));
console.log(isCat(bibi), isCat(cici));
let fishy = {
    swim: () => console.log("swiming")
};
let birdy = {
    fly: () => console.log("flying")
};
function isFish(val) {
    return val.swim !== undefined;
}
function isBird(pet) {
    return pet.fly !== undefined;
}
console.log(isFish(fishy), isFish(birdy));
console.log(fishy.swim(), birdy.fly());
function petFood(pet) {
    if (isBird(pet)) {
        pet.fly();
        return "Fish food";
    }
    else {
        pet.swim();
        return "Bird food";
    }
}
console.log(petFood(fishy), petFood(birdy));
function calcArea(piece) {
    if (piece.kind === "circle") {
        return piece.radius * 3.14;
    }
    //  return piece.side * piece.side;
}
function calcSwitchArea(piece) {
    switch (piece.kind) {
        case "circle":
            return piece.radius * 3.14;
        case "square":
            return piece.side * piece.side;
        case "rectangle":
            return piece.length * piece.width;
            ;
        default:
            const _defaultPiece = piece;
            return _defaultPiece;
    }
}
