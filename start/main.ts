// types

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 5, 3];
// let f: any[] = [4, true, "a"]; // bad practise, dont use it obv

// const Red = 0;
// const Green = 1;
// const Blue = 2;

//too verbose,  instead lets use enum

// enum Color {Red = 0 , Green = 1, Purple = 2, Blue = 3};
// let backgroundColor = Color.Green;


// type assertion

// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

// arrow functions

// let c2 = function (message){
//     console.log(message);
// } 
// let c5 = () => console.log("Hello world");

// let c4 = (message) => console.log(message);

// let c3 = (message) =>{
//     console.log('From the Author');
//     console.log(message);
// }


// Interfaces   

// interface Point {
//     x : number,
//     y : number,
// }


// let drawPoints = (point: Point) => {
//     //.. draw
// }



// classes

class Point{
    x : number;    // fields
    y : number;

    draw() {         // methods
        console.log('X: ' + this.x + ', Y: ' + this.y);
        
    }

    getDistance(another: Point) {
        //...
    }
}

let point = new Point();
point.draw();