type Product = {
  name: string;
  price: number;
};

function calculateCartTotal(products: Product[]) {
  return products.reduce((sum, item) => sum + item.price, 0);
}
const products = [
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "USB Cable", price: 300 },
];

console.log(calculateCartTotal(products)); // 2600

// another example:
const products2 = [
  { name: "Book", price: 500 },
  { name: "Pen", price: 50 },
  { name: "Bag", price: 1200 },
];
console.log(calculateCartTotal(products2)); // 1750
console.log(calculateCartTotal([])); //0
