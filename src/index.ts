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
    private _courseCount: number = 1;
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

let jasmin = new Boy("Jasmin", "boss");
// jasmin.city = "Bihac";

console.log(jasmin.courseCount, jasmin.getAppleEmail);

