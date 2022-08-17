let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 5, 3];
let f: any[] = [4, true, "a"]; // bad practise, dont use it obv

const Red = 0;
const Green = 1;
const Blue = 2;

//too verbose,  instead lets use enum

enum Color {Red = 0 , Green = 1, Purple = 2, Blue = 3};
let backgroundColor = Color.Green;

