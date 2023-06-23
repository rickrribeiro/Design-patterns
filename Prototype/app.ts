import { Square, Triangle } from "./src/shapes";

let squares: Array<Square> = [];
let triangles: Array<Triangle> = [];

for(let i = 0; i< 3; i++){
    let square = new Square(4, i+1);
    let triangle = new Triangle(3, i+1);
    squares.push(square);
    triangles.push(triangle);
}

console.log("Init")
squares.forEach(el =>{
    console.log(el.getSides())
})

for(let i = 0; i< 4; i++){
    let square = new Square(squares[0]);
    // let triangle = new Triangle(3, i+1);
    squares.push(square);
    // triangles.push(triangle);
}

console.log("with clones")
squares.forEach(el =>{
    console.log(el.getSides())
})

squares[4].setSides({sidesSize: 15});
squares[5].setSides({sidesSize: 25});
console.log("modified clones to verity if there is dependency")
squares.forEach(el =>{
    console.log(el.getSides())
})