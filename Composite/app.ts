import { Box } from "./src/components/box";
import { Product } from "./src/components/product";

const box1 = new Box();
const box2 = new Box();
const box3 = new Box();
const box4 = new Box();
const box5 = new Box();


const product1 = new Product(10);
const product2 = new Product(20);
const product3 = new Product(30);
const product4 = new Product(40);
const product5 = new Product(50);

box5.addChildren(product1);
box4.addChildren(product2);
box4.addChildren(product3);
box3.addChildren(product4);
box2.addChildren(box4);
box2.addChildren(box3);
box1.addChildren(product5);
box1.addChildren(box2);

console.log(box1.getValue())
console.log(box2.getValue())
console.log(box3.getValue())
console.log(box4.getValue())
console.log(box5.getValue())