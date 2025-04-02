// let myHeading = document.querySelector("h1")
// myHeading.textContent = "Hello World!"

// 변수 선언
// var myVariable 
// 값 할당
// myVariable = 10
// 변수 선언 + 값 할당을 일반적으로 같이함
var myVariable = 10

// console.log(myVariable)

// ES6 이전 문법
var myV1 = 1
// ES6 이후
let myV2 = 2
const myV3 = 3

myV1 = 10
var myV1 = 100 

// let 변수는 재선언 x
myV2 = 20
// let myV2 = 2
// const 변수는 재할당 x, 상수값을 쓸 때 활용 재선언도 X
// myV3 = 30
// const myV3 = 300

let a = 'bob'
let b = 10
let c = true
let d = [1, 2, 3]
// 딕셔너리는 파이썬에서 class와 같다고 보면 된다
let e = {
    'apple' : '사과',
}

// console.log(a, b, c, d, e)

// console.log("hello" + "world!") concatnation

let varA = '10'
let varB = 10 

console.log(varA == varB)
console.log(varA === varB)
console.log(varA !== varB)

// Array
let myArray = []
myArray.push('hello')
myArray.push('world')
myArray.pop()
console.log(myArray)
console.log(myArray[0])

// Object
let myObject = {
    'apple': '사과',
}
console.log(myObject.apple)
myObject.grape = '포도'
console.log(myObject)

// 조건문
let iceCream = 'vanila'
if (iceCream === 'chocholate') {
    console.log('hello')
} else if (iceCream === 'vanila') {
    console.log('none')
}else {
    console.log('awwww')
}

// 반복문
console.log('---while---')
let i = 0 
while (i < 5) {
    console.log(i)
    // i += 1 (파이썬 문법)
    i++
}

console.log('---for1---')
for (let i = 0 ; i<5 ; i++) {
    console.log(i)
}

let arrayA = ['a', 'b', 'c']
console.log('---for2---')
for (let i = 0 ; i < arrayA.length; i++) {
    console.log(arrayA[i])
}
console.log('---for in ---')
for(let index in arrayA) {
    console.log(index, arrayA[index])
}
console.log('---for of---')
for(let item of arrayA) {
    console.log(item)
}
console.log('---forEach---')
arrayA.forEach(function(item, index, array){
    console.log(item, index, array)
})

// 함수
