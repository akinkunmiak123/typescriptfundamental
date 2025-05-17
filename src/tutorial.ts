// //console.log("hello world on typescript");
// // interface someValue {
// //     name:string;
// //     id:number;
// // }

import { boolean } from "zod"

// // let someObj: someValue = {
// //     name: 'random',
// //     id: 123,
// // };
// // console.log(someObj);

// //let awesomeName:string = 'shakeAndBake'
// // let awesomeName = 'shakeAndBake'
// // awesomeName = awesomeName.toUpperCase()
// // console.log(awesomeName);
// // let length = 12
// // let breath = 12
// // let mathsSquareFormula = length * breath
// // console.log(mathsSquareFormula);

// // let bool = mathsSquareFormula >= 20;
// // bool =  !bool;
// // console.log(bool)

// // awesomeName = 12;
// // mathsSquareFormula = 'ten'
// // bool = 'yes'

// // console.log(awesomeName, mathsSquareFormula, bool)


// let tax:number | string = 10;
// tax = 100
// tax = "shake"

// let Status : 'pending' | 'success' | 'error' = 'error';
// Status = 'success'

// let notSure: any = 4;
// notSure = 'maybe a string instead'
// notSure = false

// let nature;

// const books = ['hidden talent', '200 laws', 'amazon store'];
// let foundBook:string | undefined;
// for (let book of books) {
//     if (book === 'hidden talent'){
//         foundBook = book;
//         foundBook = foundBook.toUpperCase()
//         break
//     }
// }
// console.log(foundBook?.length)

// let prices:number[] = [100,23,23]
// //prices.push('hello')

// let fruit: string[] = ['apple', 'orange'];

// //let randomValues:[] = ['hello']

// let names = ['peter', 'susan', 1 ];
// let array:(string| boolean)[] = ['apple',true,'orange',false ];


// let temperature:number[] = [10,20,30];
// //temperature.push('rake')

// let colors: string[] = ['red','blue','green']
// //colors.push(true)

// let mixedArray: (number | string)[] = [10, 'blue' , 20, 'red', 30, 'yellow']
// //mixedArray.push(false)

// let car:{brand: string; year: number} = {brand:'lexus', year: 2022}
// car.brand = 'mazda'
// //car.color = 'blue'

// let car1: { brand: string; year: number } = { brand: 'audi', year: 2012 }

// let book = {title:'book',cost: 20};
// let pen = { title: 'pen', cost: 10 }
// let notebook = { title: 'notebook' }

// let items:{readonly title: string; cost? :number}[] = [book,pen,notebook]
// //items[0].title = 'new book'

// let bike: { brand: string; year: number } = { brand: 'suzuki', year: 2022 }
// //bike.year = '2022'

// let laptop: { brand: string; year: number } = { brand: 'hp', year: 2022 }

// // laptop= {brand: 'dell'}
// let product1 = { title: 'razor', price: 20 }
// let product2 = { title: 'scissors' }
// let product: { title: string; price?: number }[] = [product1,product2]
// //product.push({title: 'rise of rings', price:'dave'})


// function sayHi(name:string) {
//     console.log(`Hello There ${name.toUpperCase()}`);
    
// }
// sayHi('dave')
// //sayHi(3)

// function calculateDiscount(price:number):number {
//     const withDiscount = true;
//     if (withDiscount) {
//         return price
//        // return 'Applied for Discount'
//     }
//     return price * 0.9;
// }


// const finalPrice = calculateDiscount(5000);


// let newNames: string[] = ['alice', 'bob', 'charlie'];

// function isNameInArray(name: string): boolean {
//     return newNames.includes(name);
// }

// let nameCheck = 'bob'
// if (isNameInArray(nameCheck)) {
//     console.log(`${nameCheck} is in the array`);
    
// } else {
//     console.log(`${nameCheck} is not in the array`);
// }

// // Test the function with various names
// console.log(isNameInArray('alice')); // true
// console.log(isNameInArray('dave'));  // false
// console.log(isNameInArray('charlie')); // true 

// function finalPay(price:number, discount?:number):number {
//     return price - (discount || 0);
// }

// let cost = finalPay(1000, 200);

// function calculateScore (initialScore:number, penaltyPoints:number = 0): number{
//     return initialScore - penaltyPoints;
// }

// let scoreAfterPenalty = calculateScore(100, 20);
// let scoreWithoutPenalty = calculateScore(100);

// function sum(message:string,...values:number[]):string {
// const doubled = values.map((num) => num * 2);
// console.log(doubled)

// let total = values.reduce((previous,current) => {
//     return previous + current;
// },0)
// return `${message} ${total}`;
// }

// let result = sum('the total is', 10, 20, 30);
// console.log(result);


// function logMessage(message: string) {
//   console.log(message)
// }

// logMessage('hello Typescript')

// function processInput(input: string| number){
//     if (typeof input === 'number'){
//         console.log(input * 2)
       
//     }
//     else{
//           console.log(input.toUpperCase())
//     }
    
// }

// processInput('hello')
// processInput(90)

// function createEmployee({id}:{id:number}):{id:number; isActive:boolean}{
//     return {id,isActive: id % 2 === 0}
// };

// const first = createEmployee({id:4})
// const second = createEmployee({ id: 7 })
// console.log(first);
// console.log(second);

// // alternative

// function createStudent(student:{id:number, name:string}): void{
//     console.log(`Welcome to Rex Mason college ${student.name.toUpperCase()}!!! your student no is ${student.id}`);
    
// }

// const newStudent = {
//   id: 5,
//   name: 'Dave',
//   email: 'dave@gmail.com'
// }

// createStudent(newStudent)
// createStudent({id:1, name:'buster',email:'busterboy@gmail.com'});

// function processData(input:string|number,config:{reverse:boolean}= {reverse:false}):string|number {
// if(typeof input === 'number'){
//     return input * input
// }else{
//     return config.reverse? input.toUpperCase().split('').reverse().join(''):input.toUpperCase()
// }

// }

// console.log(processData(10))
// console.log(processData('Hello'));
// console.log(processData('Hello',{reverse:true}));
// type User = { id: number; name: string; isActive: boolean }

// const john:User = {
//   id: 1,
//   name: 'john',
//   isActive: true,
// }
// const susan:User = {
//   id: 1,
//   name: 'susan',
//   isActive: false,
// }

// function createUser(user:User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`)

//   return user
// }

// type StringOrNumber = string|number

// let random: StringOrNumber

// random = 23
// random = "seth"
// //random = true

// type Theme = 'light' | 'dark';

// let theme: Theme

// theme = 'dark'
// theme = 'light'
// //theme = 'zod'

// function setTheme(t:Theme){
//     theme = t;
// }

// setTheme('light')

// type Employee = { id: number; name: string; department: string }

// type Manager = { id: number; name: string; employees: Employee[] }
// type Staff = Employee | Manager

// function printStaffDetails(staff:Staff):void{
//     if('employees' in staff){
//          console.log(
//            `${staff.name} is a manager and has ${
//              staff.employees.length
//            } employees named ${staff.employees
//              .map((emp) => emp.name)
//              .join(', ')}.`
//          )
//     }
//     else{
//         console.log(`${staff.name} is an employee in the ${staff.department} department`);
        
//     }
// }

// const dave:Employee = {id:1,name:'dave', department:'IT'}
// const sarah: Employee = { id: 2, name: 'sarah', department: 'HR' }
// const esther: Employee = { id: 3, name: 'esther', department: 'Sales' }

// const eugene: Manager = { id: 1, name: 'eugene', employees: [dave,sarah,esther] }

// printStaffDetails(dave)
// printStaffDetails(eugene)

// type Book = {id:number; name:string; price: number };
// type DiscountedBook = Book & {discount:number}

// const book1:Book ={
//     id:1,
//     name: 'how to slay a dragon',
//     price: 20
// }
// const book2: Book = {
//   id: 2,
//   name: 'how to build a port',
//   price: 30,
// }

// // const discountedBook: Book&{discount:number} = {
// //   id: 3,
// //   name: 'Lord of the rings',
// //   price: 27,
// //   discount:0.15
// // }
// const discountedBook: DiscountedBook = {
//   id: 3,
//   name: 'Lord of the rings',
//   price: 27,
//   discount: 0.15,
// }
// const prop = 'age'
// type Animal = {
//     [prop]:number
// }
// let tiger:Animal = {[prop]:5}

// interface Book{
//     readonly isbn:number;
//     title:string;
//     author: string;
//     genre?: string;
//     //method
//     printAuthor(): void;
//     printTitle(message:string): string
//     printSomething:(someValue:number) => number;
// }

// const deepWork: Book = {
//   isbn: 2345,
//   title: 'deep work',
//   author: 'cal newport',
//   genre: 'self-help',
// //   printAuthor() {
// //     console.log(this.author)
// //   },
//   printTitle(message) {
//     return `${this.title} ${message}`
//   },
//   // first option
//   printSomething: function (someValue) {
//     return someValue
//   },
//   //second option
// // printSomething:(someValue)=>{
// //     console.log(deepWork.author);
    
// //     return someValue;
// // }
//   // third option
// //   printSomething(someValue){
// //     return someValue;
// //   }
// printAuthor:() => {
//     console.log(deepWork.author);
    
// }
//  }

// // deepWork.printAuthor();
// // //deepWork.isbn = 'value'
// // const result = deepWork.printTitle('is an awesome book');
// // console.log(result);

// console.log(deepWork.printSomething(34))

// deepWork.printAuthor();

// interface Computer {
//     readonly id:number;
//     brand:string;
//     ram: number;
//     storage ?: number;
//     upgradeRam(increase: number): number;
// }

// const laptop:Computer = {
//     id:1,
//     brand: 'Dell',
//     ram: 16,
//     upgradeRam(amount){
//         this.ram += amount
//         return this.ram
//     }
// }

// laptop.storage = 256;

// console.log(laptop.upgradeRam(49))

// console.log(laptop);


//Merge Interfaces




// interface Person {
//     name: string;
//     getDetails(): string;
// }

// interface DogOwner{
//     dogName:string;
//     getDogDetails(): string;
// }
// interface Person {
//     age: number;
// }

// const person:Person = {
//     name:'Dave',
//     age:30,
//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age} `
//     }
// }

// interface Employee extends Person {
//     employeeId: number;
// }

// const employee:Employee = {
//     name: "jane",
//     age:40,
//     employeeId:1,
//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age}. Badge Number ${this.employeeId} `
//     }
// }

// console.log(employee.getDetails())

// interface Manager extends Person,DogOwner,Employee{
//     managePeople(): void;
// }

// const manager: Manager = {
//   name: 'richard',
//   age: 31,
//   dogName: 'scott',
//   employeeId: 22,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}. Badge Number ${this.employeeId} `
//   },
//   getDogDetails() {
//     return `Name: ${this.dogName}`
//   },
//   managePeople() {
//     console.log('Managing people...');
    
//   }
// }

// manager.managePeople()
//EXERCISE
// function getEmployee(): Person | DogOwner | Manager {
//   const random = Math.random();
//   console.log(random)
  
//   if (random < 0.33) {
//     return{
//         personName: 'druski'
//     }
//   }
//   else if(random < 0.66){
//     return {
//         personName: 'Stiles',
//         dogName: 'Alpha'
//     }
//   }
//   else{
//     return {
//       personName: 'sam',
//       managePeople() {
//         console.log('Managing People')
//       },
//       delegateTasks() {
//         console.log('Delegating Task')
//       },
//     }
//   }
// }

// interface Person {
//     personName: string
// }
// interface DogOwner extends Person {
//     dogName: string
// }
// interface Manager extends Person{
//     managePeople():void,
//     delegateTasks():void,
// }  

// const employee: Person | DogOwner | Manager = getEmployee();
// // console.log(employee);

// function isManager(obj: Person | DogOwner | Manager):obj is Manager{
// return 'managePeople' in obj
// }

// if (isManager(employee)){
//     employee.delegateTasks();
// }

// console.log(isManager(employee));


// let person: [string,number] = ['john',25];

// let date:readonly [number, number, number] = [12, 18, 2002]

// // let date: [number, number , number] = [12, 18, 2002];
// // date.push(44)
// // date.push(44)
// // date.push(44)
// // date.push(44)
// // date.push(44)
// // date.push(44)
// // console.log(date);


// function getPerson(): [string,number]{
//   return ['john', 25];
// }

// let randomPerson = getPerson();
// console.log(randomPerson[0]);
// console.log(randomPerson[1]);

// let susan: [string, number?] = ['susan']

 
// enum ServerResponseStatus {
//   Success = 'Success',
//   Error = 'Error',
// }
// // Object.values(ServerResponseStatus).forEach((value) => {
// //    if(typeof value === 'number'){
// //     console.log(value);
    
// //    }
// // })

// console.log(ServerResponseStatus)
// interface ServerResponse {
//   result:  ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result:'Success',
//     data: ['first item', 'second item']
//   }
// };

// const response:ServerResponse = getServerResponse()
// console.log(response);
 
// enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// type User = {
//   id:number,
//   name: string,
//   role: UserRole,
//   contact: [string,string]
// }

// function createUser(user:User): User {
// return user;
// } 

// const user: User = createUser({
//   id: 1,
//    name: 'john doe',
//   role: UserRole.Admin,
//   contact: ['John@test.com','08023445476']
// })

// console.log(user)

// let someValue: any = 'this is a string';

// let strLength:number = (someValue as string).length;

// type Bird = {
//   name: string
// }

// // Assume we have a JSON string from an API or local file
// let birdString = '{"name": "Eagle"}'
// let dogString = '{"breed": "Poodle"}'

// let birdObject = JSON.parse(birdString)
// let dogObject = JSON.parse(dogString)

// let bird = birdObject as Bird
// let dog = dogObject as Bird

// console.log(bird.name)
// console.log(dog.name);

// enum Status{
//   Pending = 'pending',
//   Declined = 'declined',
// }

// type User = {
//   name:string;
//   status: Status;
// };

// // save Status.Pending in the DB as a string
// // retrieve string from the DB

// const statusValue = 'pending';

// const user: User = {
//   name: 'John',
//   status: statusValue as Status,
// };

// let unknownValue: unknown;
// unknownValue = 'hello';
// unknownValue = [2,4,3,5];
// unknownValue = 23;

// //unknownValue.toFixed(2); // Error: Object is of type 'unknown'.

// if(typeof unknownValue === 'number'){
//   unknownValue.toFixed(2); // No error
// }

// function runSomeCode() {
//   const random = Math.random();
//   if(random < 0.5) {
//   throw new Error('This is an error message')
//   } else{
//  throw 'some error'

//   }
// }

// try {
//  runSomeCode()
// } catch (error) {
//   if (error instanceof Error){
//     console.log(error.message);
//   }
//   else{
//     console.log(error);
//   }
// }

// let someValue:never = 'hello';


// type Theme = 'light' | 'dark';

// function checkTheme(theme: Theme):void {
//  if(theme === 'light'){
//     console.log('Light theme is selected')
//     return
//  }
//  if (theme === 'dark'){
//   console.log('Dark theme is selected')
//   return
//  }

//  theme;
// }

// enum Color {
//   Red,Blue,Green
// }
// function getColorName(color:Color){
//   switch (color){
//     case Color.Red:
//       return 'Red';
//     case Color.Blue:
//       return 'Blue';
//       case Color.Green:
//       return 'Green';
//       default: 
//       // at build time
// let unexpectedColor: never = color;
//       //at run time
//       throw new Error(`Invalid color ${color}`)
//   }
// }

// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Green));

//Es6 Modules
// const name = ''


// const susan = 'Another Susan'

// import newStudent, {sayHello,person, type Student} from "./actions";
// //import {someValue} from './example.js' 

// sayHello('Typescript  ')
// console.log(newStudent)
// console.log(person);


// const anotherStudent: Student = {
//     name: 'John',
//     age: 25,    
// }

// console.log(anotherStudent);



// type ValueType = string | number | boolean

// let value: ValueType
// const random = Math.random()
// value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true

// // - Define the function checkValue that takes one parameter value of type ValueType.
// // - Inside the function, use an if statement to check if value is of type string. If it is, log value converted to lowercase and then return from the function.
// // - If value is not a string, use another if statement to check if value is of type number. If it is, log value formatted to two decimal places and then return from the function.
// // - If value is neither a string nor a number, it must be a boolean. Log the string "boolean: " followed by the boolean value.
// // - Finally, call the checkValue function with value as the argument.

// function checkValue (value:ValueType):void{
//     if (typeof value === 'string'){
//         console.log(value.toLowerCase())
//         return
//     }
//     if (typeof value === 'number'){
//         console.log(value.toFixed(2))
//         return
//     }
//     console.log(`boolean: ${value}`)
// }

// checkValue(value) 

// type Dog = { type: 'dog'; name: string; bark: () => void }
// type Cat = { type: 'cat'; name: string; meow: () => void }
// type Animal = Dog | Cat

// //OPTION 1
// // function makeSound(animal: Animal) {
// //     if (animal.type === 'dog'){
// //         animal.bark()
// //     }
// //     else {
// //         animal.meow()
// //     }
// // }

// //OPTION 2
// function makeSound(animal: Animal) {
//     if('bark' in animal){
//         animal.bark()
//     }
//     else {
//         animal.meow()
//     }
// }

//               //"Truthy"/"Falsy" guard
// // - Define a function named printLength that takes one parameter str which can be of type string, null, or undefined.
// // - Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
// // - If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length property of the string.
// // - If str is not truthy (i.e., it's either null or undefined), log the string 'No string provided'.

// // - Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.

// function printLength(par: string| null | undefined){
//     if (par){
//         console.log(par.length)
//     }
//     else{
//         console.log('No string provided')
//     }
// }

// printLength('hello')
// printLength(null)
// printLength(undefined)
// printLength('')
// printLength()

// try {
//     throw ('some error');
//    // throw new Error('This is an error message')
// } catch (error) {
//     if (error instanceof Error){
//         console.log(`Caught an Error oject: ${error.message}`);
//     }
//     else {
//         console.log(`Caught an unknown error: ${error}`);  
//     }
// }

// function checkInput(input:Date | string): string{
//     if (input instanceof Date){
//         return input.getFullYear().toString()
//     }
//     return input.toUpperCase()
// }

// const year = checkInput(new Date())
// const random = checkInput('2020-03-12')
// console.log(year);  
// console.log(random);

// type Student = {
//   name: string
//   study: () => void
// }

// type User = {
//   name: string
//   login: () => void
// }

// type Person = Student | User

// const randomPerson = (): Person => {
//   return Math.random() > 0.5
//    ? { name: 'john', study: () => console.log('Studying') }
//     : { name: 'mary', login: () => console.log('Logging in') }
// }

// const person = randomPerson()
// // const person:Person = {
// //     name: 'john',
// //     login: () => console.log('study ..')
// // }

// function isStudent(person: Person): person is Student {
//     // Check if the person has a 'study' method
//     // and return true if it does, false otherwise
//    // return 'study' in person
//    return (person as Student).study !== undefined;
// }

// if (isStudent(person)) {
//     person.study()
// }
// else{
//     person.login();
// }


// type IncrementAction = {
//   type: 'increment'
//   amount: number
//   timestamp: number
//   user: string
// }

// type DecrementAction = {
//   type: 'decrement'
//   amount: number
//   timestamp: number
//   user: string
// }

// type Action = IncrementAction | DecrementAction

// function reducer (state:number, action:Action){
// switch (action.type){
//     case 'increment':
//         return state + action.amount
//     case 'decrement':
//         return state - action.amount
//         default:
//             const unexpectedAction: never = action
//           throw new Error(`Unknown action type: ${unexpectedAction}`)  
// }
// }

// const newState = reducer(15,{
//     user: 'dave',
//     type: 'increment',
//     amount: 10,
//     timestamp: Date.now(),
// })
// console.log(newState)

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

//let array1: Array<string> = ['Apple', 'Banana', 'Mango']

// function craeteString(arg: string): string{
//     return arg.toUpperCase()
// }
// function craeteNumber(arg: number): number {
//   return arg * 2
// }

// function genericFunction<T>(arg: T): T{
//   return arg
// }

// const someStringValue = genericFunction<string>('hello')
// const someNumberValue = genericFunction<number>(23)

// console.log(someStringValue.toUpperCase())

// interface GenericIterface<T> {
//     data: T;
//     getValue: () => T;
// }

// const  genericString: GenericIterface<string> = {
//     data: 'hello',
//     getValue() {
//         return this.data
//     }
// }

// async function someFunc(): Promise<string> {
//     return 'hello world'
// }
// const result = someFunc();


// function generateStringArray(length: number, value:string): string[] {
//     let result: string[] = [];
//     result = Array(length).fill(value);
//     return result  
// }

// console.log(generateStringArray(5, 'hello'));
// console.log(generateStringArray(3, 'world'));



// function generateGenericArray<T>(length: number, value: T): T[] {
//     let result: T[] = [];
//     result = Array(length).fill(value);
//     return result  
// }

// // console.log(generateGenericArray(5, 10));
// // console.log(generateGenericArray(3, 'world'));
// // console.log(generateGenericArray(3, true));
// // console.log(generateGenericArray(3, {name:'dave'}));


// let arrayStrings = generateGenericArray<string>(5, 'hello')
// let arrayNumbers = generateGenericArray<number>(5, 10)
// console.log(arrayStrings);
// console.log(arrayNumbers);


// function pair<T, U>(param1: T, param2: U): [T, U] {
//     return [param1, param2]
// }

// // let result1 = pair<string, number>('hello', 10)
// // let result2 = pair(10, true)

// function processValue <T extends string | number>(value: T): T {
//     if (typeof value === 'string') {
//         console.log(value.toUpperCase())
//     }
//     else if (typeof value === 'number') {
//         console.log(value.toFixed(2))
//     }
    
//     return value
// }

// processValue('hello')
// processValue(34)


// type Car = {
//   brand: string
//   model: string
// }

// const car: Car = {
//   brand: 'ford',
//   model: 'mustang',
// }

// type Product = {
//   name: string
//   price: number
// }

// const product: Product = {
//   name: 'shoes',
//   price: 1.99,
// }

// type Student = {
//   name: string
//   age: number
// }

// const student: Student = {
//   name: 'peter',
//   age: 20,
// }

// function printName<T extends {name: string} > (input:T): void{
//     console.log(input.name);
// }

// printName(student)
// printName(product)
// // printName(car)

// interface StoreData<T> {
//   data: T[]
// }

// const storeNumber:StoreData<number> ={
//     data: [1,2,3,4,5]
// }

// const randomStuff:StoreData<any> = {
//     data: ['hello', 1, true]
// }


// data is located in the data property

// const { data } = axios.get(someUrl);

// axios.get<{ name: string }[]>(someUrl);

// export class Axios {
//   get<T = any, R = AxiosResponse<T>, D = any>(
//     url: string,
//     config?: AxiosRequestConfig<D>
//   ): Promise<R>;
// }

// export interface AxiosResponse<T = any, D = any> {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//   config: InternalAxiosRequestConfig<D>;
//   request?: any;
// }



// import {z} from 'zod'

// const url = 'https://www.course-api.com/react-tours-project'

// const tourSchema = z.object({
// id:z.string(),
// name:z.string(),
// info:z.string(),  
// image:z.string(),
// price:z.string(),
// something:z.number(),
// })


// // type Tour = {
// //     id: string
// //     name: string
// //     info: string
// //     image: string
// //     price: number
// // }
// type Tour = z.infer<typeof tourSchema>;


// async function fetchData(url:string): Promise<Tour[]> {
//     try {
//       const response = await fetch(url)
//       if (!response.ok) {
//         throw new Error(`HTTP ERROR status: ${response.status}`)
//       }
//       const rawData :Tour[] = await response.json()
//     const result = tourSchema.array().safeParse(rawData)
//     console.log(result);
    
//       if(!result.success ) {
//         throw new Error(`Invalid data: ${result.error}`)
//       }
//       return result.data
//     } catch (error) {
//         const errorMsg = error instanceof Error ? error.message : 'Unknown error detected ...'
//         console.log(errorMsg);
//         return [];
        
//     }
// }

// const tours = await fetchData(url)
// tours.map ((tour) => {
// console.log(tour.name);

// })

// import { Random } from "./types";

// import { z } from 'zod'

//let something = 'something'

//CLASSES

// class Book {
//   public readonly title: string
//  public author: string
//   //checkedOut = false;
//   private checkedOut:boolean = false
//   constructor(title: string, author: string) {
//     this.title = title
//     this.author = author
//   }
//   public checkOut() {
//     this.checkedOut = this.toggleCheckOutStatus()
//   }
//   public isCheckedOut() {
//     return this.checkedOut
//   }
//   private toggleCheckOutStatus() {
//     return !this.checkedOut
//   }
// }

// const deepWork = new Book ('Deep Work', 'Cal Newport')
// // deepWork.checkedOut();
// // console.log(deepWork)
// // //deepWork.title = 'akin'
// // console.log(deepWork.title)
// deepWork.checkOut();
// deepWork.checkOut();
// console.log(deepWork.isCheckedOut());


// class Book {
//   private checkedOut: boolean = false
//   constructor(readonly title: string, public author: string) {}
//   get info() {
//     return `${this.title} by ${this.author}`
//   }
//   private set checkOut(checkedOut:boolean) {
//     this.checkedOut = checkedOut
//   }
//   get checkOut() {
//     return this.checkedOut
//   }
//   public get someInfo() {
//     this.checkOut = true;
//     return `${this.title} by ${this.author}`
//   }
// }

// const deepWork = new Book('Deep Work', 'Cal Newport')

// console.log(deepWork.info)
// //deepWork.checkOut = true
// console.log(deepWork);
// console.log(deepWork.someInfo);
// console.log(deepWork)


// interface IPerson{
//   name:string;
//   age: number;
//   greet(): void;
// }

// class Person implements IPerson {
//   constructor(public name: string, public age: number) {}
//   greet(): void {console.log(`Hello , my name is ${this.name} and my age is ${this.age} yrs old`);
//   }
// }

// const Human = new Person('Slim Shady', 52)
// Human.greet()
// console.log(Human);
