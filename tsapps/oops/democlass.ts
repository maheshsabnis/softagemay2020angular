class MyClass {
    // private x:number;
    // private y:number;
    // constructor(x:number, y: number){
    //     this.x = x;
    //     this.y = y;
    // }
// ctor with parameters having access specifier
    constructor(
        private x: number, private y: number
    ){}

    add():number{
        return this.x+ this.y;
    }
    // the rest parameters to pass variable number of parameters 
    // to the method ... aka 'spread operator'
    calculateSum(...values:number[]): number {
        let sum: number = 0;
        if(values.length > 0){
            values.forEach((v,i) => {
                sum += v;
            });
        }
        return sum;    
    }
}

let m1=new MyClass(10,20);
console.log(m1.add());

console.log(` 2 numbers ${m1.calculateSum(2 , 3)}`);
console.log(` 2 numbers ${m1.calculateSum(2 , 3, 4)}`);
console.log(` 3 numbers ${m1.calculateSum(2 , 3, 4, 5 )}`);

