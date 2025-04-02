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
function multiply(num1, num2) {
    let result = num1 * num2
    return result
}
// console.log(multiply(4, 7))

// 함수표현식
let multiply2 = function (num1, num2) {
    return num1 * num2
}

// console.log(multiply2(3, 4))

// 화살표함수
let multiply3 = (num1, num2) => {
    return num1 * num2
}
// console.log(multiply3(4, 5))

// 화살표함수 생략1
// {}안 코드가 return하는 문장 하나만 있다면, {}와 return을 생략가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(3, 3))

// 화살표함수 생략2
// ()안에 매개변수가 하나만 있다면 ()를 생략 가능
let cube = num => num ** 3
console.log(cube(10))

// 이벤트 (onclick)
// document.querySelector('html').onclick = function(){
//     alert('hello!')
// }

// 이벤트 (이벤트리스너)
// addEventListener(무슨 일이 일어났을 때, 무슨 행동을 할 지)
let myH1 = document.querySelector('h1')
myH1.addEventListener('click', function(e){
    // alert('hihi')
    console.log(e)
    console.log(e.clientX, e.clientY)
})
let myImg = document.querySelector('img')
myImg.addEventListener('click', function(){
    let src = myImg.getAttribute('src')

    if(src=== 'images/cat.png'){
        myImg.setAttribute('src', 'images/firefox-icon.png')
    } else {
        myImg.setAttribute('src', 'images/cat.png')
    }
    
})

let myInput = document.querySelector('input')
myInput.addEventListener('keydown', function(e){
    // console.log(e)
    console.log(myInput.value)
})

// 비동기(callback 함수)
console.log('hi')
setTimeout(function(){console.log('late')},1000)
console.log('bye')

// request
const URL = 'https://jsonplaceholder.typicode.com/todos/1'


// 비동기 처리 방법 1 (primise)

let response = fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))

// 비동기 처리 방법 2 (async await)
async function fetchTodo(url) {
    let res = await fetch(url)
    let result = await res.json()
    console.log(result)
}
console.log(fetchTodo(URL))

let liArray = document.querySelectorAll('li')
// console.log(liArray)

liArray.forEach(function(item){
    item.addEventListener('click', function(e){
        console.log(e.target)
    })
})