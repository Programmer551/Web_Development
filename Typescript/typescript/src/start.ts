//let tax: number | string = 10;
//tax = "hello";
// let orderStatus: "processing" | "shipped" | "delivered" = "processing";
// orderStatus = "shipped";
// orderStatus = "delivered";
// let array: number[] = [1, 2, 3];
// array.push("1s");
// interface student {
//   name: string;
//   readonly class?: number;
// }
// const duraid: student = {
//   name: "Duraid",
//   class: 9,
// };
// console.log(duraid);
// const shahmeer: student = {
//   name: "Shahmeer",
// };

// const addNum = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// const value = addNum(5, 5);
// console.log(value);

// const names: string[] = ["Duraid", "Shahmeer", "Jhon", "Ali"];
// const NameExists = (name: string): boolean => {
//   for (let i = 0; i <= names.length; i++) {
//     const element: string = names[i];
//     if (element == name) {
//       return true;
//     }
//   }
//   return false;
// };
// const exists: boolean = NameExists("Duraid");
// console.log(exists);

const addNum = (num1: number, num2: number = 0): number => {
  return num1 + num2;
};
addNum(1);
