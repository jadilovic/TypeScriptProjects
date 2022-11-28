console.log("typescript is here");
type User = {
    name: string
}

let boy: User = {name: "Aki"};

console.log(boy.name);

interface Man {
    age: number
}

let girl: Man = {age: 66};

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
    protected _courseCount: number = 1;
    readonly id: string = "000";
    constructor(
        private name: string,
        public role: string
    ){}

    get getAppleEmail(): string {
        return `apple@${this.name}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set setCourseCount(count: number) {
        if (count <= 1) {
            throw Error("Please add number greater than 1");
        } else {
            this._courseCount = count;
        }
    }
}

class Son extends Boy {
    isActive: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}

let jasmin = new Boy("Jasmin", "boss");
let adian = new Son("adi", "judge");

adian.changeCourseCount();
// jasmin.city = "Bihac";

interface TakePhoto {
    cameraMode: string,
    color: string,
    pixel: number
}

interface Story {
    photoSlide(): string
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public color: string,
        public pixel: number
    ){}
}

class YouTube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public color: string,
        public pixel: number,
        public size: number
    ){}

    public photoSlide(): string {
        return "hi there"
    }
}

abstract class TakePicture {
    constructor(
       public photoMode: string,
       public filter: string
    ){}

    abstract getSepia(): string

    calcNum(): number {
        return 8 + 4;
    }
}

class Facebook extends TakePicture {
    constructor(
        public photoMode: string,
        public filter: string,
        public view: number,
    ){
        super(photoMode, filter)
    }
    getSepia(): string {
        return "got sepia";
    }

    calcNum(): number {
        return 9;
    }
}

let ja = new Facebook("test", "testing", 7)

ja.calcNum();

const scores: Array<number> = [];
const names: Array<string> = [];

function idetityOne(val: string | number): string | number {
    return "hello";
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(5);

function identityFive<T>(val: T): T {
    return val;
}

interface Bottle {
    name: string,
    type: number
}

class Drink implements Bottle {
    constructor(
        public name: string,
        public type: number 
    ){}
}

let cola = new Drink("kola", 9)

identityFive(cola)

function getSearchProducts<T>(products: T[]): T {
    let productIndex = 3;
    return products[productIndex];
}

let products: string[] = ["ehll0", "bell1", "dell2", "cell3", "vell4"];

let products2: Array<string> = ["ehll", "bell", "dell", "cell", "vell"];

let products3: Array<string | number> = ["ehll", "bell", "dell", "cell", "vell", 3, 4];

let products4: (string | number)[] = ["ehll", "bell", "dell", "cell", "vell", 3, 4];

const getMoreSearchProducts = <T>(products: T[]): T => {
    const indexNum = 2;
    return products[indexNum];
}
console.log(getSearchProducts(products));
console.log(getMoreSearchProducts(products2));

interface Database {
    name: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

interface Quiz {
    name: string,
    questions: string
}

interface Course {
    name: string,
    grade: number
}

class Book implements Quiz {
    constructor(
        public name: string,
        public questions: string
    ){}
}

class Tape implements Course {
    constructor(
        public name: string,
        public grade: number
    ){}
}

class Sellable <T> {
    public cart: T[] = [];

    addProducts(product: T) {
        this.cart.push(product)
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

anotherFunction(2, {name: "aki", password: "password"})

console.log(jasmin, ja, ja.calcNum());

function getSearchBooks<T>(products: T[]): T {
    return products[2];
}

let book = <T>(products: T[]): T => {
    return products[1];
}

function detectType(val: string | number) {
    if (typeof val === "string"){
        return val.toLowerCase();
    }
    return val.toFixed();
}

interface Cat {
    name: string,
    sound: string,
}

interface Dog {
    name: string,
    smell: string
}

class Dogy implements Dog {
    constructor(
        public name: string,
        public smell: string
    ){}
}

class Caty implements Cat {
    constructor(
        public name: string,
        public sound: string
    ){}
}

let bibi = new Dogy("bibi", "sinky");
let cici = new Caty("cici", "miau")

function isDog(val: Dog | Cat) {
    return "smell" in val;
}

function isCat(val: Dog | Cat) {
    return val instanceof Caty;
}

console.log(booksCart.cart, book(products), getSearchBooks(products));
console.log(isDog(bibi), isDog(cici));
console.log(isCat(bibi), isCat(cici));

type Fish = {swim: () => void};
type Bird = {fly: () => void};

let fishy: Fish = {
   swim: () => console.log("swiming")
}

let birdy: Bird = {
    fly: () => console.log("flying")
    
}

function isFish(val: Fish | Bird): boolean {
    return (val as Fish).swim !== undefined;
}

function isBird(pet: Fish | Bird): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

console.log(isFish(fishy), isFish(birdy));
console.log(fishy.swim(), birdy.fly());

function petFood(pet: Fish | Bird): string {
    if (isBird(pet)) {
        pet.fly();
        return "Fish food";
    } else {
        pet.swim();
        return "Bird food";
    }
}

console.log(petFood(fishy), petFood(birdy));

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

function calcArea(piece: Shape) {
    if (piece.kind === "circle") {
        return piece.radius * 3.14;
    }
  //  return piece.side * piece.side;
}

function calcSwitchArea(piece: Shape) {
    switch (piece.kind) {
        case "circle":
            return piece.radius * 3.14;
        case "square":
            return piece.side * piece.side;
        case "rectangle":
            return piece.length * piece.width;;
        default:
            const _defaultPiece: never = piece;
            return _defaultPiece;
    }
}

