class Base {
    constructor(private a: string ,private b: string){}
    getLength(): number {
        return `${this.a} ${this.b}`.length;
    }
    concatinate(): string {
        return `${this.a} ${this.b}`;
    }
}

class Derive extends Base {
    constructor(private s1: string, private s2: string){
        super(s1,s2); // <-- call the base class ctor
    }
    concatinate(): string {
        return `My Name is ${this.s1} ${this.s2}`;
    }
}
let d=new Derive('Mahesh', 'Sabnis');
console.log(d.concatinate());
console.log(d.getLength());

let b:Base = new Derive('James', 'Bond');
console.log(b.concatinate());
console.log(b.getLength());
